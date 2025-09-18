# EmailJS Setup Guide for Tim Harmar Law Site

This guide will help you configure EmailJS to automatically send consultation requests from the Smart Scheduler to kburton@timharmar.com.

## Prerequisites

- EmailJS account (free tier supports up to 200 emails/month)
- Access to an email service (Gmail, Outlook, or SMTP)
- The site is already configured with @emailjs/browser package

## Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Configure Email Service
1. In your EmailJS dashboard, go to **Email Services** > **Add New Service**
2. Choose your email provider (recommended: Gmail)
3. For Gmail:
   - Enable 2-factor authentication on your Google account
   - Generate an "App Password" (16-character code)
   - Use an admin email (e.g., admin@timharmar.com) as the sender
4. Save the service and copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates** > **Create New Template**
2. Use this template configuration:

**Subject:** `New Consultation Request - {{consultation_type}} - {{from_name}}`

**HTML Content:**
```html
<h2>🏛️ New Consultation Request</h2>
<p><strong>Client Information:</strong></p>
<ul>
  <li><strong>Name:</strong> {{from_name}}</li>
  <li><strong>Email:</strong> {{from_email}}</li>
  <li><strong>Phone:</strong> {{phone}}</li>
</ul>

<p><strong>Consultation Details:</strong></p>
<ul>
  <li><strong>Type:</strong> {{consultation_type}}</li>
  <li><strong>Preferred Date:</strong> {{preferred_date}}</li>
  <li><strong>Preferred Time:</strong> {{preferred_time}}</li>
</ul>

<p><strong>Additional Information:</strong></p>
<p>{{additional_info}}</p>

<hr>
<p><small>Submitted on {{submission_time}} via timharmar.com Smart Scheduler</small></p>
```

**Settings:**
- **To Email:** `kburton@timharmar.com`
- **From Name:** `Tim Harmar Website`
- **From Email:** Your configured service email

3. Save and copy the **Template ID** (e.g., `template_def456`)

### 4. Get Your Public Key
1. Go to **Account** > **API Keys**
2. Copy your **Public Key** (e.g., `user_ghi789`)

### 5. Configure the Website
1. Open `src/lib/emailService.js`
2. Replace the configuration values:

```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',    // From step 2
  TEMPLATE_ID: 'your_template_id_here',  // From step 3
  PUBLIC_KEY: 'your_public_key_here',    // From step 4
}
```

### 6. Test the Integration
1. Start the development server: `npm run dev`
2. Navigate to the Smart Scheduler section
3. Fill out and submit a test consultation request
4. Check kburton@timharmar.com for the email
5. Monitor the browser console for any errors

## Template Variables

The following variables are automatically sent to your EmailJS template:

- `{{to_email}}` - Always kburton@timharmar.com
- `{{from_name}}` - User's name from form
- `{{from_email}}` - User's email from form  
- `{{phone}}` - User's phone (or "Not provided")
- `{{consultation_type}}` - Selected consultation type
- `{{preferred_date}}` - User's preferred date
- `{{preferred_time}}` - User's preferred time
- `{{additional_info}}` - Additional details (or "None provided")
- `{{submission_time}}` - Timestamp when submitted
- `{{subject}}` - Auto-generated subject line

## Troubleshooting

### Common Issues

1. **Emails not arriving:**
   - Check spam folders
   - Verify sender email setup in EmailJS
   - Ensure template variables match exactly

2. **Console errors:**
   - Verify all three IDs are correct
   - Check EmailJS service configuration
   - Ensure email service is properly authenticated

3. **Template not rendering:**
   - Double-check variable names (case-sensitive)
   - Test template in EmailJS dashboard preview

### Development Mode
If EmailJS is not configured, the system automatically falls back to a mock service that logs to the console. This allows development to continue without EmailJS setup.

### Support
- EmailJS Documentation: [emailjs.com/docs](https://www.emailjs.com/docs)
- For template issues, use the EmailJS dashboard preview feature
- Check browser console for detailed error messages

## Security Notes

- Public keys are safe to expose in client-side code
- Private keys should never be used in frontend applications
- The free tier has rate limits (200 emails/month)
- Consider upgrading for higher volume needs