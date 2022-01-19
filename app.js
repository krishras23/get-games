//works when getting games


import './App.css';


function App() {
  return (
    <div className="App">

async funtion getTime(){
      fetch(' https://api.chess.com/pub/player/krish_ras/games/2022/01')
      .then(response => response.json())
      .then(data => console.log(data.games))

    }
    getTime();
    </div>
  );
}

export default App;
