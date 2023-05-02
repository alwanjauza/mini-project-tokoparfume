import { Button, Col, Input, Row, Typography } from 'antd';
import { InstagramOutlined } from '@ant-design/icons';
import React from 'react';
import Gap from '../../gap/Gap';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  const { Text } = Typography;

  return (
    <>
      <div className="footer-top">
        <Text strong>We send Emails too! </Text>
        <Text>
          Receive email updates about things you’ll probably want to be the
          first to know before anyone else, like products, launches and events.
          You can unsubscribe anytime.
        </Text>
        <Input placeholder="Enter your email address" name="email" />
        <Button>Subscribe</Button>
      </div>
      <div className="gap-line" />
      <div className="footer-mid">
        <Row>
            <Col span={8}>
                <h4>An Olfactory Experience like never before.</h4>
                <Gap height={20}/>
                <Text>Our perfumes are designed purposely to rebuild your greatest memories and most-wanted dreams. An architecture of fragrance, that becomes the building blocks emotions and the vehicles to your reveries. </Text>
                <a href="www.instagram.com/alwanjauza" target='_blank'><InstagramOutlined /></a>
            </Col>
            <Col span={8}>
                <h4>About LAYR</h4>
                <Gap height={20}/>
                <Link to='/our-story'>OUR STORY</Link>
                <Link to='/our-story'>OUR STORY</Link>
                <Link to='/creation'>CREATION</Link>
            </Col>
            <Col span={8}>
                <h4>Help</h4>
                <Gap height={20}/>
                <Link to='/faq'>FAQ</Link>
                <Link to='/terms-conditions'>TERMS & CONDITION</Link>
                <Link to='/contact'>CONTACT</Link>
            </Col>
        </Row>
      </div>
    </>
  );
};

export default FooterComponent;
