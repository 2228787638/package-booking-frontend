<template>
    <div>
      <div style="background:#eee;padding: 50px" >
        <Card :bordered="false">
          <el-input v-model="id" placeholder="请输入运单号"></el-input>
          <el-input v-model="recipient" placeholder="请输入收件人"></el-input>
          <el-input v-model="phoneNumber" placeholder="请输入电话号码"></el-input>
          <Button @click="submit">提交</Button>
        </Card>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AddBooking',
  data () {
    return {
      id: '',
      recipient: '',
      phoneNumber: ''
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('postItem', {
        id: this.id,
        recipient: this.recipient,
        phoneNumber: this.phoneNumber
      })
      this.$router.push('/bookingList')
    }
  }
}
</script>

<style scoped>

</style>
