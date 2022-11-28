import React, { ReactNode } from 'react'
import { Wrapper } from './IconCircle.style'

interface Props {
  children: ReactNode
  color?: string
}

const IconCircle = (props: Props) => {
  return <Wrapper accent={props.color}>{props.children}</Wrapper>
}

export default IconCircle
