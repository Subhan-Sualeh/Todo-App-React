import React from "react"
import { useState } from "react"
import {MdModeEdit} from "react-icons/md"
import {TiTick} from "react-icons/ti"
import { FaTrash } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
const Todo=()=>{

    let[todoItem , setTodoItem]= useState([])
    let[inputValue , setInputValue ] = useState("")
    let[indexNumber , setIndexNumber] = useState("")
    let[changeInput , setChangeInput] = useState("")
    
    console.log(indexNumber, "indexNum")
     
    const todoAdd = () =>{
        todoItem.push(inputValue)
        setTodoItem([...todoItem])
        setInputValue("")
    }
    const delTodo=(i)=>{
        todoItem.splice(i ,1)
        setTodoItem([...todoItem])

    }
    const editInput=(i)=>{
        setChangeInput(todoItem[i])
    }
    const delAll =()=>{
        setTodoItem([])
    }
    const updateTodo =(i)=>{
        todoItem.splice(i , 1 ,changeInput)
        setTodoItem([...todoItem])
        setIndexNumber("")
        setChangeInput("")

    }


    return(
        <main>
            <div className="inputMain mainDiv">
                <input type="text" placeholder="What to do !" value={inputValue} onChange={(e) => setInputValue(e.target.value)} 
                />
                <div className="btns"><AiOutlinePlus onClick={todoAdd} id="addTodo"></AiOutlinePlus><FaTrash onClick={delAll} id="removeTodo"></FaTrash></div> 
            </div>
            <section>
                {todoItem.map((todo , i) =>{
                    return(
                        <React.Fragment key={i}>
                            {indexNumber === i ?(
                            <div>
                            <input
                    onChange={(e) => setChangeInput(e.target.value)}
                    className=""
                    value={changeInput}
                    autoFocus />
                    <TiTick color="white" onClick={() => updateTodo(i)}>
                    </TiTick>
                    </div>
                    ) : (
                        <div>
                            {todo}
                            <button
                      className="icon"
                      onClick={() => delTodo(i)}
                      size={25}
                    >Dell</button>
                    <MdModeEdit
                      onClick={() => {
                        setIndexNumber(i);
                        editInput(i);
                      }}
                      size={25}
                    ></MdModeEdit>

                        </div>
                    )}
                        </React.Fragment>
                    );
                } )}
            </section>
            

        </main>


    )
}

export default Todo ;
