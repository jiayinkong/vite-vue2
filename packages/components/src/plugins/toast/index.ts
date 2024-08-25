import { VueConstructor } from "vue";
import {
  toast,
} from './core/main.js';

class ToastPlugin {
  static install (Vue: VueConstructor) {
    Vue.prototype.$toast = toast;
  }
}

export default ToastPlugin;