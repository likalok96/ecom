

const useProductSort = () => {
    

    const sortProduct = (filteredList,sort) =>{

        switch (sort) {
            case 'Price ascending':
                filteredList = filteredList.sort((a, b) => a.price_cal - b.price_cal)
                break;
            case 'Price descending':
                filteredList = filteredList.sort((a, b) => a.price_cal - b.price_cal).reverse()
                break;
            case 'Title ascending':
                filteredList = filteredList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
                break;
            case 'Title descending':
                filteredList = filteredList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).reverse()
                break;
            case 'Manual':
                //filteredList = filteredList.toSorted((a, b) => a.id - b.id)
                filteredList = filteredList.sort((a, b) => a.id - b.id)
                break;
            default:
                filteredList = filteredList
        }
        return filteredList

    }

    return {sortProduct}
}

export default useProductSort