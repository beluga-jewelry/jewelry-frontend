export const state = () => ({
    collections: [
        {
            id: 1,
            name: 'Dimond Ring',
            type: 'Ring',
            material: 'Dimond',
            color: 'red',
            price: 55,
            image: 'https://bnsec.bluenile.com/bluenile/is/image/bluenile/-diamond-ring-platinum-/AB27502200_main?$phab_detailmain$'
        },
        {
            id: 2,
            name: 'Amethyst Ring',
            type: 'Ring',
            material: 'Amethyst',
            color: 'puple',
            price: 100,
            image: 'https://www.marrymediamonds.com/media/catalog/product/cache/1/thumbnail/1200x/17f82f742ffe127f42dca9de82fb58b1/h/a/harmony_ring_18k_white_gold_platinum_1.jpg'
        },
        {
            id: 3,
            name: 'Rose Gold Ring',
            type: 'Ring',
            material: 'Dimond',
            color: 'Rose Gold',
            price: 20,
            image: 'https://image.brilliantearth.com/media/base_product_center_diamond_images/XG/BE1D3242_reina-halo_Round_rose_carat_75.jpg'
        },
        {
            id: 4,
            name: 'Pearl Ring',
            type: 'Ring',
            material: 'Pearl',
            color: 'white',
            price: 15.99,
            image: 'https://cdn.shopify.com/s/files/1/1346/1927/products/006-15087.jpg?v=1547673189'
        },
        {
            id: 5,
            name: 'Gold necklace',
            type: 'Necklace',
            material: 'Dimond',
            color: 'Gold',
            price: 14.99,
            image: 'https://dto508s2j2p46.cloudfront.net/system/spree/products/2242/product/M_necklace_diamond_3new.png?1510263873'
        },
        {
            id: 6,
            name: 'diamond bangles',
            type: 'bangles',
            material: 'Dimond',
            color: 'white gold',
            price: 35,
            image: 'https://bnsec.bluenile.com/bluenile/is/image/bluenile/-classic-diamond-bangle-18k-white-gold-/44961_main?$phab_detailmain$'
        },
        {
            id: 7,
            name: 'Ruby bangles',
            type: 'bangles',
            material: 'Ruby',
            color: 'red',
            price: 40,
            image: 'https://5.imimg.com/data5/RJ/BR/MY-1107937/ruby-diamond-jewelry-500x500.jpg'
        },
    ],
    promotions: [{
        id: 1,
        namePromo: "1 free 1",
        newPrice: 45,
        name: 'Dimond Ring',
        type: 'Ring',
        material: 'Dimond',
        color: 'red',
        price: 55,
        image: 'https://bnsec.bluenile.com/bluenile/is/image/bluenile/-diamond-ring-platinum-/AB27502200_main?$phab_detailmain$'

    }]
})

export const getters = {
    isPromotion: (state) => (id) => {
        for (const j of state.promotions) {
            if (id === j.id) {
                return true
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
export const actions = {
    async save({ commit }) {
        console.log("kk")
        let save = await this.$axios.$get("http://localhost:4000/");
        console.log(save)
        console.log(save.message)
    }
}
