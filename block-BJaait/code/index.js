let root = document.querySelector(".root");
let arrayOfCards = [];
class OneCard {
  constructor(name) {
    this.name = name;
  }
  createUI() {
    let div = document.createElement("div");
    div.classList.add("flex", "card", "draggable");
    let h2 = document.createElement("h2");
    h2.classList.add("flex-80");
    h2.innerText = this.name;

    let span = document.createElement("span");
    span.innerText = "";

    div.append(h2, span);
    return div;
  }
}
class AllCards {
  constructor(arr) {
    this.arr = arr;
  }
  createUI() {
    root.innerHTML = "";
    this.arr.forEach((ele) => {
      let card = ele.createUI();

      card.addEventListener("mouseover", () => {
        let cardSpan = card.querySelector("span");
        cardSpan.innerText = "Drag Me";
      });
      card.addEventListener("mouseout", () => {
        let cardSpan = card.querySelector("span");
        cardSpan.innerText = "";
      });

      root.append(card);
    });
  }
}
// =======================
var remove = document.querySelector(".draggable");

function dragStart(e) {
  this.style.opacity = "0.4";
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
}

function dragEnter(e) {
  this.classList.add("over");
}

function dragLeave(e) {
  e.stopPropagation();
  this.classList.remove("over");
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  return false;
}

function dragDrop(e) {
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
  }
  return false;
}

function dragEnd(e) {
  var listItens = document.querySelectorAll(".draggable");
  [].forEach.call(listItens, function (item) {
    item.classList.remove("over");
  });
  this.style.opacity = "1";
}

function addEventsDragAndDrop(el) {
  el.addEventListener("dragstart", dragStart, false);
  el.addEventListener("dragenter", dragEnter, false);
  el.addEventListener("dragover", dragOver, false);
  el.addEventListener("dragleave", dragLeave, false);
  el.addEventListener("drop", dragDrop, false);
  el.addEventListener("dragend", dragEnd, false);
}

var listItens = document.querySelectorAll(".draggable");
[].forEach.call(listItens, function (item) {
  addEventsDragAndDrop(item);
});
// =======================

let allCards1 = new AllCards(arrayOfCards);

let addBtn = document.querySelector(".fa-plus");
let input = document.querySelector(".addData");
addBtn.addEventListener("click", () => {
  let card1 = new OneCard(input.value);
  arrayOfCards.push(card1);
  allCards1.createUI();
  input.value = "";
});

allCards1.createUI();
