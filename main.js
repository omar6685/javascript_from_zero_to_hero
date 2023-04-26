const todos = [
    {
        id: 1,
        text: 'Learn JavaScript',
        isCompleted: false
    },
    {
        id: 2,
        text: 'Learn React',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Learn Redux',
        isCompleted: false
    }
]

for(let i = 0; i < 10; i++) {
    console.log(`for loop number ${i}`);
}


let i = 0;
while(i < 10) {
    console.log(`while loop number ${i}`);
    i++;
}

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for(let todo of todos) {
    console.log(todo.text);
}

todos.forEach(function(todo) {
    console.log(todo.id);
});

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted == true;
}).map(function(todo) {
    return  todo.text; 
})

console.log(todoCompleted);