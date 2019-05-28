export const state = () => ({

    collections: [],
    newCollection: [],
    womanrings: [],
    earrings: [],
    pendants: [],
    bangles: [],
    ],
    shoppingbag: [{
        imageUrl: require('../assets/ring.jpg'),
        name: 'Ring',
        price: '$14.99',
    }],
    manrings: [],
    promotions: []
})

export const mutatuion = {
    addToCart(state, payload) {
        state.shoppingbag.push(payload);
    }
}

export const actions = {
    addToCart({ commit }, payload) {
        const shopping = {
            imageUrl: payload.imageUrl,
            name: payload.name,
            price: payload.price,
        }
        commit('addToCart', shopping);
    },
    async productAll({ commit }) {
        const product = []
        let newProduct = await this.$axios.$get("/api/product");
        for (const i of newProduct) {
            product.push(i)
        }
        commit('setCollections', product)
    },
    async productMen({ commit }) {
        const ringmen = []
        let getMenProduct = await this.$axios.$get("/api/product/man/ring");
        for (const i of getMenProduct) {
            ringmen.push(i)
        }
        console.log(getMenProduct)
        commit('setProductMen', ringmen)
    },
    async productNew({ commit }) {
        const productNew = []
        let newProduct = await this.$axios.$get("/api/new");
        for (const i of newProduct) {
            productNew.push(i)
        }
        commit('setNewCollections', productNew)
    },
    async productBangles({ commit }) {
        const bangle = []
        let bangleProduct = await this.$axios.$get("/api/product/woman/bangle");
        for (const i of bangleProduct) {
            bangle.push(i)
        }
        commit('setBangle', bangle)
    },
    async productPendant({ commit }) {
        const pendant = []
        let pendantProduct = await this.$axios.$get("/api/product/woman/pendant");
        for (const i of pendantProduct) {
            pendant.push(i)
        }
        commit('setPendant', pendant)
    },
    async productEarring({ commit }) {
        const earring = []
        let earringProduct = await this.$axios.$get("/api/product/woman/earrings");
        for (const i of earringProduct) {
            earring.push(i)
        }
        commit('setEarring', earring)
    },
    async productWomanRing({ commit }) {
        const ring = []
        let ringProduct = await this.$axios.$get("/api/product/woman/ring");
        for (const i of ringProduct) {
            ring.push(i)
        }
        commit('setWomanRing', ring)
    },
    async promotions({ commit }) {
        const promo = []
        let getPromo = await this.$axios.$get("/api/promotion/store")
        for (const i of getPromo) {
            promo.push(i)
        }
        console.log(getPromo)
        commit('setPromo', promo)
    }
}

export const getters = {
    bag(state) {
        return state.shoppingbag
    },
    isPromotion: (state) => (id) => {
        for (const j of state.promotions) {
            if (id === j._id) {
                return true
            }
        }
    },
    isProductId: (state) => (id) => {
        for (const i of state.collections) {
            if (id == i._id) {
                return i
            }
        }
    },
    getPromotions: (state) => (id) => {
        for (const j of state.promotions) {
            if (id === j._id) {
                return j
            }
        }
    }
}
export const mutations = {
    setCollections(state, product) {
        state.collections = product
    },
    setProductMen(state, ringmen) {
        state.manrings = ringmen
    },
    setNewCollections(state, productNew) {
        state.newCollection = productNew
    },
    setBangle(state, bangle) {
        state.bangles = bangle
    },
    setPendant(state, pendant) {
        state.pendants = pendant
    },
    setEarring(state, earring) {
        state.earrings = earring
    },
    setWomanRing(state, ring) {
        state.womanrings = ring
    },
    setPromo(state, promo) {
        state.promotions = promo
    }

}
