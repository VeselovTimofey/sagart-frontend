import { useCallback, useState } from 'react';

import { AuthWidgetUi, type Ttabs } from './ui';

export function AuthWidget() {
  const [tab, setTab] = useState<Ttabs>('sign-in');

  const toggleTab = useCallback((targetTab: Ttabs) => setTab(targetTab), []);

  return <AuthWidgetUi {...{ tab }} {...{ toggleTab }} />;
}
