import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <img src="/assets/logo.png" alt="Logo" />

            <nav>
                <ul type = "none">
                    <li><Link to={ "/" }>Home</Link></li>
                    <li><Link to={ "/sabores" }>Sabores</Link></li>
                    <li><Link to={ "/sobre" }>Sobre</Link></li>
                </ul>
            </nav>
        </header>
    )
}