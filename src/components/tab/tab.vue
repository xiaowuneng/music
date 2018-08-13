<template>
  <ul class = "tab">
    <li v-for="(item,index) in list" :key="index">
      <router-link :to="item.link" class = "tab-item">{{item.title}}</router-link>
    </li>
  </ul>
</template>
<script type="text/javascript">
export default {
  name: 'tab',
  data () {
    return {
      list: [
        {title: '推荐', link: 'recommend'},
        {title: '歌手', link: 'singer'},
        {title: '排行', link: 'rank'},
        {title: '搜索', link: 'search'}
      ]
    }
  }
}
</script>
<style type="text/css" scoped lang="stylus">
  @import "~common/stylus/variable"
  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    li
      flex: 1
      text-align: center
      .tab-item
        padding-bottom: 6px
        &.router-link-active
          border-bottom: 2px solid $color-theme
          color: $color-theme
</style>
