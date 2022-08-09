<template>
    <div>
        <select v-model="gender">
            <option disabled="disabled">選択してください</option>
            <option value="male">男性</option>
            <option value="female">女性</option>
        </select>
        <a href="/" role="button">やめる</a>
        <button>更新</button>
    </div>
</template>

<script>
import UserList from './views/UserList.vue'
export default {
    components: {
        UserList
    }
}
</script>

<style scoped>

</style>