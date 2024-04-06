
import Card from 'react-bootstrap/Card';

export default function Home(){
    return(
      <div className='home'>
        <center>
        
        <Card style={{ width: '53%',textAlign:'center',margin:'1%'}}> 
     
      <Card.Body>
        <Card.Title><b><h1>BAD <img src={require('./bad bank.png')} alt="bank" style={{width:'5%'}}/>BANK</h1></b></Card.Title>
           <img src={require('./bank.jpg')} alt="bank" style={{width:'100%',height:"66vh"}}/>
        <Card.Text>
            <h2>BAD BANK WELCOMES YOU</h2>
       <h2>"Secure your future with us - Today and Tomorrow."</h2>
        </Card.Text>
      
      </Card.Body>
    </Card>
    </center>
    </div>
      
    )
}






