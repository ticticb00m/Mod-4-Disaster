import React from 'react'

function Cards(props) {
    return (
        <div className="card mt-3" >
            <p className="card-header">{props.joke.setup}</p>
            <h4 className="card-text">{props.joke.punchline}</h4>
            <button className="btn btn-primary" onClick={() => props.addToFave(props.joke)}> Add to Favorites </button>
        </div>
    )
}
export default Cards 

{/* <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div> */}
// </div>