import React, { Component } from 'react'
import RandomJokes from "./RandomJokes"
import ListOfJokes from "./ListOfJokes"
import Favorites from "./Favorites"
import Design from "../styling/Design.css"


// import Next from "./Next"

// const favoritesUrl = "localhost:3000/list"
// const BaseUrl = "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/"
// const random = "random/jokes"

export default class MainPage extends Component {

    state={
        show: null,
        favorites: []
    }  

    addToFave = (wetf) => {
        const {favorites} = this.state
        this.setState({favorites: [...favorites , wetf]})
    }
    
    showRandom = () => {
        return (
            <RandomJokes 
                addToFave={this.addToFave} 
                back={this.backBtn}
            />
        )
    }

    showList = () => {
        return(
            <ListOfJokes 
                addToFave={this.addToFave}
                back={this.backBtn}
            /> 
        )
    }

    showFavorites = () => {
        return (
            <Favorites 
                favorites={this.state.favorites}
                back={this.backBtn}
            />
        )
    }

    backBtn = () => {
        return (
            <button className="BackList" onClick={() => this.setState({show: null})}>
                Main Page 
            </button>
        )
    }


    showHome = () => {
        return(    
            <div className="MainPage" >
                <button className="mainBtn" onClick={() => this.setState({show: "random" }) } >
                    Random jokes
                </button>
                <button className="mainBtn" onClick={() =>this.setState({show: "list" }) } >
                    List of 20 Jokes
                </button>
                <button className="mainBtn" onClick={() =>this.setState({show: "favorites" }) } >
                    Favorite Jokes
                </button>
            </div>
        )
    }

    whatToShow = () => {
        if (this.state.show === "favorites"){
            return this.showFavorites()
        } else if (this.state.show === "random"){
            return this.showRandom()
        } else if (this.state.show === "list"){
            return this.showList()
        } else return this.showHome()
    }

    render() {
        return (
            <div className="pageSelector ">
                {this.whatToShow()}
            </div>
        )
    }
}
