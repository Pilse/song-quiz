/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const RangeInput = styled.input`
  width: 100%;
  border-radius: 50px;
  -webkit-appearance: none;
  outline: none;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    width: 100%;
    height: 20px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.Colors.DarkWhite};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 28px;
    height: 28px;
    background-color: ${({ theme }) => theme.Colors.Primary};
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s ease;
    margin-top: -4px;

    &:active {
      transform: scale(1.1);
    }
  }
`;
