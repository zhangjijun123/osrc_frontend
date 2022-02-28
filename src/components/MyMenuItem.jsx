import React, { Component } from 'react'
import {
  Flex,
  Center,
  Image,
  Text
} from '@chakra-ui/react';
import {NavLink} from "react-router-dom";
export default class MyMenuItem extends Component {
  render() {
    let {itemobj} = this.props;
    return (
      <NavLink to={itemobj.path}>
        <Flex className ='active-menu-item' alignItems='center' height='56px' marginBottom='20px'>
          <Center w='30px' h='30px' bgColor='#FEEBCB' borderRadius={8} marginLeft='30px' marginRight='12px'>
            <Image w='16px' src={itemobj.iconImg} alt='home'/> 
          </Center>
          <Text color='rgba(0, 0, 0, 0.36)' fontSize={12}>
              {itemobj.linkTitle}
          </Text>
        </Flex>
      </NavLink>
    )
  }
}
