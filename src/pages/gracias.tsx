import React from 'react'
import { Link } from 'gatsby'
import { RiArrowLeftSLine } from '@react-icons/all-files/ri/RiArrowLeftSLine'
import { BsEnvelopeFill } from '@react-icons/all-files/bs/BsEnvelopeFill'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
        <div
      className="wrapper"
      style={{
        textAlign: 'center',
      }}
    >
      <header>
        <BsEnvelopeFill
          style={{
            fontSize: '128px',
            color: 'gray',
          }}
        />
        <h1>Gracias por su mensaje.</h1>
        <p></p>
      </header>
    <h2>Contestaremos cuanto antes.</h2>
    <p></p>
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

export default SecondPage
