import React, { useEffect, useMemo, useState } from 'react'
import { MemoTodo } from './todo'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { FixedSizeList as List } from 'react-window';
import { message, Modal } from 'antd';
import InputAddTodo from './inputAddTodo';
import { EditTodo } from '../../redux/action';

const TodoListStyled = styled.div`
  min-height: 400px;
  margin: 20px 0;
`



export default function TodoList(props) {
  const todo = useSelector(state => state.todo);
  const filterTodo = useSelector(state => state.filter);
  const [filteredTodo, setFilteredTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(true)

  const dispatch = useDispatch();
  const handleOk = () => {
    dispatch(EditTodo(editTodo))
    message.success(`Edit done!`)
    setEditTodo(null)
  }
  
  useEffect(() => {
    setFilteredTodo([...todo.filter(element => {
      return element.title.toLowerCase().includes(filterTodo.byText.toLowerCase())
        && (filterTodo.byStatus.toLowerCase() === `${element.isCompleted ? "completed" : "todo"}` || filterTodo.byStatus.toLowerCase() === "all" || filterTodo.byStatus.toLowerCase() === "")
        && (filterTodo.byPriority.some(item => element.priority.toLowerCase().includes(item.toLowerCase())) || filterTodo.byPriority.length === 0)
        && element
    })])
  }, [todo, filterTodo])

  const Row = ({ data, index, style }) => {
    return <MemoTodo todo={{ ...data[index] }} style={style} edit={setEditTodo} />
  };

  return (
    <TodoListStyled>
      {todo.length ? <List
        height={400}
        itemCount={filteredTodo.length}
        itemData={filteredTodo}
        itemSize={50}
      >
        {Row}
      </List> : <h3 style={{ textAlign: "center", opacity: "0.5" }}>Todo list is empty</h3>}
      {editTodo && <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleOk}>
        <InputAddTodo edit editTodo={editTodo} setEditTodo={(todo) => {setEditTodo(todo)}} />
      </Modal>
      }
    </TodoListStyled>
  )
}
