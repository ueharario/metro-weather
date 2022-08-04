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

</script>

<style>

</style>