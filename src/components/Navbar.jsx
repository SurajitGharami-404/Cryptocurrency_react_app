import React,{useState,useEffect} from 'react';
import {Menu, Button, Typography, Avatar} from "antd";
import { Link } from 'react-router-dom';
import { HomeOutlined,MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons/lib/icons';
import icon from "../images/Cryptoverse_logo.jpg";
import { CloseOutlined } from '@ant-design/icons';

const Navbar = ()=> {

  const [activeMenu,setActiveMenu]=useState(true);
  const [screenSize,setScreenSize]=useState(null);

  useEffect(()=>{
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize",handleResize);
    handleResize();

    return ()=>window.removeEventListener("resize",handleResize);
  },[]);

  useEffect(()=>{
    if(screenSize<768){
      setActiveMenu(false);
    }
    else{
      setActiveMenu(true);
    }
  },[screenSize])

  return (
    <div className='nav-container'>
        <div className="logo-container">
            <Avatar src={icon} size='large'/>
            <Typography.Title level={2} className='logo'>
                <Link to='/'>Cryptoverse</Link>
            </Typography.Title>
            <Button className='menu-control-container' onClick={()=>setActiveMenu(!activeMenu)} >
                  {activeMenu?<CloseOutlined/>: <MenuOutlined/>}   
            </Button>
            </div>
            {
            activeMenu&&
                    <Menu theme='dark'>
                        <Menu.Item icon={<HomeOutlined />} onClick={()=>{if(screenSize<768) setActiveMenu(false)}}>
                          <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item icon={<FundOutlined />} onClick={()=>{if(screenSize<768) setActiveMenu(false)}}>
                          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                        </Menu.Item>
                        <Menu.Item icon={<MoneyCollectOutlined />} onClick={()=>{if(screenSize<768) setActiveMenu(false)}}>
                          <Link to="/exchanges">Exchanges</Link>
                        </Menu.Item>
                        <Menu.Item icon={<BulbOutlined />} onClick={()=>{if(screenSize<768) setActiveMenu(false)}}>
                          <Link to="/news">News</Link>
                        </Menu.Item>
                    </Menu>
              }
    </div>
  )
}

export default Navbar;