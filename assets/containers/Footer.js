'use strict';

class Footer extends React.Component{
  render(){
    return(
      <div>
      <footer id="footer" className="wrapper style1-alt">
        <div className="inner">
          <ul className="menu">
            <li>&copy; Comité Estatal de Participación Ciudadana del Sistema Anticorrupción del Estado de Puebla.</li>
          </ul>
        </div>
      </footer>
      </div>
    );
  }
}

let domContainer = document.querySelector('#footer_container');
ReactDOM.render(<Footer/>, domContainer);
