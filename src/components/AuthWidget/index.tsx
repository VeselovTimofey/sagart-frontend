import { useCallback, useState } from 'react';

import { AuthWidgetUi, type Ttabs } from './ui';

interface IAuthWidget {
  onSuccess: () => void;
}

export function AuthWidget({ onSuccess }: IAuthWidget) {
  const [tab, setTab] = useState<Ttabs>('sign-in');

  const toggleTab = useCallback((targetTab: Ttabs) => setTab(targetTab), []);

  return <AuthWidgetUi {...{ tab }} {...{ toggleTab }} {...{ onSuccess }} />;
}
