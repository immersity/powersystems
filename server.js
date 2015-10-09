/**
 * Created by iabarca on 09-10-15.
 */

var dot = require('dot-object');
var fs = require('fs');

var array = fs.readFileSync('plphgr.dot').toString().split("\n");
var edges = [];
var nodes = [];

for(i in array) {
  //console.log(array[i]);

  var arr = array[i].split(' ');
 // console.log(arr);

  if(arr[1] == '->'){
    var edge = {from: arr[0], to: arr[2]};
    edges.push(edge);
  }

  if(arr[0].substring(0, 4) == 'node'){
    var node = {id: arr[1].substring(0, arr[1].length-1), label: arr[1].substring(0, arr[1].length-1)}
    nodes.push(node);
  }

}

//console.log(edges);
console.log(nodes);

/*
fs.readFile('plphgr.dot', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }



  var obj = {
    'first_name': 'John',
    'last_name': 'Doe'
  };

  dot.move('first_name', 'contact.firstname', obj);
  dot.move('last_name', 'contact.lastname', obj);

  console.log(obj);



});
*/






