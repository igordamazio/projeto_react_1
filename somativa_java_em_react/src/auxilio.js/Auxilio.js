import './auxilio.css'
import {useState} from 'react'
import Auxilio_inputs from '../auxilio.js/Auxilio_inputs.js'
import Auxilio_salario from '../auxilio.js/Auxilio_salario.js'

function Auxilio(props){

    var [salarios, set_salarios] = useState(0)
    var [soma, set_soma] = useState(0)

    return(
        <section id='3'>
            <Auxilio_inputs set_salarios={set_salarios} soma={[]}/>       
           <Auxilio_salario salarios={salarios} set_soma={set_soma}/>           
        </section>
    )
}

export default Auxilio