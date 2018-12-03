import React, { Component } from 'react';
import '../App.css'
import './star.png'

export default class GameCard extends Component {
    constructor() {
        super()
        this.state = {
            selected: false
        }
    }
    
    handleSelect(){
        this.state.selected
        ? this.setState({
            selected: false
        })
        : this.setState({
            selected: true
        })
    }

    render() {

    const {name, image, deck, setGame, id, add, medium_url} = this.props

    return (
        <div className={this.state.selected ? "game-card-complete" : "game-card"} onClick={() => this.handleSelect()}>
        
            <h2>
                {
                    name.length > 12
                        ? name.substring(0, 12) + '...'
                        : name
                }
            </h2>
            <img src={image}/>
            
            <p>
                {
                    deck
                        ? deck.length > 120
                            ? deck.substring(0, 120) + '...'
                            : deck
                        : deck
                }
            </p>
            <div>
                <img 
                    className='icon-1' 
                    src='http://pixelartmaker.com/art/c0e1e34c1b64249.png'
                    onClick={() => add({
                        name,
                        image,
                        deck,
                        id
                    })}
                />
                <img 
                    className='icon-2' 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Media_Viewer_Icon_-_Close_Fullscreen.svg/2000px-Media_Viewer_Icon_-_Close_Fullscreen.svg.png'
                    onClick={() => setGame({
                        name,
                        image,
                        deck,
                        medium_url
                    })}
                    />
            </div>
        </div>
    )
    }         
}