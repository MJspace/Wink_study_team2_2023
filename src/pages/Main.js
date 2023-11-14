import React from 'react';
import styled from 'styled-components';
import TodoTemplate from '../components/Template';
import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';
import { TodoProvider } from '../TodoContext';

function Main() {
  return (
    <TodoProvider>
      <MainWrapper>
        <Title>Welcome Fisayomi</Title>
        <Todo>Todo Tasks.</Todo>
        <TodoTemplate>
          <TodoList />
        </TodoTemplate>
        <TodoCreate />
      </MainWrapper>
    </TodoProvider>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: var(--font-size-large);
  margin: 65px 20px;
  padding: 40px 30px;
  bottom: 638;
`;

const Todo = styled.div`
  display: flex;
  font-size: var(--font-size-large);
  margin: 12px;
`;

export default Main;
