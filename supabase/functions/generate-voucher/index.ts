import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const headers = { "content-type": "application/json; charset=utf-8" };

serve((req) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204 });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "method_not_allowed" }), { status: 405, headers });
  }
  return new Response(JSON.stringify({
    ok: false,
    error: "not_configured",
    message: "Voucher generation is disabled until a trusted MikroTicket integration is implemented."
  }), { status: 501, headers });
});
