'use strict';

class Hero extends React.Component{
  render(){
    return(
      <div style={styles.Hero}>
      <Navigation></Navigation>
      <Introduction></Introduction>
      </div>
    );
  }
}

let styles = {
  Hero: {
    background: 'linear-gradient(rgba(16, 37, 66, 0.90), rgba(16, 37, 66, 0.90)), url(https://i0.wp.com/www.sergerente.net/wp-content/uploads/2009/07/reunion-de-trabajo.jpg?resize=1280%2C640) no-repeat',
    backgroundSize: '100%',
    margin: '0',
    overflow: 'hidden',
    height: '675px'
  }
}


let domContainer = document.querySelector('#hero_container');
ReactDOM.render(<Hero/>, domContainer);
