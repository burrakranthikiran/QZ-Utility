import { WebPlugin } from '@capacitor/core';

import type { QzUtilityPlugin } from './definitions';

export class QzUtilityWeb extends WebPlugin implements QzUtilityPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
