import React, {Component} from 'react'
import './App.css'
 
import IndiretaPai from './componentes/basico/IndiretaPai'
import Estado from './componentes/basico/Estado'
import FamiliaClone from './componentes/basico/FamiliaClone'
import FamiliaMembroClone from './componentes/basico/MembroFamiliaClone'
import Familia from './componentes/basico/Familia'
import Card from './componentes/layout/Card'
import Propriedades from './componentes/basico/Propriedades'
import OlaMundo from './componentes/basico/OlaMundo'
 
class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>Exemplo React</h1>
        
        <div className="Cards">
 
          <Card titulo="Comunicação Indireta (de filho para pai)" cor="#f7673b">
            <IndiretaPai/>
          </Card>
 
          <Card titulo="Estado" cor="#ffb400">
            <Estado/>
          </Card>
 
          <Card titulo="Componentes aninhados (CloneElement)" cor="#82212e">
            <FamiliaClone sobrenome="Simpson">
            <FamiliaMembroClone nome="Homer Jay"/>
            <FamiliaMembroClone nome="Marjorie"/>
            <FamiliaMembroClone nome="Bartholomew JoJo"/>
            <FamiliaMembroClone nome="Lisa Marie"/>
            <FamiliaMembroClone nome="Margareth"/>
            </FamiliaClone>
          </Card>
         
         <Card titulo="Componente aninhados" cor="#d1495b">
           <Familia sobrenome="Simpson"/>
         </Card>
 
          <Card titulo="Propriedades" cor="#91cb3e">
           <Propriedades nome="Homer" sobrenome="Jay Simpson" idade={38}/>
          </Card>
 
          <Card titulo="OláMundo!" cor="#226ce0">
           <OlaMundo/>
          </Card>
 
      </div>
      </div>
    )
  }
} 
export default App;