import React from 'react';
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
// import { alignPropType } from 'react-bootstrap/esm/types';
// import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Face3Icon from '@mui/icons-material/Face3';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Chart_style.css';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { DropdownButton , Dropdown} from 'react-bootstrap';


export const ChartNavPage=()=>
{
    return(
        <>
            <Navbar expand='lg' bg='light'  >
                        <NavbarToggle aria-controls='#mynavbar' className='float-end ms-5'></NavbarToggle>
                        <NavbarCollapse id='mynavbar' className='float-end text-success ms-5' >
                        
                        {/* <div className='col-5 justify-content-end'>
                        </div> */}
                        
                        <div className="search-bar-container col-12  justify-content-end float-end " >
                            <input type="search" placeholder="Search..." className="search-input me-1" />
                            <SearchIcon className='ms-2 fa-10x' style={{height:'35px',width:'35px'}}></SearchIcon>
                            {/* <Face3Icon className='ms-4 rounded-pill '></Face3Icon> */}
                            <NotificationsIcon className='ms-2 fa-10x' style={{height:'35px',width:'35px',color:'black'}}></NotificationsIcon>
                            <img  className='Logo rounded-pill ms-4'/>
                            {/* <ArrowDropDownIcon className='ms-4 me-5'></ArrowDropDownIcon> */}
                            <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='ms-4 me-5'>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Accounts</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Payroll</Dropdown.Item>
                            <Dropdown.Item href="#/action-3"> Reports</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Advisor</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Contacts</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                            
                        </div>
                        </NavbarCollapse>
                    </Navbar>
        </>
    );
}


