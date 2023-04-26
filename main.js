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

console.log(todos[1].text)

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)