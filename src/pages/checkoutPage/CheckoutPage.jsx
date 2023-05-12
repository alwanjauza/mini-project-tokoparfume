import React, { useState } from 'react';
import './checkoutPage.css';
import {
  Breadcrumb,
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Tooltip,
  Typography,
  message,
} from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  ShoppingCartOutlined,
  InfoCircleOutlined,
  LeftOutlined,
} from '@ant-design/icons';
import { IconPerfume, WaLink } from '../../assets';
import Gap from '../../components/gap/Gap';
import { useMutation } from '@apollo/client';
import { ADD_ORDERS, GET_ORDERS } from './query/checkout-query';

const CheckoutPage = () => {
  const [ waMessage, setWaMessage] = useState('')
  const { Text } = Typography;
  const [formCheckout] = Form.useForm();
  const { TextArea } = Input;
  const inputStyle = {
    width: '95%',
  };

  const handleSubmit = e => {
    e.preventDefault()

    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value
    const address = e.target.address.value
    const postalCode = e.target.postalCode.value
    const phone = e.target.phone.value

    setWaMessage(`Hey, ${firstName} ${lastName} ${address} ${postalCode} ${phone}`)

    console.log(setWaMessage)
  }

  // ADD DATA
  const [addOrders, { loading: loadingAddOrders }] = useMutation(ADD_ORDERS, {
    refetchQueries: [GET_ORDERS],
  });

  const handleCompleted = () => {
    window.open('https://wa.link/fvglji');
  };

  const onAdd = (values) => {
    addOrders({
      variables: {
        object: {
          ...values,
        },
      },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
      onCompleted: () => handleCompleted()
    });
  };

  return (
    <>
      <div className="checkout-page">
        <div className="head">
          <img src={IconPerfume} alt="MyPerfume" />
          <Gap height={10} />
          <Breadcrumb
            className="breadcrumb"
            separator=">"
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
        <Gap height={30} />
        <h1>Shipping address</h1>
        <Form name="myForm" form={formCheckout} layout="vertical" onFinish={onAdd}>
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
              <Form.Item label="Postal Code" name='postalCode'>
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
            <Link to="/shop">
              <Text>
                <LeftOutlined /> Return To Shop
              </Text>
            </Link>
            <Button
              htmlType="submit"
              loading={loadingAddOrders}
            >
              Continue to payment
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CheckoutPage;
