var todoLists = ["New","Old"];
var input = prompt("Enter your option: ");
var add = ["Add","add"];
var view = ["View","view"];
var del = ["Delete","delete"];
var quit = ["Quit","quit","q","Q"];
if(add.includes(input) || view.includes(input)|| del.includes(input)|| quit.includes(input)){

    if(add.includes(input)){
        newAdd();
    }

    if(view.includes(input)){
        viewList();
    }

    if(del.includes(input)){
        deleteItem();
    }

    if(quit.includes(input)){
        console.log("Quitting the application!!!");
        viewList();
    }
}
else{
    validInput();
}



function getInput(){
    input = prompt("Enter your next option: ");
}
function newAdd(){
    console.log("Todo List before adding a item");
    viewList();
    var addInput = prompt("Enter the item to add");
    todoLists.push(addInput);
    console.log("New todo item is added to the list");
    viewList();
}
function viewList(){
    console.log("****************");
    for(var todoList=0; todoList<todoLists.length; todoList++){
        console.log(`${todoList+1} -- ${todoLists[todoList]}`);
    }
    console.log("****************");
}
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
function validInput(){
    input = prompt("Enter your valid option: ");
}