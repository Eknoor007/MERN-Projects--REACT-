import React from 'react'
import style from './CssModule/Header.module.css'

export default function Desc() {
    return (
        <div class="p-8 mb-4 bg-body-tertiary rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Eknoor Singh</h1>
                <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                <button class="btn btn-primary btn-lg" type="button">LinkedIN</button>
            </div>
        </div>
    )
}