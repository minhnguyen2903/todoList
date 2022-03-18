import React, { useEffect, useMemo } from 'react'
import styled, { css } from "styled-components"
import { Checkbox, Tag, Menu, Dropdown, Button, message } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

import { useDispatch } from 'react-redux';
import { DeleteTodo, SwitchTodoStatus } from '../../redux/action';

const TodoStyled = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 1fr 1fr;
  /* justify-content: space-between;
  align-items: center; */
  padding: 5px 0;
  &>div {
    display: flex;
    align-items: center;
  }
  div:first-child {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  div:last-child {
    justify-content: flex-end;
  }
  &:hover {
    background: rgba(0,0,0,0.02);
  }
  ${(props) => props.isCompleted && css`
    & > * {
      text-decoration: line-through;
      opacity: 0.5; 
    }
      `
  }
`



function Todo(props) {
  const dispatch = useDispatch()
  const onChange = () => {
    dispatch(SwitchTodoStatus(props.todo.id))
  }

  const menu = useMemo(() => {
    return <Menu style={{ borderRadius: "4px" }}>
      <Menu.Item key={props.todo.id + '-edit'}>
        <p style={{ padding: "0 10px" }} onClick={() => {
          props.edit(props.todo)
        }}>Edit</p>
      </Menu.Item>
      <Menu.Item danger key={props.todo.id + '-delete'} onClick={() => {
        dispatch(DeleteTodo(props.todo.id));
        message.error(`${props.todo.title} deleted`);
      }}><p>Delete</p></Menu.Item>
    </Menu>
  }, [props.todo, dispatch])

  return (
    <TodoStyled isCompleted={props.todo.isCompleted} style={props.style}>
      <div>
        <Checkbox checked={props.todo.isCompleted} onChange={onChange} >{props.todo.title}</Checkbox>
      </div>
      <div>
        <Tag color={props.todo.priority === "high" ? "magenta" : props.todo.priority === "medium" ? "yellow" : "gray"}>{props.todo.priority}</Tag>
      </div>
      <div>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button className="ant-dropdown-link" style={{ margin: "0 5px", width: "30px", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={e => e.preventDefault()} shape="round">
            <MoreOutlined />
          </Button>
        </Dropdown>
      </div>
    </TodoStyled>
  )
}

function areEqual(prevProps, nextProps) {
  /* Trả về true nếu nextProps bằng prevProps, ngược lại trả về false */
  return JSON.stringify(prevProps.todo) === JSON.stringify(nextProps.todo)
  // return false
}

export const MemoTodo = React.memo(Todo, areEqual)
