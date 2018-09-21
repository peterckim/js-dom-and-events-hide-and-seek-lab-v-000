function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  let nested = document.querySelector("#nested");
  return nested.querySelector(".target");
}

function deepestChild() {
  let node = document.querySelector("div#grand-node");
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}

function increaseRankBy(n) {
  let lists = document.querySelectorAll(".ranked-list");
  for (let i = 0; i < lists.length; i++) {
    let children = lists[i].children;

    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
