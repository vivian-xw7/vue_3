const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            description: 'the thing between your foot and the shoe',
            image: './assets/images/socks_green.jpg',
            inventory: 0,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {
                    id: 1254,
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                }, 
                {
                    id: 1255,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
                }
            ],
            sizes: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart -= 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
