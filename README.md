# Vourcher-App

TEPs Electronics Wi-Fi voucher request and administration application.

## Architecture
- `frontend/`: React + Next.js App Router application.
- `backend/`: Supabase configuration, SQL migrations and Supabase Edge Functions (Deno runtime).
- Vercel hosts the Next.js frontend; Supabase provides database, authentication and server-side functions.
- No separate Node.js API backend is used. Node.js is required only to run/build the Next.js frontend.

## Frontend development
```bash
cd frontend
npm install
npm run dev
``

Build:
```bash
npm run build
npm run start
``

Vercel settings: Framework Preset `Next.js`, Root Directory `frontend`. Let Vercel use the default Next.js build settings.

## Current status
This repository is a starter scaffold. The request form is demo-only; it does not save requests. Payment confirmation, admin authentication and MikroTicket/MikroTik voucher generation are not yet implemented. Do not use it for real customer transactions until these flows are completed and tested.

## Backend
Supabase CLI configuration, migrations and Edge Functions live under `backend/`. Review the migration before applying it. Deploy functions only after implementing secure validation and authorization. Never put a Supabase service-role key in frontend code.

Contact: TEPs Electronics, 0771906932.
