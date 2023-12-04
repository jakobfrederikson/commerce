import { ShoppingCartIcon } from "@heroicons/react/20/solid";

export const CartIcon = () => {
    return (
        <div className="columns">
            <div className="column">
                <ShoppingCartIcon className="has-text-black icon is-24x24"/>           
            </div>
        </div>        
    );
}