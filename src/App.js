import './App.css';
import Nav from './components/Nav'
import Card from './components/Card';
import Subreddit from './components/Subreddit';

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
      <Card/>
      <aside>
      <Subreddit/>
      </aside>
      </main>
    </div>
  );
}

export default App;
