import { registerPlugin } from '@capacitor/core';

import type { QzUtilityPlugin } from './definitions';

const QzUtility = registerPlugin<QzUtilityPlugin>('QzUtility', {
  web: () => import('./web').then(m => new m.QzUtilityWeb()),
});

export * from './definitions';
export { QzUtility };
