const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todolist = document.getElementById('todolist');

let editTodo = null;

//function to add ToDo
const addTodo = ()=>{
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert('Please Enter a Task')
        return false;
    }


    if(addBtn.value === "Edit"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = "";
    }
    else{
    //creating a p tag
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    //creat a edit btn
    const editBtn =document.createElement("button");
    editBtn.innerText = "Edit"; // yaha hm icon b use kar skty h
    editBtn.classList.add("btn" , "editBtn");
    li.appendChild(editBtn);

    //create a delete btn
    const deleteBtn =document.createElement("button");
    deleteBtn.innerText = "Remove"; // yaha hm icon b use kar skty h
    deleteBtn.classList.add("btn" , "deleteBtn")
    li.appendChild(deleteBtn);



    todolist.appendChild(li);
    inputBox.value = "";
    }
}

//function to update : (Edit / Delete) ToDo
const updateTodo = (e)=>{
   if (e.target.innerHTML === "Remove"){
   todolist.removeChild (e.target.parentElement);
   }

   if(e.target.innerHTML === "Edit"){
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value = "Edit";
    editTodo = e;
   }  
   
}
addBtn.addEventListener('click',addTodo);
todolist.addEventListener('click' , updateTodo)