import { Spin } from 'antd';
import React from 'react';
import './loadingComponents.css'

const LoadingComponents = () => {
    return (
        <div className='loading-container'>
            <Spin size='large' tip='Loading . . . '/>
        </div>
    );
}

export default LoadingComponents;
