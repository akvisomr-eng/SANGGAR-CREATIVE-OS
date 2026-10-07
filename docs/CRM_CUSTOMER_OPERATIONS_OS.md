# SANGGAR CRM & Customer Operations OS

## Purpose
CRM mengelola hubungan bisnis eksternal dari prospek sampai pelanggan aktif dan layanan purna jual.

## Core flow
**Company/Contact → Lead → Deal → Customer → Support → Customer Success → Renewal/Retention**

## Modules
- `crm_companies`: organisasi pelanggan/prospek.
- `crm_contacts`: individu yang berhubungan dengan perusahaan.
- `crm_leads`: peluang awal dan qualification.
- `crm_deals`: pipeline komersial sampai won/lost.
- `crm_activities`: notes, calls, emails, meetings, tasks dan follow-up.
- `crm_support_cases`: customer support lifecycle.
- `crm_customer_success`: health, adoption dan renewal monitoring.

## Boundaries
CRM tidak menggantikan:
- Marketplace listings/orders.
- Talent/recruitment.
- Contracts/legal/IP.
- Accounts, journals dan budgets.

CRM menjadi sumber konteks customer relationship dan dapat direferensikan oleh domain-domain tersebut.

## Security
Semua tabel memakai RLS + FORCE RLS dan organization scoping. Member organisasi dapat membaca data CRM organisasinya; mutation diarahkan ke owner atau organization administrator. Customer-success dan support data tidak menjadi data publik.

## AI Governance
AI dapat:
- lead qualification assistance
- sales summaries
- next-best-action recommendations
- follow-up suggestions
- churn/health signals
- support summarization and routing
- customer segmentation
- pipeline forecasting

AI tidak boleh secara otomatis membuat komitmen kontraktual, mengubah harga final, menyetujui refund/kompensasi, atau membuat keputusan bisnis yang mengikat tanpa otorisasi manusia.

## Future extensions
- quotations/proposals
- contracts integration
- campaign management
- customer communication channels
- SLA management
- knowledge base
- customer portal
- subscription/renewal workflows
- revenue forecasting
- customer lifetime value
- churn intelligence
