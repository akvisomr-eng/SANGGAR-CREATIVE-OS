# SANGGAR Payroll & Finance OS

## Purpose

Payroll & Finance OS executes approved compensation outcomes and provides the controlled financial foundation for SANGGAR organizations.

## Architecture

**Approved Compensation → Payroll Period → Payroll Run → Payroll Item → Payroll Lines → Approval/Payment**

and:

**Business Activity → Expense/Budget → Journal Entry → Journal Lines → Financial Reporting**

## Payroll

### payroll_periods
Defines payroll periods and pay dates with controlled lifecycle: draft → open → processing → review → approved → paid → closed.

### payroll_runs
Versioned calculation runs per payroll period. Multiple runs allow recalculation without overwriting the conceptual payroll period.

### payroll_items
One employee payroll result per run: gross, deductions, net, employer cost, currency and calculation snapshot. The snapshot preserves historical inputs/results even when compensation later changes.

### payroll_item_lines
Auditable earning, deduction, employer-cost, adjustment and tax lines.

## Expenses

`expense_claims` supports employee expense/reimbursement workflow: draft → submitted → review → approved/rejected → reimbursed.

## Finance / Accounting

### accounts
Organization-specific chart of accounts with account hierarchy.

### journal_entries
Accounting transaction headers with posting lifecycle.

### journal_lines
Double-entry debit/credit lines. Each line must contain either a debit or a credit amount.

### budgets
Fiscal-year organizational budgets.

### budget_lines
Budget allocations by account/category and optional period.

## Security

All new tables use RLS + FORCE RLS. Employees can read their own payroll results; organization/platform administrators manage organization payroll. Ordinary members cannot inspect other people's payroll. Finance records are organization-scoped and administrator-controlled.

## Governance

AI may calculate or explain payroll scenarios, detect anomalies, summarize expenses, forecast budget variance and recommend review priorities. AI may not autonomously approve payroll, release payment, post irreversible financial entries, alter historical payroll, change accounting policy or make tax/legal determinations without appropriate human controls.

## Separation of Concerns

Compensation & Total Rewards defines policy, ranges, assignments, reward decisions and benefits. Payroll & Finance executes calculation, payroll history, expenses, accounting and budgets.

## Current Boundary

This foundation does not yet implement country-specific statutory tax engines, bank payment execution, payroll provider integrations, full AR/AP, fixed assets, inventory accounting, multi-entity consolidation or a full financial statements engine. These should be subsequent controlled modules.
