import React from 'react';
import Dogstagram from '../components/Dogstagram';
import SEO from '~/components/seo';
import Hero from '~/components/Hero';
import Slider from '~/components/Slider';
import { HomeHeading } from '~/utils/styles';
import styled from 'styled-components';
import ShopProducts from '~/components/ShopProducts';

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  p {
    width: 80%;
    margin: 15px auto;
    line-height: 1.5em;
    @media (min-width: 600px) {
      width: 90%;
      max-width: 600px;
    }
  }
`;

function IndexPage() {
  return (
    <>
      <SEO
        title="Home"
        keywords={['dog treats', 'peanut butter', 'subscription', 'dogs']}
        description="Home page of Peanut Butter Dog Treats"
      />
      <Hero />
      <MainContent>
        <HomeHeading>Peanut Butter Dog Treats</HomeHeading>
        <p>
          These goodies are made with all-natural Oats and gluten-free Peanut
          Butter. No xylitol, no artificial preservatives, no artificial
          flavoring, doggy taste tested!
        </p>
        <p>
          I take your pet's safety seriously, as I do mine. If you have any
          concerns about how and where these treats are made, rest assured that
          I use only non-toxic surface disinfectant and abide by the regulations
          covered under the Texas Cottage Food Law. For more information, please
          read more on the blog.
        </p>
        <Slider />
      </MainContent>
      <ShopProducts />
      <Dogstagram />
    </>
  );
}

export default IndexPage;
