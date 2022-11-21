import styled from "styled-components";
export const WrapperA = styled.div`
  width: 100%;
`;
export const WrapperB = styled.div`
  height: 2px;
  width: 100%;
  background-color: rgb(229 231 235);
`;
export const WrapperC = styled.div`
  position: relative;
`;
export const Text = styled.p`
  border: 1px solid rgb(156 163 175);
  border-radius: 4px;
  position: absolute;
  background-color: white;
  font-size: 14px;
  color: rgb(156 163 175);
  top: 50%;
  left: 50%;
  padding: 1px 2px;
  transform: translateX(-50%) translateY(-50%);
`;
