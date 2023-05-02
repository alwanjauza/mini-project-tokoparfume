import { Col, Collapse, Row, Typography } from 'antd';
import React from 'react';
import Gap from '../../components/gap/Gap';
import './faqPage.css';

const FaqPage = () => {
  const { Text } = Typography;
  const { Panel } = Collapse;
  const panelStyle = {
    background: '#fff',
    border: 'none',
  };

  return (
    <>
      <div className="faq-page">
        <Gap height={70} />
        <Row>
          <Col span={10}>
            <div className="scroll-view">
              <a href="#" className="product">
                <Text>PRODUCT</Text>
              </a>
              <br />
              <a href="#shipping" className="shipping">
                <Text>SHIPPING</Text>
              </a>
            </div>
          </Col>
          <Col span={14}>
            <h1 id="product">PRODUCTS</h1>
            <Gap height={20} />
            <Collapse accordion bordered={false}>
              <Panel
                header="What kind of fragrances does LAYR offer?"
                style={panelStyle}
              >
                <Text>
                  We offer a range of fragrances for both men and women, in
                  extrait de perfume concentration. Our fragrances are created
                  using the finest ingredients and are designed to evoke a sense
                  of luxury and sophistication.
                </Text>
              </Panel>
              <Panel
                header="Are your perfume tested on animal?"
                style={panelStyle}
              >
                <Text>
                  No, our perfumes are not tested on animals. We believe in
                  using ethical and sustainable practices throughout our entire
                  production process, including testing.
                </Text>
              </Panel>
              <Panel
                header="Dose your perfume use animal-based musk?"
                style={panelStyle}
              >
                <Text>
                  No, our perfumes do not use any animal-based musk. We use only
                  synthetic musk, which is a safer and more sustainable
                  alternative.
                </Text>
              </Panel>
              <Panel
                header="Why don't you use animal-based musk in your perfumes?"
                style={panelStyle}
              >
                <Text>
                  Animal-based musk is often obtained through inhumane and
                  unsustainable practices, such as trapping and killing wild
                  animals. Synthetic musk is a safer and more ethical
                  alternative that does not harm animals.
                </Text>
              </Panel>
              <Panel
                header="How do your perfume compare in terms of quality to other perfumes that use animal-based musk?"
                style={panelStyle}
              >
                <Text>
                  Our perfumes are of the highest quality, and we believe that
                  synthetic musk is a superior alternative to animal-based musk.
                  Synthetic musk is safer, more sustainable, and has a more
                  consistent scent profile than animal-based musk.
                </Text>
              </Panel>
              <Panel
                header="What is the longevity of your perfumes?"
                style={panelStyle}
              >
                <Text>
                  The longevity of our perfumes varies depending on the specific
                  fragrance and individual body chemistry. However, our perfumes
                  are designed to last for several hours and can be re-applied
                  as needed throughout the day
                </Text>
              </Panel>
              <Panel
                header="How should I store my LAYR fregrance?"
                style={panelStyle}
              >
                <Text>
                  To ensure the longevity of your fragrance, we recommend
                  storing it in a cool, dry place away from direct sunlight and
                  heat.
                </Text>
              </Panel>
              <Panel
                header="Are LAYR fragrences suitable for sensitive skin?"
                style={panelStyle}
              >
                <Text>
                  Our fragrances are created using high-quality ingredients and
                  are generally safe for most skin types. However, if you have
                  particularly sensitive skin or are prone to allergic
                  reactions, we recommend testing a small amount of the
                  fragrance on your skin before applying it more widely.
                </Text>
              </Panel>
            </Collapse>
            <Gap height={30} />
            <h1 id="shipping">SHIPPING</h1>
            <Collapse accordion bordered={false}>
              <Panel
                header="Why haven't I received my tracking number?"
                style={panelStyle}
              >
                <Text>
                  Please allow 1-2 days until our delivery partner register your
                  tracking number. But don’t worry, it doesn’t mean your product
                  is not already on its way to you. You will be given an email
                  notification containing your tracking number. If it still
                  doesn’t work contact us directly through our whatsapp at
                  +62821-4108-3589
                </Text>
              </Panel>
              <Panel
                header="Can I change my shipping address?"
                style={panelStyle}
              >
                <Text>
                  We don’t see why not! As long as it has not been shipped
                  though. Immediately notify us at admin@layrfragrance.com or
                  chat us at +62821-4108-3589!
                </Text>
              </Panel>
              <Panel
                header="Which countries do you ship to?"
                style={panelStyle}
              >
                <Text>
                  We are based in Indonesia and prioritize nation-wide orders.
                  However it is not impossible for us to ship overseas. Contact
                  us at admin@layrfragrance.com or +62-813-1238-9001 and we will
                  help you with the details!
                </Text>
              </Panel>
              <Panel
                header="I think my order is lost in the mail..."
                style={panelStyle}
              >
                <Text>
                  So sorry to hear that! Please contact us directly through our
                  mobile customer service at whatsapp (+62821-4108-3589!) and
                  we’ll work something out.{' '}
                </Text>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FaqPage;
