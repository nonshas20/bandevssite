import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { ContactMessageSchema, ContactResponseSchema } from "../shared/types";
import { Resend } from "resend";

const app = new Hono<{ Bindings: Env }>();

// Contact form submission endpoint
app.post('/api/contact', zValidator('json', ContactMessageSchema), async (c) => {
  try {
    const data = c.req.valid('json');
    const db = c.env.DB;
    const resendApiKey = c.env.RESEND_API_KEY;

    // Validate required environment variables
    if (!resendApiKey) {
      return c.json({ 
        success: false, 
        message: "Email service not configured" 
      }, 500);
    }

    // Save to database
    await db.prepare(
      `INSERT INTO contact_messages (name, email, company, service, message, created_at, updated_at) 
       VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'))`
    ).bind(
      data.name,
      data.email,
      data.company || null,
      data.service || null,
      data.message
    ).run();

    // Send email notification using Resend
    const resend = new Resend(resendApiKey);

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="max-width: 600px; margin: 40px auto; padding: 20px;">
          
          <!-- Header -->
          <div style="background: #10b981; color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 600;">New Contact Message</h1>
            <p style="margin: 8px 0 0 0; font-size: 16px; opacity: 0.9;">BandDevs Contact Form</p>
          </div>

          <!-- Content -->
          <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            
            <!-- Contact Information -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">Contact Information</h2>
              
              <div style="background: #f9fafb; padding: 20px; border-radius: 6px; border: 1px solid #e5e7eb;">
                <div style="margin-bottom: 15px;">
                  <strong style="color: #374151; display: block; margin-bottom: 4px;">Name:</strong>
                  <span style="color: #1f2937;">${data.name}</span>
                </div>
                
                <div style="margin-bottom: 15px;">
                  <strong style="color: #374151; display: block; margin-bottom: 4px;">Email:</strong>
                  <span style="color: #1f2937;">${data.email}</span>
                </div>

                ${data.company ? `
                <div style="margin-bottom: 15px;">
                  <strong style="color: #374151; display: block; margin-bottom: 4px;">Company:</strong>
                  <span style="color: #1f2937;">${data.company}</span>
                </div>
                ` : ''}

                ${data.service ? `
                <div style="margin-bottom: 0;">
                  <strong style="color: #374151; display: block; margin-bottom: 4px;">Service:</strong>
                  <span style="color: #1f2937;">${data.service}</span>
                </div>
                ` : ''}
              </div>
            </div>

            <!-- Message -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Message</h2>
              <div style="background: #f9fafb; padding: 20px; border-radius: 6px; border: 1px solid #e5e7eb; border-left: 4px solid #10b981;">
                <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
              </div>
            </div>

            <!-- Footer -->
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                Message received: ${new Date().toLocaleString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
              <p style="margin: 10px 0 0 0; color: #9ca3af; font-size: 12px;">
                BandDevs Contact Form
              </p>
            </div>

          </div>
        </div>
      </body>
      </html>
    `;

    const emailResult = await resend.emails.send({
      from: 'BandDevs Contact <onboarding@resend.dev>',
      to: ['johnshannonrodriguez20@gmail.com'],
      subject: `New Contact Form Submission from ${data.name}`,
      html: emailHtml,
      replyTo: data.email,
    });

    console.log('Email send result:', emailResult);

    return c.json({
      success: true,
      message: "Thank you for your message! We'll get back to you soon."
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Log more details about the error
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return c.json({ 
      success: false, 
      message: "Sorry, there was an error sending your message. Please try again." 
    }, 500);
  }
});

// Health check endpoint
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default app;
