export const getters = {
    isPromotion: (state) => (id) => {
        for (const j of state.promotions) {
            if (id === j.id) {
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
    // collectPromo: state => {
    //     const product = []
    //     for (const i of state.collections) {
    //         for (const j of state.promotions) {
    //             if (i.id === j.id) {
    //                 product.push(state.collections[i.id - 1])
    //             }
    //         }
    //     }
    //     return product
    // }
}
export const mutations = {
    setNewCollections(state, product) {
        state.collections = product
    },
    setProductMen(state, ringmen) {
        state.manrings = ringmen
    }
}
export const actions = {
    async productNew({ commit }) {
        const product = []
        let newProduct = await this.$axios.$get("/api/product");
        for (const i of newProduct) {
            product.push(i)
        }
        commit('setNewCollections', product)
    },
    async productMen({ commit }) {
        const ringmen = []
        let getMenProduct = await this.$axios.$get("/api/product/man/ring");
        console.log(getMenProduct);
        for (const i of getMenProduct) {
            ringmen.push(i)
        }
        commit('setProductMen', ringmen)
    }
}
