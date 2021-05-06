let sec = document.querySelector(".sec");
let max = 5;
let index = 0;
function addQuotes() {
  for (let i = 0; i < max; i++) {
    let div = document.createElement("div");
    let blockquote = document.createElement("blockquote");
    let cite = document.createElement("cite");
    blockquote.innerText = quotes[index].quoteText;
    cite.innerText = quotes[index].quoteAuthor;
    div.append(blockquote, cite);
    sec.append(div);
    index++;
  }
}

window.addEventListener("scroll", () => {
  let scrollHeight = document.documentElement.scrollHeight;

  let scrollTop = document.documentElement.scrollTop;

  let clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight) {
    addQuotes();
  }
});

// on loaded event
function ready() {
  alert("DOM is ready");
  addQuotes();
}

document.addEventListener("DOMContentLoaded", ready);
