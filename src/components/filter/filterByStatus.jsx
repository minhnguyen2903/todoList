import React from 'react'
import { Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SearchByStatus } from '../../redux/action';


export default function FilterByStatus() {
  const status = useSelector(state => state.filter.byStatus);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(SearchByStatus(e.target.value))
  };
  
  return (
    <React.Fragment>
      <h3>Filter by Status</h3>
      <Radio.Group onChange={onChange} value={status}>
      <Radio value={"all"}>All</Radio>
      <Radio value={"completed"}>Completed</Radio>
      <Radio value={"todo"}>Todo</Radio>
    </Radio.Group>
    </React.Fragment>
  )
}
