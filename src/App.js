import './App.css';
import Nav from './components/Nav/Nav'
import Subreddit from './components/Subreddit';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Post />
        <aside>
          <Subreddit />
        </aside>
      </main>
    </div>
  );
}

export default App;
