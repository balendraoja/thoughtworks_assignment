import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="main-heading">Music Playlist</h1>
      <div className="search-container">
        <input type="search" className="search-bar" />
        <button className="sign-button">Logout ></button>
      </div>
      <div className="song-card">
        <p>Song Title</p>
        <p>Artist</p>
        <img src="" alt="cover-image" />
      </div>
    </div>
  );
}
