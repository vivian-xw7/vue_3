const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'the thing between your foot and the shoe',
            image: './assets/images/socks_green.jpg',
            inventory: 10,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {
                    id: 1254,
                    color: 'green',
                }, 
                {
                    id: 1255,
                    color: 'blue'
                }
            ],
            sizes: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
        }
    }
})
