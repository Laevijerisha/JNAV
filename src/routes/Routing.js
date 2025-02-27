// import React from 'react'
// import {BrowserRouter, Route, Routes}  from "react-router-dom";
// import Loginpage from '../View/LoginPage';
// import ForgotPassword from '../View/ForgotPassword';
// function Routing() {
//     return (
//         <div>
//             <BrowserRouter>
//             <Routes>
//                 <Route
//                     exact
//                     path="/"
//                     render={() => (
//                        <Loginpage/>
//                     )}
//                 />
//                 <Route
//                     path="/forgotpassword"
//                     render={() => (
//                        <ForgotPassword/>
//                     )}
//                 />
//             </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }

// export default Routing

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from '../View/LoginPage';
import ForgotPassword from '../View/ForgotPassword';
import Email from '../View/Email';
import AdminNavbar from '../components/AdminComponent/AdminNavbar';
import Home from '../View/Home';
import Course from '../View/Course';

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Loginpage />}
                    />
                   
                     <Route
                        path="/email"
                        element={<Email/>}
                    />
                     <Route
                        path="/forgotpassword"
                        element={<ForgotPassword />}
                    />
                  <Route path='/admindashboard' element={<AdminNavbar/>}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/course' component={Course}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;
