const itemEl = document.querySelectorAll('.item')
console.log("Number of categories:", itemEl.length)

itemEl.forEach(item =>
    console.log("Category:", item.children[0].textContent, 
    "Elements:", item.children[1].children.length))