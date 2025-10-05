import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ purchasedPlayers , removePlayer}) => {
    // console.log(purchasedPlayers);
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                purchasedPlayers.map(purchasedPlayer => <SelectedCard removePlayer={removePlayer} purchasedPlayer={purchasedPlayer}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;