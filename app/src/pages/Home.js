
import Carousel from "../components/Carousel/Carousel"
import Header from "../components/Header/Header"
import styles from "./home.module.scss"


const Home = () => {

    return(
        <>
        <section>

        <Header />

        <div className={styles.home__bg}>
            <img className={styles.bg} src={require("../assets/jesus1.png")}/>

        </div>
        <div className={styles.home__content}>
            <Carousel></Carousel>

        </div>
        </section>
        <section>
        <img className={styles.bg} src={require("../assets/jesus1.png")}/>
            
        </section>
        </>
    )

}

export default Home