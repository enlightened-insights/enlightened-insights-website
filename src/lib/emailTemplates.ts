import type { ContactFormData, ServiceValue } from "@/types/contact";

const SERVICE_LABELS: Record<ServiceValue, string> = {
  "ai-automation": "AI & Automation",
  "marketing": "Marketing",
};

const brand = {
  name: "Enlightened Insights",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://enlightenedinsights.org",
};

const SERVICE_INTROS: Record<ServiceValue, string> = {
  "ai-automation":
    "We've received your inquiry about AI &amp; automation and our team is already reviewing it. We'll reach out to discuss how we can help streamline your operations and free up your team's time.",
  "marketing":
    "We've received your marketing inquiry and our team is already reviewing it. We'll reach out to discuss how we can help you hit your goals and grow your reach.",
};

export function confirmationEmail(name: string, service?: ServiceValue): string {
  const firstName = name.split(" ")[0];
  const intro = service
    ? SERVICE_INTROS[service]
    : "We've received your inquiry and our team is already reviewing it. We'll reach out shortly to discuss how we can help.";
  const logoUrl = `${brand.siteUrl}/logo.png`;
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body style="margin:0;padding:0;background:#081616;font-family:'Manrope',system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#081616;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;border-radius:4px;overflow:hidden;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#00818a,#76d5de);padding:36px 40px;text-align:center;">
            <img src="${logoUrl}" alt="${brand.name}" width="180" style="display:block;margin:0 auto;max-height:60px;object-fit:contain;" />
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#0d1e1e;padding:48px 40px;">
            <h1 style="margin:0 0 6px;font-size:30px;font-weight:800;color:#d7e5e5;letter-spacing:-0.02em;">
              Thanks, ${firstName}.
            </h1>
            <p style="margin:0 0 32px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#76d5de;">
              We'll be in touch shortly
            </p>
            <p style="margin:0 0 20px;font-size:15px;color:#94b0b0;line-height:1.75;">
              ${intro}
            </p>
            <p style="margin:0 0 36px;font-size:15px;color:#94b0b0;line-height:1.75;">
              Expect to hear from us within <strong style="color:#d7e5e5;">two business days</strong>.
              Feel free to reply to this email if you have anything to add in the meantime.
            </p>
            <div style="height:1px;background:#152222;margin-bottom:32px;"></div>
            <p style="margin:0;font-size:13px;color:#94b0b0;line-height:1.6;">
              Best,<br>
              <strong style="color:#d7e5e5;">The Enlightened Insights Team</strong>
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#041010;padding:20px 40px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#3a5555;">
              © ${year} ${brand.name}. All rights reserved.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function notificationEmail(data: ContactFormData): string {
  const { name, email, company, service, challenge } = data;
  const serviceLabel = service ? SERVICE_LABELS[service] : null;
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Toronto",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;border:1px solid #e2e8f0;overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background:#0f172a;padding:24px 40px;">
            <p style="margin:0;color:#ffffff;font-size:16px;font-weight:600;">New Contact Form Submission</p>
            <p style="margin:4px 0 0;color:#94a3b8;font-size:12px;">${timestamp}</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:0 0 20px;">
                  <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#94a3b8;">Name</p>
                  <p style="margin:0;font-size:15px;color:#0f172a;font-weight:500;">${name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 20px;border-top:1px solid #f1f5f9;padding-top:20px;">
                  <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#94a3b8;">Email</p>
                  <a href="mailto:${email}" style="margin:0;font-size:15px;color:${brand.color};text-decoration:none;">${email}</a>
                </td>
              </tr>
              ${company ? `<tr>
                <td style="padding:0 0 20px;border-top:1px solid #f1f5f9;padding-top:20px;">
                  <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#94a3b8;">Company</p>
                  <p style="margin:0;font-size:15px;color:#0f172a;font-weight:500;">${company}</p>
                </td>
              </tr>` : ""}
              ${serviceLabel ? `<tr>
                <td style="border-top:1px solid #f1f5f9;padding-top:20px;padding-bottom:20px;">
                  <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#94a3b8;">Service Area</p>
                  <p style="margin:0;font-size:15px;color:#0f172a;font-weight:500;">${serviceLabel}</p>
                </td>
              </tr>` : ""}
              <tr>
                <td style="border-top:1px solid #f1f5f9;padding-top:20px;">
                  <p style="margin:0 0 8px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#94a3b8;">Challenge</p>
                  <p style="margin:0;font-size:15px;color:#334155;line-height:1.7;white-space:pre-wrap;">${challenge}</p>
                </td>
              </tr>
            </table>

            <div style="margin-top:32px;">
              <a href="mailto:${email}?subject=Re: Your inquiry to ${brand.name}"
                 style="display:inline-block;background:${brand.color};color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 24px;border-radius:8px;">
                Reply to ${name}
              </a>
            </div>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:20px 40px;border-top:1px solid #f1f5f9;">
            <p style="margin:0;font-size:12px;color:#94a3b8;text-align:center;">
              Sent via the ${brand.name} contact form.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
