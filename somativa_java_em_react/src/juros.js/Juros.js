import Js_inputs from "./js_inputs"
import {useState} from 'react'
import '../juros.js/juros.css'


function Juros_simples(props){

    const tipo = props.tipo
    var [taxa, set_taxa] = useState(0)
    var [capital, set_capital] = useState(0)
    var [tempo, set_tempo] = useState(0)
    var [tempo_medida, set_tempo_medida] = useState('Anos')
    var [tempo_medida2, set_tempo_medida2] = useState('Anos')
    var tempo_medida2_aux = 0
    taxa /= 100

    if(tempo_medida != 'Meses'){
        if(tipo === 'simples'){
            if(tempo_medida2 === 'Meses'){
                taxa = taxa/12           
            }
        }
    }
    if(tempo_medida != 'Meses'){
        if(tipo != 'simples'){
            if(tempo_medida2 === 'Meses'){
                    taxa = (1 + taxa)**(1/12) - 1
            }
        }
    }
    
    if(tempo_medida != 'Anos'){
        if(tipo === 'simples'){
            if(tempo_medida2 === 'Anos'){
                taxa = taxa*12
            }
        }
    }
    if(tempo_medida != 'Anos'){
        if(tipo != 'simples'){
            if(tempo_medida2 === 'Anos'){
                if(tipo != 'simples'){
                    taxa = (1 + taxa)**12 - 1
                }
            }
        }
    }

    if(tempo_medida2 == 'Anos'){
        if(tempo <= 1){
            tempo_medida2_aux = 'ano'
        }
        if(tempo > 1){
            tempo_medida2_aux = 'anos'
        }
    }
    if(tempo_medida2 != 'Anos'){
        if(tempo <= 1){
            tempo_medida2_aux = 'mês'
        }
        if(tempo > 1){
            tempo_medida2_aux = 'meses'
        }
    }

    if(tempo <= 0){
        tempo = 0
        capital = 0
    }

    var juros = tipo === 'simples' ? taxa*tempo*capital : capital*(taxa + 1)**tempo - capital
    var montante = tipo === 'simples' ? taxa*tempo*capital + capital*1 : capital*(taxa + 1)**tempo

            
    return(
        <section id={tipo === 'simples' ?  1 : 2 }>
            <Js_inputs set_taxa={set_taxa} tipo={tipo} set_capital={set_capital} set_tempo={set_tempo} set_tempo_medida={set_tempo_medida} set_tempo_medida2={set_tempo_medida2}/>
            <div id="juros_simple_return">O total de juros é de R${juros.toFixed(2)} totalizando o valor de R${montante.toFixed(2)} em {tempo} {tempo_medida2_aux}.</div>

        </section>
    )
}

export default Juros_simples