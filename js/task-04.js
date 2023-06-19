const counterValueEl = document.querySelector('#value');
let counter = 0
const decrementBtn = document.querySelector('button[data-action="decrement"]')

const handleClick = () => {
    counter -= 1
    counterValueEl.textContent = counter
}


decrementBtn.addEventListener('click', handleClick)


const incrementBtn = document.querySelector('button[data-action="increment"]')

const handleClickUp = () => {
    counter += 1
    counterValueEl.textContent = counter
}

incrementBtn.addEventListener('click', handleClickUp)

