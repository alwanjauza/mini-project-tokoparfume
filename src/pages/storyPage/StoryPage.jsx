import { Col, Row, Typography } from 'antd';
import React from 'react';
import './storyPage.css'
import Gap from '../../components/gap/Gap';
import { Story } from '../../assets';

const StoryPage = () => {
  const { Text } = Typography;

  return (
    <>
      <div className='our-story'>
        <h1>OUR STORY</h1>
        <Gap height={20}/>
        <img src={Story} alt="story" style={{height: 454}}/>
        <Gap height={20}/>
          <Text>
          LAYR is a Olfactory Architect that creates scents from the study of
          fragrance and imaginations. Each scent that we produce is collected
          from life’s most pleasurable moments—ones that involves nostalgia, and
          are inspired from the near future. Our perfumes are designed purposely
          to rebuild your greatest memories and most-wanted dreams. An
          architecture of fragrance, that becomes the building blocks emotions
          and the vehicles to your reveries.
        </Text>
        <br />
        <br />
        <p className='experience'>Experience the Art of Memory, layer by layer.</p>
      </div>
    </>
  );
};

export default StoryPage;
