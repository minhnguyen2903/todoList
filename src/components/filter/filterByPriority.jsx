import React from 'react'
import { Select, Tag } from 'antd';
import { useDispatch } from 'react-redux';
import { SearchByPriority } from '../../redux/action';

const options = [{ value: 'high' }, { value: 'medium' }, { value: 'low' }];

function tagRender(props) {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  }; return (
    <Tag
      color={label === "high" ? "magenta" : label === "medium" ? "yellow" : "gray"}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}
export default function FilterByPriority() {
  const dispatch = useDispatch()
  const selectPriority = (e) => {
    dispatch(SearchByPriority(e))
  }
  return (
    <React.Fragment>
      <h3>Filter by Priority</h3>
      <Select
        mode="multiple"
        showArrow
        tagRender={tagRender}
        onChange={selectPriority}
        style={{ width: '100%' }}
        options={options}
      />
    </React.Fragment>
  )
}
