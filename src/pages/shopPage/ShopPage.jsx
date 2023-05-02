import { Col, Row, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { GetNakedZoom, MidnightHazeZoom, SecondSkinZoom } from '../../assets';
import './shopPage.css'

const ShopPage = () => {
    const { Text } = Typography

    return (
        <>
        <div className='shop-page'>
            
        
            <Link to="/second-skin">
              <img src={SecondSkinZoom} alt="SecondSkin" />
            </Link>
            <h3>Second Skin</h3>
            <Text>Rp 249.000</Text>


            <Link to="/midnight-haze">
              <img src={MidnightHazeZoom} alt="MidnightHaze" />
            </Link>
            <h3>Midnight Haze</h3>
            <Text>Rp 249.000</Text>


            <Link to="/get-naked">
              <img src={GetNakedZoom} alt="GetNaked" />
            </Link>
            <h3>Get Naked</h3>
            <Text>Rp 249.000</Text>

        </div>
        </>
    );
}

export default ShopPage;
