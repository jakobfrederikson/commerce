import { ShoppingCartIcon } from "@heroicons/react/20/solid";

export const CartIcon = () => {
    return (
        <div className="columns">
            <div className="column">
                <a className="button">
                    <ShoppingCartIcon width="23" height="23" />
                </a>                
            </div>
        </div>
        
    );
}