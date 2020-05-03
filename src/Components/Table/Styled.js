import styled from 'styled-components';
import { ButtonStyle } from '../../global-styles';

export const Wrapper = styled.div`
  font-size: 0.5rem;
`;

export const Table = styled.div`
  margin: 0 auto;
  user-select: none;
  cursor: inherit;
`;

export const HeadTr = styled.div`
  background: #ddd;
  display: flex;
  align-items: center;
  padding: 0.2rem 0;
  text-align: center;
`;

export const BodyTr = styled.div`
  display: flex;
  align-items: center;
  transition: background 0.15s ease-in-out;
  padding: 0.2rem 0;
  border-bottom: 1px solid #ddd;
  background: #f2f2f2;
  &:nth-child(even) {
    background: #f5f5f5;
  }
  &:hover {
    background: #ccffff;
  }
`;

export const Th = styled.div`
  flex: ${(props) => props.flex || '1'};
`;

export const Td = styled.div`
  flex: ${(props) => props.flex || '1'};
  text-align: ${(props) => props.align || 'center'};
`;

export const DeleteBtn = styled.button`
  ${ButtonStyle};
  background: #ff0000;
  color: #fff;
  &:active {
    background: #cc0000;
  }
`;
