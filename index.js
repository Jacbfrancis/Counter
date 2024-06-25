const number = document.querySelector('h2')
const increaseBtn = document.querySelector('.increase-btn')
const decreaseBtn = document.querySelector('.decrease-btn')
const resetBtn = document.querySelector('.reset-btn')


let counter = 0;

increaseBtn.addEventListener('click', () => {
    counter++;
    changeColor();
    number.innerText = counter;
})

decreaseBtn.addEventListener('click', () => {
  counter--;
  changeColor();
  number.innerText = counter;
})

resetBtn.addEventListener('click', () => {
  counter = 0;
  changeColor();
  number.innerText = 0;
})


function changeColor() {
  if (counter > 0) {
    number.style.color = 'green';
  } else if (counter < 0){
    number.style.color = 'red';
  } else {
    number.style.color = 'slategrey';
  }
}
