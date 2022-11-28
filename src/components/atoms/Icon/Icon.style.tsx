import styled from 'styled-components'
interface Props {
  width: number
  height: number
}
export const StyledIcon = styled.img<Props>`
  width: ${(props) => props.width || 0}px;
  height: ${(props) => props.height || 0}px;
`
