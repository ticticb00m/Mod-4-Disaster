import React from 'react'
import Cards from "./Cards"

export default function ListCards(props) {

    const makeCards = () => {
        return (props.jokeList.map(joke => {
            return (<Cards 
                key={joke.id}
                joke={joke}
                addToFave={props.addToFave}
                />
            ) 
        }))
    }

    return (
        <div>
            {makeCards()}
        </div>
    )
}
