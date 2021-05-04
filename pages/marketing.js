  import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Image from 'next/image';
  import React, { useEffect, useRef } from 'react';
  import PropTypes from "prop-types";

const App=()=>{

return ( 
<div style={{backgroundColor:'#3489eb'}}>
<center><Card style={{ width: '100rem',height:'50rem',fontSize:'30px' }}>
  <Card.Body>
  <h1>Building A smart Marketing Assistant with rasa and the vonage api</h1>
    <Card.Title>Smart courses for smart technology</Card.Title>
    <Card.Text>
In this tutorial you will learn how to create a smart marketing assistant. The assistant will help you automate your marketing campaigns.
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
<center><Card style={{ width: '100rem',height:'50rem',fontSize:'30px' }}>
  <Card.Body>
<h1>Part 1-1</h1>
<p>Installation of Packages</p>
<br></br>

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
<center><Card style={{ width: '100rem',height:'50rem',fontSize:'30px' }}>
  <Card.Body>
<h1>Part 1-2</h1>
<p>Designing the UI</p>
<br></br>

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
<center><Card style={{ width: '100rem',height:'50rem',fontSize:'30px' }}>
  <Card.Body>
<h1>Part 1-3</h1>
<p>Designing the app logic-backend connectors</p>
<br></br>

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
<center><Card style={{ width: '100rem',height:'50rem',fontSize:'30px' }}>
  <Card.Body>
<h1>Part 1-4</h1>
<p>Adding authentication</p>
<br></br>

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
