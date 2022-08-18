<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-md-12">
                <button @click="click">新規作成</button>
                <UserForm v-if="show" />
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>名前</th>
                            <th>性別</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" v-bind:key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.gender }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import UserForm from './UserForm.vue'
import USERS from '../constants/USERS.js'
export default {
    name: 'UserList',
    data() {
        return {
            users: [],
            show: false
        }
    },
    created() {
        this.users = USERS
    },
    components: {
        UserForm
    },
    methods: {
        click() {
            this.show = !this.show
        }
    }
}
</script>

<style scoped>
a {
    color: #42b983;
}
</style>