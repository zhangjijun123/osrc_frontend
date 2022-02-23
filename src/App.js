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
import Dashboard from "./pages/Dashboard"
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
          <Box overflowY='auto' width="270px" height="100%" boxSizing='border-box' p='40px 19px 40px 24px'>
            <MyMenu></MyMenu>
          </Box>
          <Box flex="1" display='flex' flexDirection='column' height='100%' boxSizing='border-box' p='33px 18px 0px 41px'>
            <Header></Header>
            <Box flex='1' overflowY='auto' p='10px' boxSizing='border-box'>
              <Routes>
                <Route path="/Dashboard" element={<Dashboard></Dashboard>}/>
                <Route path="/Project" element={<Deving></Deving>}/>
                <Route path="/CI" element={<Deving></Deving>}/>
                <Route path="/APP" element={<Deving></Deving>}/>
                <Route path="/RT" element={<Deving></Deving>}/>
                <Route path="/Pages" element={<Deving></Deving>}/>
                <Route path="/Service" element={<Deving></Deving>}/>
                <Route path="/User" element={<Deving></Deving>}/>
                <Route path="/Team" element={<Deving></Deving>}/>
                <Route path="/Topic" element={<Deving></Deving>}/>
                <Route path="/" element={<Dashboard></Dashboard>}/>
              </Routes>
            </Box>
          </Box>
        </Flex>
      </ChakraProvider>
  );
}

export default App;
