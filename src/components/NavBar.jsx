import { Link } from 'react-router-dom';
import { CartWidget } from "./CartWidget"

export const Navbar = () =>{
    return(
        <header>
            <nav>
                <div>Bar Antartida</div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="category/lomito">Lomitos</Link>
                    </li>
                    <li>
                        <Link to="category/burger">Burgers</Link>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}