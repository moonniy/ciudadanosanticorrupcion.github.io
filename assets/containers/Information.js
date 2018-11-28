'use strict';

class Information extends React.Component{
  render(){
    return(
      <div>
        <section id="labor" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>Qué hacemos</h2>
          <p>El Comité Estatal de Participación Ciudadana tiene como objetivo coadyuvar, en términos de la Ley del Sistema Anticorrupción del Estado de Puebla, al cumplimiento de los objetivos del Comité Coordinador Estatal, así como ser la instancia de vinculación con las organizaciones sociales y académicas relacionadas con las materias del Sistema Estatal.

      De acuerdo con el artículo 21 de la Ley del Sistema Anticorrupción en Puebla, el Comité Estatal de Participación Ciudadana podrá, entre otras atribuciones: </p>
          <div className="features">
            <section>
                <span className="icon major fa-comments"></span>
                <h3>OPINAR Y PROPONER</h3>
              <p>Opinar y realizar propuestas sobre la política estatal y las políticas integrales, así como promover proyectos de bases de coordinación interinstitucional e intergubernamental en materia de fiscalización y control de recursos públicos.</p>
            </section>
            <section>
              <span className="icon major fa-desktop"></span>
              <h3>CREACIÓN DE LA PLATAFORMA DIGITAL ESTATAL</h3>
              <p>Coadyuvar en la creación y mejora de la plataforma digital estatal, y con los diferentes sistemas que lo integran, entre otros, el sistema electrónico de denuncia y queja, el sistema de información pública de contrataciones o el sistema de de evolución patrimonialy de
      declaración de intereses de servidores públicos.</p>
            </section>
            <section>
              <span className="icon major fa-gavel"></span>
              <h3>COORDINAR EL SISTEMA ESTATAL</h3>
              <p>Dar seguimiento al funcionamiento del Sistema Estatal Anticorrupción, a través del trabajo coordinado con los diferentes miembros del Comité Coordinador y la Secretaría Técnica.</p>
            </section>
            <section>
              <span className="icon major fa-group"></span>
              <h3>MECANISMOS PARA ARTICULAR CIUDADANÍA Y ACADEMIA</h3>
              <p>También promover mecanismos de articulación entre organizaciones de la sociedad civil, academia y grupos ciudadanos, para elaborar investigaciones sobre las políticas públicas para la prevención, detección y combate de hechos de corrupción o faltas administrativas.</p>
            </section>
            <section>
              <span className="icon major fa-chain"></span>
              <h3>PROYECTOS PARA PREVENCIÓN Y CONTROL DE FALTAS</h3>
              <p>Proponer y promover proyectos de bases de coordinación interinstitucional e intergubernamental en las materias de fiscalización y control de recursos públicos, de prevención, control y disuasión de faltas administrativas y hechos de corrupción, en especial sobre las causas que los generan.</p>
            </section>
            <section>
              <span className="icon major fa-hand-o-up"></span>
              <h3>PRESENCIA de OPINION EN LA COMISION EJECUTIVA</h3>
              <p>Opinar o proponer, a través de su participación en la Comisión Ejecutiva, indicadores y metodologías para la medición y seguimiento del fenómeno de la corrupción, así como para la evaluación del cumplimiento de los objetivos y metas de la política estatal, las políticas integrales y los programas y acciones que implementen las autoridades que conforman el Sistema Estatal.</p>
            </section>
          </div>
        </div>
      </section>

      </div>
    );
  }
}

let domContainer = document.querySelector('#information_container');
ReactDOM.render(<Information/>, domContainer);
