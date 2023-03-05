import "./style.css"

export default function Footer() {
    return (
        <footer>
            <div className="limitar-secao infos-footer">
                <img src="/assets/logo.png" alt="Logo Pequena" />
                <div>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11)345-7890</p>
                </div>
                <div>
                    <h3>HORÁRIOS</h3>
                    <p>AVERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className="limitar-secao direitos">
                <p>Gekateria. Orgulhosamente desenvolvido por <a href="https://github.com/douglasjosebarboza" target={"_blank"}>Douglas José Barboza</a></p>
            </div>
        </footer>
    )
}