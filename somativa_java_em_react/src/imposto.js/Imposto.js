import './imposto.css'
import {useState} from 'react'

function Imposto(){

    var [sal_bruto, set_sal_bruto] = useState()
    var [dependentes, set_dependentes] = useState()
    var sal_base = 0
    var imposto = 0
    dependentes = Math.floor(dependentes)

    if(dependentes < 0){
        dependentes = 0
    }

    if(sal_bruto <= 1212.00){
        sal_base = sal_bruto*0.925
    }
    else if(sal_bruto <= 2427.35 && sal_bruto >= 1212.01){
        sal_base = sal_bruto*(0.91) + 18.18
    }
    else if(sal_bruto <= 3641.03 && sal_bruto >= 2427.36){
        sal_base = sal_bruto*(0.88) + 91.00
    }
    else if(sal_bruto <= 7087.22 && sal_bruto >= 3641.04){
                    
        sal_base = sal_bruto*(0.86) + 163.82;
        if(sal_base >= sal_bruto - 828.38){
            sal_base = sal_bruto - 828.38;
        }
    }
    else{              
        sal_base = sal_bruto - 828.38;       
    }             

    sal_base = sal_base - 681.90*dependentes


    if(sal_base <= 1903.98){
                    
        imposto = sal_base*0;
        
    }
    else if(sal_base >= 1903.99 && sal_base <= 2826.65){
        
        imposto = sal_base*0.075 - 142.80;
        
    }
    else if(sal_base >= 2826.66 && sal_base <= 3751.05){
        
        imposto = sal_base*0.15 - 354.80;
        
    }
    else if(sal_base >= 3751.06 && sal_base <= 4664.68){
        
        imposto = sal_base*0.225 - 636.13;
        
    }
    else{
        imposto = sal_base*0.275 - 869.36;
    }
    

    return(
        <section id='4'>
            <div id='imposto_container'>
                <div id='titulo'>Imposto de renda</div>
                <div id='sal_bruto'>
                    <label htmlFor='sal_bruto'>Insira o valor do salário bruto em reais:  </label>
                    <input type='number' name='sal_bruto' placeholder='R$' onChange={(e) => set_sal_bruto(e.target.value)}></input>
                </div>
                <div id='dependentes'>
                    <label htmlFor='dependentes'>Insira a quantidade de dependentes:  </label>
                    <input type='number' name='dependentes' onChange={(e) => set_dependentes(e.target.value)}></input>
                </div>
                <div id='imposto_resultado'>O valor total de imposto é de R${imposto.toFixed(2)}</div>
            </div>
        </section>
    )
}

export default Imposto