import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faFileInvoice, faFileLines, faSheetPlastic } from '@fortawesome/free-solid-svg-icons'

const _nav = [
  {
    component: CNavTitle,
    name: 'Menu',
  },
  {
    component: CNavGroup,
    name: 'Invoice & Rokad',
    icon: <FontAwesomeIcon icon={faFileInvoice} />,
    items: [
      {
        component: CNavItem,
        name: 'Sales',
        to: '/sales',
      },
      {
        component: CNavItem,
        name: 'Purchase',
        to: '/purchase',
      },
      {
        component: CNavItem,
        name: 'Cash Book',
        to: '/cashbook',
      },
    ],
  },
   {
    component: CNavGroup,
    name: 'Master Forms',
    icon:<FontAwesomeIcon icon={faSheetPlastic} />,
    items: [
      {
        component: CNavItem,
        name: 'Item Master',
        to: '/itemmaster',
      },
      {
        component: CNavItem,
        name: 'Ledger Master',
        to: '/ledgermaster',
      }
    ],
  },
     {
    component: CNavGroup,
    name: 'Others',
    icon: <FontAwesomeIcon icon={faFileLines} />,
    items: [
      {
        component: CNavItem,
        name: 'Stock Transfer',
        to: '/stocktransfer',
      },
      {
        component: CNavItem,
        name: 'Godown',
        to: '/godown',
      }
    ],
  },
   {
    component: CNavTitle,
    name: 'Reports',
  },
  {
    component: CNavGroup,
    name: 'Account Reports',
    icon: <FontAwesomeIcon icon={faFileInvoice} />,
    items: [
      {
        component: CNavItem,
        name: 'All Report',
        to: '/allreport',
      },
      {
        component: CNavItem,
        name: 'Final Account',
        to: '/finalaccount',
      },
      {
        component: CNavItem,
        name: 'Ledger Balance',
        to: '/ledgerbalance',
      },
      {
        component: CNavItem,
        name: 'Monthly Ledger',
        to: '/monthlyledger',
      },
      {
        component: CNavItem,
        name: 'Party Balance',
        to: '/partybalance',
      },
      {
        component: CNavItem,
        name: 'VAT Report',
        to: '/vatreport',
      }
    ],
  },
   {
    component: CNavGroup,
    name: 'Inventory Reports',
    icon:<FontAwesomeIcon icon={faSheetPlastic} />,
    items: [
      {
        component: CNavItem,
        name: 'Godown Report',
        to: '/godownreport',
      },
      {
        component: CNavItem,
        name: 'Stock Report',
        to: '/stockreport',
      },
      {
        component: CNavItem,
        name: 'Item Ledger',
        to: '/itemledger',
      },
      {
        component: CNavItem,
        name: 'Item Wise Profit',
        to: '/itemwiseprofit',
      },
      {
        component: CNavItem,
        name: 'Jama Naam Bahi',
        to: '/jamanaambahi',
      },
      {
        component: CNavItem,
        name: 'MIS Report',
        to: '/misreport',
      },
      {
        component: CNavItem,
        name: 'Purchase & Sales Register',
        to: '/pursaleregister',
      }
    ],
  },
     {
    component: CNavGroup,
    name: 'Monthly Graphical',
    icon: <FontAwesomeIcon icon={faFileLines} />,
    items: [
      {
        component: CNavItem,
        name: 'Head Wise Graphical Report',
        to: '/headwisegraphicalreport',
      },
      {
        component: CNavItem,
        name: 'Sales Graphical Report',
        to: '/salesgraphicalreport',
      },
      
    ],
  },
]

export default _nav
