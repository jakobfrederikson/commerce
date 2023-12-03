import { GetAllProducts } from "@/app/lib/actions";
import Image from "next/image";

export default async function AllProducts() {
    const allProducts = await GetAllProducts();
    return (
        <div className="columns">
            { allProducts.map(( product ) => {
                return (
                    <div
                     key={product.title}
                     className="columns">
                        <div className="column">
                            <h5>{product.title}</h5>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <Image 
                                src={product.image}
                                alt="Image of a product"
                                width={100}
                                height={100}
                            />
                        </div>                        
                    </div>
                );
            })}
        </div>
    );
}