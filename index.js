function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
const list = document.querySelectorAll('.ranked-list')

for(let i=0, l = list.length; i <l; i++) {
  list[i].innerHTML = (i).toString()}
}

function deepestChild() {
  var parent = document.querySelector('#grand-node')
  var child = parent.querySelector('div')

while (child) { parent = child;
  child = parent.querySelector('div')
}
return parent
}
