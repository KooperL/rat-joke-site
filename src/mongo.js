const fs = require('fs');
const { MongoClient } = require('mongodb');
//import { MongoClient } from 'mongodb';
// const fabric = require("fabric").fabric;
//import { fabric } from "fabric";
const url = 'mongodb://139.99.238.84:27017'; 
const client = new MongoClient(url);



async function call(coll='loc_data', filter={}) {
    return new Promise((resolve) => {
        client.connect().then(() => {
            const db = client.db('vic_properties');
            const locCollection = db.collection(coll);
            const docs = locCollection.find(filter).toArray();
            docs.then((a)=> {
                // console.log(a);
                client.close()
                resolve(a);
            })
        })
    })
}

async function main(min=300000, max=1500000) {
    const docs = await call();
    console.log(docs);
    let len;
    let col;
    let price;
    let mean;
    let p;
    let block;
    let objs = new Array(docs.length);
    for (i=0;i<docs.length;i++) {
        block = docs[i];
        let price = await call('price_data', {'suburb': block.suburb});
        if (price.length) {mean = price[0].pricedata.mean_means;} else {mean = 5;}
        len = await block.bounds.map(function (arr) {return {'x': arr[0], 'y': arr[1]+40}});
        mean = min*(mean<min) + max*(mean>max) + (mean>min)*(mean<max)*mean;
        col = ((mean-min)/(max-min))*255;
        // objs[index] = new fabric.Polygon(len, {fill: 'green'});
        // objs[i] = {bounds: len, colour: col.toString(16)};
        objs[i] = {bounds: len, colour: col.toString(16)};
        // console.log(objs);
        //canvas.add(polygon);
        // docs.length = 0;
    };
    console.log('done');
    fs.writeFileSync('./data.json', JSON.stringify(objs, null, 2) , 'utf-8');
    return objs;
}

main();
