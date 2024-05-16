import prd_img from '../data/productLinks.json'

const createProduct = (prd)=> {
        prd.search_text = prd.brand + prd.name
        prd.search = prd.category +','+ prd.brand
        prd.price_cal = prd.price.replace('.00','')
        const str = prd.brand + ' ' + prd.name
        prd.image = prd_img[str]
}

export default createProduct

