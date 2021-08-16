var todoLists = ["New","Old"]; // todolist
var input = prompt("Enter your option: "); // getting first input
var add = ["Add","add"]; // add possibility
var view = ["View","view"];// view possibility
var del = ["Delete","delete"];// delete possibility
var quit = ["Quit","quit","q","Q"];// quit possibility

//if the input is not quit
if(!quit.includes(input)){
    if(add.includes(input)){ // if the input is add
    console.log("Todo List before adding a item");

    console.log("****************");
    for(var todoList=0; todoList<todoLists.length; todoList++){
        console.log(`${todoList+1} -- ${todoLists[todoList]}`);
    }
    console.log("****************");

    var addInput = prompt("Enter the item to add");
    todoLists.push(addInput);
    console.log("New todo item is added to the list");

    console.log("****************");
    for(var todoList=0; todoList<todoLists.length; todoList++){
        console.log(`${todoList+1} -- ${todoLists[todoList]}`);
    }
    console.log("****************");
    }

    if(view.includes(input)){ // if input is view
        console.log("****************");
        for(var todoList=0; todoList<todoLists.length; todoList++){
            console.log(`${todoList+1} -- ${todoLists[todoList]}`);
        }
        console.log("****************");
    }

    if(del.includes(input)){ // if input is delete
        var delIndex = parseInt(prompt("Enter the todo item number to delete: "));
        for(var del_index = 0; del_index<todoLists.length;del_index++){
            if(delIndex-1 === del_index){

                console.log("Before deleting the todo list: ");            
                console.log("****************");
                for(var todoList=0; todoList<todoLists.length; todoList++){
                    console.log(`${todoList+1} -- ${todoLists[todoList]}`);
                }
                console.log("****************");

                console.log(`${todoLists[delIndex-1]} is deleted from the todo list`);
                todoLists.splice(delIndex-1,1);
                console.log("****************");
                for(var todoList=0; todoList<todoLists.length; todoList++){
                    console.log(`${todoList+1} -- ${todoLists[todoList]}`);
                }
                console.log("****************");
            }
            else{
                console.log(`${delIndex} is not present in the todo list. Check the list and try again!`);
                console.log("****************");
                for(var todoList=0; todoList<todoLists.length; todoList++){
                    console.log(`${todoList+1} -- ${todoLists[todoList]}`);
                }
                console.log("****************");
            }
        }    
    }
    //input = prompt("Enter your valid option: ");
}
else{ // if quit
    console.log("Quitting the application!!!");
    
}

