<template>
  <main>
    <div>
      <UserList />
      <router-view />
    </div>
  </main>
</template>

<script>
import UserList from './views/UserList.vue'
export default {
  name: "App",
  components: {
    UserList
  }
}
</script>

<style scoped>
main {
  height: calc(100vh - 152px);
  padding: 3% 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
