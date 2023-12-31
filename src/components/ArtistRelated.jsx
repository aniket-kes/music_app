import SongBar from "./SongBar";

const ArtistRelated = ({data, isPlaying, activeSong, artistId, handlePauseClick, handlePlayClick}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs</h1>
    <div className="mt-6 w-full flex flex-col">
      {song?.map((song, i) => (
        <SongBar
          key={`${song.key}-${i}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
        ))}
    </div>
  </div>
);

export default ArtistRelated;
