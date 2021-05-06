let stickers = document.querySelectorAll('.drag');
let empties = document.querySelectorAll('.empty');
let selected;
let count = 0;
stickers.forEach((ele) => {
  ele.addEventListener('dragstart', (e) => {
    setTimeout(() => {
      ele.classList.add('hide');
    }, 0);
    selected = ele;
    console.log('start' + ele.dataset.no);
  });
  ele.addEventListener('dragend', (e) => {
    ele.classList.remove('hide');
    console.log('end' + ele.dataset.no);
  });
});

empties.forEach((ele) => {
  ele.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragover(e, ele);
  });
  ele.addEventListener('dragenter', (e) => {
    dragenter(e, ele);
  });
  ele.addEventListener('dragleave', (e) => {
    dragleave(e, ele);
  });

  ele.addEventListener('drop', (e) => {
    drop(e, ele);
  });
});

function dragover(e, ele) {}
function dragenter(e, ele) {
  ele.parentElement.classList.add('hover');
}
function dragleave(e, ele) {
  ele.parentElement.classList.remove('hover');
}
function drop(e, ele) {
  if (ele.dataset.no === selected.dataset.no) {
    ele.append(selected);
    ele.parentElement.classList.remove('hover');
    selected = '';
    count++;
    if (count === 5) {
      alert('congratulations You won');
    }
  }
}
