
import { Suspense, useState } from 'react';
import './App.css';

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import Navbar from './components/Navbar/Navbar';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}
const playersPromise = fetchPlayers();

function App() {


  const [toggle, setToggle] = useState(true);
  
  const [availableBalance, setAvailableBalance] = useState(600000)

  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter(ply => ply.player_name !== p.player_name)
    setPurchasedPlayers(filteredData)
  }
  // console.log(purchasedPlayers)


  return (
    <>
      {/* Navbar components */}
      <Navbar availableBalance ={availableBalance}></Navbar>

      <div className='max-w-[1200px] mx-auto  flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>{toggle  === true? "Available Players" : `Selected Players (${purchasedPlayers.length}/6)`}</h1>

        <div className='font-bold'>
          <button onClick={() => setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 cursor-pointer ${toggle === true? "bg-[#E7FE29]" : ""}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 cursor-pointer ${toggle === false? "bg-[#E7FE29]" : ""} `}>Selected <span>({purchasedPlayers.length})</span></button>
        </div>

      </div>

      {/* Available Players component */}

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} playersPromise={playersPromise}></AvailablePlayers>

        </Suspense> : 
        
        <SelectedPlayers purchasedPlayers={purchasedPlayers} removePlayer={removePlayer}></SelectedPlayers>

      }


      {/* Selected Players component */}

    </>
  )
}

export default App
