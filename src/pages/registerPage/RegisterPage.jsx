import { useMutation, useQuery } from '@apollo/client';
import { Button, Form, Input, Card, Typography, Modal } from 'antd';
import React from 'react';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { GET_PROFILE } from '../loginPage/query/login-query';
import { ADD_PROFILE } from './query/register-query';
import Gap from '../../components/gap/Gap';
import { IconPerfume } from '../../assets';

const RegisterPage = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { Text } = Typography

  const {
    data: profileData,
    loading: isProfileLoading,
    error: isProfileError,
  } = useQuery(GET_PROFILE);

  const [register, { loading: isRegisterLoading }] = useMutation(ADD_PROFILE, {
    refetchQueries: [GET_PROFILE],
  });

  const onRegister = (values) => {
    const profile = [...profileData?.profile];

    const isExisted = profile?.some(
      (item) => item.username === values.username
    );

    if (!isExisted) {
      register({
        variables: {
          object: {
            ...values,
          },
        },
        onError: (err) => {
          message.open({
            type: 'error',
            content: `${err.message}`,
          });
        },
        onCompleted: () => {
            navigate('/login')
          Modal.success({
            title: 'Register Success!',
            content: 'Please login using your account',
            centered: true,
          });
        },
      });
    } else {
      Modal.warning({
        title: 'Register Failed!',
        content: 'Your username has already been used',
        centered: true,
      });
    }
  };

  return (
    <>
      <div className="container-center">
      <Card title={<img src={IconPerfume} alt='icon' style={{height: 40, padding: 10}}/>} bodyStyle={{ width: '400px' }}>
          <Gap height={20} />

          <Form form={form} onFinish={onRegister}>
            <Form.Item
              name="firstName"
              rules={[
                {
                  required: true,
                  message: 'Please input your first name!',
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                {
                  required: true,
                  message: 'Please input your last name!',
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Last Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isRegisterLoading}
              block
            >
              Create My Account
            </Button>
            <Gap height={15}/>
            <Text>Already a user?</Text><Link to='/login'>Login</Link>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default RegisterPage;
