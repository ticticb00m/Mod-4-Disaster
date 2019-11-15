import React from 'react'
import FaveCard from "./FaveCard"

export default function FaveCards(props) {

    const makeCards = () => {
        return (props.jokeList.map(joke => {
            return (<FaveCard
                key={joke.id}
                joke={joke}
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