import { useParams } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import Container from 'components/Container/container';
import { Welcome } from 'components/Welcome/Welcome.styled';
import NotFound from 'components/NotFound/NotFound';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <Welcome>
      <Container>
        {id === 'login' ? (
          <LoginForm />
        ) : id === 'register' ? (
          <RegisterForm />
        ) : (
          <NotFound />
        )}
      </Container>
    </Welcome>
  );
};

export default AuthPage;
