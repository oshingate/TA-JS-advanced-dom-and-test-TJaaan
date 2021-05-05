let root = document.querySelector(".root");
let arrayOfCards = [];
class OneCard {
  constructor(name) {
    this.name = name;
  }
  createUI() {
    let div = document.createElement("div");
    div.classList.add("flex", "card");
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
