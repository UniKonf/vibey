import { SettingsContext } from '@/lib/context/settings';

import Button from '../Buttons/Button';
import { FC, useContext } from 'react';
import { RiSearchLine } from 'react-icons/ri';

const SearchButton: FC = () => {
  const { toggleSearchModal } = useContext(SettingsContext);
  return (
    <Button
      className="text-color-pink hover:text-white"
      leftIcon={RiSearchLine}
      onClick={toggleSearchModal}
      variant="outline"
    >
      Search here
    </Button>
  );
};
export default SearchButton;
