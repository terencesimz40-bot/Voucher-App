# Vourcher-App

TEPs Electronics Wi-Fi voucher request and administration application.

## Architecture
- `frontend/`: React + Vite single-page application. Vite/Node.js is used only to build the frontend; there is no separate Node.js backend server.
- `backend/`: Supabase configuration, SQL migrations and Supabase Edge Functions (Deno runtime).
- Vercel hosts the built React frontend; Supabase provides database, authentication and server-side functions.

## Current status
This repository is a starter scaffold. The request form is demo-only; it does not save requests. Payment confirmation, admin authentication and MikroTicket/MikroTik voucher generation are not yet implemented. Do not use it for real customer transactions until these flows are completed and tested.

## Frontend development
```bash
cd frontend
npm install
npm run dev
``

Build for deployment:
```bash
npm run build
``

Vercel settings: Framework Preset `Vite`, Root Directory `frontend`, Build Command `npm run build`, Output Directory `dist`.

## Supabase backend
The Supabase CLI configuration, migrations and Edge Functions live under `backend/`. Review the migration before applying it. Deploy functions only after implementing secure validation and authorization. Never put a Supabase service-role key in frontend code.

Contact: TEPs Electronics, 0771906932.
