import styled from 'styled-components';
import { TextField, Button} from '@mui/material';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div
      style={{
        backgroundColor: '#323C58',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '65vh', // Adjust the height as needed
        gap: 30,
      }}
    >
      <Welcome />
    </div>
  );
}

function Welcome() {
  return (
    <div>
      <StyledWelcome>
        welcome!
      </StyledWelcome>
      <div>
        <StyledLoginFields style={{ marginBottom: '30px' }}>
        <TextField
          required
          style={{width: '100%', color: '#1E1E1E'}}
          id="outlined-required"
          defaultValue="Username"
        />
        </StyledLoginFields>
      </div>
      <div>
        <StyledLoginFields style={{ marginBottom: '30px'}}>
        <TextField
          required
          style={{width: '100%', color: '#1E1E1E'}}
          id="outlined-required"
          defaultValue="Password"
        />
        </StyledLoginFields>
      </div>
      <div>
        <Button 
          style={{ marginBottom: '30px', width: '314px', height: '52px', borderRadius: '15px', flexShrink: '0'}}
          variant='contained'
          component={Link} 
          to={'/profile'}
        >
            Login
        </Button>
      </div>
      <StyledWelcome style={{fontSize: '18px', color: '#E9E9E9'}}>
        Sign in with
      </StyledWelcome>
    </div>
  );
}

const StyledLoginFields = styled.div`
  width: 314px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #E9E9E9;
  gap: 30px;
`;

const StyledWelcome = styled.h1`
  color: #E9E9E9;
  font-family: Lexend;
  font-size: 54.169px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export default Login;
