import React,{Component} from 'react'
import ListCards from "./ListCards"
import Design from "../styling/Design.css"

const BaseUrl = "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/"
const random = "random/jokes"

export default class ListOfJokes extends Component {

    state={
        jokeList: []
    }

    listSearch = () => {
        fetch(`${BaseUrl}${random}/20`)
            .then(response => response.json())
            .then(response => this.setState({ 
                jokeList: response
            }))
    }

    componentDidMount(){
        this.listSearch()
    }

    newList = () => {
        this.listSearch()
    }
    

    render(){
        return (
            <div className="ListPage">
                {<this.props.back  />}
                <ListCards 
                jokeList={this.state.jokeList}
                addToFave={this.props.addToFave}
                />
                <button className="NextList" onClick={() => this.newList()} >
                    Next List
                </button>
            </div>
        )
    }
}
