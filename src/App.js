import "antd/dist/antd.css";

import React from "react"

import { Container } from "./components/styled/container.styled";
import FilterContainer from "./components/filter/filterContainer";
import InputAddTodo from "./components/todoList/inputAddTodo";
import TodoList from "./components/todoList/todoList";
import { TodoContainer } from './components/styled/todoContainer.styled'
function App() {
  return (
    <div className="App">
      <Container>
        {/* <Navbar>
          <h1>TODO LIST</h1>
          <ButtonStyled>Login</ButtonStyled>
        </Navbar> */}
        <TodoContainer>
          <h1>Todo List</h1>
          <FilterContainer />
          <hr />
          <TodoList>
          </TodoList>
          <InputAddTodo />
        </TodoContainer>
      </Container>
    </div>
  );
}

export default App;