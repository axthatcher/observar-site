import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { RiFacebookBoxFill } from '@react-icons/all-files/ri/RiFacebookBoxFill'
import { RiTwitterFill } from '@react-icons/all-files/ri/RiTwitterFill'
import { RiInstagramFill } from '@react-icons/all-files/ri/RiInstagramFill'
import { RiGithubFill } from '@react-icons/all-files/ri/RiGithubFill'
import { RiYoutubeFill } from '@react-icons/all-files/ri/RiYoutubeFill'

const Main = props => {
  const close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )

  return (
    <div ref={props.setWrapperRef} id="main" style={props.timeout ? { display: 'flex' } : { display: 'none' }}>
      <article
        id="intro"
        className={`${props.article === 'intro' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
          <h2 className="major">Acerca de la plataforma</h2>

        <p>
          Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue.
          Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi
          nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
          porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
          Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in
          aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed
          vehicula.
        </p>
        {close}
      </article>

      <article
        id="work"
        className={`${props.article === 'work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
          <h2 className="major">Porqué observamos</h2>
        <span className="image main">
            <StaticImage formats={['auto', 'webp']} src="../../static/assets/Foto2_manzana.jpg" alt="Work" />
        </span>
        <p>
          Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
          erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec
          lorem luctus ultrices.
        </p>
        <span className="image main">
            <StaticImage formats={['auto', 'webp']} src="../../static/assets/Foto3_bomba.jpg" alt="Work" />
        </span>
        <p>
          Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc
          rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel
          lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
          libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.
        </p>
        {close}
      </article>

      <article
        id="about"
        className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
          <h2 className="major">¿Cómo observamos?</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend
          sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam.
          Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis
          in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.
        </p>
        {close}
      </article>

      <article
        id="plataforma"
        className={`${props.article === 'plataforma' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
          <h2 className="major">Plataforma geoespacial</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend
          sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam.
          Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis
          in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.
        </p>
        {close}
      </article>

    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
