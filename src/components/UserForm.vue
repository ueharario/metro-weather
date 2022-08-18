<template>
    <div>
        <div>
            <label>名前:</label>
            <input type="text">
        </div>
        <div>
            <label>性別:</label>
            <select v-model="selected">
                <option disabled="disabled">選択してください</option>
                <option value="male">男性</option>
                <option value="female">女性</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
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
        syncedName: {
            get () {
                return this.name
            },
            set (val) {
                this.$emit('update:name', val)
            }
        },
        selected: {
            get () {
                return this.gender
            },
            set (val) {
                this.$emit('update', val)
            }
        }
    }
}
</script>

<style scoped>

</style>