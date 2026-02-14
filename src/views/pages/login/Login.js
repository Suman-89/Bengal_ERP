import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilLowVision } from '@coreui/icons'
import swastikBg from './../../../assets/images/swastik.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../assets/images/all/logo_main.jpeg'

const Login = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardHeader className="text-center bg-transparent border-0">
                  <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto', borderRadius: '50%' }} />
                  <h4 className="mt-3 text-info">Bengal Sales Corporation</h4>
                </CCardHeader>
                <CCardBody>
                  <CForm>
                    <h1 className="display-5 text-center">Login</h1>
                    <p className="text-body-secondary text-center">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type={show ? 'text' : 'password'}
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                      <CInputGroupText
                        role="button"
                        tabIndex={0}
                        aria-label={show ? 'Hide password' : 'Show password'}
                        onClick={() => setShow(!show)}
                        onKeyDown={(e) => e.key === 'Enter' && setShow((prev) => !prev)}
                        style={{ cursor: 'pointer', backgroundColor: 'transparent' }}
                      >
                        {/* <CIcon icon={show ? cilLowVision : ''} /> */}
                        {show ? (
                          <FontAwesomeIcon icon={faEyeSlash} />
                        ) : (
                          <FontAwesomeIcon icon={faEye} />
                        )}
                      </CInputGroupText>
                    </CInputGroup>
                    <CRow className="align-items-center mt-3">
                      {/* Left Side - Button Group */}
                      <CCol xs={6} className="d-flex align-items-center">
                        <CButtonGroup role="group" aria-label="Action buttons">
                          <CButton color="info" size="sm" className="px-4 text-white" href="#/dashboard">
                            Ok
                          </CButton>
                          <CButton color="secondary" size="sm" className="px-4">
                            Close
                          </CButton>
                        </CButtonGroup>
                      </CCol>

                      {/* Right Side - Link */}
                      <CCol xs={6} className="text-end">
                        <CButton color="link" size="sm" className="p-0">
                          Forgot Password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard
                className="text-white bg-warning py-5"
                style={{
                  width: '44%',
                  backgroundImage: `url(${swastikBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
