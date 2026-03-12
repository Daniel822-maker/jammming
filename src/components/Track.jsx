function Track({ track, onAdd, onRemove }) {

  const handleClick = () => {
    if (onAdd) {
      onAdd(track);
    } else if (onRemove) {
      onRemove(track);
    }
  };

  return (
    <div>
      <p>
        {track.name} | {track.artist} | {track.album}
      </p>

      <button onClick={handleClick}>
        {onAdd ? "+" : "-"}
      </button>
    </div>
  );
}

export default Track;