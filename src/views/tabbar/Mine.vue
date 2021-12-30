<template>
  <PageHeader slotName="right">
    <template #right>
      哈哈
    </template>
  </PageHeader>
  <p>我的</p>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const state = reactive({
      count: 0,
    })
  
    return {
      ...toRefs(state),
    }
  }
}
</script>

<style lang="scss" scoped>

</style>