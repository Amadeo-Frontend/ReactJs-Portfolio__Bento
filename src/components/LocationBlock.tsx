import { FiMapPin } from 'react-icons/fi';
import Block from './Block';

const LocationBlock = () => {
  return (
    <Block className="flex flex-col items-center col-span-12 gap-4 md:col-span-3">
      <FiMapPin className="text-3xl" />
      <p className="text-lg text-center text-zinc-400">Curitiba,Pr-Brazil</p>
    </Block>
  );
};

export default LocationBlock;
