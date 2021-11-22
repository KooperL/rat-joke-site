import Navbar from './Navbar';
import Home from './Home'


function App() {
    const title = 'this is a title';
    const likes = 50;
    return (
    <div className="App">
        <Navbar />
        <div className="content">
            <h1>{title}</h1>
            <Home />
            <p>Liked {likes} times</p>
        </div>
    </div>
  );
}

export default App;
