import React from 'react';
import Gap from '../../components/gap/Gap';
import { Typography } from 'antd';
import './creationPage.css'

const CreationPage = () => {
  const { Text } = Typography;

  return (
    <>
      <div className="creation-page">
        <h1>CREATION OF LAYR</h1>
        <Gap height={20} />
        <Text>
          At LAYR, we believe that fragrance is more than just a scent. It is a
          journey through time, a reflection of the people and places that have
          shaped us, and a reminder of the moments that make up our lives. Our
          fragrances are crafted with the utmost care and attention to detail,
          using only the finest ingredients to create olfactory masterpieces
          that transport you through time and awaken your senses. Each fragrance
          is a unique expression of the art of perfumery, designed to evoke
          memories and emotions that transcend time and place.
        </Text>
        <br />
        <Text>
          From the floral scents of the ancient world, to the spicy and exotic
          scents of the Middle Ages, to the fresh and modern scents of the
          present day, our fragrances are a journey through time and a
          celebration of the olfactory arts.
        </Text>
        <br />
        <Text>
          We believe that fragrance is a powerful force, capable of evoking
          memories and emotions that we thought were long forgotten. That's why
          we created LAYR fragrances, to take you on a journey through the
          history of scent, where fragrance and imagination come together to
          create olfactory masterpieces that awaken the senses and transport you
          through time.
        </Text>
        <br />
        <Text>
          Join us on our olfactory journey through time, where fragrance and
          memory come together to create a symphony of scents that will
          transport you to places you've never been and memories you thought
          you'd forgotten. Experience the power of fragrance with LAYR, and let
          us awaken your senses and transport you through time.
        </Text>
      </div>
    </>
  );
};

export default CreationPage;
