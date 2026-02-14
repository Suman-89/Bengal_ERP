import React, { useState } from 'react'
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



const SalesList = () => {
  const navigate = useNavigate()
  return (
    <>
    <CButton color="primary" className="mb-3" onClick={()=> navigate('/addnewsales')}>
        Add New Sales
      </CButton>
      {/* <CButton>
        Edit Sales
      </CButton> */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">SL No.</th>
            <th scope="col">Item</th>
            <th scope="col">Pack</th>
            <th scope="col">Quantity</th>
            <th scope="col">Rate</th>
            <th scope="col">Value</th>
            <th scope="col">Discount %</th>
            <th scope="col">Amount</th>
            <th scope="col">Tax Name</th>
            <th scope="col">Net Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
            <td>test data</td>
          </tr>
        </tbody>
      </table>
      <CCol xs={12} className="d-flex gap-3 justify-content-start">
        <ButtonGroup />
      </CCol>
    </>
  )
}

const SalesDetails = () => {
  return (
    <CRow>
      <CCol xs={12}>
      

        <CCard className="mb-4">
          <CCardHeader>
            <strong>Sales</strong> <small>Details</small>
          </CCardHeader>
          <CCardBody>
            <SalesList />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
 
      </CCol>
    </CRow>
  )
}

export default SalesDetails
