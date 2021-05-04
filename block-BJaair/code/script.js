let root = document.querySelector(".root");
let arrOfNotes = [];
class CreateNote {
  constructor(title, category) {
    this.title = title;
    this.category = category;
  }
  createUIOfNote() {
    let div = document.createElement("div");
    div.classList.add("flex-50");
    let select = document.createElement("select");
    select.name = "category";
    select.id = "category";
    select.classList.add("selectclass");

    let option1 = document.createElement("option");
    option1.selected = "true";
    option1.value = "study";
    option1.innerText = "Study";
    let option2 = document.createElement("option");
    option2.value = "play";
    option2.innerText = "play";
    let option3 = document.createElement("option");
    option3.value = "finance";
    option3.innerText = "finance";
    select.append(option1, option2, option3);
    let input = document.createElement("input");
    input.type = "text";
    // input.placeholder = "title";
    input.name = "title";
    input.value = this.title;
    input.classList.add("inputclass");
    div.append(select, input);
    return div;
  }
  updateTitle(newTitle) {
    this.title = newTitle;
  }
  updatecategory(newcategory) {
    this.category = newcategory;
  }
}
class Notes {
  constructor(arr) {
    this.arr = arr;
  }
  createUI() {
    root.innerHTML = "";
    arrOfNotes.forEach((ele) => {
      let eachNote = ele.createUIOfNote();
      let input = eachNote.querySelector("input");
      let select = eachNote.querySelector("select");
      input.onfocus = function () {
        input.classList.remove("inputclass");
      };
      input.onblur = function () {
        input.classList.add("inputclass");
        let newTitle = input.value;
        ele.updateTitle(newTitle);
      };
      select.onfocus = function () {
        select.classList.remove("selectclass");
      };
      select.onblur = function () {
        select.classList.add("selectclass");
        let newcate = select.value;
        ele.updatecategory(newcate);
      };
      console.log(eachNote);
      root.append(eachNote);
    });
  }
}

// add note to submit

let note1 = new Notes(arrOfNotes);
note1.createUI();

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formEle = event.target;
  let newTitle = formEle.title.value;
  let newCategory = formEle.category.value;
  let note = new CreateNote(newTitle, newCategory);
  arrOfNotes.push(note);
  console.log(newTitle);
  note1.createUI();
});
