import React from 'react'
import { Input, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { SearchByText } from '../../redux/action';
const { Search } = Input;

export default function FilterByText() {
  const dispatch = useDispatch();
  const onSearch = (e) => {
    const textToSearch = e.target.value;
    dispatch(SearchByText(textToSearch))
  };
  return (
    <React.Fragment>
      <h3>Search</h3>
      <Search placeholder="Search" enterButton onChange={onSearch} />
    </React.Fragment>
  )
}
