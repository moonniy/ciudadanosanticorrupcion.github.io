'use strict';

let Link = (props) => <li style={NavigationStyle.line}><a style={NavigationStyle.text} href={props.url}>{props.children}</a></li>

class Navigation extends React.Component{
  render(){
    return(
					<nav style={NavigationStyle.top}>
						<ul style={NavigationStyle.menu}>
							<Link url="#bienvenida">Bienvenida</Link>
							<Link url="#conocenos">Quiénes somos</Link>
							<Link url="#labor">Qué hacemos</Link>
							<Link url="#convocatoria">Archivo</Link>
						</ul>
					</nav>
    );
  }
}

let NavigationStyle = {
  text: {
    color: "#fff",
    display: 'block',
    borderBottom: 'none'
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
    listStyle: 'none'
  },
  top: {
    marginTop: '2em',
    marginBottom: '1.25em'
  }
}
