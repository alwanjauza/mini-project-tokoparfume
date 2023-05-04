import React from 'react';
import './checkoutPage.css';
import {
  Breadcrumb,
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Tooltip,
  Typography,
} from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  ShoppingCartOutlined,
  InfoCircleOutlined,
  LeftOutlined
} from '@ant-design/icons';
import { IconPerfume } from '../../assets';
import Gap from '../../components/gap/Gap';


const CheckoutPage = () => {
  const { Text } = Typography;
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const inputStyle = {
    width: '95%'
  }

  return (
    <>
      <div className="checkout-page">
        <div className="head">
        <img src={IconPerfume} alt="MyPerfume" />
        <Gap height={10}/>
        <Breadcrumb
        className='breadcrumb'
            separator='>'
          items={[
            {
              href: '/',
              title: <HomeOutlined />,
            },
            {
              href: '/shop',
              title: (
                <>
                  <ShoppingCartOutlined />
                  <span>Choose Product</span>
                </>
              ),
            },
            {
              href: '/checkout',
              title: (
                <>
                  <Text>Shipping</Text>
                </>
              ),
            },
          ]}
        />
        </div>
        <Gap height={30}/>
        <h1>Shipping address</h1>
        <Form name="myForm" form={form} layout="vertical">
          <Row>
            <Col span={12}>
              <Form.Item name="firstName" label="First Name" style={inputStyle}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="lastName" label="Last Name">
                <Input />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="address" label="Full Address">
                <TextArea rows={4} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="District (Kecamatan)" style={inputStyle}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="City">
                <Input />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Province" style={inputStyle}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Postal Code">
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="phone" label="Phone">
                <Input
                  suffix={
                    <Tooltip title="In case we need to contact you about your order">
                      <InfoCircleOutlined
                        style={{
                          color: 'rgba(0,0,0,.45)',
                        }}
                      />
                    </Tooltip>
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          <div className="button-sec">
          <Link to='/shop'><Text><LeftOutlined /> Return To Shop</Text></Link>
          <a href="" target='_blank'><Button>Continue to payment</Button></a>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CheckoutPage;
