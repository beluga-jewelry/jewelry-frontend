// var ObjectId = require("mongodb").ObjectID;
export const state = () => ({

    collections: [],
    newCollection: [],
    womanrings: [],
    earrings: [],
    pendants: [],
    bangles: [],
    shoppingBag: [],
    manrings: [],
    promotions: [],
    customerOrder: [],
    inStock: [],
    History: [],
    Daily: [],
    totalSaleD: 0,
    Monthly: [],
    totalSaleM: 0,
    Yearly: [],
    totalSaleY: 0,
    adminPromotion: []
})
export const actions = {
    addToCart({ commit }, payload) {
        const shopping = {
            id: payload.id,
            imageUrl: payload.imageUrl,
            name: payload.name,
            price: payload.price,
            quantity: payload.quantity,
            size: payload.size,
        }
        commit('addToCart', shopping)
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
    },
    async order({ commit }) {
        const order = []
        let getOrder = await this.$axios.$get("/api/customer/order")
        console.log(getOrder)
        for (const i of getOrder) {
            const or = {
                customer: i['customer_name'],
                product: i['product_name'],
                price: i['total_price'],
                date: i['sale_date'].split("T")[0],
            }
            order.push(or)
        }
        console.log(order)
        commit('setOrder', order)
    },
    async instock({ commit }) {
        const inst = []
        let getStock = await this.$axios.$get("/api/admin/stock")
        console.log(getStock)
        for (const i of getStock) {
            const st = {
                date: i['stock_date'].split("T")[0],
                product: i['name'],
                type: i['type'],
                gender: i['gender'],
                quantity: i['quantity'],
            }
            inst.push(st)
        }
        commit('setStock', inst)
    },
    async history({ commit }) {
        const history = []
        let getHistory = await this.$axios.$get("/api/admin/history")
        console.log(getHistory)
        for (const i of getHistory) {
            const h = {
                material: i['profile_material'],
                country: i['profile_country'],
                colour: i['color']
            }
            history.push(h)
        }
        console.log(history)
        commit('setHistory', history)
    },
    async dailyReport({ commit }, day) {
        let dd = 0
        const daily = []
        let getDaily = await this.$axios.$get("/api/admin/report/dialy/" + day)
        console.log(getDaily)
        for (const i of getDaily) {
            const d = {
                product: i['product_name'],
                type: i['type'],
                price: i['total_price'],
                date: i['sale_date'].split("T")[0],
            }
            daily.push(d)
            dd += i['total_price']
        }
        console.log(daily)
        commit('setTotalPD', dd)
        commit('setDaily', daily)
    },
    async monthlyReport({ commit }, month) {
        let mm = 0
        const monthly = []
        let getMonthly = await this.$axios.$get("/api/admin/report/month/" + month)
        console.log(getMonthly)
        for (const i of getMonthly) {
            const m = {
                product: i['product_name'],
                type: i['type'],
                price: i['total_price'],
                date: i['sale_date'].split("T")[0],
            }
            monthly.push(m)
            mm += i['total_price']
        }
        console.log(monthly)
        commit('setTotalPM', mm)
        commit('setMonthly', monthly)
    },
    async yearlyReport({ commit }, year) {
        let yy = 0
        const yearly = []
        let getYearly = await this.$axios.$get("/api/admin/report/year/" + year)
        console.log(getYearly)
        for (const i of getYearly) {
            const y = {
                product: i['product_name'],
                type: i['type'],
                price: i['total_price'],
                date: i['sale_date'].split("T")[0],
            }
            yearly.push(y)
            yy += i['total_price']
        }
        console.log(yearly)
        commit('setTotalPY', yy)
        commit('setYearly', yearly)
    },
    async adminPromotion({ commit }) {
        const promoAdmin = []
        let pro = await this.$axios.$get("/api/promotion/")
        for (const i of pro) {

            const temp = {
                promotion_name: i['promotion_name'],
                discount: i['discount'] * 100,
                begin_date: i['begin_date'].split("T")[0],
                end_date: i['end_date'].split("T")[0]
            }
            promoAdmin.push(temp)
        }
        console.log(promoAdmin)
        commit('setAdminPromo', promoAdmin)
    },
    async orderCustomer({ commit }, shoppingList) {
        let current_datetime = new Date()

        // let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
        console.log("hello")
        for (const i of shoppingList) {
            console.log(i['id'])
            console.log(i['quantity'])
            console.log(i['price'])

            const params = {
                product_id: i['id'],
                customer_id: "5cf0f41f1c9d440000c2d2aa",
                quantity: i['quantity'],
                total_price: i['price'],
                sale_date: current_datetime
            }
            let order = await this.$axios.$post("/api/user/order", params);
            console.log(order)

        }
    }

}

export const getters = {
    loadedCart(state) {
        return state.shoppingBag
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
    },
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
    },
    addToCart(state, payload) {
        state.shoppingbag.push(payload);
    },
    setOrder(state, order) {
        state.customerOrder = order
    },
    setStock(state, instock) {
        state.inStock = instock
    },
    setHistory(state, history) {
        state.History = history
    },
    setDaily(state, daily) {
        state.Daily = daily
    },
    setTotalPD(state, tpd) {
        state.totalSaleD = tpd
    },
    setMonthly(state, monthly) {
        state.Monthly = monthly
    },
    setTotalPM(state, tpm) {
        state.totalSaleM = tpm
    },
    setYearly(state, yearly) {
        state.Yearly = yearly
    },
    setTotalPY(state, tpy) {
        state.totalSaleY = tpy
    },
    setAdminPromo(state, promoAdmin) {
        state.adminPromotion = promoAdmin
    },
    addToCart(state, payload) {
        state.shoppingBag.push(payload);
    },


}