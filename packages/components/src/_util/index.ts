import { VueConstructor } from 'vue';

function toUpperCase(str: string) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export const withInstall = (comp: any) => {
  const c = comp as any;
  c.install = function (app: VueConstructor) {
    app.component(toUpperCase(c.name), comp);
  };

  return comp;
};