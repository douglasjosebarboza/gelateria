import Header from "../../components/header"
import Banner from "../../components/main/banner"
import Sabores from "../../components/main/sabores"
import Eventos from "../../components/main/eventos"
import Sobre from "../../components/main/sobre"
import Footer from "../../components/footer"

export default function Home() {
    return(
        <section>
            <Header />
            <Banner />
            <Sabores />
            <Eventos />
            <Sobre />
            <Footer />
        </section>
    )
}