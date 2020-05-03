import React, { useContext } from 'react';
import { Wrapper, Table, Th, HeadTr, BodyTr, Td, DeleteBtn } from './Styled';
import { ContextStore } from '../Main/Main';

export default function TableComponent() {
  const { data, filterKey, _handleDeleteItem } = useContext(ContextStore);

  return (
    <Wrapper>
      <Table>
        <HeadTr>
          <Th>ID</Th>
          <Th flex='3'>Name</Th>
          <Th flex='3'>Email</Th>
          <Th />
        </HeadTr>
        {data.map(({ id, name, email }) => {
          if (name.indexOf(filterKey) < 0) {
            return null;
          }
          return (
            <BodyTr key={`user_${id}`}>
              <Td>{id}</Td>
              <Td align='left' flex='3'>
                {name}
              </Td>
              <Td align='left' flex='3'>
                {email}
              </Td>
              <Td>
                <DeleteBtn onClick={() => _handleDeleteItem(id)}>
                  Delete
                </DeleteBtn>
              </Td>
            </BodyTr>
          );
        })}
      </Table>
    </Wrapper>
  );
}
