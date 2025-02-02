export function createElement(message = "ワールド") {
    const template = `<p>
      hello ${message}
    </p>`
    return template
}

export function createItemRecord(item) {
    const id = createItemData(item.id)
    const name = createItemData(item.name)
    const price = createItemData(item.price)

    const tr = document.createElement("tr")
    tr.appendChild(id)
    tr.appendChild(name)
    tr.appendChild(price)
    return tr
}

function createItemData(value) {
    const td = document.createElement("td")
    const nd = document.createTextNode(value)
    td.appendChild(nd)
    return td
}