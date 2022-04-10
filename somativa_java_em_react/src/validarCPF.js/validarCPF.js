import './validarCPF.css'
import {useState} from 'react'

function ValidarCPF(){

    var [cpf, set_cpf] = useState('')
    var length = (''+cpf).length
    var cpf_S = ''+cpf+''
    var mensagem = ''

    if(length!=11){
        mensagem = `O CPF ${cpf} é inválido!`
    }else{
    var somar = 0 
    var multiplicar = 11
    for(let i = 0; i < 9; i++){
        multiplicar--
        somar += cpf_S[i]*1*multiplicar      
    }

    var somar2 = -10 
    var multiplicar = 12
    for(let i = 0; i < 10; i++){
        multiplicar--
        somar2 += cpf_S[i]*1*multiplicar
    }

    var ultimo = 12 - (somar2%11)*1
    var penultimo = 11 - (somar%11)*1
    if(penultimo>=10){
        penultimo = 0;
    }
    if(ultimo>=10){
        ultimo = 0;
    }

    if(cpf_S[9] == penultimo){
        if(cpf_S[10] == ultimo){
            mensagem = `O CPF ${cpf} é válido!`
        }
        else{
            mensagem = `O CPF ${cpf} é inválido!`
        }
    }else{
        mensagem = `O CPF ${cpf} é inválido!`
    }}

    if(!cpf){
        mensagem = ''
    }

    return(
        <section id='3'>
            <div id='CPF_container'>
                <div id='titulo'><h2>Validar CPF</h2></div>
                <div id='CPF'>
                    <label htmlFor='cpf'>Digite seu CPF:   </label>
                    <input type='number' name='cpf' onChange={(e) => set_cpf(e.target.value)}></input>
                </div>
                <div id='resposta'>{mensagem}</div>
            </div>
        </section>
    )
}

export default ValidarCPF