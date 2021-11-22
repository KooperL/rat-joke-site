const { MongoClient } = require('mongodb');
//import { MongoClient } from 'mongodb';
const fabric = require("fabric").fabric;
//import { fabric } from "fabric";
const url = 'mongodb://139.99.238.84:27017'; //27017
const client = new MongoClient(url);//removed url
const client2 = new MongoClient(url);//removed url

async function main(min=300000, max=1500000) {
    await client.connect();
    await client2.connect();
    const db = client.db('vic_properties');
    const db2 = client2.db('vic_properties');
    const locCollection = db.collection('loc_data');
    const priceCollection = db2.collection('price_data');
    const docs = await locCollection.find({}).toArray();
    // console.log(docs);
    let len;
    let col;
    let price;
    let mean;
    let objs = new Array(docs.length);
    docs.map(async function callback(block, index) {
        let price = await priceCollection.find({'suburb': block.suburb}).toArray();
        if (price.length) {
            mean = price[0].pricedata.mean_means;
    } else {
        mean = 5;
    }

/*            len = new Array(block.bounds.length);
            for(i=0;i<block.bounds.length;i++) {
        // console.log(block.bounds[i])
                len[i] = {'x': block.bounds[i][0], 'y': block.bounds[i][1]+40};
            }
*/
        len = await block.bounds.map(function (arr) {return {'x': arr[0], 'y': arr[1]+40}});
            await Promise.all(len)
        mean = min*(mean<min) + max*(mean>max) + (mean>min)*(mean<max)*mean;
            col = ((mean-min)/(max-min)).toString(16);
            objs[index] = new fabric.Polygon(len, {fill: 'green'});
            //canvas.add(polygon);
        // docs.length = 0;
    });
    await Promise.all(objs);
    console.log('done');
    console.log(objs);
    return objs;
}


let sss = main().catch(console.error)
    .finally(() => client.close());
