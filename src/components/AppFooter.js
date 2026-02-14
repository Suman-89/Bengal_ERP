import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div className="ms-auto text-end small">
        <span className="text-muted">Developed by</span>{' '}
        <span className="fw-semibold">DTFT Solutions (OPC) Pvt. Ltd.</span>
        <span className="text-muted"> © {new Date().getFullYear()}</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
