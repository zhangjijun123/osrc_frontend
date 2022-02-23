//引入chakra-ui
import {
  ChakraProvider,
  Box,
  theme,
  Flex
} from '@chakra-ui/react';

//引入路由相关
import {Routes,Route} from "react-router-dom";

//引入页面
import Wiki from "./pages/Wiki"
import Deving from "./pages/Deving"

//引入组件
import MyMenu from "./components/MyMenu";
import Header from './components/Header';

//引入全局样式
import './gStyle.css';

function App() {
  return (
      <ChakraProvider theme={theme}>
        <Flex width='100%' height='100vh' bg='#F7FAFC'>
          <Box overflowY='auto' width="270px" height="100%" boxSizing='border-box' p='40px 19px 0px 24px'>
            <MyMenu></MyMenu>
          </Box>
          <Box flex="1" display='flex' flexDirection='column' height='100%' boxSizing='border-box' p='33px 8px 0px 41px'>
            <Header></Header>
            <Box flex='1' overflowY='auto'>
              <Routes>
                <Route path="/wiki" element={<Wiki></Wiki>}/>
                <Route path="/Deving" element={<Deving></Deving>}/>
                <Route path="/" element={<Wiki></Wiki>}/>
              </Routes>
            </Box>
          </Box>
        </Flex>
      </ChakraProvider>
  );
}

export default App;
