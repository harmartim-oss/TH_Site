import emailjs from '@emailjs/browser'

// EmailJS configuration
// These are public keys and are safe to expose in client-side code
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_timharmar', // Configure this in your EmailJS dashboard
  TEMPLATE_ID: 'template_consultation', // Configure this in your EmailJS dashboard
  PUBLIC_KEY: 'hJox27DUTsnqPY3Q3', // Public key provided for EmailJS integration
}

// For development: You can override these values here for testing
// Example:
// const EMAILJS_CONFIG = {
//   SERVICE_ID: 'service_abc123',
//   TEMPLATE_ID: 'template_def456',
//   PUBLIC_KEY: 'user_ghi789',
// }

// Initialize EmailJS
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    console.warn('EmailJS: Please configure your public key in emailService.js')
    return false
  }
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
  console.log('EmailJS initialized with public key:', EMAILJS_CONFIG.PUBLIC_KEY)
  return true
}

// Send consultation request email
export const sendConsultationEmail = async (formData) => {
  try {
    // Check if EmailJS is properly configured
    if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      console.warn('EmailJS not configured, falling back to mock service')
      return await sendConsultationEmailMock(formData)
    }

    console.log('Sending email with config:', {
      serviceId: EMAILJS_CONFIG.SERVICE_ID,
      templateId: EMAILJS_CONFIG.TEMPLATE_ID,
      publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
    })

    const templateParams = {
      to_email: 'kburton@timharmar.com',
      from_name: formData.userName,
      from_email: formData.userEmail,
      phone: formData.userPhone || 'Not provided',
      consultation_type: formData.consultationType,
      preferred_date: formData.selectedDate,
      preferred_time: formData.selectedTime,
      additional_info: formData.additionalInfo || 'None provided',
      submission_time: new Date().toLocaleString(),
      subject: `🏛️ Consultation Request - ${formData.consultationType} - ${formData.userName}`,
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    )

    console.log('EmailJS response:', response)
    return { success: true, response }
  } catch (error) {
    console.error('Email sending failed:', error)

    // Provide detailed error information
    let errorMessage = 'Failed to send email'
    if (error.status === 422) {
      errorMessage = 'Invalid template parameters'
    } else if (error.status === 400) {
      errorMessage = 'Invalid EmailJS configuration'
    } else if (error.text) {
      errorMessage = error.text
    }

    return { success: false, error: errorMessage }
  }
}

// For development/fallback - create a mock email service that logs to console
export const sendConsultationEmailMock = async (formData) => {
  console.log('=== MOCK EMAIL SENT ===')
  console.log('To: kburton@timharmar.com')
  console.log(
    'Subject:',
    `🏛️ Consultation Request - ${formData.consultationType} - ${formData.userName}`
  )
  console.log('Form Data:', formData)
  console.log('======================')

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true, mock: true }
}
