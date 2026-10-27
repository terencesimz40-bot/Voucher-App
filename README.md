# Vourcher-App

TEPs Electronics voucher request and administration starter.

## Architecture
- `frontend/`: static HTML, CSS and JavaScript; no Node.js web server.
- `supabase/migrations/`: PostgreSQL schema scaffold with Row Level Security enabled.
- `supabase/functions/`: Supabase Edge Function placeholders running on Supabase's Deno runtime.

## Current status
This is a starter scaffold, not a live payment or voucher service. The frontend form is demo-only. EcoCash payment references are not automatically verified, and MikroTicket/MikroTik voucher generation is not connected. Do not use for real customer transactions until the functions, policies, authentication and integrations are implemented and tested.

## Setup
1. Review and apply the SQL migration in `supabase/migrations/` to your Supabase project.
2. Set the Supabase project URL and publishable key in `frontend/shared/js/config.js` when frontend integration is implemented. Never put a service-role key in browser code.
3. Deploy Edge Functions with the Supabase CLI when their implementations are ready.
4. Configure Vercel as a static site with the project root set to `frontend` and no build/install command. The HTML entry point is `index.html`.

Contact: TEPs Electronics, 0771906932.
