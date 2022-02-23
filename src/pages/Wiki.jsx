import React, { Component } from 'react';
import {Grid} from '@chakra-ui/react';
import Card from "../components/Card"
export default class Wiki extends Component {
  render() {
    return (
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Grid>
    )
  }
}
