'use strict';

class Introduction extends React.Component{
  render(){
    return(
      <div style={IntroductionStyle.content}>
        <h1 style={IntroductionStyle.text}>Comité Estatal de Participación Ciudadana del Sistema Anticorrupción del Estado de Puebla</h1>
        <h3 style={IntroductionStyle.subtext}>La participación ciudadana es clave en procesos de anticorrupción.</h3>
          <button style={IntroductionStyle.button} className="ui button" href="docs/PlanDeTrabajoVFWeb.pdf">Plan de Trabajo 2018</button>
        </div>
    );
  }
}

let IntroductionStyle ={
  content:{
    textAlign: 'center',
    marginTop: '4.125em',
    width: '70%',
    border: '1px',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  button: {
    background: "#F87060",
    borderRadius: '0',
    height: '50px',
    lineHeight: '0',
    fontSize: '0.8em',
    marginTop: '20px'
  },
  text: {
    margin: '0',
    lineHeight: '1.2',
    wordWrap: 'break-word'
  },
  subtext: {
    fontSize: '2em',
    fontWeight: 'normal',
    marginTop: '1em',
    marginBottom: '1em',
    lineHeight: '1.2'
  }

}
