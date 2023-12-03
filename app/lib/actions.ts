import * as TypeDefs from '@/app/lib/definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function GetAllProducts() {
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