import React from 'react';
import './orderPage.css'
import { Table } from 'antd';
import { GET_ORDERS } from './query/get-order';
import { useQuery } from '@apollo/client';
import Gap from '../../components/gap/Gap';

const OrderPage = () => {
  // GET DATA
  const {
    data: orderData,
    loading: isOrderLoading,
    error: orderError,
  } = useQuery(GET_ORDERS);

    const TABLE_COLUMN = [
        {
          title: 'Order Time',
          dataIndex: 'orderTime',
          key: 'orderTime',
        },
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName',
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Postal Code',
          dataIndex: 'postalCode',
          key: 'postalCode',
        },
        {
          title: 'Phone Number',
          dataIndex: 'phone',
          key: 'phone',
        },
    ]

    return (
        <div className='order-page'>
            <Gap height={100}/>
            <h1>Order list</h1>
        <Gap height={50}/>
            <Table
            rowKey='uuid'
            columns={TABLE_COLUMN}
            dataSource={orderData?.orders}
            loading={isOrderLoading}/>
        </div>
    );
}

export default OrderPage;
