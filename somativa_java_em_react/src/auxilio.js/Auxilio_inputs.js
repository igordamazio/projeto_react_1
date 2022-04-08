import './auxilio.css'

function Auxilio_inputs({set_salarios}){

    return(
        <div id='aux_inp_div'>
            <div><h2 id='aux_titulo'>Auxílio</h2></div>
            <label id='main_label' htmlFor='quantidade'>Insira o valor dos últimos 10 salários recebidos:</label>
       </div>
    )

}

export default Auxilio_inputs