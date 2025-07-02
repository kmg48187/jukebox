import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  for(let i = 1; i <= 20, i++;){
    await createTrack("Track" + i);
  };

  for(let i = 1; i <= 10, i++;){
    await createPlaylist("Playlist" + i);
  };
  
    for(let i = 1; i <= 15, i++;){
      const trackId = 1 + Math.floor(Math.random() * 20)
      const playlistId = 1 + Math.floor(Math.random() * 10)
    await createPlaylist_Track(trackId, playlistId);
  };
};
