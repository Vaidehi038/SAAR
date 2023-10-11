import React from 'react'
import treatment3 from  '../assets/posture.jpg';



function Treatment3() {
  return (
<>
<div className="card text-bg-light">
    <br/><br/><br/><br/>
  
    
</div>

    <div className="card text-bg-light mb-3">
    <div className="card-header"><h1 className='display-3'>Physiotherapy</h1></div>
    <div className="row g-0">
        <div className="col-md-4">
      <img src={treatment3} className="img-fluid rounded-start" ></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      
      </div>
    </div>
  </div>
  </div>

<div className=" text-center mb-3" >
  <div className="card-body" >
    <h5 className="card-title" style={{marginTop: '2%'}}>Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p><br/>
  </div>
</div>
    <div className="card text-bg-light mb-3" >
    <div className="row g-0">
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
        <div className="col-md-4">
      <img src={treatment3} className="img-fluid rounded-start" ></img>
  
      </div>

  </div>
   </div>
   </>

  )
}

export default Treatment3;
