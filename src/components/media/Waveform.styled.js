import styled from "styled-components";

export const WaveformContianer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 70px;
  width: 100%;
  background: transparent;
  gap: 2rem;
  z-index: 0;
`;

export const Wave = styled.div`
  width: 100%;
  height: 90px;
  z-index: 1;
`;

export const StartPoint = styled.span`
  position: absolute;
  bottom: 10px;
  left: 0;
  background-color: black;
  padding: 1.5px;
  z-index: 2;
  font-size: 8px;
  color: white;
`;

export const EndPoint = styled.span`
  position: absolute;
  bottom: 10px;
  right: 0;
  background-color: black;
  padding: 1.5px;
  z-index: 2;
  font-size: 8px;
  color: white;
`;
