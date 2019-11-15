import React from 'react'

function FaveCards(props) {
    return (
        <div className="card mt-3">
            <p className="card-header">{props.joke.setup}</p>
            <h4 className="card-text">{props.joke.punchline}</h4>
            {/* <button onClick={() => props.addToFave(props.joke)}> Add to Favorites </button> */}
        </div>
    )
}
export default FaveCards 