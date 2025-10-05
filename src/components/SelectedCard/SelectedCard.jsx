import React from 'react';

const SelectedCard = ({ purchasedPlayer, removePlayer }) => {
    const handleRemove = () => {
        removePlayer(purchasedPlayer)

    }
    return (
        <div className='flex justify-between items-center border-2 border-gray-300 rounded-xl mt-3 p-3'>
            <div className='flex items-center'>
                <img src={purchasedPlayer.player_image} className='w-[50px] h-[50px] rounded-xl' alt="" />
                <div className='ml-2'>
                    <h2 className='font-bold'>{purchasedPlayer.player_name}</h2>
                    <p className='text-xs '>{purchasedPlayer.batting_style}</p>
                </div>
            </div>
            <div onClick={handleRemove}>
                <img className='cursor-pointer' src="https://i.ibb.co.com/4RXTLwzZ/delete-icon.png" alt="" />
            </div>
        </div>)
}


export default SelectedCard;