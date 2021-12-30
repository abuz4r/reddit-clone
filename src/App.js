import './App.css';
import Nav from './components/Nav/Nav.container';
import Subreddit from './components/Subreddit.container';
import Post from './components/Post.container';

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

