import React from 'react';
import './Chart_style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import { My_Chartpage } from './Chart_line';
import { Nav } from 'react-bootstrap';
import Chart from 'chart.js/auto'

export const ChartSiderBar=()=>
{
    
    return(
        <>
        <div className="sidebar col-lg-12 col-md-12 col-sm-12"  >
           <div className=''>
          
           <h2 className=' head'> <img className='assiduuslogo rounded-pill me-2 '/>ASSIDUUS<sup className='fs-6 text-dark'>TM</sup> </h2>
            <ul className='ulside'>
            
                <li className='ms-3 input-group' ><DashboardIcon className='me-3'></DashboardIcon>
                <Nav.Link href='/view' className=''>Dashboard</Nav.Link></li>
                <li className='ms-3 input-group'><AccountBalanceWalletIcon className='me-3'></AccountBalanceWalletIcon><Nav.Link href='/view' className=''>Accounts</Nav.Link></li>
                <li className='ms-3 input-group'><AttachMoneyIcon className='me-3'></AttachMoneyIcon><Nav.Link href='/view' className=''>Payroll</Nav.Link></li>
                <li className='ms-3 input-group'><DescriptionIcon className='me-3'></DescriptionIcon><Nav.Link href='/view' className=''> Reports</Nav.Link> </li>
                <li className='ms-3 input-group'><PersonIcon className='me-3'></PersonIcon> <Nav.Link href='/view' className=''> Advisor</Nav.Link> </li>
                <li className='ms-3 input-group'><ContactsIcon className='me-3'></ContactsIcon> <Nav.Link href='/view' className=''> Contacts</Nav.Link> </li>
            </ul>

           </div>
        </div>
        </>

    );

}


