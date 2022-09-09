<template>
  <div id="app">
    <UserList/>
    <UserForm v-if="show" />
  </div>
</template>

<script>
import UserList from './components/UserList.vue'
import UserForm from './components/UserForm.vue'
export default {
  name: 'app',
  components: {
    UserList,
    UserForm
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
