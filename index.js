
function getFirstSelector(selector){

  return document.querySelector(selector);
}

function nestedTarget(){

 // pulls .target out of #nested
 return document.querySelector('#nested .target');
}

function increaseRankBy(n){



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

const grandNode = document.getElementById('app').querySelectorAll('#grand-node div')

console.log(grandNode);

  for (let i = 0; i < grandNode.length; i++) {
    if (grandNode[i].innerHTML === "boo!"){
      return grandNode[i]
    }

    }

//  var grandNode = document.querySelectorAll('#grand-node')
//  console.log(grandNode);
  //return document.getElementById('#grand-node').querySelectorAll('div')[grandNode.length]

}
