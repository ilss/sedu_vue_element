/*
 * @Author: Liang Liang
 * @Date: 2018-07-06 17:14:40
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-07-06 17:14:40
 * @Description:
 */
<template>
  <div id="app"
       :class="this.$i18n.locale">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
