import styled from 'styled-components'
interface Props {
  mt?: number
  mb?: number
  ml?: number
  mr?: number
  pt?: number
  pb?: number
  pl?: number
  pr?: number
  justify?: string
  items?: string
}

export const Wrapper = styled.div<Props>`
  margin-top: ${(props) => props.mt || 0}px;
  margin-bottom: ${(props) => props.mb || 0}px;
  margin-left: ${(props) => props.ml || 0}px;
  margin-right: ${(props) => props.mr || 0}px;
  padding-top: ${(props) => props.pt || 0}px;
  padding-bottom: ${(props) => props.pb || 0}px;
  padding-left: ${(props) => props.pl || 0}px;
  padding-right: ${(props) => props.pr || 0}px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || 'start'};
  align-items: ${(props) => props.items || 'start'};
`
