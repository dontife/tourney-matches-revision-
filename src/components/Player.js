import React from "react"

function Player (){
    return (
        <article className="Player">
            <h1> John <span>Secret</span> Doe</h1>
            {/* To be shown when there are no wins */}<h2 className="zero">Currently with no wins</h2>
            {/* To be shown when there is one win */}<h2 className="one">Currently at one wins</h2>
            {/* To be shown when there are 1+ wins */}<h2 className="two">Currently at 1+ wins</h2>
        </article>
    )
}

export default Player;