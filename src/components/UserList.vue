<template>
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>名前</th>
                    <th>性別</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ userName }}</td>
                    <td>{{ userGender }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            userName: "山田太郎",
            userGender: "男性"
        }
    }
}
</script>

<style scoped>

</style>