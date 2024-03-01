import Container from 'components/Container/container';
import Welcome from 'components/Welcome/Welcome.styled';
import WelcomeInner from 'components/Welcome/Welcome';
import React from 'react';

const WelcomePage = () => {
  return (
    <Welcome>
      <Container>
        <WelcomeInner />
      </Container>
    </Welcome>
  );
};

export default WelcomePage;
