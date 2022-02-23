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
        <Flex alignItems='center' paddingLeft={38} w='100%' h='56px' bg='white' marginBottom='20px'>
          <Center w='30px' h='30px' bg='#FEEBCB' borderRadius={8} marginRight='12px'>
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
