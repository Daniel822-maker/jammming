import Tracklist from "./Tracklist";

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange, onSave }) {
  return (
    <div>
      <input
        value={playlistName}
        onChange={(e) => onNameChange(e.target.value)}
      />

      <Tracklist
        tracks={playlistTracks}
        onRemove={onRemove}
      />

      <button onClick={() => onSave(playlistName, playlistTracks.map(track => track.uri))}>
        Save to Spotify
      </button>
    </div>
  );
}

export default Playlist;
