import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useNavigate } from 'react-router-dom'

const AddSalesForm = () => {
  const [validated, setValidated] = useState(false)
  const [purchaseDate, setPurchaseDate] = useState(null)
  const [savedDate, setSavedDate] = useState(null)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <>
      <CForm
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        {/* <CCol md={6} className="d-flex gap-3">
          <CFormCheck id="flexCheckDefault" label="Including Tax" />
          <CFormCheck id="flexCheckDefault" label="Others" />
          <CFormCheck id="flexCheckDefault" label="Orders" />
          <CFormCheck id="flexCheckDefault" label="Advanced Search" />
          <CFormCheck id="flexCheckDefault" label="Transfer" />
        </CCol> */}
        {/* <CCol md={6} className="d-flex gap-3 justify-content-space-between">
          <div>
          
            <DatePicker
              selected={purchaseDate}
              onChange={(date) => setPurchaseDate(date)}
              dateFormat="dd/MM/yyyy"
              className="form-control"
              placeholderText="Purchased Entry Date"
            />
          </div>

          <div>
          
            <DatePicker
              selected={savedDate}
              onChange={(date) => setSavedDate(date)}
              dateFormat="dd/MM/yyyy"
              className="form-control"
              placeholderText="Last Saved Entry Date"
            />
          </div>
        </CCol> */}

        <CCol xs={12}>
          {/* <DocsComponents href="forms/select/" /> */}

          {/* <DocsExample href="forms/select"> */}
          {/* <CFormSelect aria-label="Default select example">
            <option>Select one</option>
            <option value="1">Retail Invoice Type List</option>
            <option value="2">Converter</option>
            <option value="3">QTL</option>
          </CFormSelect> */}
          {/* </DocsExample> */}
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">Bill Number</CFormLabel>
          <CFormInput type="text" id="validationCustom01" defaultValue="001ABC" required />
          {/* <CFormFeedback valid>Looks good!</CFormFeedback> */}
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom02">Name of Party</CFormLabel>
          <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
          {/* <CFormFeedback valid>Looks good!</CFormFeedback> */}
        </CCol>
        <CCol md={6}>
          {/* <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationCustomUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup> */}
          <CFormLabel htmlFor="validationCustom02">Balance Amount</CFormLabel>
          <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom02">Item Name</CFormLabel>
          <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
        </CCol>
        <CCol md={3}>
          <CFormLabel htmlFor="validationCustom02">Pack</CFormLabel>
          <CFormInput type="text" id="validationCustom02" defaultValue="" required />
        </CCol>
        <CCol md={3}>
          <CFormLabel htmlFor="validationCustom02">Bag</CFormLabel>
          <CFormInput type="text" id="validationCustom02" defaultValue="" required />
        </CCol>
        <CCol md={3}>
          <CFormLabel htmlFor="validationCustom02">Rate</CFormLabel>
          <CInputGroup className="has-validation">
            <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
            <CFormInput type="text" id="validationCustom02" defaultValue="" required />
          </CInputGroup>
        </CCol>
        <CCol md={3}>
          <CFormLabel htmlFor="validationCustom02">Amount</CFormLabel>
          <CInputGroup className="has-validation">
            <CInputGroupText id="inputGroupPrepend">₹</CInputGroupText>
            <CFormInput type="text" id="validationCustom02" defaultValue="" required />
          </CInputGroup>
        </CCol>
        <CCol xs={12}>
          {/* <DocsComponents href="forms/select/" /> */}

          {/* <DocsExample href="forms/select"> */}
          <CFormSelect aria-label="Default select example">
            <option>Retail Invoice Type List</option>
            <option value="1">Tax Invoice</option>
            <option value="2">Retail Invoice</option>
            <option value="3">Estimate</option>
            <option value="4">Cash Memo</option>
            <option value="5">Challan Wholesale Invoice</option>
          </CFormSelect>
          {/* </DocsExample> */}
        </CCol>

        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom02">Discount</CFormLabel>
          <CInputGroup className="has-validation">
            <CFormInput type="text" id="validationCustom02" defaultValue="5" required disabled />
            <CInputGroupText id="inputGroupPrepend">%</CInputGroupText>
          </CInputGroup>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom02">Discount Amount</CFormLabel>
          <CInputGroup className="has-validation">
            <CInputGroupText id="inputGroupPrepend">₹</CInputGroupText>
            <CFormInput type="text" id="validationCustom02" defaultValue="200" required disabled />
          </CInputGroup>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom02"> Net Amount</CFormLabel>
          <CInputGroup className="has-validation">
            <CInputGroupText id="inputGroupPrepend">₹</CInputGroupText>
            <CFormInput type="text" id="validationCustom02" defaultValue="1800" required disabled />
          </CInputGroup>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">Other Expenses</CFormLabel>
          <CInputGroup className="has-validation">
            <CInputGroupText id="inputGroupPrepend" className="mb-3">
              ₹
            </CInputGroupText>
            <CFormInput
              type="text"
              id="validationCustom02"
              defaultValue="200"
              required
              disabled
              className="mb-3"
            />
          </CInputGroup>
          <CInputGroup className="has-validation">
            <CInputGroupText id="inputGroupPrepend" className="mb-3">
              ₹
            </CInputGroupText>
            <CFormInput
              type="text"
              id="validationCustom02"
              defaultValue="200"
              required
              disabled
              className="mb-3"
            />
          </CInputGroup>
        </CCol>

        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">Other Discount</CFormLabel>
          <CInputGroup className="has-validation">
            <CFormInput
              type="text"
              id="validationCustom02"
              defaultValue="5"
              required
              disabled
              className="mb-3"
            />
            <CInputGroupText id="inputGroupPrepend" className="mb-3">
              %
            </CInputGroupText>
          </CInputGroup>
          <CInputGroup className="has-validation">
            <CFormInput
              type="text"
              id="validationCustom02"
              defaultValue="5"
              required
              disabled
              className="mb-3"
            />
            <CInputGroupText id="inputGroupPrepend" className="mb-3">
              %
            </CInputGroupText>
          </CInputGroup>
        </CCol>
        <CCol xs={12}>
          <CFormCheck
            type="checkbox"
            id="invalidCheck"
            label="Agree to terms and conditions"
            required
          />
          <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
        </CCol>
        <CCol xs={12} className="mt-3">
          <CButton color="primary" type="submit">
            Add Sale
          </CButton>
        </CCol>
      </CForm>
    </>
  )
}

export default function AddNewSales() {
  const navigate = useNavigate()

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Add New Sales</strong>
              <CButton
                color="secondary"
                size='small'
                type="button"
                className="float-end"
                onClick={() => navigate('/sales')}
              >
                Back
              </CButton>
            </CCardHeader>
            <CCardBody>
              <AddSalesForm />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
