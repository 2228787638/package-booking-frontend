<template>
  <div style="background:#eee;padding: 50px" >
    <Card :bordered="false">

      <Col span="5">
        <el-input v-model="id" placeholder="请输入运单号"></el-input>
      </Col>
      <Col span="6">
        <el-date-picker
          v-model="time"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </Col>
      <Button @click="submit">预约</Button>
    </Card>
  </div>
</template>
<script>
export default {
  name: 'AddReservation',
  data () {
    return {
      id: '',
      time:''
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('updateTimer', {
        id: this.id,
        status: 1,
        time:this.time.getTime()
      })
      this.$router.push('/bookingList')
    }
  }
}
</script>

<style scoped>

</style>
