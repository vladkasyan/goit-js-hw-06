const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');


const changeSize = (event) => {
    const valueEL = event.currentTarget.value;
    spanEl.style.fontSize = `${valueEL}px`;
}
inputEl.addEventListener('input', changeSize)