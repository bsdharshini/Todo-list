var todoLists = ["New","Old"]; // todolist
var input = prompt("Enter your option: "); // getting first input
var add = ["Add","add"]; // add possibility
var view = ["View","view"];// view possibility
var del = ["Delete","delete"];// delete possibility
var quit = ["Quit","quit","q","Q"];// quit possibility

//if the input is not quit
if(!quit.includes(input)){
    if(add.includes(input)){ // if the input is add
        newAdd();
    }

    else if(view.includes(input)){ // if input is view
        viewList();
    }

    else if(del.includes(input)){ // if input is delete
        deleteItem();
    }
    else{       // else enter proper input
        validInput();
    }
}
else{ // if quit
    console.log("Quitting the application!!!");
    viewList(); 
}
function getInput(){
    input = prompt("Enter your next option: ");
}

// add new item to list

function newAdd(){
    console.log("Todo List before adding a item");
    viewList();
    var addInput = prompt("Enter the item to add");
    todoLists.push(addInput);
    console.log("New todo item is added to the list");
    viewList();
}

// view list

function viewList(){
    console.log("****************");
    for(var todoList=0; todoList<todoLists.length; todoList++){
        console.log(`${todoList+1} -- ${todoLists[todoList]}`);
    }
    console.log("****************");
}

// delete list

function deleteItem(){
    var delIndex = parseInt(prompt("Enter the todo item number to delete: "));
    for(var del_index = 0; del_index<todoLists.length;del_index++){
        if(delIndex-1 === del_index){
            console.log("Before deleting the todo list: ");
            viewList();
            console.log(`${todoLists[delIndex-1]} is deleted from the todo list`);
            todoLists.splice(delIndex-1,1);
            viewList();
        }
        else{
            console.log(`${delIndex} is not present in the todo list. Check the list and try again!`);
            viewList();
        }
    }    
}

// enter proper input

function validInput(){
    input = prompt("Enter your valid option: ");
}