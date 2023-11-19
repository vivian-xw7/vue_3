const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'VIVING DEAD GIRL',
            selectedVariant: 0,
            onSale: true,
            variants: [
                {
                    id: 1254,
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                    quantity: 0,
                }, 
                {
                    id: 1255,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
                    quantity: 50,
                }
            ],
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart -= 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
    }
})
