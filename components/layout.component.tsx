import React from 'react';
import { useAppSelector } from '../hooks/useRedux';

interface RootState {
  utils: any;
}

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const lightMode = useAppSelector((state: RootState) => state.utils.lightMode);

  return <div className={`${lightMode ? 'dark' : ''}`}>{children}</div>;
};

export default Layout;
