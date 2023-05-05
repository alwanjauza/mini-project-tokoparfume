import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { GetNakedZoom, MidnightHazeZoom, SecondSkinZoom } from '../../assets';
import './shopPage.css'
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../dashboardPage/query/product-query';

const { Meta } = Card

const ShopPage = () => {
    const { Text } = Typography

    // GET DATA
  const {
    data: productData,
    loading: isProductLoading,
    error: productError,
  } = useQuery(GET_PRODUCT);

    return (
        <>
        <div className='shop-page'>
          {productData?.products?.map((item, index) => (
            <Row gutter={16}>
            <Col span={8}>
              <Card
              hoverable
              style={{
                width: 240
              }}
              cover={<img alt={item.image} src={item.image} />}
              key={index}
              >
                <Meta 
                title={item.productName}
                description={item.productPrice}
                />
              </Card>
            </Col>
          </Row>
          ))}
        </div>
        </>
    );
}

export default ShopPage;
