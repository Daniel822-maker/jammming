import SearchBar from "./components/SearchBar";
import { useState } from "react";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import Spotify from "./utils/Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: "Shape of You", artist: "Ed Sheeran", album: "Divide" },
    { id: 2, name: "Blinding Lights", artist: "The Weeknd", album: "After Hours" },
    { id: 3, name: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia" }
  ]);

  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = (term) => {
  Spotify.search(term).then((results) => {
    setSearchResults(results);
  });
};

  const addTrack = (track) => {
    const exists = playlistTracks.find(
      (savedTrack) => savedTrack.id === track.id
    );
    if (exists) return;
    setPlaylistTracks([...playlistTracks, track]);
  };

  const removeTrack = (trackToRemove) => {
    setPlaylistTracks(
      playlistTracks.filter(track => track.id !== trackToRemove.id)
    );
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris);
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  return (
    <div>
      <h1>Jammming 🎵</h1>

      {/* Aquí va tu barra de búsqueda */}
      <SearchBar onSearch={search} />

      <SearchResults 
        tracks={searchResults}
        onAdd={addTrack}
      />

      <Playlist 
        playlistName={playlistName}
        playlistTracks={playlistTracks} 
        onNameChange={setPlaylistName}
        onRemove={removeTrack}
        onSave={savePlaylist}
      />
    </div>
  );
}

export default App;
