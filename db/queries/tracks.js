import db from "#db/client"

export async function createTrack(name) {
  const sql = `
  INSERT INTO tracks
    (name)
  VALUES
    ($1)
  RETURNING *
  `;
  const {
    rows: [track],
  } = await db.query(sql, [name]);
  return track;
}

export async function getTrack() {
  const sql = `
  SELECT *
  FROM tracks
  `;
  const { rows: playlist } = await db.query(sql);
  return playlist;
}

export async function getPlaylistById(id) {
  const sql = `
  SELECT *
  FROM playlist
  WHERE id = $1
  `;
  const {
    rows: [playlist],
  } = await db.query(sql, [id]);
  return playlist;
}