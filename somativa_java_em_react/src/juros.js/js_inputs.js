import '../juros.js/juros.css'

function Js_inputs({set_taxa, set_capital, set_tempo, set_tempo_medida,  set_tempo_medida2, tipo}){
    return(
        <div id="js_div">
            <div id='titulo'><h2>Calculadora de Juros {tipo}</h2></div>
            <div id="taxa">
                <label htmlFor="taxa">Digite a taxa de juros:   </label>
                <input type="number" name="taxa" placeholder='%' onChange={(e) => set_taxa(e.target.value)}></input>

                <select onChange={(e) => set_tempo_medida(e.target.value)}>
                    <option defaultValue="Anos">Por ano</option>
                    <option value="Meses">Por mês</option>
                </select>
            </div>

            <div id="capital">
                <label htmlFor="capital">Digite o capital inicial:   </label>
                <input type="number" name="capital" min='0' onChange={(e) => set_capital(e.target.value)}></input>
            </div>

            <div id="tempo">
                <label htmlFor="tempo">Digite o tempo:   </label>
                <input type="number" name="tempo" onChange={(e) => set_tempo(e.target.value)}></input>

                <select onChange={(e) => set_tempo_medida2(e.target.value)}>
                    <option defaultValue="Anos">Anos</option>
                    <option value="Meses">Meses</option>
                </select>
            </div>
        </div>
    )
}

export default Js_inputs