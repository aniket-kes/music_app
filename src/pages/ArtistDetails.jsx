import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {DetailsHeader, Error, Loader, ArtistRelated } from '../components'
import { setActiveSong, playPause } from "../redux/features/playerSlice";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";
import { useGetArtistRelatedQuery } from "../redux/services/shazamCore";


const ArtistDetails = () => {
    const dispatch = useDispatch();
    const {id:artistId} = useParams();
    const {activeSong, isPlaying} = useSelector((state)=>state.player);
    const {data: artistData, isFetching: isfetchingArtistDetails, error:errorArtistData} = useGetArtistDetailsQuery(artistId);
    const {data: artistRelated, isfetching:isFetchingArtistRelated, error} =useGetArtistRelatedQuery(artistId);
    console.log(artistData?.data[0])
  

    if(isfetchingArtistDetails) return <Loader title={'Searching artist details'}/>
    if(errorArtistData) return <Error/>

    const handlePauseClick = () => {
      dispatch(playPause(false));
    };
  
    const handlePlayClick = (song, i) => {
      const data = ArtistRelated?.songs;
      dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true));
    };
  
    
    return (
        <div className="flex flex-col ">
            <DetailsHeader
                artistId={artistId}
                artistData={artistData?.data[0]}
            />

            <ArtistRelated
               data={artistRelated?.data}
               artistId={artistId}
               isPlaying={isPlaying}
               activeSong={activeSong}
               handlePauseClick={handlePauseClick}
               handlePlayClick={handlePlayClick}
            />

        </div>
    )
    

};

export default ArtistDetails;
