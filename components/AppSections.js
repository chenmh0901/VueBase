import AppSectionsList from "./AppSectionsList.js";
import AppSectionsForm from "./AppSectionsForm.js";

export default {
    components: { AppSectionsList, AppSectionsForm },
    template: /*html*/ `
        <app-sections-list headline="未购零食" :buyChild="filters.beforeBuy"></app-sections-list>
        <app-sections-list headline="已购零食" :buyChild="filters.afterBuy"></app-sections-list>

        <app-sections-form 
            @add="fatherAdd"
        ></app-sections-form>
    `,
    data() {
        return {
            foods: [
                { id: 1, name: '原味鱿鱼丝', image: './images/原味鱿鱼丝.png', purchased: false },
                { id: 2, name: '辣味鱿鱼丝', image: './images/辣味鱿鱼丝.png', purchased: false },
                { id: 3, name: '炭烧味鱿鱼丝', image: './images/炭烧味鱿鱼丝.png', purchased: false }
            ]
        }
    },
    methods: {
        fatherAdd(youyusi) {
            this.foods.push({
                id: this.foods.length + 1,
                name: youyusi,
                image: '../images/鱿鱼丝.png',
                purchased: false
            });
        }
    },
    computed: {
        filters() {
            return {
                beforeBuy: this.foods.filter(item => !item.purchased),
                afterBuy: this.foods.filter(item => item.purchased)
            }
        }
    }
}