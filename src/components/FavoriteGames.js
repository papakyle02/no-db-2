import React from 'react';

export default function FavoriteGames(props) {
    const {favorites} = props
    const favGames = favorites.map(e => {
        return <div key={e.id}>
                    <div  className='favorites-card'>
                        <h3>{e.name}</h3>
                        <img className='fav-img' src={e.image}/>
                        <img 
                            className='fav-delete'
                            src='http://res.freestockphotos.biz/pictures/15/15107-illustration-of-a-red-close-button-pv.png' 
                            onClick={() => props.delete(e.id)}
                        />
                    </div>  
                    
                </div>    
    })
        return(
                <div className='favorites-display'>
                    {favGames}
                </div>
        )
}