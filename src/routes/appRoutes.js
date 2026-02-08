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

// Report Pages
// Account Reports
const AllReport = React.lazy(() => import('../App/Report/AccountReport/AllReport'));
const FinalAccount = React.lazy(() => import('../App/Report/AccountReport/FinalAccount'));
const LedgerBalance = React.lazy(() => import('../App/Report/AccountReport/LedgerBal'));
const MonthlyLedger = React.lazy(() => import('../App/Report/AccountReport/MonthlyLedger'));
const PartyBalance = React.lazy(() => import('../App/Report/AccountReport/PartyBal'));
const VatReport = React.lazy(() => import('../App/Report/AccountReport/VatReport'));
// Inventory Reports
const StockReport = React.lazy(() => import('../App/Report/InventoryReport/Stock'));
const GodownReport = React.lazy(() => import('../App/Report/InventoryReport/GodownReport'));
const ItemLedger = React.lazy(() => import('../App/Report/InventoryReport/ItemLedger'));
const ItemWiseProfit = React.lazy(() => import('../App/Report/InventoryReport/ItemWiseProfit'));
const JamaNaamBahi = React.lazy(() => import('../App/Report/InventoryReport/JamaNaamBahi'));
const MisReport = React.lazy(() => import('../App/Report/InventoryReport/MisReport'));
const PurSaleRegister = React.lazy(() => import('../App/Report/InventoryReport/PurSaleReg'));
// Monthly Graphical Reports
const HeadWiseGraph = React.lazy(() => import('../App/Report/MonthlyGraphical/HeadWiseGraph'));
const SalesGraph = React.lazy(() => import('../App/Report/MonthlyGraphical/SalesGraph'));


  // Main App Routes
  const AppRoutes = [
  {path: '/cashbook', name: 'Cash Book', element: CashBook, exact: true },
  {path: '/sales', name: 'Sales', element: Sales, exact: true },
  {path: '/purchase', name: 'Purchase', element: Purchase, exact: true },
  {path: '/itemmaster', name: 'Item Master', element: ItemMaster, exact: true },
  {path: '/ledgermaster', name: 'Ledger Master', element: LedgerMaster, exact: true },
  {path: '/godown', name: 'Godown', element: Godown, exact: true },
  {path: '/stocktransfer', name: 'Stock Transfer', element: StockTransfer, exact: true },
  {path: '/allreport', name: 'All Report', element: AllReport, exact: true },
  {path: '/finalaccount', name: 'Final Account', element: FinalAccount, exact: true },
  {path: '/ledgerbalance', name: 'Ledger Balance', element: LedgerBalance, exact: true },
  {path: '/monthlyledger', name: 'Monthly Ledger', element: MonthlyLedger, exact: true },
  {path: '/partybalance', name: 'Party Balance', element: PartyBalance, exact: true },
  {path: '/vatreport', name: 'VAT Report', element: VatReport, exact: true },
  {path: '/stockreport', name: 'Stock Report', element: StockReport, exact: true },
  {path: '/godownreport', name: 'Godown Report', element: GodownReport, exact: true },
  {path: '/itemledger', name: 'Item Ledger', element: ItemLedger, exact:true},
  {path:'/itemwiseprofit',name:'Item Wise Profit Report',element : ItemWiseProfit,exact:true},
  {path:'/jamanaambahi',name:'Jama Naam Bahi Report',element : JamaNaamBahi,exact:true},
  {path:'/misreport',name:'MIS Report ',element : MisReport,exact:true},
  {path:'/pursaleregister',name:'Purchase & Sales Register ',element : PurSaleRegister,exact:true},
  {path:'/headwisegraphicalreport ',name:'Head Wise Graphical Report ',element : HeadWiseGraph,exact:true},
  {path:'/salesgraphicalreport ',name:'Sales Graphical Report ',element : SalesGraph,exact:true}
  ]


  export default AppRoutes