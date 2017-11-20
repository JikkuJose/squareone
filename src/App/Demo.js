import React from "react"
import styled from 'styled-components'

import Bicycle from '../icons/Bicycle'

import SpringUpOnHover from '../animations/SpringUpOnHover'

import { names } from '../data/names'

export default function Demo() {
  return (
    <Container>
      <Header>
      <SpringUpOnHover scaleTo={1.3} >
        <Bicycle size={20} />
      </SpringUpOnHover>
        <Title>Standard Template</Title>        
      </Header>      
      <Content>
        <SpringUpOnHover scaleTo={1.1} >
          <Popper>Hover Over Me!</Popper>
        </SpringUpOnHover>
        <Heading>
          Project to Rule Them All
        </Heading>
        <Author>{names.join(", ")}</Author>
        <Body>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
        </Body>         
      </Content>      
    </Container>
  )
}

const Popper = styled.div.attrs({
  className: 'pointer f6 mb3 h3 bg-gray br2 popout1 ca ttu montserrat white'
})``

const Container = styled.div.attrs({
  className: 'bg-yellow'
})``

const Header = styled.div.attrs({
  className: 'bg-blue white sans-serif h3 flex items-center ph3'
})``

const Title = styled.div.attrs({
  className: 'ml2 f4 pa1 avenir ttu tracked'
})``

const SubTitle = styled.div.attrs({
  className: 'f6 pa1'
})``

const Content = styled.div.attrs({
  className: 'pa3 measure'
})``

const Heading = styled.div.attrs({
  className: 'pa1 pacifico f2 black-70'
})``

const Body = styled.div.attrs({
  className: 'pa1 f5 open-sans mb2'
})``

const Author = styled.div.attrs({
  className: 'mt3 mb2 pa1 f6 ttu tracked montserrat'
})``