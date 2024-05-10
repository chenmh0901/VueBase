export default {
    template: /*html*/ `
        <form @submit.prevent="add">
            <input type="text" placeholder="输入爱吃的鱿鱼丝..." v-model="newFood" />
            <button type="submit">添加</button>
        </form>
    `,
    data() {
        return {
            newFood: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newFood);
            this.newFood = '';
        }
    }
}