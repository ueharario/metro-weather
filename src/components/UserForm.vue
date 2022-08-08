<template>
    <div>
        <select v-model="gender">
            <option disabled="disabled">選択してください</option>
            <option value="male">男性</option>
            <option value="female">女性</option>
        </select>
        <button>やめる</button>
        <button>更新</button>
    </div>
</template>

<script>
import UserList from './components/UserList.js'
export default {
    UserList
}
</script>

<style scoped>

</style>