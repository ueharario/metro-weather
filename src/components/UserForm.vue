<template>
    <div class="card">
        <div class="card-body">
            <div class="card-text">
                <div class="form-group">
                    <label>名前:</label>
                    <input class="form-control" v-model="form.name">
                </div>
                <div class="form-group">
                    <label>性別:</label>
                    <select slass="form-group" v-model="form.gender">
                        <option disabled="disabled">選択してください</option>
                        <option value="male">男性</option>
                        <option value="female">女性</option>
                    </select>
                </div>
                <button class="btn btn-secondary" @click="close()">やめる</button>
                <button class="btn btn-primary" @click="register()">更新</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserForm',
    props: {
        name: {
            type: String,
            required: true
        },
        gender: {
            required: true
        }
    },
    computed: {
        // name: {
        //     get () {
        //         return this.name
        //     },
        //     set (val) {
        //         this.$emit('update:name', val)
        //     }
        // },
        // gender: {
        //     get () {
        //         return this.gender
        //     },
        //     set (val) {
        //         this.$emit('update', val)
        //     }
        // }
    },
    methods: {
        register() {
            const user = Object.assign({}, this.form)
            this.users.push(user)
            this.reset()
        },
        reset() {
            this.form.name = '',
            this.form.gender = ''
        },
        close() {
            this.reset()
            this.show = !this.show
        }
    }
}
</script>

<style scoped>

</style>