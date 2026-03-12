import Track from "./Track";

function Tracklist({ tracks, onAdd, onRemove }) {

  if (!tracks) {
    return <div>No hay canciones</div>;
  }

  return (
    <div>
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default Tracklist;