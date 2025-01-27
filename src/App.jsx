import { BrowserRouter as Router } from "react-router-dom";
import './App.scss'
import { PageRouter } from "./router/PageRouter";

function App() {

  return (
    <>
      <Router>
        <PageRouter />
      </Router>
    </>
  )
}

export default App
