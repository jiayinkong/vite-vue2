## 基础使用
### 按需引入使用
<template>
  <button @click="handleToast">toast</button>
</template>

```ts
import { toast } from '@my-lib-ui/components/dist/my-lib-ui';

toast('这是通知内容');
```

### 绑定到 Vue 原型使用
<template>
  <button @click="handlePropertyToast">toast</button>
</template>

<script>
  import { toast } from '@my-lib-ui/components/dist/my-lib-ui';

  export default {
    data() {
      return {

      };
    },
    mounted() {
      
    },
    methods: {
      handleToast() {
        toast('This is Toast')
      },
      handlePropertyToast() {
        this.$toast?.('Toast-Property');
      },
    }
  }
</script>
