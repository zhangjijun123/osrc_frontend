import React, { Component } from 'react'
import { GridItem,Box,Center,Image,Container} from '@chakra-ui/react'
import iCon from "../static/images/jimu.png"
export default class Card extends Component {
  render() {
    return (
      <GridItem position='relative' w='100%' h='260px' boxShadow='lg' rounded='md' bg='white'>
        <Box padding="34px 0 17px 28px">
          <Box display='flex'>
            <Box w='60px' h='60px' marginRight={22} position='relative'>
              <Image w='100%' h='100%' src={iCon} alt='squre' />
              <Center w='20px' h='20px' borderRadius='50%' bg='#38B2AC' position='absolute' right={0} bottom={0} fontSize='14px' color={'white'}>A</Center>
            </Box>
            <Box>
              <Box color='rgba(0, 0, 0, 0.92)' fontSize={20} marginBottom={2}>jimureport</Box>
              <Box display='flex' color='#A0AEC0' fontSize={14}>
                <Box display='flex'>
                  Owner:<Container color='#9C4221'>OSRC</Container>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box display='flex' marginTop={5}>
            <Center bg='#A0AEC0' h='24px' p={4} color='white' borderRadius={6} marginRight='4px'>
              react
            </Center>
            <Center bg='#A0AEC0' h='24px' p={4} color='white' borderRadius={6} marginRight='4px'>
              react
            </Center>
          </Box>
          <Box marginTop={12}>mall-admin project</Box>
        </Box>
        <Box 
          display='flex' 
          alignItems='center' 
          position='absolute' 
          left='0' 
          bottom='0' 
          w='100%' 
          h='66px' 
          bg='#f0f4f6' 
          borderRadius='0px 0px 7px 7px'
        >
          <Box h='100%' 
            w='85px' 
            display='flex' 
            alignItems='center' 
            justifyContent='center'
            fontWeight='bold'
            fontSize='16px'
            color='#4A5568'
            >1.00G</Box>
            <Box display='flex' flex='1' paddingRight='8px' alignItems='center' justifyContent='space-between'>
              <Box>
                <Box color='#DD6B20'>10</Box> 
                <Box fontSize='12px' color='gray.70'>Instances</Box>
              </Box>
              <Box>
                <Box color='#DD6B20'>3</Box> 
                <Box fontSize='12px' color='gray.70'>Program</Box>
              </Box>
            </Box>
        </Box>
      </GridItem>
    )
  }
}
