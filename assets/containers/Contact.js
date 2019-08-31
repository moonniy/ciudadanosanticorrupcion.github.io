'use strict';

let Social = (props) => <li style={styles.line}><i className={props.arg} aria-hidden="true"><a style={styles.text} href={props.url}>{props.children}</a></i></li>

class Contact extends React.Component{
  render(){
    return(
      <div style={styles.contact}>
	<div>
          <div style={styles.imgContent}>
            <img style={styles.image} src={this.props.imagen}/>
          </div>
          <div>
            <div style={styles.info}>
            <h3 style={styles.font}>{this.props.name}</h3>
            <h4 style={styles.font}>{this.props.puesto}</h4>
	    <a style={styles.boton} href={this.props.social.cv.url}>Curriculum</a>
            <p style={styles.fontslogan}>{this.props.slogan}</p>
            </div>
            <ul style={styles.list}>
              <Social url={this.props.social.mail.url} arg="fa fa-envelope">{this.props.social.mail.name}</Social>
            </ul>
            <ul style={styles.list}>
              <Social url={this.props.social.fb.url} arg="fa fa-facebook">{this.props.social.fb.name}</Social>
              <Social url={this.props.social.tw.url} arg="fa fa-twitter">{this.props.social.tw.name}</Social>


            </ul>
          </div>
	</div>
      </div>
    );
  }
}

let styles = {
  contact: {
    backgroundColor: '#102530',
    marginTop: '2%',
    marginLeft: '2%',
    padding: '1em',
    overflow: 'visible',
    width: '47%',   
    height:'775px', 
    padding: '30px 40px 20px 40px',
    borderRadius: '30px'
  },
  info: {
    marginLeft: '3em',
    marginRight: '3em',
    textAlign: 'center'
  },
  font: {
    color: '#fff',
    fontWeight: 'normal',
    marginTop:'1em'
  },  
  fontslogan: {
    fontWeight: 'normal',
    FontSize:'15px',
    marginTop:'1em',
    textAlign: 'justify',
    marginBottom: '1.5em'
  },
  image: {
    height: '18em',
    width: '15em'
  },
  imgContent: {
    textAlign: 'center'
  },
  list: {
    margin: '0',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none'
  },
  text: {
    color: "#fff",
    marginLeft: '1em',
    borderBottom: 'none'
  },
  line: {
    marginTop: '0',
    marginBottom: '1rem',
    paddingRight: '1.5em'
  },
  boton:{
    borderBottom: 'none',
    color: '#fff'
  }
}
