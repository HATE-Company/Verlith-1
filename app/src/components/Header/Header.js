import MainBtn from "../Buttons/MainBtn";
import NavItem from "../NavItem/NavItem";
import styles from "./header.module.scss"

const Header = () => {

    const toggleMenu = () => {
        var hamburgerMenu = document.getElementById("menu");
        hamburgerMenu.classList.toggle(styles.active)

    }
   
  return (
    <>
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__inner__logo}>
            <h1>Verlith</h1>
        </div>
        <div className={styles.header__inner__navItems}>
            <NavItem title='NFT'/>
            <NavItem title='Whitepaper'/>
            <NavItem title='Socials'/>
            <NavItem title='HX13 Company'/>
        </div>
        <div  onClick={toggleMenu} className={styles.header__inner__menu}>
        <div className={styles.header__inner__menu__icon}/>
        </div>
        
      </div>
      
    </div>
    <div id='menu' className={styles.menu}>
        <div className={styles.menu__inner}>
            <NavItem title='NFT'/>
            <NavItem title='Whitepaper'/>
            <NavItem title='Socials'/>
            <NavItem title='HX13 Company'/>
        </div>
      </div>
     
    <div className={styles.secondHeader}>
      <div className={styles.secondHeader__inner}>

    {/* <MainBtn title='Start App' color='blue' /> */}
      <MainBtn title='Connect' color='red' />
      </div>
                
    </div>
    </>
  );
};

export default Header;