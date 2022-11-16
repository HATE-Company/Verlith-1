import MainBtn from "../components/Buttons/MainBtn";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className="home">
      <section>
        <Header />

        <div className={styles.home__bg}>
          <img className={styles.bg} src={require("../assets/jesus1.png")} />
        </div>
        <div className={styles.home__content}>
          <div className={styles.home__content__carousel}>
            <Carousel></Carousel>
          </div>
          <div>
            <MainBtn color="green" title="Team"></MainBtn>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.home__bg__second}>
          <img
            className={styles.bg__second}
            src={require("../assets/jesus1.png")}
          />
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
