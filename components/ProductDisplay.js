app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    }
  },
  template: 
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img 
        :src="image"
        :class="{'out-of-stock-img' : !inStock}">
      </div>
      <div class="product-info">

        <h1>{{ title }}</h1>

        <p v-if="onSale">{{ this.brand + ' ' + this.product + ' is on sale' }}</p>

        <p v-if="inStock > 10">In stock</p>
        <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out</p>
        <p v-else>Out of stock</p>

        <p>Shipping: {{shipping}}</p>

        <div 
        v-for="(variant, index) in variants" 
        :key="index" 
        @mouseover="updateVariant(index)"
        class="color-circle"
        :style="{ backgroundColor: variant.color }"
        ></div>

        <button 
          class="button" 
          @click="addToCart"
        >Add to cart</button>

        <button 
          class="button" 
          @click="removeFromCart"
        >Remove from cart</button>

      </div>
    </div>

    <review-list :reviews="reviews"></review-list>

    <review-form
      @review-submitted="addReview"
    ></review-form>

  </div>`,
  data() {
    return {
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
      reviews: [],
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    removeFromCart() {
      this.$emit('remove-from-cart')
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
    addReview(review) {
      this.reviews.push(review)
      console.log(this.reviews)
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
    shipping() {
      if ( this.premium ) {
        return 'Free'
      }
      return 2.99
    }
  }
})