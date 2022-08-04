<template>
    <div>
        <h2>新規作成</h2>
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
export default {
    data () {
        return {
            users: [
                {
                    id: 1,
                    name: '山田太郎',
                    gender: '男性'
                },
                {
                    id: 2,
                    name: '山田次郎',
                    gender: '男性'
                },
                {
                    id: 3,
                    name: '山田三郎',
                    gender: '男性'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>