import React, { useState } from 'react';

import userImg from "../../assets/user-1.png"
import flagImg from "../../assets/flag-icon.png"
import { toast } from 'react-toastify';

const PlayerCard = ({ player, setAvailableBalance, availableBalance ,purchasedPlayers, setPurchasedPlayers }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleSelected = (playerData) => {

        const playerPrice = playerData.price;

        if(availableBalance < playerPrice){
            toast("Not enough coins!!");
            return;
        }

        if(purchasedPlayers.length === 11){
            toast("11 players already selected");
            return;
        }
        setIsSelected(true);
        setAvailableBalance(availableBalance - playerPrice);
        setPurchasedPlayers([...purchasedPlayers,playerData])

    }

    return (
        <div className="card bg-base-100 w-96 shadow-sm p-4">
            <figure>
                <img className='w-full h-[300px] object-fit'
                    src={player.player_image}
                    alt={player.player_name} />
            </figure>
            <div className="mt-4">
                <div className='flex'>
                    <img src={userImg} alt="" />
                    <h2 className="card-title ml-3">{player.player_name}</h2>
                </div>

                <div className='flex justify-between items-center my-3 border-b-1 border-gray-400 pb-2'>
                    <div className='flex'>
                        <img className='w-[20px] h-[20px]' src={flagImg} alt="" />
                        <span className='ml-2'>{player.player_country}</span>
                    </div>
                    <button className='btn'>{player.playing_role}</button>

                </div>

                <div className='flex justify-between font-bold mb-3'>
                    <span>Rating</span>
                    <span>{player.rating}</span>
                </div>

                <div className='flex justify-between '>
                    <span className='font-bold'>{player.batting_style}</span>
                    <span>{player.bowling_style}</span>
                </div>

                <div className="card-actions mt-4 flex justify-between items-center">
                    <p className='font-bold'>Price: ${player.price} USD </p>
                    <button onClick={() => { handleSelected(player) }} disabled={isSelected} className="btn ">{isSelected === true ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;