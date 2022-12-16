import React, { useState } from 'react'
import './AddTodo.css'
export const AddTodo = (props) => {

    const [name, setname] = useState("");
    const [mobile, setmobile] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!name || !mobile) {
            alert("Please Fill all Fields!");
        } else {
            props.addTodo(name, mobile);
            setname("");
            setmobile("");
        }
    }

    return (

        <>
            <div className='title-component-page'>
                Add Todo
            </div>

            <div className='main margin-top'>
                <form onSubmit={submit}>
                    <div className='form-card'>
                        <div className='margin-left-30 display-flex'>
                            Todo_name:
                            <div className='float-right center-verticle'>
                                <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} name='name' />
                            </div>
                        </div>
                        <br />
                        <div className='margin-left-30 display-flex'>
                            Todo_mobile:
                            <div className='float-right center-verticle'>
                                <input type="text" onChange={(e) => { setmobile(e.target.value) }} value={mobile} name='mobile' />
                            </div>
                        </div>
                        <br />

                        <div className='center-horizontal'>
                            <button name='submit'>
                                Submit
                            </button>
                        </div>



                    </div>
                </form>

            </div>

        </>
    )
}
