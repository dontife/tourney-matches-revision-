import React from "react"

import Player from "./Player"



function PlayerList (props) {
    const players = props.playerData.map(player => <Player firstName={player.firstName} lastName={player.lastName} gamerTag={player.gamerTag} wins={player.wins} key={player.gamerTag}/>)
    return (
        <section className ="playerList" >
            <h1>Current participating players</h1>
            {players}
        
        </section>
      

    );
}

export default PlayerList;