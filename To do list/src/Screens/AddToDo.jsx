import React from 'react'
import style from "./CSS Module/TodoCss.module.css"

export default function AddToDo() {

    return (
        <>
            <div className={`mb-5 mt-3 ${style.m}`}>
                <div>
                    <h3 className={style.f}>Add To Do List</h3>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col'>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Add Title'/>
                                </div>
                                <div className='col'>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Add Description'/>
                                </div>
                                <div className='col'>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Add Remarks'/>
                                </div>
                            </div>

                            <div class="d-grid gap-2 col-2 mx-auto mt-3">
                                <button class="btn btn-outline-success" type="button">Add To do</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
