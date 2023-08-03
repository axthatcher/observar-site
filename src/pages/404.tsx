import React from 'react'
import { Link } from 'gatsby'
import { RiArrowLeftSLine } from '@react-icons/all-files/ri/RiArrowLeftSLine'
import { RiBugLine } from '@react-icons/all-files/ri/RiBugLine'
import { RiSpam2Fill } from '@react-icons/all-files/ri/RiSpam2Fill'

import Layout from '../components/layout'

const NotFound = () => (
  <Layout className="not-found-page">
    <div
      className="wrapper"
      style={{
        textAlign: 'center',
      }}
    >
      <header>
        <RiSpam2Fill
          style={{
            fontSize: '128px',
            color: 'gray',
          }}
        />
        <h1>Algo ha ido mal.</h1>
        <p></p>
      </header>
      <Link to="/" className="button">
        <RiArrowLeftSLine
          className="button-icon"
          style={{
            fontSize: '1.5rem',
            color: 'gray',
          }}
        />
        Ir a la página principal
      </Link>
    </div>
  </Layout>
)

export default NotFound
