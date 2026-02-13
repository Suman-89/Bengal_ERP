import { CButton, CButtonGroup } from '@coreui/react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ButtonGroup() {
  return (
    <>
       <CButtonGroup>
              <CButton color="secondary" type="submit">
                Add
              </CButton>
              <CButton color="secondary" type="submit">
                Modify
              </CButton>
              <CButton color="secondary" type="submit">
                Remove
              </CButton>
              <CButton color="secondary" type="submit">
                Save
              </CButton>
              <CButton color="secondary" type="submit">
                Open
              </CButton>
              <CButton color="secondary" type="submit">
                Delete
              </CButton>
              <CButton color="secondary" type="submit">
                Cancel
              </CButton>
              <CButton color="secondary" type="submit">
                Daily Panna
              </CButton>
              <CButton color="danger" type="submit">
                <FontAwesomeIcon icon={faXmark} />
              </CButton>
              </CButtonGroup>
    </>
  )
}
