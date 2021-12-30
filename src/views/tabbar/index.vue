<template>
  <div>
  <router-view></router-view>

  <van-tabbar route placeholder>
    <van-tabbar-item replace to="/app/one" icon="home-o">商城</van-tabbar-item>
    <van-tabbar-item replace to="/app/two" icon="search">收款</van-tabbar-item>
    <van-tabbar-item replace to="/app/mine" icon="search">我的</van-tabbar-item>
  </van-tabbar>

    <!-- <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  methods: {
    name() {
      
    }
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const active = ref(0)

    watch(
      () => route,
      newParams => {
        console.log('newParams', newParams);
      }
    )

    function onChange(index) {
      // console.log(111, active);
      router.push({
        path: index === 0 ? '/tabbar/one' : '/tabbar/two',
        query: {
          ...route.query
        }})
      }
    return { active, onChange }
  }
}
</script>

<style lang="scss" scoped>

</style>