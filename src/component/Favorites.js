import React from 'react'
import FaveCards from "./FaveCards"
import Design from "../styling/Design.css"

export default function Favorites(props) {
    console.log(props)
    return (
        <div className="FavePage">
            {<props.back />}
            <FaveCards 
                jokeList={props.favorites}
            />
        </div>
    )
}
