import "./style.css"

export default function Main() {
    return (
        <section>
            <section className="capa-sabores">
                <div>
                    <h1>NOSSOS SABORES</h1>
                </div>
            </section>

            <section className="section-cards">
                <h2>SABORES DE SORVETE</h2>
                <div className="container-cards">
                    <figure className="cards">
                        <img src="./assets/sabor-oreo.png" alt="" />
                        <h3>Sorvete de Oreo</h3>
                        <small>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</small>
                    </figure>
                    <figure className="cards">
                        <img src="./assets/sabor-pistache.png" alt="" />
                        <h3>Sorvete Pistache</h3>
                        <small>Cremoso sorvete sabor pistache com pedacinhos de semente</small>
                    </figure>
                    <figure className="cards">
                        <img src="./assets/sabor-cookies-avela.png" alt="" />
                        <h3>Sorvete Cookies & Avelã</h3>
                        <small>O nosso melhor sorvete. Você vai adorar o sabor</small>
                    </figure>
                    <figure className="cards">
                        <img src="./assets/sorbet-kiwi.png" alt="" />
                        <h3>Sorvete de Kiwi</h3>
                        <small>Delicioso e refrescante sorvete sabot kiwi. Rico em vitamina C</small>
                    </figure>
                    <figure className="cards">
                        <img src="./assets/sorbet-morango.png" alt="" />
                        <h3>Sorvete de Morango</h3>
                        <small>Sorvete de morango gourmet. Tradicional e saboroso</small>
                    </figure>
                    <figure className="cards">
                        <img src="./assets/sorbet-limao.png" alt="" />
                        <h3>Sorvete de Limão Siciliano</h3>
                        <small>O incrível sorvete gourmet de limão siciliano vai te encantar</small>
                    </figure>
                </div>
            </section>
        </section>
    )
}