import React, { useState } from 'react'
import Product from '../../Components/Product'





const Products = () =>
{
    let [test,] = useState(new Array(50).fill(0));



    return (
        <>
            <div class="grid grid-cols-5 gap-12 items-center justify-center">
                {
                    test.map((product) => <Product />)
                }

            </div>
        </>
    )
}

export default Products