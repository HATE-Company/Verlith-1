import styles from "./navitem.module.scss"



const NavItem = ({title}) => {

    return(
        <div className={styles.navitem}>
            <h1>{title}</h1>
        </div>
    )

}


export default NavItem;