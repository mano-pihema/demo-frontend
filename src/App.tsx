import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Box } from '@chakra-ui/react/box';

function App() {
  return (
    <>
      <Box background={'gray.300'} minH='100vh'>
        <NavBar />
        <Outlet />
      </Box>
    </>
  );
}

export default App;
