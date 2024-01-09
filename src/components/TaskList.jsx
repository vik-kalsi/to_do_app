

function TaskList() {


    return(
        <ul className="mt-8">
            <li> <input type="radio"/> This is Task 1 <button type="button" className="border-2 p-1 mx-4 my-2">Delete</button></li>
            <li> <input type="radio"/> This is Task 2 <button type="button" className="border-2 p-1 mx-4 my-2">Delete</button></li>
            <li> <input type="radio"/> This is Task 3 <button type="button" className="border-2 p-1 mx-4 my-2">Delete</button></li>
        </ul>
    )
}


export default TaskList