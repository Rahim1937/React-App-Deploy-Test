import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css';

const Home = () => {
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => setPlayers(data?.player))

    }, [search])

    return (
        <div className='home-container'>
            <div className="left-site">
                <input onChange={(e)=> setSearch(e.target.value)} type="text" className='search-input'/>
                <button className='searcth-fiueld'>Search</button>
                <Players players={players}></Players>
            </div>
            <div className="right-site">
                <h1>Cart</h1>
            </div>
        </div>
    );
};

export default Home;