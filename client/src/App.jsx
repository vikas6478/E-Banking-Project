import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Addmoney from "./pages/dashboardpages/Addmoney"
import Accinfo from "./pages/dashboardpages/Accinfo"
import Statement from "./pages/dashboardpages/Statement"
import ResetPassword from "./pages/dashboardpages/ResetPass"
import "./CSS/home.css"
import "./CSS/style.css"
import ShowBalance from "./pages/dashboardpages/ShowBalance"
import WithdrawMoney from "./pages/dashboardpages/WithdrawMoney"
import DashHome from "./pages/dashboardpages/DashHome"
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="registration" element={<Registration/>}/>
    </Route>
    </Routes>
    <Routes>

<Route path='dashboard' element={<Dashboard/>}>
  <Route index element={<DashHome/>}/>
  <Route path='addmoney' element={<Addmoney/>}/>
  <Route path='accountInfo' element={<Accinfo/>}/>
  <Route path='statement' element ={<Statement/>}/>
  <Route path='showbalance' element ={<ShowBalance/>}/>
  <Route path='resetpass' element ={<ResetPassword />}/>
  <Route path='withdrawmoney' element ={<WithdrawMoney/>}/>
</Route>
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App
