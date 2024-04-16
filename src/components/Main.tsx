import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { RiFacebookBoxFill } from '@react-icons/all-files/ri/RiFacebookBoxFill'
import { RiTwitterFill } from '@react-icons/all-files/ri/RiTwitterFill'
import { RiInstagramFill } from '@react-icons/all-files/ri/RiInstagramFill'
import { RiGithubFill } from '@react-icons/all-files/ri/RiGithubFill'
import { RiYoutubeFill } from '@react-icons/all-files/ri/RiYoutubeFill'
import ShinyAppEmbed from './ShinyAppEmbed'

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
          <h2 className="major">Acerca de</h2>

        <p>
        Observ.ar es una plataforma integral, colaborativa y transparente para la observación y análisis sobre la actividad de explotación hidrocarburifera, en particular del método fractura hidráulica (fracking) y su relación con el ambiente y los recursos naturales de la cuenca del rio Neuquén y rio Negro.
        </p>
        <p>
        <b>Integral</b> porque propone observar el territorio atravesando los ejes ambientales, sociales y económicos de manera holística, examinando los patrones espaciales del fracking y su expansión en el territorio, fusionando datos geoespaciales derivados de sensores remotos, datos de estudios locales e información cualitativa de entrevistas con expertos y referentes locales.
        </p>
        <p>
        <b>Colaborativa</b> porque es una plataforma construida con concomimiento local a partir de la colaboración y los aportes de los principales actores sociales y expertos en el territorio, apoyados con el equipo del SEI (Instituto Ambiental de Estocolmo) y la FACA UNCOMA (Facultad de Ciencias Agrarias de la Universidad Nacional del Comahue) para un proceso de codesarrollo de la plataforma fortaleciendo el conocimiento en herramientas espaciales y su aplicación en el territorio.
        </p>
        <p>
        <b>Transparente</b> porque es una plataforma que maneja los datos de manera transparente indicando el proceso de los datos bajo los estándares científicos de manejo de datos geoespaciales indicando sus fuentes, usos potenciales, y restricciones. También es transparente en la utilización de datos abiertos para potenciar el acceso público a la información utilizando los métodos de análisis con softwares de código libre.
        </p>
        <p>
        Porque es una plataforma que trabaja con datos abiertos de acceso público bajo los estándares científicos, indicando fuente de los datos, usos potenciales, restricciones y utilizando métodos de análisis con softwares de código libre.
        </p>
        <h3>Objetivos</h3>
        <p></p>
        <p>
        Desarrollar una plataforma geoespacial para promover la gestión sostenible de los recursos hídricos y naturales a partir de la toma de decisión basada en datos. Generando indicadores espaciales para cuantificar el riesgo de los recursos naturales, en particular el recurso hídrico ante el crecimiento del fracking en las cuencas hidrográficas de Vaca Muerta.
        </p>
        <span className="image main">
            <StaticImage formats={['auto', 'webp']} src="../../static/assets/graphic.png" alt="Graphic" />
        </span>
        <p>
        Observ.ar se construyó de manera colaborativa, se realizaron entrevistas a científicos y actores locales importantes relacionados a la temática. Los que se seleccionaron tras realizar un exhaustivo análisis de la literatura existente y buscando actores sociales relevantes.  Luego, se realizaron cursos locales de capacitación y mapeo participativo, donde se identificaron las áreas de riesgos potenciales según el conocimiento de los actores locales, (científicos, ingenieros, productores, educadores, estudiantes,etc).  
        </p>
        <p>
        Además, se realizaron visitas a campo a localidades y zonas de expansión del fracking, a ríos y zonas productivas, para validar lo observado en las imágenes satelitales y conocer de cerca la compleja realidad.
        </p>
        <p>
        Finalmente, tras identificar la información geoespacial relevante, se hizo el análisis de riesgo con indicadores y se desarrollaron modelos de aprendizaje automático para analizar el cambio de uso, la cobertura del suelo y monitoreo de locaciones.
        </p>
        <p>
        Toda la información se presenta organizada en la plataforma Observ.ar
        </p>
        <h3>Colaboradores</h3>
        <p></p>
        <p>
            SEI<br/>
            Laura Forni<br/>
            Marina Mautner<br/>
            Romina Díaz Gómez<br/>
            <br/>
            FACA UNCOMA<br/>
            Diego Agustín Gonzalez<br/>
            Catherin Davies<br/>
            Lucia Orrego<br/>
            Juan Carlos Roca
        </p>
        {close}
      </article>

      <article
        id="work"
        className={`${props.article === 'work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
          <h2 className="major">¿Por qué observamos?</h2>

        <p></p>
        <p>
        Observ.ar contiene información de la cuenca hidrográfica que se superpone a los campos de shale oil/gas de Vaca Muerta, alimentada por los ríos Limay y Neuquén, que confluyen formando el río Negro. Estacuenca hidrográfica posee diversos desarrollos hidroeléctricos (algunos más planificadas para el futuro), y, además, proporciona riego a 150.000 hectáreas de cultivo, en particular frutale como manzanas, peras, melocotones, ciruelas y uvas para vino <a href="https://mdpi.com/2073-4441/10/6/794">(Forni et al., 2018)</a>.
        </p>
        <p>
        La mayor parte de las precipitaciones la cuenca del río Neuquén (3000 milímetros por año) ocurre en la parte superior de la cordillera, en la frontera con Chile, en la parte oriental, la precipitación media anual desciende significativamente a unos 200 mm (Ostertag & Cuellar, 2005). Los caudales de los ríos Neuquén, Limay y Negro generalmente disminuyen significativamente desde principios de verano hasta principios de otoño (diciembre a abril), cuando alcanzan su mínimo.
        </p>
        <p>
        Esta cuenca provee agua para consumo urbano e industrial en la región; en 2010, la población estimada era de 968.338, que se estima que podría llegar a 1.601.762 en 2050 (Nadal et al.,2017), la mayor parte de esta población recibe agua de zonas donde en un futuro estarán dedicadas la producción de hidrocarburos. 
        </p>
        <p>
        Por lo tanto, dentro de la cuenca neuquina coexisten la explotación de hidrocarburos por medio de la técnica de fracking y las áreas de producción agrícolas ubicadas principalmente en el Valle de los ríos, mientras que las áreas de explotación se encuentran principalmente distribuidas en las zonas altas de las cuencas, pero que con el crecimiento de la explotación hidrocarburífera, han avanzado sobre áreas productivas del Valle ubicándose dentro de ellas o en las cercanías.
        </p>
        <p>
        A partir de la información publicada identificamos falta de datos y monitoreo. Observando en más detalle nos dimos cuenta de que el avance de la industria petrolera se ha hecho de una manera no planificada con posibles impactos a áreas naturales, áreas pobladas y zonas agrícolas. Luego del estudio de la información existente, las entrevisas a actores locales y visitas a campo pudimos observar conexiones claves entre el fracking y los recursos de las cuencas.
        </p>
        <span className="image main">
            <StaticImage formats={['auto', 'webp']} src="../../static/assets/Foto3_bomba.jpg" alt="Bomba" />
        </span>
        <h3>Conexión entre el fracking y la calidad del agua</h3>
        <p></p>
        <p>
        La extracción de agua para la industria petrolera en cantidad no es tan grande comparada con el uso del agua para la agricultura.  luego de analizar la informacion pudimos observar que se extrae agua de ríos y canales para la industria petrolera, en áreas muy cercanas a las producciones agrícolas. 
        </p>
        <p>
        La cercanía de la infraestructura  hidrocarburífera a cuerpos de agua como ríos, lagos, embalses, canales de riego y drenaje o paleocauces, es muy importante, puesto que el manejo que se realice cerca de estas áreas puede afectar la calidad del agua, por lo que se deben tomar en cuenta los máximos estándares y controles para evitar posibles eventos que afecten la calidad del agua.
        </p>
        <span className="image main">
            <StaticImage formats={['auto', 'webp']} src="../../static/assets/Foto2_manzana.jpg" alt="Manzana" />
        </span>
        <h3>Cercanía a áreas productivas</h3>
        <p></p>
        <p>
        Observamos también con las imágenes satelitales y visita al campo, la cercanía de algunas locaciones a zonas y establecimientos productivos. La cercanía de los pozos no convencionales a las áreas productivas, principalmente frutícolas, tiene más riego potencial de contaminación, ya sea por contacto con el agua subterránea a través de a napa, agua subterránea que es utilizada para consumo o defensa de heladas, la contaminación de los suelos o el aire podrían impactar en la calidad de la producción de esa chacra con las consecuencias económicas y ecológicas negativas que eso conlleva.
        </p>
        <span className="image main">
            <StaticImage formats={['auto', 'webp']} src="../../static/assets/Foto_4.jpg" alt="Montana" />
        </span>
        <h3>Basureros Petroleros</h3>
        <p></p>
        <p>
        La producción de hidrocarburos con la técnica del fracking genera residuos líquidos y sólidos durante el su proceso. La noción “residuos petroleros” se refiere fundamentalmente a cutting (lodos de perforación) y flowblack (agua de retorno del fracking).  El flowback u agua residual es el residuo petrolero que consiste en la combinación de agua, arena y numerosos compuestos químicos. Puede contener metales pesados, sales y compuestos volátiles peligrosos.
        </p>
        <p>
        La porción liquida es descartada en pozos sumideros donde se almacea y se cella, no regresando estos volumenes de agua al ciclo hidrológico natural, y la porción solida es procesada en plantas de tratamiento “basureros petroleros”.
        </p>
        <p>
        Donde se colocan estos residuos y cuál es el tratamiento de estos residuos no está clara en la información que encontramos. La distancia de las plantas de tratamiento a las áreas urbanas y corrientes de agua es muy importante, no tiene que estar muy cerca. ¿Dónde están los basureros petroleros? ¿Cuántos hay? ¿Dónde se encuentran?
        </p>
        {close}
      </article>

      <article
        id="about"
        className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
          <h2 className="major">Método</h2>

        <h3>¿Cómo observamos?</h3>
        <p></p>
        <p>
        Investigamos como la expansión del fracking sobre las áreas de los recursos naturales podrían generan impactos a partir del análisis de riesgo ambiental desarrollando indicadores espaciales.
        </p>
        <p>
        Los indicadores espaciales son mediciones que se realizan para entender como la distribución en el espacio de ciertos elementos están relacionados entre sí, sirven para evaluar el estado del territorio en relación a un riesgo potencial, revelando posibles vinculaciones y por ende potenciales riesgos.
        </p>
        <p>
        Para observar el riesgo ambiental en las cuencas hidrológicas del rio Neuquén y rio Negro realizamos indicadores espaciales basados en análisis de proximidad, que tiene en cuenta las distancias entre dos puntos, el punto donde se encuentra el “pozo” y el punto donde se encuentra el recurso que queremos analizar, ya sea el cuerpo de agua, las escuelas, las localidades. Estos indicadores espaciales fueron desarrollados con datos científicamente válidos y están basados en un buen conocimiento del sistema.
        </p>
        <p>
        El análisis se realizó con Sistemas de información geográfica y base de datos disponibles de nación. La distancia, resultado de ese indicador, nos indica cuales áreas tienen riesgos potenciales de contaminación o impacto ambiental, las áreas cercanas a los pozos tendrían más riegos de contaminación comparado con las áreas más lejanas.
        </p>
        <p>
        Este tipo de indicador fue aplicado en otras áreas con problemáticas similares y se basó en análisis a campo de calidad de agua, de contaminación de aire y reportes de hospitales en Pensylvania EEUU.
        </p>
        <p>
        Para observar la expansión de los pozos utilizamos imágenes satelitales y modelos de elevación digital (MDE) para mapear la ubicación de los pozos en la cuenca, este método permite utilizar imágenes actualizadas y realizar un seguimiento del avance de la actividad del fracking. Usamos métodos de aprendizaje automático que incluyen algoritmos que permiten detectar las señales de las áreas que se preparan (locaciones) para ubicar los pozos de extracción, de esa manera, tenemos un método de monitoreo transparente que permite explorar el avance y las posibles vinculaciones. Utilizamos imágenes satelitales Planet que tienen una resolución espacial de 3 metros y 5 bandas espectrales, con imágenes disponibles cada 5 días. Estas imágenes tienen información de la reflectancia de los objetivos que se encuentran en la superficie del terreno y sirven para identificar los cambios de uso del suelo, observar los cambios que ocurren.
        </p>
        <h3>Imágenes satelitales Planet y Modelos de Aprendizaje Automático (Machine learning)</h3>
        <p></p>
        <p>
        Con estas imágenes realizamos mapas de uso y cobertura del suelo para cuantificar que cantidad de áreas con cultivo y vegetación natural existe en las cuencas, entender cómo se distribuyen y como cambiaron.  Además, creamos un modelo para detectar las locaciones para monitorear como fue la expansión y el avance futuro.
        </p>
        {close}
      </article>

      <article
        id="plataforma"
        className={`${props.article === 'plataforma' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
          <h2 className="major">Plataforma</h2>

        <h3>Caracterización de pozos</h3>
        <ul className="icons">
          <li>
            <Link
              to="https://observ-ar.projects.earthengine.app/view/pozos-de-hidrocarburos"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
              area-label="Bibwoe"
            >
              <input type="button" value="Pozos de hidrocarburos"/>
            </Link>
          </li>
        </ul>
        <p>
        Observamos la cantidad de pozos que se encuentran en las cuencas del Rio Negro y Neuquén. Los datos de pozos fueron descargados de Observamos la cantidad de pozos que se encuentran en las cuencas del Rio Negro y Neuquén. Los datos de pozos fueron descargados de <a href="https://datos.gob.ar/dataset/energia-produccion-petroleo-gas-por-pozo-capitulo-iv">https://datos.gob.ar/dataset/energia-produccion-petroleo-gas-por-pozo-capitulo-iv</a>. Esta capa de información contiene número de pozos para el periodo de tiempo 1900 – 2023. Los puntos representan la ubicación de los pozos y los colores indican el tipo de recurso: convencional (naranja), no convencional (amarillo), y no informado (gris). También incluye las locaciones de pozos (polígonos negros) identificadas con inteligencia artificial usando imágenes de satélite Sentinel-2.. Esta capa de información contiene número de pozos para el periodo de tiempo 1900 – 2023. Los puntos representan la ubicación de los pozos y los colores indican el tipo de recurso: convencional (naranja), no convencional (amarillo), y no informado (gris). También incluye las locaciones de pozos (polígonos negros) identificadas con inteligencia artificial usando imágenes de satélite Sentinel-2.
        </p>
        <p>
        <br></br>
        </p>

        <h3>Indicador de interacción de pozos para riesgo subterráneo</h3>
        <ul className="icons">
          <li>
            <Link
              to="https://observ-ar.projects.earthengine.app/view/interaccion-de-pozos"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
              area-label="Bibwoe"
            >
              <input type="button" value="Interacción de pozos"/>
            </Link>
          </li>
        </ul>
        <p>
        Este indicador toma en cuenta la interacción potencial entre pozos convencionales y no convencionales. Según la literatura, puede haber una probabilidad de 10% de interacción entre pozos no convencionales si los mismos se encuentran a una distancia menor a 1 km entre sí, mientras hay una probabilidad de 50% de interacción entre pozos no convencionales cuando la distancia es menor a 300 m entre pozos <a href="https://www.sciencedirect.com/science/article/abs/pii/S0301479719310588">(Loveless, et al., 2019)</a>. Adicionalmente, el revestimiento de los pozos convencionales viejos en una zona de perforación, especialmente los pozos perforados en el siglo pasado pueden sufrir daños debido a las vibraciones o atravesamiento de la perforación de nuevos pozos tanto no convencionales como convencionales. Aquí mostramos polígonos de densidad de al menos un pozo dentro de un radio de un kilómetro entre pozos convencionales (naranja transparente) y no convencionales (amarillo transparente), y las zonas de superposición - interacción de los dos anteriores (rojo transparente). También mostramos la ubicación de dos pozos convencionales (diamantes negros) perforados en 1986 uno de gas y otro de petróleo convencional surgentes que en octubre de 2022 comenzaron a derramar hidrocarburos al suelo y agua dentro de una chacra en Villa Manzano (polígono verde), que se describe en la nota: <a href="https://www.rionegro.com.ar/sociedad/tension-cruce-de-denuncias-y-una-chacra-bajo-custodia-en-rio-negro-por-una-remediacion-petrolera-3089741/">Denuncias por contaminación petrolera en Villa Manzano (2023)</a>.
        </p>
        <p>
        <br></br>
        </p>

        <h3>Indicador de proximidad de pozos a ríos permanentes</h3>
        <ul className="icons">
          <li>
            <Link
              to="https://observ-ar.projects.earthengine.app/view/proximidad-a-rios"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
              area-label="Bibwoe"
            >
              <input type="button" value="Proximidad a ríos"/>
            </Link>
          </li>
        </ul>
        <p>
        Los indicadores de proximidad a ríos y lagos son utilizados para evaluar el riesgo potencial de contaminación de estos. Se utilizaron las capas de información obtenidas del IGN (Instituto Nacional Geográfico de Argentina) y se calculó la distancia entre los pozos, los ríos y lagos, las distancias límites son: de 1 km radial (mayor riesgo), 1 – 2 km radial (riesgo medio), > 3 km radial (bajo riesgo) basadas en la metodología de Meng 2015. Este indicador espacial representa la distancia desde los pozos a los ríos permanentes de las cuencas hidricas,los pozos que se encuentran a menos 1 km de distancia al rio indican que esa área tiene un alto riesgo potencial de contaminación comparado con las áreas del rio donde los pozos se ubican a más de 3 km de distancia.
        </p>
        <p>
        Los puntos representan los pozos no convencionales de hidrocarburos y los pozos sumideros. Las líneas representan la distancia desde un pozo hacia el rio. Los colores indican el riesgo alto medio y bajo.
        </p>
        <p>
        <br></br>
        </p>

        <h3>Indicador de proximidad de pozos a canales de riego</h3>
        <ul className="icons">
          <li>
            <Link
              to="https://observ-ar.projects.earthengine.app/view/proximidad-a-canales"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
              area-label="Bibwoe"
            >
              <input type="button" value="Proximidad a canales de riego"/>
            </Link>
          </li>
        </ul>
        <p>
        El indicador de proximidad de pozos a canales de riego, revela cuales canales de riego tienen pozos cercanos. Este indicador representa la distancia de los pozos hacia los canales de riego del área productiva, están calculadas las distancias en líneas para los canales.
        </p>
        <p>
        <br></br>
        </p>

        <h3>Indicador de proximidad de pozos a localidades</h3>
        <ul className="icons">
          <li>
            <Link
              to="https://observ-ar.projects.earthengine.app/view/proximidad-a-localidades"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
              area-label="Bibwoe"
            >
              <input type="button" value="Proximidad a localidades"/>
            </Link>
          </li>
        </ul>
        <p>
        La cercanía a los pozos podría incrementar el riesgo potencial de contaminación e impactos negativos en la salud y el ecosistema. Se descargo la capa de información de las localidades obtenida del IGN (Instituto Geográfico Nacional <a href="https://www.ign.gob.ar/">https://www.ign.gob.ar/</a> y se calculó la distancia desde los pozos hacia los puntos correspondientes a las localidades.
        </p>
        {close}
      </article>

      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contáctanos</h2>
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >

          
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" id="honeypot" />
          <div className="field half first">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Mensaje</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Enviar" className="special" />
            </li>
            <li>
              <input type="reset" value="Borrar" />
            </li>
          </ul>
        </form>
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




/*    PLATAFORMA TEXT

<h3>Ubicacion del usuario</h3>
        <p><b>En todo momento el usuario pueda hacer un “clic” con la imagen de fondo y marcar un punto y que quede marcado.  cuando va encendiendo o apagando las capas de indicadores, este marcador no se mueve y ayuda a la ubicación de interes.</b>
        </p>
        <p><b>La imagen de fondo seria bueno el usuario pueda elegir la que esta ahora (no se si es bing terreno) y google satelite.</b>
        </p>
        <h3>Caracterización de pozos</h3>
        <p></p>
        <p>
        Observamos la cantidad de pozos que se encuentran en las cuencas del Rio Negro y Neuquen. Los datos de pozos fueron descargados de <a href="https://sig.energia.gob.ar/visor/visorsig.php">https://sig.energia.gob.ar/visor/visorsig.php</a>. Esta capa de información contiene numero de pozos para el periodo de tiempo 1970 – 2022. 
        </p>
        <p>
        Leyenda:Los puntos representan la ubicación de los pozos y los colores indican la fecha de inicio y finalización.
        </p>
        <p>
        Indicación:<br/>
        Formato:
        </p>
        <ul>
          <li>Pozos vs tiempo / categorías ( No convencional, Gas, sumidero)  en grafico de barra, por categoria</li>
          <li>Agregar buffer x km por el usuario, sobre la base del filtro que ya aplico arriba.</li>
        </ul>
        <h3>Indicadores de proximidad a ríos y lagos</h3>
        <p></p>
        <p>
        Los indicadores de proximidad a ríos y lagos son utilizados para evaluar el riesgo potencial de contaminación de estos. Se utilizaron las capas de información obtenidas del IGN (Instituto Nacional Geográfico de Argentina) y se calculo la distancia ente los pozos y los ríos y lagos. Las distancia limites de 1 km (mayor riesgo), 1 – 2 km ( riesgo medio), > 3 km ( Sin riesgo). Se basa en la metodología de Meng 2014.
        </p>
        <p>
        En este indicador no tiene sentido que el usuario pueda mover con la barra mover los limites del riesgo y deberian quedar fijos en &#60; 1 km, 1 a 2 km y &#62; 3 km
        </p>
        <h3>1. Indicador a ríos permanentes</h3>
        <p></p>
        <p>
        Descripción corta:  Este indicador espacial representa la distancia desde los pozos a los ríos permanentes de las cuencas. Los pozos que se encuentran a menos 1 km de distancia al rio indican que esa área tiene un alto riesgo potencial de contaminacion comparado con las áreas del rio donde los pozos se ubican a mas de 2 km de distancia.
        </p>
        <p>
        Como usar indicaciones: Los puntos representan los pozos no convencionales de hidrocarburos y los pozos sumideros. Las líneas representan la distancia desde un pozo hacia el rio. Los colores indican el riesgo alto medio y bajo.
        </p>
        <p>
        Formato:
        </p>
        <ul>
          <li>Eliminar barra con distancia</li>
        </ul>
        <h3>2. Indicador a ríos no permanentes</h3>
        <p></p>
        <p>Descripción corta:</p>
        <p>
          <b>El indicador de proximidad de pozos a ríos no permanentes es importante puesto que ante eventos torrenciales de precipitación estos ríos son los que fluyen y pueden arrastrar residuos a su paso transportándolos hacia otras áreas y dispersándolo en el suelo.</b>
        </p>
        <p>
        Como usar indicaciones:  Los ríos están representados por las líneas de colores, Cada color representa un orden. Los ríos de orden 1 son los ríos torrenciales son los que se distribuyen en las zonas altas de las microcuencas y son los primeros en arrastrar la corriente del agua hacia las áreas de collecion. 
        </p>
        <p>Formato:</p>
        <ul>
          <li>agregar ríos de orden 1</li>
        </ul>
        <h3>3. Indicador a embalses</h3>
        <p></p>
        <p>
          <b>Los embalses de las cuencas del Rio Nequen y Negro proveen de servicios ecosistémicos claves como agua para riego  y consumo de la población. La posible contaminacion del agua de estos embalses implicaría un impacto complejo para toda la cuenca. Utilizamos los polígonos que limitan los embalses descargados del IGN y calculamos la distancia de los pozos hacia los embalases. Identificando si los embalses tienen o no pozos en la cercanias.</b>
        </p>
        <p>
          <b>Leyenda: los puntos representan los pozos y las líneas representan la distancia. Las líneas de color rojo representan distancia menos de 1 km del embalse y son las áreas con mayor riesgo potencial de contaminacion. </b>
        </p>
        <h3>Indicadores sociales</h3>
        <p></p>
        <p>
        <b>Descripcion:</b> Estos indicadores tienen información social de las localidades y las escuelas ya que son áreas donde esta presente la población. La cercanía a los pozos podría incrementar el riesgo potencial de contaminación e impactos negativos en la salud y el ecosistema.
        </p>
        <h3>Indicadores a localidades</h3>
        <p></p>
        <p>
        <b>Leyenda:</b> Los indicadores sociales se construyeron teniendo en cuenta la distribución de las localidades con información obtenida del IGN. Se calcula la distancia entre los pozos hacia las localidades para identificar que localidades tienen pozos mas cercanos con mayor riesgo de contaminación e impactos.
        </p>
        <h3>Indicadores a escuelas</h3>
        <p></p>
        <h3>Indicador vulnerabilidad social/pozo</h3>
        <p></p>
        <h3>Caracterización de la distribución e impactos de los residuos petroleros</h3>
        <p></p>
        <p>
        La industria petrolera tiene residuos líquidos y solidos flowback y lodos . Se realizo una centralización de los datos y se mapearon las áreas donde se encuentran los basureros usando imágenes de alta resolución de Google Earth.  Conocer el lugar de deposito de estos residuos es importante porque son áreas de alto riesgo de contaminacion.
        </p>
        <h3>Mapa de basureros</h3>
        <p></p>
        <h3>Mapa de incidentes</h3>
        <p></p>
        <p>
        Capas estaría bueno que el usuario pueda tener un resumen en formato pdf de lo que busco, por ejemplo . Yo pongo un punto en la localidad de Allen y activo la capa de pozos y las áreas de riesgo, apretó descargar informe y me descarga un resumen de lo analizado. 
        </p>
        <p>
        Como es una plataforma para la toma de decisiones y para observar, rápidamente puedo llevar a ese informe a una presentación y demostrar lo que digo a grandes rasgos. De manera grafica. Sugiero los siguiente formatos.
        </p>
*/