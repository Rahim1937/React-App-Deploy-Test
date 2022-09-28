import React from 'react';
import './Player.css';

const Player = ({player}) => {
    // console.log(player)
    const {idPlayer, strPlayer, strDescriptionEN, strCutout} = player;
    return (
        <div className='cart'>
            <img className='player-img' src={strCutout} alt="" />
            <h5>{strPlayer}</h5>
            <p>{strDescriptionEN ? strDescriptionEN?.slice(0, 60) : 'lorem dijk 0ejfr emon kdfefdks'}</p>
        </div>
    );
};

export default Player;