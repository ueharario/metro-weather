<template>
    <div>
        <div class="create">
            <a class="btn btn-primary" href="./UserForm.vue" role="button">新規作成</a>
        </div>
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
</template>

<script>
import Users from './views/Users.js'
export default {
    data () {
        return {
            users: Users
        }
    }
}
</script>

<style scoped>

</style>