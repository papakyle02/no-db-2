import React, { Component } from 'react';
import axios from 'axios';
import GameCard from './GameCard';
import FavoriteGames from './FavoriteGames';

export default class Games extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gamesList: [],
            selectedGame: [],
            favoritesList: [],
        }
        this.addToFavorites = this.addToFavorites.bind(this);
        this.deleteFavorites = this.deleteFavorites.bind(this);
    }

    componentDidMount(){
        axios.get('/api/games').then(games => {
            this.setState({
                gamesList: games.data
            })
        })
    }

    addToFavorites(newFav){
        console.log(newFav)
        axios.post('/api/games/', newFav).then(res => {
            this.setState({
                favoritesList: res.data
            })
        })
        alert(`Added ${newFav.name} to favorites`)
    }

    deleteFavorites(id){
        console.log('delete ran', id)
        axios.delete(`/api/games/${id}`).then(res => {
            this.setState({
                favoritesList: res
            })
        })
        console.log('after delete state', this.state.favoritesList)
    }

    setGame(game){
        this.setState({
            selectedGame: game
        })
    }

    render() {
    const gameRender = this.state.gamesList.map(game => {
    
        return <GameCard 
        key={game.id}
        name={game.name}
        image={game.image.small_url}
        deck={game.deck}
        id={game.id}
        add={this.addToFavorites}
        setGame={this.setGame}
        medium_url={game.medium_url}
        />
    })
        return(
            <div className='content-display'>
                <div className='games-display'>
                    {gameRender}
                </div>
                {this.state.favoritesList.length > 0
                ?<div className="favorites-bar">
                    <FavoriteGames delete={this.deleteFavorites} favorites={this.state.favoritesList}/>
                 </div>
                : null
                } 
            </div>
        )
    }
}