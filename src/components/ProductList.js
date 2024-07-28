import React from "react";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../Context";
import Product from "./Product";


const ProductList =()=>{
    
    return(
        
        <React.Fragment>
            <div className="py-4 body" id="products">
                <div className="container display-5 py-4">
                    <Title name="Our" title="Products"/>
                    <div className="row">
                    <ProductConsumer>
                        
                        {value => {
                            console.log(value.products);
                            return value.products.map(product => {
                                
                                return <Product key={product.id} product={product} />
                            })
                        }}
                    </ProductConsumer>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductList;