import { BrowserRouter, Route, Routes } from "react-router"
import LandingPage from "../pages/LandingPage"
import PrivateRoute from "./routing/PrivateRoute"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route element={<PrivateRoute />}>
          
            

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
