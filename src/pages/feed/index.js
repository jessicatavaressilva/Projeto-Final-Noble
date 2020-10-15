import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

import Angular from '../../assets/img/angular.png'
import Vue from '../../assets/img/vue.png'
import tecMundo from '../../assets/img/tecMundo.png'
import Tistatorn from '../../assets/img/tistatorn.png'
import Channel from '../../assets/img/chanel.jpg'
import Amorim from '../../assets/img/amorimTecnologia.jpg'
import Found from '../../assets/img/foundation.jpg'

import Header from '../../components/header'
import Footer from '../../components/footer'

import './style.css'


export default class Feed extends Component {
  render () {
    return (
    <>
      <Header/>
     <div className='container-post fluid-container'>
       
        <div className='post-header'>
          <p>Feed</p>
        </div>

        <div className='post-wrap'>
          
        <div className='post-box'>
            <div className='user-post-header'>
              <div className='user-post-profile-pic'>
                <img src={tecMundo} alt='Logo tec mundo' />
                  <div className='user-post-info'>
                    <span>TecMundo</span>
                    <span className='post-time'>53 min</span>
                  </div>
              </div>
            </div>
            <p className='post-message'>
            TecMundo é um site sobre tecnologia mantido pela NZN. 
            A empresa também é responsável pelos sites Baixaki, 
            Voxel, Minha Série e Mega Curioso, entre outros.
            </p>
            <div className='user-post-img'>
              <img src={tecMundo} alt='post'/>
              <div className='post-actions'>
              <span>
              <i className='material-icons'>
              <FontAwesomeIcon icon={faThumbsUp} />
              </i> 
              curtir
            </span>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faCommentAlt} />
              </i> 
              comentar
            </span>
            </div>
            </div>
          </div>

          <div className='post-box'>
            <div className='user-post-header'>
              <div className='user-post-profile-pic'>
                <img src={Tistatorn} alt='Logo Tistatorn' />
                  <div className='user-post-info'>
                    <span>Tistorm</span>
                    <span className='post-time'>53 min</span>
                  </div>
              </div>
            </div>
            <p className='post-message'>
              Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento
              de interfaces de usuário e aplicativos de página única.
            </p>

          <div className='user-post-img'>
            <img src={Tistatorn} alt='' />

          <div className='post-actions'>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faThumbsUp} />
              </i> 
              curtir
            </span>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faCommentAlt} />
              </i> 
              comentar
            </span>
          </div>
        </div>
      </div>

      <div className='post-box'>
            <div className='user-post-header'>
              <div className='user-post-profile-pic'>
                <img src={Angular} alt='Logo angular' />
                  <div className='user-post-info'>
                    <span>TechTop</span>
                    <span className='post-time'>53 min</span>
                  </div>
              </div>
            </div>
            <p className='post-message'>
              Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento
              de interfaces de usuário e aplicativos de página única.
            </p>

          <div className='user-post-img'>
            <img src={Angular} alt='' />

          <div className='post-actions'>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faThumbsUp} />
              </i> 
              curtir
            </span>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faCommentAlt} />
              </i> 
              comentar
            </span>
          </div>
        </div>
      </div>
    
      <div className='post-box'>
            <div className='user-post-header'>
              <div className='user-post-profile-pic'>
                <img src={Vue} alt='Logo vue' />
                  <div className='user-post-info'>
                    <span>Geekhunter</span>
                    <span className='post-time'>53 min</span>
                  </div>
              </div>
            </div>
            <p className='post-message'>
              Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento
              de interfaces de usuário e aplicativos de página única.
            </p>

          <div className='user-post-img'>
            <img src={Vue} alt='Logo do vue' />

          <div className='post-actions'>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faThumbsUp} />
              </i> 
              curtir
            </span>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faCommentAlt} />
              </i> 
              comentar
            </span>
          </div>
        </div>
      </div>

      <div className='post-box'>
            <div className='user-post-header'>
              <div className='user-post-profile-pic'>
                <img src={Channel} alt='Logo channel' />
                  <div className='user-post-info'>
                    <span>Chanel</span>
                    <span className='post-time'>53 min</span>
                  </div>
              </div>
            </div>
            <p className='post-message'>
              Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento
              de interfaces de usuário e aplicativos de página única.
            </p>

          <div className='user-post-img'>
            <img src={Channel} alt='' />

          <div className='post-actions'>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faThumbsUp} />
              </i> 
              curtir
            </span>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faCommentAlt} />
              </i> 
              comentar
            </span>
          </div>
        </div>
      </div>

      <div className='post-box'>
            <div className='user-post-header'>
              <div className='user-post-profile-pic'>
                <img src={Amorim} alt='Logo amorin' />
                  <div className='user-post-info'>
                    <span>AmorimTecnologia</span>
                    <span className='post-time'>53 min</span>
                  </div>
              </div>
            </div>
            <p className='post-message'>
              Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento
              de interfaces de usuário e aplicativos de página única.
            </p>

          <div className='user-post-img'>
            <img src={Amorim} alt='Logo amorin' />

          <div className='post-actions'>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faThumbsUp} />
              </i> 
              curtir
            </span>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faCommentAlt} />
              </i> 
              comentar
            </span>
          </div>
        </div>
      </div>

      <div className='post-box'>
            <div className='user-post-header'>
              <div className='user-post-profile-pic'>
                <img src={Found} alt='Logo found' />
                  <div className='user-post-info'>
                    <span>Foundation.zurb</span>
                    <span className='post-time'>53 min</span>
                  </div>
              </div>
            </div>
            <p className='post-message'>
              Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento
              de interfaces de usuário e aplicativos de página única.
            </p>

          <div className='user-post-img'>
            <img src={Found} alt='' />

          <div className='post-actions'>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faThumbsUp} />
              </i> 
              curtir
            </span>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faCommentAlt} />
              </i> 
              comentar
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
  <Footer/>
  </>
    )
  }
}