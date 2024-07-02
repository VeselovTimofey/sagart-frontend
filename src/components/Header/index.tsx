import { useState } from 'react';

import { useSelector } from 'react-redux';

import type { AppStore } from '../../utils/types/appDispatch';

import HeaderUi from './ui';

function Header() {
  const { user } = useSelector((state: AppStore) => state.authSlice);

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const openAuth = () => setIsAuthOpen(true);
  const closeAuth = () => setIsAuthOpen(false);

  return (
    <HeaderUi
      {...{ isAuthOpen }}
      handleAuthClose={closeAuth}
      handleAuthOpen={openAuth}
      isSignedIn={!!user}
    />
  );
}

export default Header;
