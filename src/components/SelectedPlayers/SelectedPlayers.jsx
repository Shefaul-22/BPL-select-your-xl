import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ purchasedPlayers , removePlayer , setToggle}) => {
    // console.log(purchasedPlayers);
    const handleToggle = () => {
        
        setToggle(true);

    }
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                purchasedPlayers.map(purchasedPlayer => <SelectedCard removePlayer={removePlayer} purchasedPlayer={purchasedPlayer}></SelectedCard>)
            }
            <button onClick={handleToggle} className='btn px-4 py-3 mt-3 rounded-xl bg-[#E7FE29]'>
                Add more players
            </button>
        </div>

    );
};

export default SelectedPlayers;