import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { Wrapper, Header, AddUserBtn, HeaderItem } from './Styled';
import Table from '../Table';
import AddUserModal from '../AddUserModal';

export const ContextStore = createContext();

const SORT_KEYS = {
  ASC_ID: 'asc_id',
  DESC_ID: 'desc_id',
  ASC_NAME: 'asc_name',
};

export default function Main() {
  const [data, setData] = useState();
  const [idForAdd, setIdForAdd] = useState();
  const [showModal, setShowModal] = useState(false);
  const [filterKey, setFilterKey] = useState('');
  const [sortKey, setSortKey] = useState(SORT_KEYS.ASC_ID);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    if (res && res.status === 200) {
      setData(res.data);

      setIdForAdd(res.data[res.data.length - 1].id + 1);
    }
  }

  function handleDeleteItem(id) {
    const newData = [...data];
    const targetIdx = newData.findIndex((item) => item.id === id);
    newData.splice(targetIdx, 1);
    setData(newData);
  }

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleAddUser(name, email) {
    console.log('name', name, 'mail', email);

    const newData = [...data];
    newData.push({ id: idForAdd, name, email });

    setData(newData);
    setIdForAdd(idForAdd + 1);
  }

  function handleFilterKeyChange(value) {
    setFilterKey(value);
  }

  function handleSortKeyChange(key) {
    let newData = [...data];

    switch (key) {
      case SORT_KEYS.ASC_ID: {
        newData = newData.sort((a, b) => a.id - b.id);
        break;
      }
      case SORT_KEYS.DESC_ID: {
        newData = newData.sort((a, b) => b.id - a.id);
        break;
      }
      case SORT_KEYS.ASC_NAME: {
        // https://stackoverflow.com/questions/51165/how-to-sort-strings-in-javascript
        newData = newData.sort((a, b) => ('' + a.name).localeCompare(b.name));
        break;
      }
      default:
        break;
    }

    setSortKey(key);
    setData(newData);
  }

  if (!data) {
    return <Wrapper>Loading...</Wrapper>;
  }

  return (
    <ContextStore.Provider
      value={{
        data,
        showModal,
        filterKey,
        _handleDeleteItem: handleDeleteItem,
        _handleCloseModal: handleCloseModal,
        _handleAddUser: handleAddUser,
      }}
    >
      <Wrapper>
        <Header>
          <HeaderItem>
            <label>Filter by:</label>
            <input
              type='text'
              placeholder='Name'
              value={filterKey}
              onChange={(e) => handleFilterKeyChange(e.target.value)}
            />
          </HeaderItem>
          <HeaderItem>
            <label>Sort by:</label>
            <select
              value={sortKey}
              onChange={(e) => handleSortKeyChange(e.target.value)}
            >
              <option value={SORT_KEYS.ASC_ID}>ID (ascending order)</option>
              <option value={SORT_KEYS.DESC_ID}>ID (descending order)</option>
              <option value={SORT_KEYS.ASC_NAME}>Name (a - z)</option>
            </select>
          </HeaderItem>
          <HeaderItem>
            <AddUserBtn onClick={handleOpenModal}>addUser</AddUserBtn>
          </HeaderItem>
        </Header>
        <Table />
        <AddUserModal />
      </Wrapper>
    </ContextStore.Provider>
  );
}
