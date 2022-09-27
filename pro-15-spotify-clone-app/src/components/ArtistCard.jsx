import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer mr-2 my-2" onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}>
      <img src={track?.images?.coverart} alt="artist" className="w-full h-56 rounded-lg" />
      <p className="text-white text-lg font-semibold mt-4 truncate">{track?.subtitle}</p>
    </div>
  );
};

export default ArtistCard;
