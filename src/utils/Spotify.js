const Spotify = {

  // 🔑 Token simulado para evitar error de autenticación
  getAccessToken() {
    return "fake-access-token";
  },

  // 🔎 Buscar canciones
  search(term) {

    console.log("Buscando canciones:", term);

    // Datos simulados para probar la app
    return Promise.resolve([
      {
        id: 1,
        name: "Shape of You",
        artist: "Ed Sheeran",
        album: "Divide",
        uri: "spotify:track:1"
      },
      {
        id: 2,
        name: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        uri: "spotify:track:2"
      },
      {
        id: 3,
        name: "Levitating",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        uri: "spotify:track:3"
      }
    ]);

  },

  // 💾 Guardar playlist
  savePlaylist(name, trackUris) {

    if (!name || !trackUris.length) {
      return;
    }

    console.log("Playlist guardada correctamente");
    console.log("Nombre:", name);
    console.log("URIs:", trackUris);

  }

};

export default Spotify;