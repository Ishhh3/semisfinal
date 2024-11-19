//id selector from html file
const content=document.querySelector('#content')


//loading the page
window.addEventListener('load', () => {

    getUsers()


})

//function to get all users

function getUsers(){

    //declaring empty variable
    let html = ""

    //api from other sites
    fetch('https://semis-ai8b.onrender.com',{mode:'cors'}) //{mode:'cors'} cross origin request - if in different URL or domain
       
   
    .then(response => {
        //getting the response from the api
        console.log(response)

        //return the format of the response as json
        return response.json()


        //returning the data
    }).then(data => {
        //returning the log data
        console.log(data)
        //displaying in DOM Document Object Model
        //access to the element
        data.forEach(element => {
            //specific element like first_name only
            //console.log(element); //all records
            //console.log(element.first_name);
           
           
            //storing the elements to variable html
            html+=`<li>${element.itemName} ${element.unitPrice}</li>`


        })


        //grab the content id
        content.innerHTML=html

        //to catch the error if there is a problem
       }).catch(error => {

            console.log(error)

       })


}