import React from 'react'
import style from './CssModule/Header.module.css'

export default function Desc() {
    return (
        <div class="p-8 mb-4 bg-secondary-subtle rounded-3">
            <div class="container-fluid py-5">
                <img src="./profile.jpg" class="rounded mx-5 d-block" alt="Eknoor Singh" align="right" height={300} />
                <h1 class="display-5 fw-bold mx-2">Eknoor Singh</h1>
                <p class="col-md-8 fs-4 mx-2">Enthusiastic MERN Stack Developer in training, dedicated to mastering MongoDB, Express.js, React.js, and Node.js. Passionate about problem-solving and committed to continuous learning. Eager to contribute skills and creativity to building cutting-edge web applications.</p>
                <a href='https://www.linkedin.com/in/eknoor-singh-b02624247/'>
                    <button class="btn btn-primary btn-lg mt-4 mx-2 px-4" type="button">LinkedIN</button>
                </a>
            </div>
        </div>
    )
}
