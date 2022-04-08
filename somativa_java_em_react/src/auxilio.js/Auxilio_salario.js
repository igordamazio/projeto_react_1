import './auxilio.css'
import {useState} from 'react'
import Auxilio_inputs from '../auxilio.js/Auxilio_inputs'
import './auxilio.css'

function Auxilio_salario(props){

    const salarios = 10
    var array = []
    var [soma, set_soma] = useState(0)
    var [soma1, set_soma1] = useState(0)
    var [soma2, set_soma2] = useState(0)
    var [soma3, set_soma3] = useState(0)
    var [soma4, set_soma4] = useState(0)
    var [soma5, set_soma5] = useState(0)
    var [soma6, set_soma6] = useState(0)
    var [soma7, set_soma7] = useState(0)
    var [soma8, set_soma8] = useState(0)
    var [soma9, set_soma9] = useState(0)
    

    var soma_total = soma*1 + soma1*1 + soma2*1 + soma3*1 +soma4*1 + soma5*1 + soma6*1 + soma7*1 + soma8*1 +soma9*1 
   
    const inputs = () => {return array.map(array => (     
        <div key={array}>
            <label htmlFor={array}>Digite o valor do {(array*1 + 1)}° último salário:   </label>                           
        </div>                                      
    ))}

    for(let i = 0; i < salarios; i++){
        array.push(i)
    }

    
    return(
        <div id='aux_div'>
            <div id='quant_sal'>
                {inputs()}
            </div>
                <div id='input_container'>
                <input type='number' placeholder='R$'  onChange={(e) => set_soma(e.target.value) }></input>
                <input type='number' placeholder='R$' onChange={(e) => set_soma1(e.target.value)}></input>
                <input type='number' placeholder='R$' onChange={(e) => set_soma2(e.target.value)}></input>
                <input type='number' placeholder='R$' onChange={(e) => set_soma3(e.target.value)}></input>
                <input type='number' placeholder='R$' onChange={(e) => set_soma4(e.target.value)}></input>
                <input type='number' placeholder='R$' onChange={(e) => set_soma5(e.target.value)}></input>
                <input type='number' placeholder='R$' onChange={(e) => set_soma6(e.target.value)}></input>
                <input type='number' placeholder='R$' onChange={(e) => set_soma7(e.target.value)}></input>
                <input type='number' placeholder='R$' onChange={(e) => set_soma8(e.target.value)}></input>
                <input type='number' placeholder='R$' onChange={(e) => set_soma9(e.target.value)}></input>
                </div>

                <div id='resultado'>O valor será do auxílio é de R${soma_total/salarios}.</div>                                                          
        </div>
        
    )
}

export default Auxilio_salario