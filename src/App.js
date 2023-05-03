import './App.css';
import Peeps from './components/Peeps';

function App() {
  return (
    <div className="App">
      <h1>Here are my people:</h1>
      <Peeps firstName="John" lastName="Wick" age={99} hairColor="Black"/>
      <Peeps firstName="Bruce" lastName="Wayne" age={45} hairColor="Black"/>
      <Peeps firstName="Mikel" lastName="Arteta" age={40} hairColor="Black"/>
      <Peeps firstName="Lucky" lastName="Guy" age={30} hairColor="Black"/>
    </div>

  );
}

export default App;
