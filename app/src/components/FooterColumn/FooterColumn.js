import styles from "./footercolumn.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { github } from '@fortawesome/free-solid-svg-icons'
const FooterColumn = ({title, link, social}) => {

    return(
        <div className={styles.footerColumn}>
            <div className={styles.footerColumn__title}>
                <h4>{title}</h4>
            <div className={styles.footerColumn__title__style}/>
            </div>
            <div className={styles.footerColumn__links}>
            {social? 
          
            <div className={styles.footerColumn__links__icons}>

            <div className={styles.footerColumn__links__icon}>
                <FontAwesomeIcon icon={['fab', 'telegram']} />
                </div>
            <div className={styles.footerColumn__links__icon}>
                <FontAwesomeIcon icon={['fab', 'twitter']} />
            </div>
            <div className={styles.footerColumn__links__icon}>
                <FontAwesomeIcon icon={['fab', 'discord']} />
            </div>
            <div className={styles.footerColumn__links__icon}>

                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </div>
            </div>
          
                :
                link.map( link => <a href={link.link} target='_blank'>{link.text}</a>)
         
            }
            </div>
        </div>
    )   
    
}

export default FooterColumn