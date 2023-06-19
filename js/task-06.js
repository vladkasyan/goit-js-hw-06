const inputEl = document.querySelector('#validation-input')
const dataLength = inputEl.getAttribute('data-length');
const inputValueLength = inputEl.value.length;
const checkInputValueLength = (event) => {
    const CurrentValue = event.currentTarget.value 
    if(Number(dataLength) === Number(CurrentValue.length)) {
        if(inputEl.classList.contains("invalid")){
            inputEl.classList.replace("invalid", "valid")
        } else {
            inputEl.classList.add("valid")
        }
    } else {
        if(inputEl.classList.contains("valid")){
            inputEl.classList.replace("valid", "invalid")
        } else {
            inputEl.classList.add("invalid")
        }
    }
}
inputEl.addEventListener("blur", checkInputValueLength)
// console.log(dataLength)
// const inputEl = document.querySelector('#validation-input')
// const dataLength = inputEl.getAttribute('data-length');
// const checkInputValueLength = (event) => {
//     const CurrentValue = event.currentTarget.value 
//     if(Number(dataLength) === Number(CurrentValue.length)) {
//         inputEl.classList.add("valid")
//     } else {
//         inputEl.classList.add("invalid")
//     }
  
// }
// inputEl.addEventListener("blur", checkInputValueLength)
