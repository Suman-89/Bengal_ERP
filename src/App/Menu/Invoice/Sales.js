import React, { useMemo, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'
import DatePicker from 'react-datepicker'
import ButtonGroup from '../../../components/Buttons/ButtonGroup'
import { useNavigate } from 'react-router-dom'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import { Box, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

// example data
const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
  },
]

const SalesList = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', // nested accessor
        header: 'First Name',
        size: 150,
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 150,
      },
      {
        accessorKey: 'address',
        header: 'Address',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
      },
    ],
    [],
  )

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowActions: true,
    positionActionsColumn: 'last',
    renderRowActions: ({ row }) => (
      <Box sx={{ display: 'flex', gap: '8px' }}>
        <IconButton
          size="small"
          color="primary"
          onClick={() => console.log('Edit row:', row.original)}
        >
          <EditIcon fontSize="small" />
        </IconButton>

        <IconButton
          size="small"
          color="error"
          onClick={() => console.log('Delete row:', row.original)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    ),
  })

  return <MaterialReactTable table={table} />
}

const SalesDetails = () => {
  const navigate = useNavigate()

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Sales</strong> <small>Details</small>
            <CButton
              color="primary"
              type="button"
              className="float-end"
              onClick={() => navigate('/sales/addnewsales')}
            >
              Add New Sale
            </CButton>
          </CCardHeader>
          <CCardBody>
            <SalesList />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}></CCol>
    </CRow>
  )
}

export default SalesDetails
