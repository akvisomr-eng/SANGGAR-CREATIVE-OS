# SANGGAR Procurement, Inventory & Asset Management OS

## Purpose

This layer completes the operational ERP foundation for purchasing, vendors, inventory and organizational assets.

## Flow

**Need → Procurement Request → Approval → Purchase Order → Receipt → Inventory → Asset → Accounting**

## Core Modules

- `vendors`: supplier master and commercial metadata.
- `procurement_requests`: controlled internal purchase requests.
- `purchase_orders`: approved orders and supplier commitments.
- `purchase_order_lines`: ordered quantities, prices, tax and expense-account mapping.
- `inventory_items`: SKU/item master and reorder thresholds.
- `inventory_locations`: warehouses and operational storage locations.
- `inventory_balances`: quantity by item and location.
- `inventory_movements`: immutable-style operational movement history for receipt, issue, transfer, adjustment and return.
- `assets`: organizational fixed/trackable assets with cost, custodian and location.
- `asset_movements`: asset assignment, transfer, maintenance, disposal and loss history.

## Integration

The layer reuses canonical:
- Organizations and organization units
- People Profiles
- Projects
- Chart of Accounts
- Budgets

Purchase orders can reference procurement requests and expense accounts. Inventory and assets can reference accounting accounts without duplicating Finance's chart of accounts.

## Security

Every table uses RLS + FORCE RLS.
- Procurement requests are visible to their requester or authorized organization administrators.
- Vendor, purchase-order, inventory and accounting-linked operational data is administrator controlled.
- Asset custodians can see assets assigned to themselves; administrators retain organization control.
- No ordinary member can inspect unrelated organizational procurement or inventory data.

## AI Governance

AI may recommend vendors, detect unusual purchasing, forecast inventory demand, identify reorder risks, classify expenses and suggest asset maintenance priorities.

AI may not autonomously approve purchases, alter accounting records, dispose of assets, or make binding supplier decisions.

## Finance Boundary

This module records operational procurement, inventory and asset facts. Payroll & Finance OS remains the accounting source for accounts, journals and budgets. Future integrations can generate controlled accounting entries from approved operational events.

## Future Extensions

- supplier evaluation and scorecards
- RFQ/RFP workflows
- three-way matching: PO → receipt → invoice
- stock reservations and warehouse operations
- serial/lot/batch tracking
- depreciation schedules
- asset maintenance schedules
- disposal approvals
- multi-location transfers
- procurement analytics and spend intelligence
