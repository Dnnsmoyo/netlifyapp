  import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Image from 'next/image';
  import React, { useEffect, useRef } from 'react';
  import PropTypes from "prop-types";

const App=()=>{

return ( 
<div>
<center><Card style={{ width: '100rem',height:'50rem',fontSize:'30px' }}>
  <Card.Body>
  <h1>Building A smart Banking Assistant with rasa and stripe api</h1>
    <Card.Title>Smart courses for smart technology</Card.Title>
    <Card.Text>
In this tutorial you will learn how to create a smart banking assistant. The assistant will help you complete transactions and check your account.
    </Card.Text>


  <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/tkgK6cZynAk`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />


 
    <br></br><br></br><br></br>
  </Card.Body>

</Card>

<br></br>
</center>
</div>
)
}
App.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default App;
