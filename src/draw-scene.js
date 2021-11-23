import {
  Image,
  Surface,
  Path,
  Text,
  Group,
  geometry,
} from "@progress/kendo-drawing";
import {fs} from 'fs';
const { Rect, Point, Size, transform } = geometry;
const data = require('./data.json')


export function drawScene(surface) {
  const path = new Path({
    stroke: {
      color: "#9999b6",
      width: 2,
    },
  });
  //let subs = new Array(data.length);
  const group = new Group();
  let subs;
  data.forEach(function aaa(val, i) {
      if(loop.stop){return;}
      subs = new Path({
        stroke: {
        color: val.colour,
        width: 2,
        },
      });
      subs.moveTo(val.bounds[0][1], val.bounds[0][1])
    val.bounds.slice(1).forEach(function(coord) {
      subs.lineTo(coord[1], coord[0])
    })
  aaa.stop == true;
  group.append(subs);
  })


  group.transform(transform().translate(50, 50));
  surface.draw(group);
}

