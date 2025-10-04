import React, { use } from 'react';
import userImg from "../../assets/user-1.png"
import flagImg from "../../assets/flag-icon.png"
const AvailablePlayers = ({ playersPromise }) => {

    const playersData = use(playersPromise);
    // console.log(playersData);

    return (
        <div className='max-w-[1200px] mx-auto'>


            <div className='grid grid-cols-3 gap-4'>

                {
                    playersData.map(player =>

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
                                    <p className='font-bold'>Price: $1500000 </p>
                                    <button className="btn ">Choose Player</button>
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>

        </div>
    );
};

export default AvailablePlayers;