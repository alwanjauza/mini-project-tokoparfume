import React, { useEffect, useState } from 'react';
import './dashboardPage.css';
import {
  Form,
  Image,
  Input,
  InputNumber,
  Popconfirm,
  Space,
  Table,
  Typography,
  message,
} from 'antd';
import { useMutation, useQuery } from '@apollo/client';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
} from './query/product-query';
import { useSingleUploader } from '../../hooks/useSingleUploader';
import { INITIAL_TABLE_DATA } from './constant';
import { uploaderConfig } from '../../config/uploaderConfig';
import Gap from '../../components/gap/Gap';
import { ImgCropProps } from 'antd-img-crop';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const DashboardPage = () => {
  const { Title } = Typography;
  const { TextArea } = Input;
  const [formProduct] = Form.useForm();
  const [image, setImage] = useState('');
  const [fileList, setFileList] = useState('');

  // Image Change
  const onImageChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  // Image Preview
  const onImagePreview = async (file) => {
    let src = file.url
    if (!src) {
        src = await new Promise((resolve) => {
            const reader = new FileReader()
            reader.readAsDataURL(file.originFileObj)
            reader.onload = () => resolve(reader.result)
        })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }

  // GET DATA
  const {
    data: productData,
    loading: isProductLoading,
    error: productError,
  } = useQuery(GET_PRODUCT);

  // ADD DATA
  const [addProduct, { loading: loadingAddProduct }] = useMutation(
    ADD_PRODUCT,
    {
      refetchQueries: [GET_PRODUCT],
    }
  );

  // UPDATE DATA
  const [updateProduct, { loading: loadingUpdateProduct }] = useMutation(
    UPDATE_PRODUCT,
    {
      refetchQueries: [GET_PRODUCT],
    }
  );

  // DELETE DATA
  const [deleteProduct, { loading: loadingDelete }] = useMutation(
    DELETE_PRODUCT,
    {
      refetchQueries: [GET_PRODUCT],
    }
  );

  // UPLOAD IMAGE
  const [isLoadingUpload, uploadFile] = useSingleUploader();

  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const TABLE_COLUMN = [
    {
      title: 'Product Image',
      dataIndex: 'productPict',
      key: 'productPict',
      render: (_, record, index) => (
        <Image
          src={record.productPict}
          alt={`productPict-${index}`}
          style={{ height: '50px' }}
        />
      ),
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Product Price',
      dataIndex: 'productPrice',
      key: 'productPrice',
    },
    {
      title: 'Ingredients',
      dataIndex: 'ingredients',
      key: 'ingredients',
    },
    {
      title: 'Description',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
            <a onClick={() => handleEdit(record)}>Edit</a>
            <Popconfirm
              title="Sure to delete?"
              arrow={false}
              onConfirm={() => onDelete(record.id)}
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  // Handle cancel button
  const handleCancel = () => {
    setRowData();
    setImage('');
    setIsEdit(false);
    formProduct.resetFields();
  };

  // Add data to table
  const onAdd = (values) => {
    const body = {
      productPict: productPict,
      ...values,
    };
    addProduct({
      variables: {
        object: {
          ...body,
        },
      },
      onError: (err) => {
        message.open({
          type: 'error',
          content: `${err?.message}`,
        });
      },
      onCompleted: () => handleCancel(),
    });
  };

  // Delete data from table
  const onDelete = (row_id) => {
    deleteProduct({
      variables: { id: row_id },
      onError: (err) => {
        message.open({
          type: 'error',
          content: `${err?.message}`,
        });
      },
    });
  };

  // Edit data from table
  const onEdit = (values) => {
    const id = rowData.id;
    const body = {
      productPict: productPict,
      ...values,
    };
    updateProduct({
      variables: { pk_columns: { id: id }, _set: { ...body } },
      onCompleted: () => {
        handleCancel();
      },
      onError: (err) => {
        message.open({
          type: 'error',
          content: `${err?.message}`,
        });
      },
    });
  };

  // Upload image
  const handleUpload = async (file) => {
    const body = {
      file: await getBase64(file.file.originFileObj),
      upload_preset: uploaderConfig.upload_preset,
      public_id: file.file.name.replace(/\.[^.]*$/, ''),
      api_key: uploaderConfig.api_key,
    };
    uploadFile(body, (data) => {
      setImage(data.url);
    });
  };

  useEffect(() => {
    if (productError) {
      message.open({
        type: 'error',
        content: `${productError?.message}`,
      });
    }
  }, [productError]);

  return (
    <div>
      <Title>Product List</Title>

      <Form
        name="form-product"
        form={formProduct}
        layout="horizontal"
        onFinish={isEdit ? onEdit : onAdd}
        colon={false}
        style={{
          width: '800px',
        }}
        labelAlign="left"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
      >
        <Form.Item
        name="productName"
        label="Nama Produk"
        rules={[
            {
                required: true,
                message: "Please input product name!"
            }
        ]}>
            <Input placeholder='Product Name' />
        </Form.Item>

        <Form.Item
        name="productPrice"
        label="Harga Produk"
        rules={[
            {
                required: true,
                message: "Please input product price!",
                min: 1
            }
        ]}>
            <InputNumber placeholder='Product Price' />
        </Form.Item>
      </Form>

      <Form.Item
      label="Product Image">
        <ImgCropProps rotati/>
      </Form.Item>

      <Gap height={20} />

      <Table
        rowKey="id"
        columns={TABLE_COLUMN}
        dataSource={productData?.products}
        loading={isProductLoading || loadingDelete}
      />
    </div>
  );
};

export default DashboardPage;
