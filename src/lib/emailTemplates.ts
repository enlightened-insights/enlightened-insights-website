import type { ContactFormData } from "@/types/contact";

const brand = {
  color: "#2563eb",
  name: "Enlightened Insights",
};

export function confirmationEmail(name: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;border:1px solid #e2e8f0;overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background:${brand.color};padding:32px 40px;">
            <p style="margin:0;color:#ffffff;font-size:20px;font-weight:700;">${brand.name}</p>
            <p style="margin:4px 0 0;color:rgba(255,255,255,0.8);font-size:13px;">AI Consulting & Strategy</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <h1 style="margin:0 0 16px;font-size:24px;color:#0f172a;">Thanks for reaching out, ${name}!</h1>
            <p style="margin:0 0 16px;font-size:15px;color:#475569;line-height:1.6;">
              We've received your message and our team will review it shortly. You can expect a response
              from us within <strong>one business day</strong>.
            </p>
            <p style="margin:0 0 32px;font-size:15px;color:#475569;line-height:1.6;">
              In the meantime, feel free to explore our services or reply to this email with any
              additional context.
            </p>
            <div style="border-top:1px solid #f1f5f9;padding-top:24px;">
              <p style="margin:0;font-size:13px;color:#94a3b8;">
                Best regards,<br>
                <strong style="color:#0f172a;">The ${brand.name} Team</strong>
              </p>
            </div>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:20px 40px;border-top:1px solid #f1f5f9;">
            <p style="margin:0;font-size:12px;color:#94a3b8;text-align:center;">
              © ${new Date().getFullYear()} ${brand.name}. All rights reserved.
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
  const { name, email, message } = data;
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
              <tr>
                <td style="border-top:1px solid #f1f5f9;padding-top:20px;">
                  <p style="margin:0 0 8px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#94a3b8;">Message</p>
                  <p style="margin:0;font-size:15px;color:#334155;line-height:1.7;white-space:pre-wrap;">${message}</p>
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
