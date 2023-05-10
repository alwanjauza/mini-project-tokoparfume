import { Button, Col, Input, Row, Typography } from 'antd';
import { InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import React from 'react';
import Gap from '../../gap/Gap';
import { Link } from 'react-router-dom';
import './footerComponent.css';

const FooterComponent = () => {
  const { Text } = Typography;
  const styleLink = {
    textDecoration: 'none',
    color: 'black'
  }

  return (
    <div className='footer'>
      <div className="footer-top">
        <Text>
          <b>We send Emails too! </b>
          Receive email updates about things you’ll probably want to be the
          first to know before anyone else, like products, launches and events.
          You can unsubscribe anytime.
        </Text>
      </div>
      <div className="gap-line" />
      <Gap height={50}/>
      <div className="footer-mid">
        <Row>
          <Col span={8}>
            <div className="about-product">
            <h4>An Olfactory Experience like never before.</h4>
            <Gap height={20} />
            <Text>
              Our perfumes are designed purposely to rebuild your greatest
              memories and most-wanted dreams. An architecture of fragrance,
              that becomes the building blocks emotions and the vehicles to your
              reveries.
            </Text>
            <br />
            <a href="https://www.instagram.com/alwanjauza/"
            target="_blank"
            style={styleLink}
            className='ig-icon'>
              <InstagramOutlined />
            </a>
            <a href="https://www.linkedin.com/in/alwan-jauza-r-057556275"
            target='_blank'
            style={styleLink}>
            <LinkedinOutlined />
            </a>
            </div>
          </Col>
          <Col span={8}>
            <div className="about-layr">
            <h4>About LAYR</h4>
            <Gap height={20} />
            <Link to="/our-story" style={styleLink}>OUR STORY</Link>
            <Gap height={10}/>
            <Link to="/our-story" style={styleLink}>OUR STORY</Link>
            <Gap height={10}/>
            <Link to="/creation" style={styleLink}>CREATION</Link>
            </div>
          </Col>
          <Col span={8}>
            <div className="help">
            <h4>Help</h4>
            <Gap height={20} />
            <Link to="/faq" style={styleLink}>FAQ</Link>
            <Gap height={10}/>
            <Link to="/terms-conditions" style={styleLink}>TERMS & CONDITION</Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FooterComponent;
