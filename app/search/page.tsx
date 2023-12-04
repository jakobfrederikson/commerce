import { getProducts } from "@/app/lib/actions";
import ProductList from "@/app/components/product-list";
import type { NextRequest } from "next/server";

export default async function Page(req: NextRequest) {
    const searchParams = req.searchParams;
    const category = searchParams.category as string | undefined;
    const searchTerm = searchParams.searchTerm as string | undefined;
    const products = await getProducts({category, searchTerm});
    const resultsText = products.length > 1? "results" : "result";
    return (
        <>
            {searchTerm ? (
                <p className="">
                    {products.length === 0
                        ? 'There are no products that match '
                        : `Showing ${products.length} ${resultsText} for`}
                    <span className="strong">&quot;{searchTerm}&quot;</span>
                </p>
            ) : null}
            {products.length > 0 ? (
                <div className="collumns">
                    <ProductList products={products} />
                </div>
        ): null}            
        </>
    );
}