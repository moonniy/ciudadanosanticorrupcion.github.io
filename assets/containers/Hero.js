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
    backgroundColor: '#102542',
    margin: 0,
    overflow: 'hidden',
    height: '700px'
  }
}


let domContainer = document.querySelector('#hero_container');
ReactDOM.render(<Hero/>, domContainer);
