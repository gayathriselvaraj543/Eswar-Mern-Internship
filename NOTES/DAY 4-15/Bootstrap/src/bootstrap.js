import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Alert,Breadcrumb,Card} from 'react-bootstrap'
import './App.css'
const Bootstrap = () => {
  return (
    <div >
        <Card style={{background:"lightpink"}} className='body'>
        <Card.Title>
            Title:Card
        </Card.Title>
        <Card.Text>
            THIS IS REACT-BOOTSTRAP CARD
        </Card.Text>
        <Card.Img src='https://th.bing.com/th/id/OIP.f66kbA8yVCc-2A9Wr9dLaQHaGi?rs=1&pid=ImgDetMain'style={{
         display: 'block', 
         margin: '10px auto', 
         width: '140px',
        height: '150px',
        borderRadius: '10px'
  }}>       
        </Card.Img>
        </Card>
        <Card style={{background:"lightgreen"}}>
            <Card.Title>
                Title 2: CARD
            </Card.Title>
            <Card.Text>
                THIS IS ANOTHER CARD
            </Card.Text>
            <Card.Img src='https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg'
            style={{
                display: 'block',
                margin: '10px auto',
                width: '140px',
                height: '150px',
                borderRadius: '10px'
              }}>       
            </Card.Img>
        </Card>
      <Alert>I am Gaya</Alert>
      <Alert variant='primary'>GAYATHRI</Alert>
      <Alert variant='secondary'>GAYATHRI SELVARAJ</Alert>
      <Alert variant="success">GAYATHRI S</Alert>
      <Button type='"button' class="btn btn-primary btn-lg"  aria-pressed="false"
      autocomplete="off" disabled >BUTTON FROM BOOTSTRAP</Button>
      <Breadcrumb>
      <Breadcrumb.Item>HOME</Breadcrumb.Item>
      <Breadcrumb.Item>ABOUT</Breadcrumb.Item>
      <Breadcrumb.Item>CONTACT</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default Bootstrap
