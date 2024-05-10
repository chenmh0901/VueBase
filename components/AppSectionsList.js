export default {
    template: /*html*/ `
        <section v-show="buyChild.length">
            <h2>未购零食</h2>
            <ul>
                <li v-for="food in buyChild" :key="food.id">
                    <img :src="food.image">
                    <span>{{ food.name }}</span>
                    <input type="checkbox" v-model="food.purchased">
                </li>
            </ul>
        </section>
    `,
    props: {
        headline: String,
        buyChild: Object
    }
}
