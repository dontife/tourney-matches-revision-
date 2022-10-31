import React from "react"

function Player (props){
    return (
        <article className="Player">
            <h1> {props.firstName} <span>{props.gamerTag}</span> {props.lastName}</h1>
            {props.wins === 0 && <h2 className="zero">Currently with no wins</h2> }
            {props.wins === 1 && <h2 className="one">Currently at one wins</h2> }
            {props.wins > 1 && <h2 className="two">Currently at 1+ wins</h2> }
        </article>
    )
}

export default Player;