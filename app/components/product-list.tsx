import Image from "next/image";
import { Product } from "@/app/lib/definitions";

interface Props {
    products: Product[];
}

export default function ProductList({ products }: Props) {
    return (
        <div className="columns is-multiline">
            { products.map(( product ) => {
                return (
                    <div
                     key={product.title}
                     className="column is-2">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <Image 
                                    src={product.image}
                                    alt="Image of a product"
                                    fill={true}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">{product.title}</p>
                                    <p className="subtitle is-6">${product.price}</p>
                                </div>
                                </div>

                                <div className="content">
                                    {product.description}.                                
                                </div>
                            </div>
                        </div>                      
                    </div>
                );
            })}
        </div>
    );
}