const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

const Eventlisten = Event => {
    span.textContent = Event.currentTarget.value;
    if(Event.currentTarget.value === "false"){
        return span.textContent = Anonymous;
    }
}
input.addEventListener("input", Eventlisten)