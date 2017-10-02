
function getFirstSelector(selector){

  return document.querySelector(selector);
}

function nestedTarget(){

 // pulls .target out of #nested
 return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for(let i = 0; i < lis.length; i++){
    var par = parseInt(lis[i].innerHTML);
    lis[i].innerHTML = (par + n).toString();
  }

  // increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()

}

function deepestChild(){

/*
  let current = array
  let next = []

  while (current) {

    if (criteriaFn(current)) {
      return current
    }

    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }

    current = next.shift()
  }
  return null
}


const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString()
}
*/

var grandNode = document.getElementById('grand-node').querySelector('div div div div div')

return grandNode;

/*
  for (let i = 0; i < grandNode.length; i++) {
    if (grandNode[i] === grandNode.length){
      return grandNode[1];
    }
    */

  }
//  var grandNode = document.querySelectorAll('#grand-node')
//  console.log(grandNode);
  //return document.getElementById('#grand-node').querySelectorAll('div')[grandNode.length]

}
