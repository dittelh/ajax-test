let list = document.getElementById('list')

function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => addToList(json))
    document.getElementById('fetchDataBtn').disabled = true
}

function addToList(json) {
    for (let item of json) {
        let listItem = document.createElement('li')
        listItem.innerHTML = `<p>${item.title}</p>`
        list.appendChild(listItem)
    }
}