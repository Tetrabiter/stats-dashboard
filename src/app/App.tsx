import { Route, Routes } from "react-router"
import LandingPage from "../pages/LandingPage"
import { PrivateRoute } from "./routing/PrivateRoute"
import DashboardPage from "../pages/DashboardPage"
import AuthPage from "../pages/AuthPage"
import SignInPage from "../pages/Sign-in"
import SignUpPage from "../pages/Sign-up"


function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="auth" element={<AuthPage/>} />
          <Route path="/signin" element={<SignInPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />

          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }>



          </Route>
        </Routes>
    </>
  )
}

export default App
