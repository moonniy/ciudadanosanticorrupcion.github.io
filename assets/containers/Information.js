'use strict';

const info = {
  titulo: "Qué hacemos",
  descripcion: "El Comité Estatal de Participación Ciudadana tiene como objetivo coadyuvar, en términos de la Ley del Sistema Anticorrupción del Estado de Puebla, al cumplimiento de los objetivos del Comité Coordinador Estatal, así como ser la instancia de vinculación con las organizaciones sociales y académicas relacionadas con las materias del Sistema Estatal. De acuerdo con el artículo 21 de la Ley del Sistema Anticorrupción en Puebla, el Comité Estatal de Participación Ciudadana podrá, entre otras atribuciones:",
  acciones: [ {
    icono: "icon major fa-comments",
    titulo: "OPINAR Y PROPONER",
    descripcion: "Opinar y realizar propuestas sobre la política estatal y las políticas integrales, así como promover proyectos de bases de coordinación interinstitucional e intergubernamental en materia de fiscalización y control de recursos públicos."
  },
  {
    icono: "icon major fa-desktop",
    titulo: "CREACIÓN DE LA PLATAFORMA DIGITAL ESTATAL",
    descripcion: "Coadyuvar en la creación y mejora de la plataforma digital estatal, y con los diferentes sistemas que lo integran, entre otros, el sistema electrónico de denuncia y queja, el sistema de información pública de contrataciones o el sistema de evolución patrimonial y declaración de intereses de servidores públicos."
  },
  {
    icono: "icon major fa-gavel",
    titulo: "COORDINAR EL SISTEMA ESTATAL",
    descripcion: "Dar seguimiento al funcionamiento del Sistema Estatal Anticorrupción, a través del trabajo coordinado con los diferentes miembros del Comité Coordinador y la Secretaría Técnica."
  },
  {
    icono: "icon major fa-group",
    titulo: "MECANISMOS PARA ARTICULAR CIUDADANÍA Y ACADEMIA",
    descripcion: "También promover mecanismos de articulación entre organizaciones de la sociedad civil, academia y grupos ciudadanos, para elaborar investigaciones sobre las políticas públicas para la prevención, detección y combate de hechos de corrupción o faltas administrativas."
  },
  {
    icono: "icon major fa-chain",
    titulo: "PROYECTOS PARA PREVENCIÓN Y CONTROL DE FALTAS",
    descripcion: "Proponer y promover proyectos de bases de coordinación interinstitucional e intergubernamental en las materias de fiscalización y control de recursos públicos, de prevención, control y disuasión de faltas administrativas y hechos de corrupción, en especial sobre las causas que los generan."
  },
  {
    icono: "icon major fa-hand-o-up",
    titulo: "PRESENCIA de OPINION EN LA COMISION EJECUTIVA",
    descripcion: "Opinar o proponer, a través de su participación en la Comisión Ejecutiva, indicadores y metodologías para la medición y seguimiento del fenómeno de la corrupción, así como para la evaluación del cumplimiento de los objetivos y metas de la política estatal, las políticas integrales y los programas y acciones que implementen las autoridades que conforman el Sistema Estatal."
  }
]
}

class Information extends React.Component{
  render(){
    const inf = info.acciones.map((accion,i) => (
        <section>
            <span className={accion.icono}></span>
            <h3>{accion.titulo}</h3>
          <p>{accion.descripcion}</p>
        </section>))


    return(
      <div>
        <section id="labor" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>{info.titulo}</h2>
          <p>{info.descripcion}</p>
          <div className="features">
            {inf}
          </div>
        </div>
      </section>

      </div>
    );
  }
}

let domContainer = document.querySelector('#information_container');
ReactDOM.render(<Information/>, domContainer);
