import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { withRouter } from "react-router";


import NobleLogo from '../../assets/img/nobleLogo.png'

import './style.css'

 class Header extends Component {
  
  state={
    texto:''
  }
 

  render () {
    
    return (
      <div className='App'>
        <header>
          <div className="fluid-container nav">
            <div className='logoHeader'>
              <img id='logo' title="logo Noble" src={NobleLogo} alt="logo"/>
            </div>

              <div> 
                <ul className="menu-links">
                <li title="Tela inicial"><Link to='/feed'>Home</Link></li>
                <li title="Ver lista de amigos"><Link to='/lista'>Listar amigos</Link></li>
                <li title="Desenvolvedores"><Link to='/quem-somos'>Quem Somos</Link></li>
                <li title="sair da pagina"><Link to='/'>Sair</Link></li>
              </ul>
              </div>
             
          </div>
         
        </header>
      </div>
    )
  }
}
export default  withRouter(Header);
