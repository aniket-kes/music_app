import React from 'react';

import {  ArtistCard, Error, Loader } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists= () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
//   const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetching) return <Loader title="Loading Top Artists" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Top Artists</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks.map((artist) => (
          <ArtistCard
            key={artist.key}
            artist={artist}
          />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;