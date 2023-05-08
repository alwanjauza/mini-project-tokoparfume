import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { GetNakedZoom, MidnightHazeZoom, SecondSkinZoom } from '../../assets';
import './shopPage.css';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../dashboardPage/query/product-query';
import currency from 'currency.js';

const { Meta } = Card;

const ShopPage = () => {
  const { Text } = Typography;
  const IDR = (value) =>
    currency(value, { precision: 0, symbol: 'Rp ', separator: '.' });

  // GET DATA
  const {
    data: productData,
    loading: isProductLoading,
    error: productError,
  } = useQuery(GET_PRODUCT);

  return (
    <>
      <div className="shop-page">
        <Row gutter={[0, 40]}>
          {productData?.products?.map((item) => (
            <Col span={8} key={item.uuid}>
              <Link to={`/shop/${item.uuid}`}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt={item.image} src={item.image} />}
                >
                  <Meta
                    title={item.productName}
                    description={IDR(item.productPrice).format()}
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default ShopPage;
