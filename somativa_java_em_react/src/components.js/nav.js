import '../apps.css/nav.css'

function Nav(props){

    const text = props.text
    const endereco = []
    
    for (var index = 0; index < text.lenght; index++) {
        var addr
        addr = index
        endereco.push(addr)
    }
    
    return(
        <nav>
            <div id="nav_div">
                <ul>
                    {text.map((text, endereco) => (     
                        <div key={endereco}><a href={'#' + (endereco != 0 ? endereco-1 : 'topo')}><li>{text}</li></a></div>
                    ))}        
                </ul>
            </div>
        </nav>
    )
}

export default Nav