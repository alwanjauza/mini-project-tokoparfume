import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import { IconPerfume } from '../../../assets';
import { SIDE_MENU } from './Constant';
import { Link } from 'react-router-dom';
import Gap from '../../gap/Gap';
import './adminlayout.css'

const AdminLayout = ({children}) => {
    const { Header, Content, Footer, Sider } = Layout;

    return (
      <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{backgroundColor: '#EFEFEF'}}
      >
        <div className="logo">
        <img src={IconPerfume} alt="Icon" height={30}/>
        </div>
        <div className="sider-wrapper">
        <Menu
          mode="inline"
          defaultSelectedKeys={['/order']}
          style={{backgroundColor: '#EFEFEF'}}
          items={SIDE_MENU}
        />
      </div>
      </Sider>
      <Layout>
        
          {children}

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Proudly present by Alwan Jauza Rosyad
        </Footer>
      </Layout>
    </Layout>
    );
}

export default AdminLayout;
