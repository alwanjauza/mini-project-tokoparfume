import { useMutation, useQuery } from '@apollo/client';
import { Button, Card, Form, Input, Modal, Typography, Watermark } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GET_PROFILE } from './query/login-query';
import Gap from '../../components/gap/Gap';
import { ADD_PROFILE } from '../registerPage/query/register-query';
import './loginPage.css'
import { IconPerfume } from '../../assets';

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { Text } = Typography

  const {
    data: profileData,
    loading: isProfileLoading,
    error: isProfileError,
  } = useQuery(GET_PROFILE);

  const [register, { loading: isRegisterLoading }] = useMutation(ADD_PROFILE, {
    refetchQueries: [GET_PROFILE],
  });

  const onLogin = (values) => {
    const profile = [...profileData?.profile];

    const isUser = profile.find((item) => item.username === values.username);

    const isVerified = JSON.stringify(isUser) === JSON.stringify(values);

    if (isVerified) {
      localStorage.setItem('token', true);
      navigate('/');
    } else {
      Modal.warning({
        title: 'Login Failed!',
        content: 'Username/password is not correct',
        centered: true,
        onOk() {
          navigate('/login');
        },
      });
    }
  };

  return (
    <div className='container-center'>
        <Card title="WELCOME" bodyStyle={{ width: '400px' }}>
          <Gap height={20} />

          <Form form={form} onFinish={onLogin}>
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
                Login
            </Button>
            <Text>Dont have an account?</Text><Link to='/register'>Sign up here</Link>
          </Form>
        </Card>
      </div>
  );
};

export default LoginPage;
