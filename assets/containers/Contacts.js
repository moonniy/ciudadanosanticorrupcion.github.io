'use strict';

let people = [{
  name: "Catalina Aguilar Oropeza",
  puesto: "Comisionada",
  imagen: "images/Catalina_Aguilar.jpg",
  slogan: "Lollipop chupa chups bonbon I love soufflé. Cheesecake carrot cake bear claw. Bonbon cotton candy marshmallow fruitcake soufflé tiramisu cotton candy chocolate cake lemon drops. Cake bonbon donut gummies. Icing sweet roll tart I love. Biscuit pastry I love I love pie gummies I love. Croissant danish halvah gummies jelly.",
  social: {
    fb: {
      name: "",
      url: ""
    },
    tw: {
      name: "catyoro",
      url: "https://twitter.com/catyoro"
    },
    mail: {
      name:"presidencia@seapuebla.org.mx",
      url:"mailto:presidencia@seapuebla.org.mx"
    },
    cv: {
      url:"cv/CV_Catalina_Aguilar.pdf"
    }
  }
},
{
  name: "Daniel Alejandro Valdés Amaro",
  puesto: "Comisionado",
  imagen: "images/Daniel_Valdes.jpg",
  slogan: "Lollipop chupa chups bonbon I love soufflé. Cheesecake carrot cake bear claw. Bonbon cotton candy marshmallow fruitcake soufflé tiramisu cotton candy chocolate cake lemon drops. Cake bonbon donut gummies. Icing sweet roll tart I love. Biscuit pastry I love I love pie gummies I love. Croissant danish halvah gummies jelly.",
  social: {
    fb: {
      name: "",
      url: ""
    },
    tw: {
      name: "davaSEAP",
      url: "https://twitter.com/davaSEAP"
    },
    mail: {
      name:"daniel.valdes@seapuebla.org.mx",
      url:"mailto:daniel.valdes@seapuebla.org.mx"
    },
    cv: {
      url:"cv/CV_Daniel_Valdes.pdf"
    }
  }
},
{  
  name: "María del Carmen Leyva Báthory",
  puesto: "Comisionada",
  imagen: "images/Carmen_Leyva.jpg",
  slogan: "Lollipop chupa chups bonbon I love soufflé. Cheesecake carrot cake bear claw. Bonbon cotton candy marshmallow fruitcake soufflé tiramisu cotton candy chocolate cake lemon drops. Cake bonbon donut gummies. Icing sweet roll tart I love. Biscuit pastry I love I love pie gummies I love. Croissant danish halvah gummies jelly.",
  social: {
    fb: {
      name: "",
      url: ""
    },
    tw: {
      name: "caratrasparenc",
      url: "https://twitter.com/caratransparenc"
    },
    mail: {
      name:"carmen.leyva@seapuebla.org.mx",
      url:"mailto:carmen.leyva@seapuebla.org.mx"
    },
    cv: {
      url:"cv/CV_Carmen_Leyva.pdf"
    }
  }
},
{  
  name: "Francisco Javier Mariscal Magdaleno",
  puesto: "Comisionado",
  imagen: "https://image.freepik.com/foto-gratis/moderna-oficina-persona-trabajador-cara_1157-3666.jpg",
  slogan: "Lollipop chupa chups bonbon I love soufflé. Cheesecake carrot cake bear claw. Bonbon cotton candy marshmallow fruitcake soufflé tiramisu cotton candy chocolate cake lemon drops. Cake bonbon donut gummies. Icing sweet roll tart I love. Biscuit pastry I love I love pie gummies I love. Croissant danish halvah gummies jelly.",
  social: {
    fb: {
      name: "",
      url: ""
    },
    tw: {
      name: "pancho_mariscal",
      url: "https://twitter.com/pancho_mariscal"
    },
    mail: {
      name:"francisco.mariscal@seapuebla.org.mx",
      url:"mailto:francisco.mariscal@seapuebla.org.mx"
    },
    cv: {
      url:"cv/CV_Francisco_Mariscal.pdf"
    }
  }
},
{  
  name: "José Alejandro Guillén Reyes",
  puesto: "Comisionado",
  imagen: "images/Alejandro_Guillen.jpg",
  slogan: "Lollipop chupa chups bonbon I love soufflé. Cheesecake carrot cake bear claw. Bonbon cotton candy marshmallow fruitcake soufflé tiramisu cotton candy chocolate cake lemon drops. Cake bonbon donut gummies. Icing sweet roll tart I love. Biscuit pastry I love I love pie gummies I love. Croissant danish halvah gummies jelly.",
  social: {
    fb: {
      name: "",
      url: ""
    },
    tw: {
      name: "aleguillenr",
      url: "https://twitter.com/aleguillenr"
    },
    mail: {
      name:"alejandro.guillen@seapuebla.org.mx",
      url:"mailto:palejandro.guillen@seapuebla.org.mx"
    },
    cv: {
      url:"cv/CV_Alejandro_Guillen.pdf"
    }
  }
}
]

class Contacts extends React.Component{
  render(){
    return(
      <div style={fondo.principal}>
      <h2 style={fondo.title}>¿Quienes lo conforman?</h2>
	<div style={fondo.contacts}>
	  {people.map((obj, step) => <Contact key={step} {...obj}> </Contact>)}
	</div>
      </div>
    );
  }
}

let fondo = {
    principal:{
      backgroundColor: '#fff',
      margin: 0,
      paddingTop: '4em',
      paddingBottom: '4em'
    },
    contacts: {
      display: 'flex',
      flexFlow: 'row wrap'
    },
    title : {
      marginBottom: '1em',
      marginLeft: '2.2em',
      color: '#102530'
    }
}

let domContainer = document.querySelector('#contacts_container');
ReactDOM.render(<Contacts/>, domContainer);
