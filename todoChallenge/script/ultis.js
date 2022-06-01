function activeFilter(todos){
    todos.filter(todo =>{
        return !todo.completed
    
    })
}
export default{
    activeFilter
}