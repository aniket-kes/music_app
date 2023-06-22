// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// import { Error, Loader, SongCard } from '../components';
// import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

// const CountryTracks = () => {
//     const [country, setCountry] = useState('');
//     const [loading, setLoading] = useState(true);
//     const {data, isfetching, error} = useGetSongsByCountryQuery(country)

//     const {activeSong, isPlaying} = useSelector((state)=>state.player);
//     if (isfetching && loading) return <Loader title={'Loading songs around you'}/>
//     if (error && country) return <Error/>

//     console.log(country)
//     console.log(data)

    
//     useEffect(()=>{
//         axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_FJiyAzQA0FLKDhiizjLhPtFXESyjy`)
//         .then((res)=>setCountry(res?.data?.location?.country))
//         .catch((err)=>console.error(err))
//         .finally(()=>setLoading(false));
//     },[country]);

//     return(
//         <div className='flex flex-col'>
//             <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Around You</h2>

//             <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
//                 {data?.CountryTracks?.map((song,i) => {
//                     <SongCard
//                         key={song.key}
//                         song={song}
//                         isPlaying={isPlaying}
//                         activeSong={activeSong}
//                         data={data}
//                         i={i}
//                     />
//                 })}
//             </div>
//         </div>
//     );
// };

// export default CountryTracks;
