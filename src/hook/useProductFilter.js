import { useContext } from 'react'
import { useParams,useSearchParams  } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { useQuery } from '@tanstack/react-query'

const useProductFilter = () => {

    const { getProduct} = useContext(ShopContext)

    const productQuery = useQuery({queryKey: ['productList'],queryFn: getProduct});
    const productList =   productQuery.data

    productList?.map((prd)=>{
        prd.search_text = prd.brand + prd.name
        prd.search = prd.category + prd.brand
        prd.price_cal = prd.price.replace('.00','')
    })

    const {category,brand} = useParams();

    const [searchParams, setSearchParams] = useSearchParams();

    let productList2 =  productList?.filter((prd)=>
        (category ? prd.search.toLowerCase().indexOf(category.toLowerCase())!==-1 : true) &&
        (brand ? prd.search.toLowerCase().indexOf(brand.toLowerCase())!==-1 : true) &&
        (searchParams.get('search') ? prd.search_text.toLowerCase().indexOf(searchParams.get('search').toLowerCase())!==-1 : true)
    )

    const unique_key = (key) => {
        let unique = [...new Set(productList2?.map(item => item[key].split(',')))];
        let unique2 = [].concat.apply([], unique);
        let filter_cate = [...new Set(unique2.map(item => item))];
        return filter_cate
    }


    let filter_cate = unique_key('category')
    let filter_brand = unique_key('brand')
    

    const filterProduct = (productList,searchParams,key) => {
        
        let filteredList = productList?.filter((prd)=>{
    
        let isCate = searchParams.get(key) ? false : true

        searchParams.get(key) && searchParams.get(key).split(',').map((cate)=>{
            
            if(prd[key].toLowerCase().indexOf(cate.toLowerCase())!==-1){
                isCate= true
            } 

         })
        return isCate
    })

    return filteredList

    }

    let filteredList = filterProduct(productList2,searchParams,'category')
    filteredList = filterProduct(filteredList,searchParams,'brand')

    

    const handleClick = (e,feild) => {
        if (e.target.value===''){
            searchParams.set(feild,[''])
            setSearchParams(searchParams)
            return
        }
        if(searchParams?.get(feild)?.split(',').includes(e.target.value)){
            searchParams.get(feild).indexOf(',') ===-1 ?
            searchParams.set(feild,['']) :
            searchParams.set(feild,searchParams.get(feild).split(',').filter(item => item !== e.target.value).join(','))
            
            setSearchParams(searchParams)
            
        } else {

            !searchParams.get(feild) ? 
            searchParams.set(feild,  e.target.value):
            searchParams.set(feild, searchParams.get(feild) + ',' + e.target.value)

            setSearchParams(searchParams)

        }
    }


    return {category, brand, productList, filter_cate, filter_brand, filteredList, searchParams, setSearchParams, handleClick,productQuery }

}

export default useProductFilter