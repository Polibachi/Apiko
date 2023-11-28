function isString (cb, string){
    if(typeof(string) == "string" & typeof(cb) == "function"){
        cb(string);
    }else{
        console.log("Callback is not a function or input value is not a string")
    }
}
var someVal =1;
callback = (string) => {
    console.log(string);
}

isString(callback, "some text");

//////////////

//const CurrDate = new Date();

function Clock (cb) {
    setInterval(cb, 1000)
}

getTime = () => {
    let CurrDate = new Date();
    console.log(CurrDate.getHours() + " " + CurrDate.getMinutes()+" " + CurrDate.getSeconds())
}

//Clock(getTime);

function timer (time) {
        const t = setInterval(()=>{
            if(time>0){
                console.log(time);time--;
            }else{console.log("time s up!"); clearInterval(t)}
        },1000)
}

//timer(5);

class Human {
    constructor(name, id){
        this.name = name;
        this.deleteName = setTimeout(() =>{this.name=null;console.log(petro);},3000);
    }

    cancelDeleting() {
        clearTimeout(this.deleteName);
    } 
}

petro = new Human("petro");
console.log(petro);

petro.cancelDeleting();
