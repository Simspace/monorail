import { createTable } from './tableDef.js'

createTable<{ name: string }>()({
  field: 'name',
  headerName: 'Name',
  width: 150,
  //   valueGetter: _value => 1,
  valueFormatter: value => value,
})
