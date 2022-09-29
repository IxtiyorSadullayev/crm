import MainRouter from "./routes/main.router";
import WorkRouter from "./routes/work.router";
import React from 'react'
function App() {

  
  let loggin = localStorage.getItem('loggin')
  React.useEffect(()=>{},[])
  if(loggin === "true"){
    return (
      <>
        <WorkRouter />
      </>
    )
  }

  return (
    <div className="App">
      <MainRouter />
    </div>
  );
}

export default App;

// client.post('/crm/login', {userName:username, password:password})
//         .then(res => console.log(res))     