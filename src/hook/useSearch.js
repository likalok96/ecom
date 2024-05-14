import  {  useState } from 'react'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useQuery } from '@tanstack/react-query';

const useSearch = () => {

    const {getProduct, showSearch, setShowSearch} = useContext(ShopContext);

    const [search, setSearch] = useState('')

    const productQuery = useQuery({queryKey: ['productList'],queryFn: getProduct});
    const productList = productQuery.data

    productList?.map((prd)=>{
        prd.search = prd.brand + prd.name
        prd.price_cal = prd.price.replace('.00','')
    })

//    const [showSearch, setShowSearch] =  useState(false);

//    const [search, setSearch] = useState('')


    let search_record = JSON.parse(localStorage.getItem('search_record'));

    let searchList = search?.length>0 ? productList?.filter((prd)=>
    prd.search?.toLowerCase().indexOf(search.toLowerCase())!==-1
    ) : []

    const unique_key = (key) => {
        let unique = [...new Set(productList?.map(item => item[key].split(',')))];
        let unique2 = [].concat.apply([], unique);
        let filter_cate = [...new Set(unique2.map(item => item))];
        return filter_cate
    }

    let filter_cate = unique_key('category')

    filter_cate = filter_cate.filter((cate)=>
    cate.toLowerCase().indexOf(search?.toLowerCase())!==-1
    )

    const handleSearch = ()=> {
        let index = search_record?.indexOf(search);

        localStorage.setItem("search_record", JSON.stringify(search_record ?
             index!==-1 ? [search,...search_record.slice(0,index),...search_record.slice(index+1,search_record.length)] 
             : [search, ...search_record]
             :[search]));
    }

    return {showSearch, setShowSearch, search, setSearch, search_record, filter_cate, searchList, handleSearch}
    //, search, setSearch
}

export default useSearch