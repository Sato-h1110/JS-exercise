import { createElement, createItemRecord } from "./sub.js"
import { Item } from "./item.js"  // ← 追加

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed", event)

    const message = createElement("world")
    const contents = document.getElementsByClassName("contents")[0]
    contents.innerHTML = message

    // ↓ 追加
    const apple = new Item(1, "apple", 100)
    const orange = new Item(2, "orange", 80)
    const grape = new Item(3, "grape", 120)
    const items = [apple, orange, grape]

    const itemTable = document.querySelector("table.item > tbody")
    for (const item of items) {
        const itemRow = createItemRecord(item)    
        itemTable.appendChild(itemRow)
}
    // ↑ 追加

})