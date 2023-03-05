import { Link } from "react-router-dom"
import "./style.css"

export default function Header() {
    return (
        <header>
            <div className="limitar-secao">
                <img src="/assets/logo.png" alt="Logo" />
                <nav>
                    <ul type = "none">
                        <li><Link to={ "/" }>Home</Link></li>
                        <li><Link to={ "/sabores" }>Sabores</Link></li>
                        <li><Link to={ "/sobre" }>Sobre</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}