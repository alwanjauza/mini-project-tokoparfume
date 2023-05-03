import { Layout } from 'antd';
import React from 'react';
import HeaderComponent from './header/HeaderComponent';
import FooterComponent from './footer/FooterComponent';

const LayoutComponent = ({children}) => {
    const {Content} = Layout

    return (
        <>
        <Layout>
            <HeaderComponent/>

            <Content
            className='site-layout'
            >
            <div
                style={{
                    minHeight: 380,
                    background: "#fff"
                }}>
                    {children}
                </div>
            </Content>

            <FooterComponent/>
        </Layout>
        </>
    );
}

export default LayoutComponent;
