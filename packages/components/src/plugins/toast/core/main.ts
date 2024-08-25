import Vue from "vue";
import Toast from "./Toast.vue";

const toast = (options = {}) => {
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  const ToastConstructor = Vue.extend(Toast);

  const instance: any = new ToastConstructor({
    props: options
  });

  const vm = instance.$mount();
  document.body.appendChild(vm.$el);

  return () => {
    vm.close = false;
  }
}

export {
  toast
};