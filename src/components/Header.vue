<template>
  <Header :style="{position: 'fixed', width: '100%'}">

    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-nav">
        <MenuItem name="1" @click.native="changeStatus(0)">
          <Icon type="ios-navigate"></Icon>
          All
        </MenuItem>
        <MenuItem name="2" @click.native="changeStatus(1)">
          <Icon type="ios-keypad"></Icon>
          已预约
        </MenuItem>
        <MenuItem name="3" @click.native="changeStatus(2)">
          <Icon type="ios-analytics"></Icon>
          已取件
        </MenuItem>
        <MenuItem name="4" @click.native="changeStatus(3)">
          <Icon type="ios-paper"></Icon>
          未预约
        </MenuItem>
      </div>
    </Menu>
  </Header>
</template>

<script>
    export default {
        name: "HeaderView",
        methods:{
          changeStatus (id) {
            this.$store.dispatch('getDatas', id)
          }
        }
    }
</script>

<style scoped>

</style>
