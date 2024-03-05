import React from 'react'
import style from "./CSS Module/TodoCss.module.css"

export default function Todolist({ todoitem }) {
    return (
        <>
            <div className={`${style.m}`}>
                <div>
                    <h2 className={style.f}>To Do List</h2>
                </div>


                {todoitem.length == 0 ? (
                    <div class="alert alert-danger" role="alert">
                        No Item Available in the List.
                    </div>
                ) : (

                    <table class="table">
                        <thead>
                            <tr className='table-dark'>
                                <th scope="col">S.No.</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                todoitem.map((value, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{value.title}</td>
                                            <td>{value.desc}</td>
                                            <td>{value.remarks}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table >

                )}
            </div>
        </>
    )
}
