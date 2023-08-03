import React from 'react'
import PropTypes from 'prop-types'
import { RiHeart2Line } from '@react-icons/all-files/ri/RiHeart2Line'
import { SiGnuprivacyguard } from '@react-icons/all-files/si/SiGnuprivacyguard'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Observ.ar{' '}
      
      {'- '}
      Built with Gatsby
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
