'use strict';

let Link = (props) => <li style={NavigationStyle.line}><a style={NavigationStyle.text} href={props.url}>{props.children}</a></li>

class Navigation extends React.Component{
  render(){
    return(
	<nav className="main" style={NavigationStyle.top}>
	    <img style={NavigationStyle.image} src="https://es.freelogodesign.org/Content/img/logo-ex-7.png"/>
	    <ul style={NavigationStyle.menu}>

			<Link url="#Nosotros">Nosotros</Link>
			<Link url="#Acciones">Acciones</Link>
			<Link url="#Transparencia">Trasparencia</Link>
			<Link url="#Participa">Participa</Link>
			<Link url="#Contacto">Contacto</Link>
		</ul>
	</nav>
    );
  }
}

let NavigationStyle = {
  image:{
    width:'100px'
  },
  text: {
    color: "#fff",
    display: 'block',
    borderBottom: 'none',
    letterSpacing: '1px'
  },
  line: {
    marginLeft: '1.5625rem',
    marginRight: '1.5625rem'
  },
  menu: {
    margin: '0',
    padding: '0',
    display: 'flex',
    justifyContent: 'flex-end',
    listStyle: 'none',
    alignItems: 'center'
  },
  top: {
      margin: '1.25em 2em 2em',
      display: 'flex',
      justifyContent: 'space-between'
  }
}
