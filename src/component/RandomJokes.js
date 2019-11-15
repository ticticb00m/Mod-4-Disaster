import React, {Component} from 'react'
import Cards from "./Cards"
import Design from "../styling/Design.css"

const BaseUrl = "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/"
const random = "random/jokes"


export default class RandomJokes extends Component {
    
    state={ 
        joke:[] 
    }

    randomSearch = () => {
        fetch(`${BaseUrl}${random}`)
            .then(response => response.json())
            .then(response => this.setState({ 
            joke: response
            }))
    }
    
    componentDidMount(){
        this.randomSearch()
    }

    newJoke = () => {
        {this.randomSearch()}
    }

    render(){
        return (
            <div className="RandomPage">
                <Cards
                    joke={this.state.joke} 
                    addToFave={this.props.addToFave}
                />
                <div>
                {<this.props.back />}
                <button onClick={() => this.newJoke()} >Next Joke</button>
                </div>
            </div>
        )
    }
}
