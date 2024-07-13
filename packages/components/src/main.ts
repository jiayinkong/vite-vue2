import { VueConstructor } from 'vue';

import * as components from './components';
export * from './components';

export const install = function(app: VueConstructor) {

  Object.keys(components).forEach((key) => {
    const component = (components as any)[key];

    if (component.install) {
      app.use(component);
    }
  });
};

export default {
  install,
};