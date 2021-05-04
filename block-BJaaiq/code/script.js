let sec = document.querySelector(".sec");
let copyArr = [...quotes];
let arr1 = copyArr.slice(0, 4);
arr1.forEach((ele) => {
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  h2.innerText = ele.quoteAuthor;
  let h3 = document.createElement("h3");
  h3.innerText = ele.quoteText;
  div.append(h2, h3);

  sec.append(div);
});
let count = 3;

window.addEventListener("scroll", () => {
  //   let arr = copyArr.slice(count, 4);
  //   arr.forEach((ele) => {
  //     let div = document.createElement("div");
  //     let h2 = document.createElement("h2");
  //     h2.innerText = ele.quoteAuthor;
  //     let h3 = document.createElement("h3");
  //     h3.innerText = ele.quoteText;
  //     div.append(h2, h3);
  //     sec.append(div);
  //   });
  //   count += 4;
});

// on loaded event
function ready() {
  alert("DOM is ready");
}

document.addEventListener("DOMContentLoaded", ready);
