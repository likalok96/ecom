export const getUniqueKey = (productList,key) => {
    let unique = [...new Set(productList?.map(item => item[key].split(',')))];
    let unique2 = [].concat.apply([], unique);
    let filter_cate = [...new Set(unique2.map(item => item))];
    return filter_cate
}

export default getUniqueKey

