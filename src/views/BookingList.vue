<template>
  <div class="layout">
    <Layout>
      <Layout>
        <Header><HeaderView></HeaderView></Header>
        <br>
        <Content>
          <Button><router-link to="/addBooking">添加</router-link></Button>
          <Button><router-link to="/addReservation">添加预约</router-link></Button>
          <RightContent></RightContent>
        </Content>
        <Footer><Footer></Footer></Footer>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import LeftView from "../components/Left";
import RightContent from "../components/RightContent";
import HeaderView from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: {Footer, RightContent, HeaderView, LeftView},
}
</script>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-footer-center {
    text-align: center;
  }
</style>
