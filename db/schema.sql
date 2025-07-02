DROP TABLE IF EXISTS playlist_tracks;
DROP TABLE IF EXISTS playlists;
DROP TABLE IF EXISTS tracks;

CREATE TABLE playlists (
  id serial PRIMARY KEY,
  name text NOT NULL,
  description text NOT NULL
);

CREATE TABLE tracks (
  id serial PRIMARY KEY,
  name text NOT NULL,
  duration_ms integer NOT NULL
);

CREATE TABLE playlist_tracks (
  id serial PRIMARY KEY,
  playlist_id integer NOT NULL REFERENCES playlists(id) ON DELETE CASCADE,
  tracks_id integer NOT NULL REFERENCES tracks(id) ON DELETE CASCADE,
  UNIQUE (playlist_id, tracks_id)
);

