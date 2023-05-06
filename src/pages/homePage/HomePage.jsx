import { Button, Carousel, Col, Image, Row, Typography } from 'antd';
import React from 'react';
import {
  GetNaked,
  GetNakedCarousel,
  GetNakedRose,
  GetNakedZoom,
  MidnightHaze,
  MidnightHazeCarousel,
  MidnightHazeRose,
  MidnightHazeZoom,
  SecondSkin,
  SecondSkinCarousel,
  SecondSkinRose,
  SecondSkinZoom,
} from '../../assets';
import './homePage.css';
import { Link } from 'react-router-dom';
import Gap from '../../components/gap/Gap';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../dashboardPage/query/product-query';

const HomePage = () => {
  const { Text } = Typography;

    // GET DATA
    const {
      data: productData,
      loading: isProductLoading,
      error: productError,
    } = useQuery(GET_PRODUCT);

  return (
    <>
      <div className="carousel-banner-top">
        <Carousel className="carousel-top" autoplay>
          <div>
            <h3>
              <img src={MidnightHaze} alt="MidnightHaze" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={SecondSkin} alt="SecondSkin" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={GetNaked} alt="GetNaked" />
            </h3>
          </div>
        </Carousel>
      </div>
      <div className="our-perfume">
        <h1>OUR PERFUME</h1>
        <Gap height={20}/>
        <Row className="zoom-img" gutter={[0, 40]}>
          {productData?.products?.map((item, index) => (
            <Col span={8} key={index}>
              <img src={item.image} alt={item.image}/>
              <h3>{item.productName}</h3>
              <Text>{item.productPrice}</Text>
            </Col>
          ))}
        </Row>
        <Link to='/shop'><Button>VIEW ALL PRODUCT</Button></Link>
      </div>
      <div className="carousel-banner-bot">
        <Carousel className="carousel-top" autoplay>
          <div>
            <Link to="/midnight-haze">
              <h3>
                <img src={MidnightHazeCarousel} alt="MidnightHaze" />
              </h3>
            </Link>
          </div>
          <div>
            <Link to="/second-skin">
              <h3>
                <img src={SecondSkinCarousel} alt="SecondSkin" />
              </h3>
            </Link>
          </div>
          <div>
            <Link to="/get-naked">
              <h3>
                <img src={GetNakedCarousel} alt="GetNaked" />
              </h3>
            </Link>
          </div>
        </Carousel>
      </div>
      <div className="meet-layr">
        <h1>MEET LAYR.</h1>
        <br />
        <Text>
          LAYR is a Olfactory Architect that creates scents from the study of
          fragrance and imaginations. Each scent that we produce is collected
          from life’s most pleasurable moments—ones that involves nostalgia, and
          are inspired from the near future.{' '}
        </Text>
        <br />
        <br />
        <Text>Experience the Art of Memory, layer by layer.</Text>
      </div>
      <div className="image-bot">
        <Row>
          <Col span={8}>
            <div className="midnighthaze-zoom">
              <Link to="/midnight-haze">
                <img src={MidnightHazeRose} />
              </Link>
            </div>
          </Col>
          <Col span={8}>
            <div className="getnaked-zoom">
              <Link to="/get-naked">
                <img src={GetNakedRose} />
              </Link>
            </div>
          </Col>
          <Col span={8}>
            <div className="secondskin-zoom">
              <Link to="/second-skin">
                <img src={SecondSkinRose} />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomePage;
