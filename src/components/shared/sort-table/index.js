import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'
import MOCK_DATA from '../MOCK_DATA.json'
import { COLUMNS } from './column'
import { StTable, StSearch, StEdit, StTitle } from './style'


export const GlobalFilter = ({ filter, setFilter}) => {
    return (
        <StSearch>
        <span>
            Search: {' '}
            <input value={filter || ''}
            onChange={(e) => setFilter(e.target.value)}/>
        </span>
        </StSearch>
    )
}

export const SortTable = () => {

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

 

  const { getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow,
    state,
    setGlobalFilter,
    } = useTable({
      columns,
      data
    }, useGlobalFilter, useSortBy)

const { globalFilter } = state

  return(
    <>
    <StTitle><span>USER TABLE</span></StTitle>
    <GlobalFilter filter = {globalFilter} setFilter={setGlobalFilter} />
    <StTable>
    <table {...getTableProps()} className="table">
      <thead>
        {
          headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                    <span>
                        {column.isSorted ? (column.isSortedDesc ? ' <': ' >') : ''}
                    </span>
                  </th>
                ))
              }
              <th>Actions</th>
            </tr>
          ))
        } 
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return(
              <tr {...row.getRowProps()}>
                {
                  row.cells.map(cell => {
                    return(
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td> 
                    )
                  })
                }
                <td> <StEdit>Edit</StEdit> </td>  
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </StTable>
    </>
  )
}