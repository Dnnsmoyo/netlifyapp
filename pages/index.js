  import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
    import CardColumns from 'react-bootstrap/CardColumns';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Image from 'next/image';
  import React, { useEffect, useRef } from 'react';
  import PropTypes from "prop-types";

const styles = {
marginRight:'15px'
}
const App=()=>{

return ( 
<div>
<center><Card style={{ width: '100rem',height:'50rem',fontSize:'30px' }}>
  <Card.Body>
  <h1>Percentile Learn</h1>
    <Card.Title>Smart courses for smart technology</Card.Title>
    <Card.Text>
 Learn how to make smart web apps and how to utilise them in your niche business.
    </Card.Text>
       <Card.Text>
We help you discover the power of automation in the era of technological innovation.
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
    <Button variant="primary" href="/bot" >Start Your Journey</Button>
  </Card.Body>

</Card>

<br></br>
</center>
<center><Card style={{ width: '100rem',height:'50rem',fontSize:'30px' }}>
<h1>We offer a variety of smart courses</h1>

<CardColumns>
   <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
     Marketing
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Sales
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
    <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Human Resources
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
   Ecommerce
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
       Retail
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
    Education
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
    <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
       Writing
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
    <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Web Design
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
    <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Artificial Intelligence
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
   </CardColumns>
    <br></br><br></br><br></br>



<br></br>
</Card>
</center>
</div>
)
}
App.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default App;
