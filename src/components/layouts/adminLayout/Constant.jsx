import { Link } from 'react-router-dom';
import { ShoppingCartOutlined, FileAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const SIDE_MENU = [
  {
    label: (
      <Link to="/order">
        <ShoppingCartOutlined /> Orders
      </Link>
    ),
    key: '/order',
  },
  {
    label: (
      <Link to="/dashboard">
        <FileAddOutlined /> Add Product
      </Link>
    ),
    key: '/dashboard',
  },
  {
    label:         <Link to="/login" className="menu-logout">
    <Button
      type="primary"
      onClick={() => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
      }}
    >
      LOGOUT
    </Button>
  </Link>,
  key: '/login'
  }
];
