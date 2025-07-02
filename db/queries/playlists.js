import db from "#db/client";

export async function createPlaylist(name) {
  const sql = `
  INSERT INTO playlists
    (name)
  VALUES
    ($1)
  RETURNING *
  `;
  const {
    rows: [playlist],
  } = await db.query(sql, [name]);
  return playlist;
}

export async function getPlaylist() {
  const sql = `
  SELECT *
  FROM playlists
  `;
  const { rows: playlists } = await db.query(sql);
  return playlist;
}

export async function getPlaylistById(id) {
  const sql = `
  SELECT *
  FROM playlists
  WHERE id = $1
  `;
  const {
    rows: [playlist],
  } = await db.query(sql, [id]);
  return playlist;
}

export async function getPlaylistsByTrackId(id) {
  const sql = `
  SELECT DISTINCT playlists.*
  FROM
    appointments
    JOIN track ON playlist_tracks.track_id = track.id
    JOIN playlist ON playlist_tracks.playlist_id = playlists.id
  WHERE
    doctors.id = $1
  `;
  const { rows: playlists } = await db.query(sql, [id]);
  return playlist;
}