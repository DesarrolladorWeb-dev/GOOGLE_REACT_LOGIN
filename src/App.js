import React from 'react'
import GoogleLogin from 'react-google-login';
// import logo from './logo.svg';
// import './App.css';

function App() {
  const respuestaGoogle=(respuesta)=>{
      console.log(respuesta)
  }
  return (
    <div className="App">
       <GoogleLogin
          clientId="972883209766-qnl4v12oh89qfk27bam22put49bb04l3.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={respuestaGoogle}
          onFailure={respuestaGoogle}
          cookiePolicy={'single_host_origin'}/>,
  
    </div>
  );
}

export default App;
