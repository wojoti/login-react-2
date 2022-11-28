import React from 'react'
import { StyledIcon } from './Icon.style'
export enum IconType {
  facebook = './img/facebook.svg',
  linkedin = './img/linkedin.svg',
  google = './img/google.svg',
}

interface Props {
  type: IconType
  width: number
  height: number
  alt: string
}

export const Icon = (props: Props) => {
  return (
    <StyledIcon
      src={props.type}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  )
}
