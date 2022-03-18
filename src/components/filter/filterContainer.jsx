import React from 'react'
import styled from 'styled-components'
import FilterByPriority from './filterByPriority'
import FilterByStatus from './filterByStatus'
import FilterByText from './filterByText'


const FilterContainerStyled = styled.div`
  margin: 20px 0;
  h3 {
    margin-top: 20px;
  }
`


export default function FilterContainer() {
  return (
    <React.Fragment>
      <FilterContainerStyled>
        <FilterByText />
        <FilterByStatus />
        <FilterByPriority />
      </FilterContainerStyled>
    </React.Fragment>
  )
}
