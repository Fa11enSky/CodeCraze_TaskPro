import Container from 'components/Container/container';
import { Welcome } from 'components/Welcome/Welcome.styled';
// import WelcomeInner from 'components/Welcome/Welcome';
import React from 'react';
import AddColumnModal from '../components/AddColumnModal/AddColumnModal';

const WelcomePage = () => {
  return (
    <Welcome>
      <Container>
        {/* <WelcomeInner /> */}
        <AddColumnModal />
      </Container>
    </Welcome>
  );
};

export default WelcomePage;
