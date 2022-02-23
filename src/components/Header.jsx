//引入chakra-ui
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { SearchIcon,BellIcon,SettingsIcon} from '@chakra-ui/icons';

import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
    <Box
      h="40px"
      w='100%'
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
        w="15%" 
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        Sign In
        <SettingsIcon></SettingsIcon>
        <BellIcon></BellIcon>
      </Box>
    </Box>
    )
  }
}
