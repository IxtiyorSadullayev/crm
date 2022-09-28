import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import SiteNavbar from "../elements/site.route"
import Login from '../pages/Login';


const MainRouter = ()=>{
    React.useEffect(()=> {}, [])
    return (
        <Routes>
            <Route path='/' element={<SiteNavbar />} />
            <Route path='/login' element ={<Login />} />
            <Route path='/dashboard' element={<h1>'Dashboard'</h1>} />
            <Route path='*' element={<Navigate  to={'/login'} replace />} />
        </Routes>
    )
}
export default MainRouter;