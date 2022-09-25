import { loader } from '../assets';

const Loader = ({ title }) => (
  <div className="w-full flex flex-col justify-center items-center">
    <img className="w-32 h-32" src={loader} alt="loader" />
    <h1 className="text-2xl text-white font-bold mt-2">{title || 'Loading...'}</h1>
  </div>
);

export default Loader;
