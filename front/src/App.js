import MainRouter from "./routes/main.router";

function App() {
  return (
    <div className="App">
      <MainRouter />
    </div>
  );
}

export default App;

// client.post('/crm/login', {userName:username, password:password})
//         .then(res => console.log(res))     