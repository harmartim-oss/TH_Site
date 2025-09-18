import emailjs from '@emailjs/browser'

// EmailJS configuration
// These are public keys and are safe to expose in client-side code
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_timharmar', // Will be configured with EmailJS
  TEMPLATE_ID: 'template_consultation', // Will be configured with EmailJS
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY' // Will be configured with EmailJS
}

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
}

// Send consultation request email
export const sendConsultationEmail = async (formData) => {
  try {
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
      subject: `🏛️ Consultation Request - ${formData.consultationType} - ${formData.userName}`
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    )

    return { success: true, response }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error }
  }
}

// For development/fallback - create a mock email service that logs to console
export const sendConsultationEmailMock = async (formData) => {
  console.log('=== MOCK EMAIL SENT ===')
  console.log('To: kburton@timharmar.com')
  console.log('Subject:', `🏛️ Consultation Request - ${formData.consultationType} - ${formData.userName}`)
  console.log('Form Data:', formData)
  console.log('======================')
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return { success: true, mock: true }
}