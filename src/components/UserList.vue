<template>
    <div class="UserList">
        <a class="btn btn-primary" href="../components/UserForm.vue" role="button">新規作成</a>
        <table border="1">
            <thead>
                <tr>
                    <th>名前</th>
                    <th>性別</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" v-bind:key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.gender }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <UserForm />
</template>

<script>
import UserForm from './components/UserForm.vue'
import USERS from '../constants/USERS.js'
export default {
    name: 'UserList',
    data () {
        return {
            users: USERS
        }
    },
    components: {
        UserForm
    }
}
</script>

<style scoped>
a {
    color: #42b983;
}
</style>