export default function Forms({handleClick, todo, addToDo}){
    const handleSubmit = (event) =>{
        event.preventDeafult()
    }
    return(
        <form onSubmit={handleSubmit}>
            <laben htmlfor="to-do"></laben>
            <input 
            name="title"
            id="to-do"
            type="text"
            value={todo.addToDo}
            onChange={addToDo}
            />

            <label htmlFor="content">Content</label>
            <textarea
                name="content"
                id="content"
                type="text"
                value={todo.addToDo}
                onChange={addToDo}
            />  
            <button className="todo-btn" type="submit" onClick={handleClick}>Add to do</button>

        </form>
    )
}