import { CartWidget } from "./CartWidget"

export const Navbar = () =>{
    return(
        <header>
            <nav>
                <div>Bar Antartida</div>
                <ul>
                    <li>
                        <a href="">Lomitos</a>
                    </li>
                    <li>
                        <a href="">Burguers</a>
                    </li>
                    <li>
                        <a href="">Pastas</a>
                    </li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}