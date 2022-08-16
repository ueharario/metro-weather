<template>
    <div>
        <select v-model="gender">
            <option disabled="disabled">選択してください</option>
            <option value="male">男性</option>
            <option value="female">女性</option>
        </select>
        <div>
            <a class="btn btn-secondary" href="./UserList.vue" role="button">やめる</a>
        </div>
        <button>更新</button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>