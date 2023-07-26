import React from 'react'
import PropTypes from 'prop-types'
import Bio from './bio'

/*
        <p>
          A fully responsive site template designed by <a href="https://donboulton.com">Don Boulton</a> and released
          <br />
          for free under a <a href="https://donboulton.com/privacy">BSD</a> license.
        </p>
*/

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <Bio className="icon" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Observ.ar</h1>

      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Acerca de la plataforma
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Porqué observamos
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            ¿Cómo observamos?
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('plataforma')
            }}
          >
            Plataforma geoespacial
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
