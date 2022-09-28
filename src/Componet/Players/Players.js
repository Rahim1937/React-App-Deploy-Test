import React from 'react';
import Player from '../Player/Player';
import './Players.css';

const Players = ({players}) => {
    // console.log(players)
    return (
        <div className='players-contianer'>
            {
                
               players.map(player=> <Player player={player}></Player>)
            }
        </div>
    );
};

export default Players;