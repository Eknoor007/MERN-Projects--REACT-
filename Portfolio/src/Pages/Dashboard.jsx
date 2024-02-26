import React from 'react'

export default function Dashboard() {
  return (
    <div className="container">
      <div class="card">
        <div className='row'>
          <div className='col mt-1'>
            <div class="card-body">
              <h5 class="card-title fs-1">About Myself</h5>
              <p class="card-text fs-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt voluptate illo consequatur, harum reprehenderit nisi nobis ut sint itaque sit est inventore maxime eveniet aperiam id, a, deserunt dolores quam?</p>
              <a href="#https://www.linkedin.com/in/eknoor-singh-b02624247/" type="button" class="btn btn-primary btn-lg">LinkedIn</a>
            </div>
          </div>
          <div className='col mt-1 mx-1'>
            <img src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg" class="img-fluid" alt="Some Guy"/>
          </div>
       </div>
      </div>
    </div>
  )
}
