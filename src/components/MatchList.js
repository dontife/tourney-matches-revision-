import React from "react"
import Match from "./Match"


function MatchList (props) {
    const matches = props.matchData.map(match => <Match players={match.players} winner={match.winner} scoreDifference={match.scoreDifference} key={match.matchNumber}/>)

    return (
        <section className ="playerList MatchList">
            <h1> Match list</h1>
            {matches}
        </section>
    );
}

export default MatchList;