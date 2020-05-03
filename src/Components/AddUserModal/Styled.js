import styled from 'styled-components';
import { ButtonStyle } from '../../global-styles';

export const Wrapper = styled.div`
  opacity: ${(props) => (props.isShow ? '1' : '0')};
  z-index: ${(props) => (props.isShow ? '1' : '-1')};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;

export const Content = styled.div`
  margin: 10% auto;
  width: 10rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
  background: #ddd;
  font-size: 0.8rem;
  padding: 0.2rem 0.4rem;
  border-radius: 16px 16px 0 0;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.5rem;
  align-items: center;
  height: 6rem;
  background: #f2f2f2;
  border-radius: 0 0 16px 16px;
  justify-content: center;
`;

export const Item = styled.div`
  margin: 0.2rem 0;
  padding: 0.2rem 0;
  display: flex;
  align-items: center;
  position: relative;
  label {
    flex: 1;
    text-align: right;
    padding-right: 0.2rem;
  }
`;

export const Input = styled.input`
  transition: border-color 0.2s ease-in-out;
  ${(props) => props.hasWrong && `border-color: #ff0000`};
`;

export const CancelBtn = styled.button`
  ${ButtonStyle}
  width: 2.5rem;
  background: #ddd;
  color: #666;
  &:active {
    background: #bbb;
  }
`;

export const Addbtn = styled.button`
  ${ButtonStyle}
  width: 2.5rem;
  background: #0066ff;
  color: #fff;
  &:active {
    background: #0052cc;
  }
`;

export const ErrMsg = styled.div`
  position: absolute;
  bottom: -0.3rem;
  left: 1.7rem;
  color: #ff0000;
  height: 0.5rem;
  line-height: 0.5rem;
`;
