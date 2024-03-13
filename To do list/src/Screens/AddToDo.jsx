import React, { useState } from 'react'
import style from "./CSS Module/TodoCss.module.css"

export default function AddToDo(props) {
    const [title, settitle] = useState([])
    const [desc, setdesc] = useState([])
    const [remark, setremark] = useState([])

    const todoData ={
        title: title,
        desc: desc,
        remark: remark
    }

    return (
        <>
            <div className={`mb-5 mt-3 ${style.m}`}>
                <div>
                    <h3 className={style.f}>Add To Do List</h3>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col'>
                                    <input type="text" 
                                    className="form-control" 
                                    id="exampleInputPassword1" 
                                    placeholder='Add Title'
                                    value={title}
                                    onChange={(e) => {
                                        settitle(e.target.value)
                                    }}/>
                                </div>
                                <div className='col'>
                                    <input type="text" 
                                    className="form-control" 
                                    id="exampleInputPassword1" 
                                    placeholder='Add Description'
                                    value={desc}
                                    onChange={(e) => {
                                        setdesc(e.target.value)
                                    }}/>
                                </div>
                                <div className='col'>
                                    <input type="text" 
                                    className="form-control" 
                                    id="exampleInputPassword1" 
                                    placeholder='Add Remarks'
                                    value={remark}
                                    onChange={(e) => {
                                        setremark(e.target.value)
                                    }}/>
                                </div>
                            </div>

                            <div className="d-grid gap-2 col-2 mx-auto mt-3">
                                <button className="btn btn-outline-success" 
                                type="button" 
                                onClick={(event) => {
                                    props.f(todoData)
                                    settitle("")
                                    setdesc("")
                                    setremark("")
                                }}>Add To do</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
