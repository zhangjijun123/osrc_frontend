//引入chakra-ui
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Image,
  Text
} from '@chakra-ui/react';
//从chakra-ui引入需要的icon
import { SearchIcon,BellIcon,SettingsIcon} from '@chakra-ui/icons';
//从静态资源引入需要的图片
import avatar from "../static/images/defaultAvatar.png"
import down from "../static/images/outlinedown.png"
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
    <Box
      h="30px"
      w='99%'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      marginBottom='15px'
    >
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>App</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <InputGroup size='sm' w="40%">
        <InputLeftElement
          pointerEvents='none'
          children={<SearchIcon color='gray.300' />}
        />
        <Input placeholder='Search...' />
      </InputGroup>
      <Box 
        display='flex'
        alignItems='center'
      >
        <Flex alignItems='center' mr='23px'>
          <Image w='12px' h='12px' mr='4px' src={avatar}/>
          <Text color='gray.500' fontSize={12} fontFamily='Helvetica' mr='6px'>Admin</Text>
          <Image w='16px' h='16px' mr='4px' src={down}/>
        </Flex>
        <SettingsIcon w='12px' h='12px' mr='18.5px'></SettingsIcon>
        <BellIcon></BellIcon>
      </Box>
    </Box>
    )
  }
}
