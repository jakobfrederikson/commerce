import { CartIcon } from "./icons";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
        <nav className="navbar is-transparent is-active" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">

                <Link className="navbar-item has-background-primary has-text-white" href="/">Commerce App</Link>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                <Link className="navbar-item" href="/search">
                    All
                </Link>

                <Link className="navbar-item" href="/search">
                    Clothing
                </Link>

                <Link className="navbar-item" href="/search">
                    Gifts
                </Link>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <Link href="/Cart">
                        <CartIcon />
                    </Link>
                    
                </div>
                </div>
            </div>
        </nav>
        </>
    );
};