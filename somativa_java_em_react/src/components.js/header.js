import '../apps.css/header.css'

function Header(){
    const img_url = "https://pluspng.com/img-png/react-logo-png-js-logo-react-react-js-icon-512x512.png"
    return(
        <header id="0">
            <div id="header_img"><img src={img_url}></img></div>

            <div id="page_title">Java-test React</div>
        </header>
    )
}

export default Header