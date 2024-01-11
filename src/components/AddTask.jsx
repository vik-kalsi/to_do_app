import { useRef } from 'react';


function AddTask() {

    const TextField = useRef();


    const AddTaskToList = () => {
        console.log(TextField.current.value);
        TextField.current.value = "";
    }

    return(  
    <>
        <input ref={TextField} type="text" placeholder="Add your task" className="p-2 mt-8 font-bold rounded-2xl text-black"></input>
        <button onClick={AddTaskToList} type="button" className="mx-4 border-2 font-semibold text-white rounded-2xl p-2">Add Task</button>
    </>
    )
}

export default AddTask