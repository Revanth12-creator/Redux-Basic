 const ActinTypes ={
    GET_PRODUCT:'GET_PRODUCTS',
    DELTETE_PRODUCT:'DELETE_PRODUCT'
}

 const getProducts=(data:any)=> {
    return {
        type: ActinTypes.GET_PRODUCT,
        payload:data
    }
}

 const deleteProduct=()=> {
    return {
        type: ActinTypes.DELTETE_PRODUCT
    }
}

const allExport={ActinTypes,getProducts,deleteProduct}
export default allExport;