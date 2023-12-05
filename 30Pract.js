const baseUrl = "https://jsonplaceholder.typicode.com/users/";
const baseUrl2 = "https://jsonplaceholder.typicode.com/users/10/albums";

function fetchUrl(url){
    fetch(url)
.then((response) => {
    if(response.ok){
        return response.json();
    }else{
        console.log(response.status);
    }
    
}).then((data) => {
    console.log(data);
})
}

//fetchUrl(baseUrl);
//fetchUrl(baseUrl2);

const newUser = {
    name: "Name LastName",
    username: "UserName",
    email: "usermail@gmail.com"
   };
    
   function post (){fetch(baseUrl, {
        method: 'POST',
        body:newUser
   }).then((response) => {
    if(response.ok){
        return response.json();
    }else{
        console.log(response.status);
    }
   }).then((data) => {
    console.log(data);

});}

//post();
//ids = []
function getSpecifiedAlbums() {
    fetch(url)
    .then((response) => {
        if(response.ok){
            return response.json();
        }else{
            console.log(response.status);
        }
        
    }).then((data) => {
        console.log(data);
    })
   }
