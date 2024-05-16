export const getFirstLetter = (filter_brand) => {
    let unique = [...new Set(filter_brand.map(item => item.slice(0,1)))];
    let unique2 = [].concat.apply([], unique);
    let filter_cate = [...new Set(unique2.map(item => item))];
    return filter_cate
}

/* export const getFilteredProduct = (key) => {
    let unique = [...new Set(productList2?.map(item => item[key].split(',')))];
    let unique2 = [].concat.apply([], unique);
    let filter_cate = [...new Set(unique2.map(item => item))];
    return filter_cate
} */

