import React from 'react';
import './productDetil.css';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_BY_PK } from '../query/productQuery';
import Gap from '../../../components/gap/Gap';
import { Button, Col, Collapse, Image, Row, Typography } from 'antd';
import currency from 'currency.js';

const ProductDetil = () => {
  const { uuid } = useParams();
  const { Panel } = Collapse;
  const { Text } = Typography;
  const IDR = (value) =>
    currency(value, { precision: 0, symbol: 'Rp ', separator: '.' });
  const panelStyle = {
    background: '#fff',
  };

  // GET product by uuid
  const {
    data: productData,
    loading: isProductLoading,
    error: productError,
  } = useQuery(GET_PRODUCT_BY_PK, {
    variables: { uuid },
  });

  return (
    <div>
      <Gap height={40} />
      <Row>
        <Col span={12}>
          <div className="left-side">
            <Image
              src={productData?.products_by_pk?.image}
              style={{ height: '450px' }}
              alt="image-perfume"
              className="image-product"
            />
            <Gap height={10} />
            <Collapse bordered={false} accordion>
              <Panel header="INGREDIENTS" style={panelStyle}>
                {productData?.products_by_pk?.ingredients}
              </Panel>
              <Panel header="HOW TO USE" style={panelStyle}>
                <Text>
                  Spray on your pulse points or even liberally onto bare skin.
                  Our perfume is an Extrait de Parfum with high concentration. A little
                  goes a long way.
                </Text>
              </Panel>
            </Collapse>
          </div>
        </Col>
        <Col span={12}>
          <div className="right-side">
            <h1>{productData?.products_by_pk?.productName}</h1>
            <Text strong className='price'>
              {IDR(productData?.products_by_pk?.productPrice).format()}
            </Text>
            <br />
            <Gap height={20} />
            <div className="line-devider" />
            <Gap height={20} />
            <Link to="/checkout">
              <Button>GO TO SHIPPING</Button>
            </Link>
            <br />
            <Gap height={40} />
            <div className="desc-product">
              <Text strong>Desc: </Text>
              <br />
              <Text>{productData?.products_by_pk?.desc}</Text>
            </div>
          </div>
        </Col>
      </Row>
      <Gap height={40} />
    </div>
  );
};

export default ProductDetil;
