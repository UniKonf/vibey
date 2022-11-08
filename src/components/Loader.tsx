import { FC } from 'react';

const Loader: FC = () => {
  return (
    <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-base-content/80 border-t-primary" />
  );
};
export default Loader;
