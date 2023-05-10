import { Button, Dropdown, Layout, Menu, Space } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEM } from '../Constant';
import './headerComponent.css';
import { IconPerfume } from '../../../assets';
import { UserOutlined } from '@ant-design/icons';

const HeaderComponent = () => {
  const path = window.location.pathname;
  const { Header } = Layout;
  const [current, setCurrent] = useState(path);
  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        height: '100px',
        backgroundColor: '#EFEFEF',
      }}
    >
      <div className="header-wrapper">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          onClick={onClick}
          selectedKeys={[current]}
          disabledOverflow
          items={MENU_ITEM}
          className='menu-item'
          style={{
            backgroundColor: '#EFEFEF',
          }}
        />

        <Link to="/">
          <img src={IconPerfume} alt="Icon" height={73}/>
        </Link>

        <Link to="/loginPage" className='menu-logout'>
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem('token');
          }}
        >
          LOGOUT
        </Button>
      </Link>
      </div>
    </Header>
  );
};

export default HeaderComponent;
