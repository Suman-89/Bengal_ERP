import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4 d-flex justify-content-between align-items-center">

      {/* Left Side */}
      <div className="small text-muted">
        Developed & Maintained by{' '}
        <span className="fw-semibold text-dark">
          DTFT Solutions (OPC) Pvt. Ltd.
        </span>
      </div>

      {/* Right Side */}
      <div className="small text-muted">
        © {new Date().getFullYear()} All Rights Reserved
      </div>

    </CFooter>
  )
}

export default React.memo(AppFooter)
