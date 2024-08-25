import { VueConstructor } from 'vue';

import * as components from './components';
export * from './components';
export * from './plugins/toast/core/main';
export { default as ToastPlugin } from './plugins/toast/index.ts';

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