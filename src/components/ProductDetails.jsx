import {useLoaderData} from "react-router-dom"

// eslint-disable-next-line react-refresh/only-export-components
export function loader ({params})  {
    // get product logic
    let id = params.id
    return {id}
}

const ProductDetails = () => {
    const {id} = useLoaderData()
    return(
        <p>Product id: {id} details</p>
    )
}

export default ProductDetails