import * as TypeDefs from '@/app/lib/definitions';
import { unstable_noStore as noStore } from 'next/cache';

async function GetAllProducts() {
    noStore();
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const resultsResponse = await response.json() as TypeDefs.Product[];
        return resultsResponse;
    } catch ( error ) {
        console.error("HTTP Error:", error);
        throw new Error("Failed to retrieve all products.");
    }    
};

export async function getProducts({
    category,
    searchTerm
}: {
    category?: string;
    searchTerm?: string;
}): Promise<TypeDefs.Product[]> {
    console.log("category: ", category);
    console.log("searchTerm: ", searchTerm);
    try {
        const allProducts = await GetAllProducts();

        if (!category && !searchTerm) {
            return allProducts;
        }

        let filteredProducts = allProducts;

        if (category) {
            filteredProducts = filteredProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());
        }

        if (searchTerm) {
            const lowercasedSearchTerm = searchTerm.toLowerCase();
            filteredProducts = filteredProducts.filter(product => 
                product.title.toLowerCase().includes(lowercasedSearchTerm) ||
                product.description.toLowerCase().includes(lowercasedSearchTerm)
            );
        }

        return filteredProducts;
    } catch (error) {
        console.error("Error: ", error);
        throw new Error("Failed to retrieve products.");
    }    
};