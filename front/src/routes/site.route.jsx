import { Navigate, Route, Routes } from "react-router-dom"


const MainRouter = ()=>{
    return(
        <Routes>
            <Route path='/' element={<h1> Home page page</h1>} />
            <Route path='/login' element={<h1> Login page</h1>} />
            <Route path='/register' element={<h1> Login page</h1>} />
            <Route path='/dashboard' element={<h1> Dashboard page</h1>} />
            <Route path='*' element={<Navigate path='/' replace />} />
        </Routes>
    )
}

export default MainRouter;