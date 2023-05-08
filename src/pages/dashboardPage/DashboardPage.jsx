import React, { useEffect, useState } from 'react';
import './dashboardPage.css';
import {
  Button,
  Form,
  Image,
  Input,
  InputNumber,
  Popconfirm,
  Space,
  Table,
  Typography,
  Upload,
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
import { UploadOutlined } from '@ant-design/icons';
import LoadingComponents from '../../components/layouts/loadingComponents/LoadingComponents/LoadingComponents';

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
    setFileList(newFileList);
  };

  // Image Preview
  const onImagePreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

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
      dataIndex: 'image',
      key: 'image',
      render: (_, record, index) => (
        <Image
          src={record.image}
          alt={`image-${index}`}
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
            <Button onClick={() => handleEdit(record)}>Edit</Button>
            <Popconfirm
              title="Sure to delete?"
              arrow={false}
              onConfirm={() => onDelete(record.uuid)}
            >
            <Button type='primary' danger>
              Delete
            </Button>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  // Handle edit button
  const handleEdit = (row_data) => {
    setRowData(row_data)
    setIsEdit(true)
    setImage(row_data.image)
    formProduct.setFieldsValue({
      productName: row_data.productName,
      productPrice: row_data.productPrice,
      ingredients: row_data.ingredients,
      desc: row_data.desc,
    })
  }

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
      image: image,
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
      variables: { uuid: row_id },
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
    const uuid = rowData.uuid;
    const body = {
      image: image,
      ...values,
    };
    updateProduct({
      variables: { pk_columns: { uuid: uuid }, _set: { ...body } },
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
              message: 'Please input product name!',
            },
          ]}
        >
          <Input placeholder="Product Name" />
        </Form.Item>

        <Form.Item
          name="productPrice"
          label="Harga Produk"
          rules={[
            {
              required: true,
              message: 'Please input product price!',
            },
          ]}
        >
          <InputNumber placeholder="Product Price" />
        </Form.Item>

        <Form.Item label="Product Image">
          <Upload
            showUploadList={false}
            name="image"
            maxCount={1}
            onRemove={() => {
              setImage('');
            }}
            customRequest={() => {}}
            onChange={handleUpload}
          >
            <Button
              icon={<UploadOutlined />}
              type={!image ? 'dashed' : 'default'}
            />
          </Upload>

          {isLoadingUpload ? (
            <LoadingComponents />
          ) : (
            image && (
              <div>
                <Gap height={20} />
                <Image
                  src={image}
                  alt="image"
                  style={{
                    height: '150px',
                    borderRadius: '10px',
                  }}
                />
              </div>
            )
          )}
        </Form.Item>

        <Form.Item
          name="ingredients"
          label="Ingredients"
          rules={[
            {
              required: true,
              message: 'Please input ingredients product!',
            },
          ]}
        >
          <TextArea rows={4} placeholder="Ingredients" />
        </Form.Item>

        <Form.Item
          name="desc"
          label="Deskripsi Produk"
          rules={[
            {
              required: true,
              message: 'Please input description product!',
            },
          ]}
        >
          <TextArea rows={4} placeholder="Description product" />
        </Form.Item>

        {isEdit ? (
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              loading={loadingUpdateProduct}
            >
              Save
            </Button>
            <Button type="primary" onClick={handleCancel} danger>
              Cancel
            </Button>
          </Space>
        ) : (
          <Button type="primary" htmlType="submit" loading={loadingAddProduct}>
            Submit
          </Button>
        )}
      </Form>

      <Gap height={20} />

      <Table
        rowKey="uuid"
        columns={TABLE_COLUMN}
        dataSource={productData?.products}
        loading={isProductLoading || loadingDelete}
      />
    </div>
  );
};

export default DashboardPage;
