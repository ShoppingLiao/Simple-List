import React, { useState, useEffect, useContext } from 'react';
import {
  Wrapper,
  Content,
  Header,
  Body,
  Item,
  Input,
  CancelBtn,
  Addbtn,
  ErrMsg,
} from './Styled';
import { ContextStore } from '../Main/Main';

const MAIL_REGEXP = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

export default function AddUserModal() {
  const { showModal, _handleCloseModal, _handleAddUser } = useContext(
    ContextStore
  );
  const [nameForAdd, setNameForAdd] = useState('');
  const [nameErrMsg, setNameErrMsg] = useState();
  const [mailForAdd, setMailForAdd] = useState('');
  const [mailErrMsg, setMailErrMsg] = useState();

  useEffect(() => {
    // 每次打開的時候都是空資料
    if (showModal) {
      resetValues();
    }
  }, [showModal]);

  function handleClose() {
    _handleCloseModal();
  }

  function handleNameChange(value) {
    setNameForAdd(value);
  }
  function handleMailChange(value) {
    setMailForAdd(value);
  }

  function handleCheckName() {
    if (nameForAdd.trim().length === 0) {
      setNameErrMsg('Please enter user name!');
      return;
    }

    setNameErrMsg();
  }

  function handleCheckMail() {
    if (mailForAdd.trim().length === 0) {
      setMailErrMsg('Please enter e-mail!');
      return;
    }

    if (!MAIL_REGEXP.test(mailForAdd)) {
      setMailErrMsg('Incorrect email format!');
      return;
    }
    setMailErrMsg();
  }

  function handleAdd() {
    handleCheckName();
    handleCheckMail();
    if (nameForAdd === '' || mailForAdd === '' || nameErrMsg || mailErrMsg) {
      return;
    }

    _handleAddUser(nameForAdd, mailForAdd);
    _handleCloseModal();
  }

  function resetValues() {
    setNameForAdd('');
    setMailForAdd('');
    setNameErrMsg();
    setMailErrMsg();
  }

  return (
    <Wrapper isShow={showModal} onClick={handleClose}>
      <Content
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Header>Add User</Header>
        <Body>
          <Item>
            <label>Name:</label>
            <Input
              type='text'
              placeholder='New user'
              hasWrong={!!nameErrMsg}
              value={nameForAdd}
              onChange={(e) => handleNameChange(e.target.value)}
              onBlur={handleCheckName}
            />
            <ErrMsg>{nameErrMsg}</ErrMsg>
          </Item>
          <Item>
            <label>Email:</label>
            <Input
              type='text'
              placeholder='new_user@gmail.com'
              hasWrong={!!mailErrMsg}
              value={mailForAdd}
              onChange={(e) => handleMailChange(e.target.value)}
              onBlur={handleCheckMail}
            />
            <ErrMsg>{mailErrMsg}</ErrMsg>
          </Item>
          <Item>
            <CancelBtn onClick={handleClose}>Cancel</CancelBtn>
            <Addbtn onClick={handleAdd}>Add</Addbtn>
          </Item>
        </Body>
      </Content>
    </Wrapper>
  );
}
