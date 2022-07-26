const deleteBtn = document.querySelectorAll('.fa-trash')
//create a delete button that connects to the dom called trash
const item = document.querySelectorAll('.item span')
//create an item that connects to the com called item
const itemCompleted = document.querySelectorAll('.item span.completed')
//create an itemCompleted that connects to the dom 

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteItem)
})
//creates a new array from the items in deleteBtn. Iterate through the element
//It then creates an event listener looking for a click to delete the item
Array.from(item).forEach((element)=>{
    element.addEventListener('click', markComplete)
})
//creates a new array from the items in deleteBtn. Iterate through the element
//It then creates an event listener looking for a click to mark complete

Array.from(itemCompleted).forEach((element)=>{
    element.addEventListener('click', markUnComplete)
})
//creates a new array from the items in deleteBtn. Iterate through the element
//It then creates an event listener looking for a click to mark uncomplete


async function deleteItem(){
    //a new async function deleteItem
    const itemText = this.parentNode.childNodes[1].innerText
    //new const itemText creates a unique to this function parentNode at childNote 
    //index 1. This is all set inside the html element itemText
    try{
        const response = await fetch('deleteItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()
    //a try/catch that waits for the deleteItem. 
    //Use the delete method to delete an item
    //this fetch asks for the method, headers, and body
    //we const data and then console log the data. 
    //we also reload the url with the location.relod
    }catch(err){
        console.log(err)
    }
    //catch for any errors
}

async function markComplete(){
    //a new async function markComplete
    const itemText = this.parentNode.childNodes[1].innerText
    //new const itemText creates a unique to this function parentNode at childNote 
    //index 1. This is all set inside the html element itemText
    try{
        const response = await fetch('markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()
    //a try/catch that waits for the deleteItem
    //use the put method to update the db
    //this fetch asks for the method, headers, and body
    //we const data and then console log the data. 
    //we also reload the url with the location.relod      

    }catch(err){
        console.log(err)
    }
    //catch for any errors
}

async function markUnComplete(){
    //a new async function markUnComplete
    const itemText = this.parentNode.childNodes[1].innerText
    //new const itemText creates a unique to this function parentNode at childNote 
    //index 1. This is all set inside the html element itemText
    try{
        const response = await fetch('markUnComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()
    //a try/catch that waits for the deleteItem
    //use the put method to update the db
    //this fetch asks for the method, headers, and body
    //we const data and then console log the data. 
    //we also reload the url with the location.relod    

    }catch(err){
        console.log(err)
    }
    //catch any erros
}