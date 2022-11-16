import FooterColumn from "../FooterColumn/FooterColumn";
import styles from "./footer.module.scss"


const Footer = () => {
    return(
        <footer>
            <div className={styles.footer__inner}>
            <FooterColumn title='Verlith' link={[{
                text:'NFT', 
                link:'https://linktr.ee/hateverse'
                },
                {
                text:'Privacy Policy', 
                link:'https://linktr.ee/hateverse'
                },
                {
                text:'Terms Of Use', 
                link:'https://linktr.ee/hateverse'
                },
                ]} />
            <FooterColumn title='HX13 Company' link={[{
                text:'FAQ', 
                link:'https://linktr.ee/hateverse'
                },
                {
                text:'Governance', 
                link:'https://linktr.ee/hateverse'
                },
                {
                text:'HC Token', 
                link:'https://linktr.ee/hateverse'
                },
                ]} />    
                 <FooterColumn title='Socials' social link={[{
                text:'FAQ', 
                link:'https://linktr.ee/hateverse'
                },
                {
                text:'Governance', 
                link:'https://linktr.ee/hateverse'
                },
                {
                text:'HC Token', 
                link:'https://linktr.ee/hateverse'
                },
                ]} />  
            </div>
        </footer>
    )
}

export default Footer;