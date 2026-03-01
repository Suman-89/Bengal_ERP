import React, { useEffect, useMemo, useState } from 'react'
import {
  CCol,
  CFormInput,
  CFormLabel,
  CForm,
  CButton,
} from '@coreui/react'
import { Box, IconButton, Typography } from '@mui/material'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const LedgerMaster = () => {
  const [validated, setValidated] = useState(false)
  const [ledgerData, setLedgerData] = useState({
    itemName: '',
    amount: '',
  })
  const [data, setData] = useState([])
  const [editIndex, setEditIndex] = useState(null)


  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('ledgerData')) || []
    setData(stored)
  }, [])

  
  useEffect(() => {
    localStorage.setItem('ledgerData', JSON.stringify(data))
  }, [data])

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      event.stopPropagation()
      return
    }

    if (editIndex !== null) {
      const updated = [...data]
      updated[editIndex] = ledgerData
      setData(updated)
      setEditIndex(null)
    } else {
      setData([...data, ledgerData])
    }

    setLedgerData({ itemName: '', amount: '' })
    setValidated(false)
  }

  const handleDelete = (index) => {
    const updated = data.filter((_, i) => i !== index)
    setData(updated)
  }

  const handleEdit = (row) => {
    setLedgerData(row.original)
    setEditIndex(row.index)
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: 'itemName',
        header: 'Item Name',
      },
      {
        accessorKey: 'amount',
        header: 'Amount',
      },
    ],
    [],
  )

const totalAmount = useMemo(() => {
  if (!Array.isArray(data)) return 0
  return data.reduce((sum, row) => sum + Number(row.amount || 0), 0)
}, [data])

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: false,
    enableRowActions: true,
    positionActionsColumn: 'last',
    renderRowActions: ({ row }) => (
      <Box sx={{ display: 'flex', gap: '8px' }}>
        <IconButton
          size="small"
          color="primary"
          onClick={() => handleEdit(row)}
        >
          <EditIcon fontSize="small" />
        </IconButton>

        <IconButton
          size="small"
          color="error"
          onClick={() => handleDelete(row.index)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    ),
    muiTableHeadCellProps: {
      sx: { fontWeight: 'bold' },
    },
    muiTableBodyCellProps: {
      sx: { fontSize: '14px' },
    },
  })

  return (
    <>
      {/* FORM */}
      <CForm
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <CCol md={6}>
          <CFormLabel>Item Name</CFormLabel>
          <CFormInput
            type="text"
            value={ledgerData.itemName}
            onChange={(e) =>
              setLedgerData({ ...ledgerData, itemName: e.target.value })
            }
            required
          />
        </CCol>

        <CCol md={6}>
          <CFormLabel>Amount</CFormLabel>
          <CFormInput
            type="number"
            value={ledgerData.amount}
            onChange={(e) =>
              setLedgerData({
                ...ledgerData,
                amount: Number(e.target.value),
              })
            }
            required
          />
        </CCol>

        <CCol xs={12} className="mt-3">
          <CButton color="primary" type="submit" className="float-end mb-3">
            {editIndex !== null ? 'Update Ledger' : 'Add to Ledger'}
          </CButton>
        </CCol>
      </CForm>

      {/* TABLE */}
      <MaterialReactTable table={table} />

      {/* TOTAL */}
      <Typography
        sx={{
          textAlign: 'right',
          mt: 2,
          fontWeight: 'bold',
          fontSize: '16px',
        }}
      >
        Total Amount: ₹ {totalAmount}
      </Typography>
    </>
  )
}

export default LedgerMaster