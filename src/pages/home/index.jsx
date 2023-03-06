import Header from "../../components/header"
import Banner from "../../components/main/home/banner"
import Sabores from "../../components/main/home/sabores"
import Eventos from "../../components/main/home/eventos"
import Sobre from "../../components/main/home/sobre"
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