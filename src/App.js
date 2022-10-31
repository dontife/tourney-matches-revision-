
import './App.css';
import MatchList from "./components/MatchList"
import PlayerList from "./components/PlayerList"
import matchData from './data/matchData';
import playerData from './data/playerData';
import { addWinsToPlayers, preparePlayerData } from './helpers/playerHelper';

function App() {
  const playerDataArray = preparePlayerData(playerData);
    const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  return (
    <div className="App">
      <h1>
      Tourney Matches <span>Where Coding and Tournaments found their Match!</span>
      <PlayerList playerData={parsedPlayerData}/>
      <MatchList  matchData={matchData}/>
    </h1>

    </div>
  );
}

export default App;
