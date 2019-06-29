'use strict';

let Social = (props) => <li style={styles.line}><i className={props.arg} aria-hidden="true"><a style={styles.text} href={props.url}>{props.children}</a></i></li>

class Contact extends React.Component{
  render(){
    return(
      <div style={styles.contact}>
          <div>
            <img style={styles.image} src={this.props.imagen}/>
          </div>
          <div>
            <div style={styles.info}>
            <h3 style={styles.font}>{this.props.name}</h3>
            <h4 style={styles.font}>{this.props.puesto}</h4>
            <h4 style={styles.font}>{this.props.slogan}</h4>
            </div>
            <ul style={styles.list}>
              <Social url={this.props.social.fb.url} arg="fa fa-facebook">{this.props.social.fb.name}</Social>
              <Social url={this.props.social.tw.url} arg="fa fa-twitter">{this.props.social.tw.name}</Social>
              <Social url={this.props.social.mail.url} arg="fa fa-envelope">{this.props.social.mail.name}</Social>
              <Social url={this.props.social.cv.url}>Currículum</Social>
            </ul>
          </div>
      </div>
    );
  }
}

let styles = {
  contact: {
    backgroundColor: '#102542',
    margin: 0,
    overflow: 'hidden',
    display: 'flex'
  },
  info: {
    marginLeft: '3em',
    marginRight: '3em'
  },
  font: {
    fontWeight: 'normal'
  },
  image: {
    height: '23em',
    width: '25em',
    verticalAlign: 'middle'
  },
  list: {
    margin: '0 4em 0 4em',
    padding: '2em',
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none'
  },
  text: {
    color: "#fff",
    marginLeft: '1em',
    borderBottom: 'none'
  },
  line: {
    marginTop: '1rem',
    marginBottom: '1rem',
    paddingRight: '1.5em'
  }
}
