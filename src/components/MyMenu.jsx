import React, { Component } from 'react'
import {
  Box,
  Flex,
  Center,
  Image,
  Text
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import monkey from "../static/images/monkey.png";
import home from "../static/images/defaulthome.png";
import pro from "../static/images/defaultpro.png" 
import ciImg from "../static/images/defaultci.png"  
import appImg from "../static/images/defaultci.png"  
import pagesImg from "../static/images/defaultpages.png"  
import wikiImg from "../static/images/sharpwiki.png"  
import serviceImg from "../static/images/sharpservice.png"  
import userImg from "../static/images/defaultuser.png"  
import teamImg from "../static/images/defaultteam.png"  
import topicImg from "../static/images/defaulttopic.png"  
import MyMenuItem from "./MyMenuItem";
export default class MyMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItemDashboardArr:[
        {
          id:'001',
          iconImg:home,
          linkTitle:'Dashboard',
          path:'/Dashboard'
        }
      ],
      menuItemRelatedArr:[
        {
          id:'001',
          iconImg:pro,
          linkTitle:'Project',
          path:'/Project'
        },
        {
          id:'002',
          iconImg:ciImg,
          linkTitle:'CI',
          path:'/CI'
        },
        {
          id:'003',
          iconImg:appImg,
          linkTitle:'APP',
          path:'/APP'
        },
        {
          id:'004',
          iconImg:home,
          linkTitle:'RT',
          path:'/RT'
        },
        {
          id:'005',
          iconImg:pagesImg,
          linkTitle:'Pages',
          path:'/Pages'
        },
        {
          id:'006',
          iconImg:wikiImg,
          linkTitle:'Wiki',
          path:'/Wiki'
        }
      ],
      menuItemPageArr:[
        {
          id:'001',
          iconImg:serviceImg,
          linkTitle:'Service',
          path:'/Service'
        },
        {
          id:'002',
          iconImg:userImg,
          linkTitle:'User',
          path:'/User'
        },
        {
          id:'003',
          iconImg:teamImg,
          linkTitle:'Team',
          path:'/Team'
        },
        {
          id:'004',
          iconImg:topicImg,
          linkTitle:'Topic',
          path:'/Topic'
        },
      ]
    };
  }
  render() {
    let {menuItemDashboardArr,menuItemRelatedArr,menuItemPageArr} = this.state;
    return (
      <Box width='100%'>
        <Flex>
          <Center as='button' w='30px' h='30px' borderRadius='8px' bg='white' marginRight='10px'>
            <ArrowBackIcon/>
          </Center>
          <Center w='100px'>
            <Image w='100%' src={monkey} alt='monkey' />
          </Center>
        </Flex>
        <Box w='90%' h='1px' bgGradient="linear(to-r, rgba(224, 225, 226, 0),rgba(224, 225, 226, 1),rgba(224, 225, 226, 0.16))" marginTop='30px' marginBottom='33px'></Box>
        {
          menuItemDashboardArr.map((item)=>{
           return <MyMenuItem itemobj={item} key={item.id}></MyMenuItem>
          })
        }
        <Text fontWeight='bold' fontSize={12} fontFamily='Helvetica' color='rgba(0, 0, 0, 0.64)' marginBottom={35}>
          Project Related
        </Text>
        {
          menuItemRelatedArr.map((item)=>{
           return <MyMenuItem itemobj={item} key={item.id}></MyMenuItem>
          })
        }
        <Text fontWeight='bold' fontSize={12} fontFamily='Helvetica' color='rgba(0, 0, 0, 0.64)' marginBottom={35}>
          ACCOUNT PAGES
        </Text>
        {
          menuItemPageArr.map((item)=>{
           return <MyMenuItem itemobj={item} key={item.id}></MyMenuItem>
          })
        }
      </Box>
    )
  }
}
