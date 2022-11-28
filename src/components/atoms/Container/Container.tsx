import React from 'react'
import { Wrapper } from './Container.style'

interface Props {
  children?: React.ReactNode
}

const Container = (props: Props) => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
