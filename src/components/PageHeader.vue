<template>
  <div>
    <van-nav-bar
      :title="meta.title || title"
      :placeholder="placeholder"
      :fixed="fixed"
      v-bind="$attrs">
      <template #right>
        <slot name="right"></slot>
      </template>
    </van-nav-bar>
  <router-view></router-view>
  </div>
</template>

<script>
import { NavBar, } from 'vant';
import { reactive, toRefs } from 'vue'
import { useRoute, onBeforeRouteUpdate  } from 'vue-router'


export default {
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: Boolean,
      default: true
    },
    title: { default: '' },
    slotName: { default: '' },
  },
  components: {
    [NavBar.name]: NavBar
  },
  setup () {
    // const router = useRouter()
    const route = useRoute()
    const state = reactive({
      meta: route.meta
    })

    onBeforeRouteUpdate(to => {
      console.log("to", to );
      state.meta = to.meta
    });
    
    console.log('state', state);
    return {
      ...toRefs(state),
    }
  }
}
</script>

<style lang="scss" scoped>

</style>