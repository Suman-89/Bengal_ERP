// Main App Pages

import React from 'react';

// menu pages for invoice and rokad
const CashBook = React.lazy(() => import('../App/Menu/Invoice/CashBook'));
const Sales = React.lazy(() => import('../App/Menu/Invoice/Sales'));
const Purchase = React.lazy(() => import('../App/Menu/Invoice/Purchase'));
// Menu Pages for MasterForms
const ItemMaster = React.lazy(() => import('../App/Menu/MasterForms/ItemMaster'));
const LedgerMaster = React.lazy(() => import('../App/Menu/MasterForms/LedgerMaster'));
// Menu Pages for Others
const Godown = React.lazy(() => import('../App/Menu/Other/Godown'));
const StockTransfer = React.lazy(() => import('../App/Menu/Other/StockTransfer'));


  // Main App Routes
  const AppRoutes = [
  {path: '/cashbook', name: 'Cash Book', element: CashBook, exact: true },
  {path: '/sales', name: 'Sales', element: Sales, exact: true },
  {path: '/purchase', name: 'Purchase', element: Purchase, exact: true },
  {path: '/itemmaster', name: 'Item Master', element: ItemMaster, exact: true },
  {path: '/ledgermaster', name: 'Ledger Master', element: LedgerMaster, exact: true },
  {path: '/godown', name: 'Godown', element: Godown, exact: true },
  {path: '/stocktransfer', name: 'Stock Transfer', element: StockTransfer, exact: true },
  ]


  export default AppRoutes