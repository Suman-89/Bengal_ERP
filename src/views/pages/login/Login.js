import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardGroup,
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

const Login = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
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
                        style={{ cursor: 'pointer',backgroundColor: 'transparent' }}
                      >
                        {/* <CIcon icon={show ? cilLowVision : ''} /> */}
                       { show ?<FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                      </CInputGroupText>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButtonGroup role="group" aria-label="Default button group">
                          <CButton color="primary" size="small" className="px-4" href='#/dashboard'>
                            Ok
                          </CButton>
                          <CButton color="warning" size="small" className="px-4">
                            Close
                          </CButton>
                        </CButtonGroup>
                      </CCol>
                      <CCol xs={6}>
                        <CButton color="link" className="px-4">
                          New Password?
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
