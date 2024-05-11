import React from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import { toggleSideNav,setActivePage,setSearchTerm,toggleReportDropdown } from '../../actions/AdminNavbarAction'
import { FaBars, FaBookOpenReader } from "react-icons/fa6";
import { FaSearch, FaUserGraduate, FaHome, FaChartBar } from "react-icons/fa";
import '../../Styles/AdminNavbar.css'
import { Image } from 'react-bootstrap'
import Relevantz from '../../assets/Images/Relevantz.png'
import { Link } from 'react-router-dom'
function AdminNavbar() {
 const dispatch=useDispatch();
 const {showSideNav,activePage,showReportDropdown,searchTerm}=useSelector(state=>state);
 const handleChange=e=>{
    dispatch(setSearchTerm(e.target.value));
 };
 const toggleSideNav=()=>{
    dispatch(toggleSideNav());
 };
 const handlePageChange=()=>{
 dispatch(setActivePage(page));
 if(!showSideNav){
    dispatch(setActivePage(page));
    if(!showSideNav){
        dispatch(toggleSideNav());
    }
    if(page=='reports'){
        dispatch(toggleReportDropdown())
    }
    if (showReportDropdown){
        dispatch(toggleReportDropdown())
    }
 }
 }
    return (
        <div className="dashboard">
            <div className='top-nav'>
                <button className="menu-btn" onClick={toggleSideNav}>
                    <FaBars />
                </button>
                <div className='nav-img'>
                    <Image src={Relevantz} fluid />
                </div>

                <div className="user-info">
                    <FaSearch className='search-icon' />
                    <input
                        onChange={handleChange}
                        type="search"
                        placeholder="Search..."
                        value={searchTerm}
                        className='search-box'
                    />

                </div>

            </div>
            <div className={`side-nav ${showSideNav ? 'open' : ''}`}>
                <ul>
                    <Link to="/home">
                        <li className={activePage === 'home' ? 'active' : ''} onClick={() => handlePageChange('home')}>
                            <FaHome className='icon' /> {/* Icon for Home */}
                            {showSideNav && <span>Home</span>}
                        </li>
                    </Link>
                    <Link to="/course">
                        <li className={activePage === 'course' ? 'active' : ''} onClick={() => handlePageChange('course')}>

                            <FaBookOpenReader className='icon' />
                            {showSideNav && <span>Course</span>}

                        </li>
                    </Link>

                    <li
                        className={activePage === 'learner' ? 'active' : ''}
                        onClick={() => handlePageChange('learner')}
                    >
                        <FaUserGraduate className='icon' /> {/* Icon for Tracking */}
                        {showSideNav && <span>Learner</span>}
                    </li>
                    <li className='reports' onClick={() => handlePageChange('reports')}>
                        <FaChartBar className='icon' />
                        {showSideNav && <span>Reports</span>}


                    </li>
                </ul>
                <ul className={`submenu ${showReportDropdown ? 'open' : ''}`}>
                    <li onClick={() => setActivePage('learnerreport')}> Learner Report</li>
                    <li onClick={() => setActivePage('coursereport')}>Course Report</li>
                    <li onClick={() => setActivePage('enroll')}>Enrollment Report</li>
                    <li onClick={() => setActivePage('quiz')}>Quiz Report</li>
                </ul>
            </div>

        </div>
    )
}

export default AdminNavbar
