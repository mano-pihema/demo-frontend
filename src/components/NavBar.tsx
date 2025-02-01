import { Flex, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} p={4}>
      <Text textStyle='2xl' onClick={() => navigate('/')}>
        Task tracker
      </Text>
      <Button onClick={() => navigate('/add')}>Add Task</Button>
    </Flex>
  );
};

export default NavBar;
