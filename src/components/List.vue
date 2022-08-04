<template>
    <div class="app">
        <table id="table" border="1">
            <thead class="thead">
                <tr>
                    <th>名前</th>
                    <th>性別</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" v-bind:key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.gender }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
const vue = new Vue({
    el: "#app",
    data: {
        items: []
    },
    created() {
        this.items = [
            { id: 1,
            name: '山田太郎',
            gender: '男性' },
            { id: 2,
            name: '山田次郎',
            gender: '男性' },
            { id: 3,
            name: '山田三郎',
            gender: '男性' },
            { id: 4,
            name: '山田花子',
            gender: '女性' }
        ]
    }
})
</script>

<style>

</style>