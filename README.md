# Vourcher-App

TEPs Electronics voucher request and administration application.

## Structure
- `frontend/`: React + Next.js Pages Router application.
- `backend/`: Supabase SQL migrations, project config and Edge Functions (Deno runtime).
- Vercel hosts the Next.js frontend; Supabase provides the database, authentication and server-side functions.

## Frontend
```bash
cd frontend
npm install
npm run dev
``

Vercel settings: Framework Preset `Next.js`, Root Directory `frontend`. Use default Next.js build settings.

## Current status
This is a starter scaffold. Client request submission is demo-only; it does not save requests. Admin authentication, payment verification and MikroTicket/MikroTik voucher generation are not implemented yet. Do not use for real customer transactions until these features are completed and tested.

## Backend
Supabase configuration, migrations and Edge Functions live under `backend/`. Review migrations before applying them. Never place a Supabase service-role key in browser code.

Contact: TEPs Electronics, 0771906932.
