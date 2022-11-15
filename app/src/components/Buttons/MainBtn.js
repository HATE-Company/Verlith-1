import "./mainbtn.scss"




const MainBtn = (props) => {

    return(
        <div className={"btn "+props.color}>
            <a href={props.to}>{props.title?props.title:'Test'}</a>
        </div>
    )

}

export default MainBtn;