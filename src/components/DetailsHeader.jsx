import { Link } from "react-router-dom";


const DetailsHeader = ({artistId, artistData, songData}) => {
  const artist = artistData?.attributes;
  console.log(artistData?.attributes)
  return(
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-36 h-28 my-6">
        <div className="absolute flex inset-0 items-center">
          <img
            alt="profile"
            src={
              artistId ? artist?.artwork?.url
                .replace('{w}', '300')
                .replace('{h}', '300')
              : songData?.images?.coverart
              }
            className="sm:w-24 w-28 sm:h-24 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
          />

          <div className="ml-5">
            <p className="font-bold sm:text-2xl text-xl text-white">{artistId? artist?.name :songData?.title}</p>
            
            {!artistId && (
              <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
                <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
              </Link>
            )}
            <p className="text-base text-gray-400 mt-2">
              {artistId
                ? artist?.genreNames[0]
                : songData?.genres?.primary
              }
            </p>
          </div>
        </div>

        <div className="w-full sm:h-44 h-24">
          
        </div>
      </div>
    </div>
  )
}; 
export default DetailsHeader;
