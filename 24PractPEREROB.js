function calculator() {}

calculator.prototype.sum = (a,b) => {  
        console.log(a+b);
      }


      calculator.prototype.substract = (a,b) => {
        console.log(a-b);
      }

  
const calculator1 = new calculator();
calculator1.sum(2,4);
calculator1.substract(4,2);

function advancedCalculator() {}
advancedCalculator.prototype = Object.create(calculator.prototype);

const advanced = new advancedCalculator();
advanced.sum(2,2)

advancedCalculator.prototype.multiply = function(a, b) {
    console.log(a*b)
  };

  advancedCalculator.prototype.divide = function(a, b) {
    console.log(a/b)
  };

  advanced.multiply(4,4)
    

class TodoItem {
    static defaultChecked = false;

    constructor(name){
        this.name = name;
        this.id = Math.random().toString(36).substr(2, 9);
        this.checked = TodoItem.defaultChecked;
    }

    get checked() {
        return this._checked;
    }

    set checked (value){
        if(typeof(value)=="boolean"){
            this._checked = value;
            console.log("checked was set to "+value);
            return;
        } else {
        console.log("type of value must be a bool");
    };
    }

}

const user = new TodoItem("ivan");
const user3 = new TodoItem("chel");
const user4 = new TodoItem("misha");
const user5 = new TodoItem("petya");

// console.log(user.id);
// user.checked = true;
// console.log(user.checked);


class TodoList {
    
    constructor(name){
        this.name = name;
        this.id = Math.random().toString(36).substr(2, 9);
        this.list = [];
    }

    addItem(value) {
            if(value instanceof TodoItem){
                this.list.push(value)
                console.log("item was added");
            }else {console.log("item is not ToDoItem")}
    }

    removeItemById(id) {
        this.list = this.list.filter(item => item.id !== id, console.log("guy with id "+id +" was removed"));
        
    }

    getItemById(id) {
        console.log(this.list[id]);
    }
}

const list1 = new TodoList("People");
list1.addItem(user);
list1.addItem(user3);
list1.addItem(user4);
list1.addItem(user5);

//console.log(list1.list);


list1.getItemById(3);
user5.checked=true;
list1.getItemById(3);

list1.removeItemById(user3.id);
list1.removeItemById(user.id);

//console.log(user3.id);s
//console.log(list1.list);
