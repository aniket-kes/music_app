import { useNavigate } from "react-router-dom";
import ArtistDetails from "../pages/ArtistDetails";

const ArtistCard = ({artist}) => {
  const Navigate = useNavigate();
  console.log(artist)

  return(
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup cursor-pointer rounded-lg" onClick={()=>Navigate(`/artists/${artist?.artists[0].adamid}`)}>
      <img src= {artist?.images?.background} alt="Artists" className="w-full h-56 rounded-lg"/>
      <p className="mt-4 text-white text-lg font-semibold truncate">{artist.subtitle}</p>
    </div>
  )
};

export default ArtistCard;
