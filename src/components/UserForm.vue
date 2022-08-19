<template>
    <div class="card">
        <div class="card-body">
            <div class="card-text">
                <div class="form-group">
                    <label for="name">名前:</label>
                    <input type="text" class="form-control" id="name" v-model="form.name">
                </div>
                <div class="form-group">
                    <label for="gender">性別:</label>
                    <select v-model="form.gender">
                        <option disabled="disabled">選択してください</option>
                        <option value="male">男性</option>
                        <option value="female">女性</option>
                    </select>
                </div>
                <button class="btn btn-primary" @click="register">更新</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // name: {
        //     type: String,
        //     required: true
        // },
        // gender: {
        //     required: true
        // }
    },
    computed: {
        // syncedName: {
        //     get () {
        //         return this.name
        //     },
        //     set (val) {
        //         this.$emit('update:name', val)
        //     }
        // },
        // selected: {
        //     get () {
        //         return this.gender
        //     },
        //     set (val) {
        //         this.$emit('update', val)
        //     }
        // }
    },
    register() {
        const user = Object.assign({}, this.form)
        this.users.push(user)
        this.reset()
    },
    reset() {
        this.form.name = '',
        this.form.gender = ''
    }
}
</script>

<style scoped>

</style>