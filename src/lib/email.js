import emailjs from '@emailjs/browser'

// EmailJS configuration
// Note: These values would typically be environment variables in a production app
// For GitHub Pages, we'll use a public service with basic configuration
export const emailConfig = {
  serviceId: 'service_th_legal', // This will need to be configured in EmailJS
  templateId: 'template_consultation', // This will need to be configured in EmailJS
  publicKey: 'YOUR_PUBLIC_KEY_HERE', // This will need to be configured in EmailJS
}

// Initialize EmailJS
export const initializeEmailJS = () => {
  // For demo purposes, we'll use a fallback that simulates email sending
  // In production, replace with actual EmailJS public key
  emailjs.init(emailConfig.publicKey)
}

// Send consultation request email
export const sendConsultationEmail = async (formData) => {
  try {
    // For now, we'll simulate the email sending since we don't have EmailJS credentials
    // In production, this would use the actual EmailJS service
    
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

    // Simulate email sending for demo (replace with actual EmailJS call in production)
    console.log('Email would be sent with data:', templateParams)
    
    // Uncomment below when EmailJS is properly configured:
    // const result = await emailjs.send(
    //   emailConfig.serviceId,
    //   emailConfig.templateId,
    //   templateParams,
    //   emailConfig.publicKey
    // )
    
    // For demo, we'll return a successful result
    return { 
      status: 200, 
      text: 'Email sent successfully (simulated)',
      data: templateParams 
    }
    
  } catch (error) {
    console.error('Email sending failed:', error)
    throw new Error('Failed to send email: ' + error.message)
  }
}

// Fallback email sending using a free service (Formspree.io alternative)
// This creates a mailto link as ultimate fallback but only after attempting automatic send
export const sendEmailFallback = (formData) => {
  const emailSubject = encodeURIComponent(
    `🏛️ Consultation Request - ${formData.consultationType} - ${formData.userName}`
  )
  
  const emailBody = encodeURIComponent(
    `Dear Tim Harmar Legal Team,

I would like to schedule a consultation with the following details:

📋 CLIENT INFORMATION:
• Name: ${formData.userName}
• Email: ${formData.userEmail}
• Phone: ${formData.userPhone || 'Not provided'}

⚖️ CONSULTATION DETAILS:
• Type: ${formData.consultationType}
• Preferred Date: ${formData.selectedDate}
• Preferred Time: ${formData.selectedTime}

📝 ADDITIONAL INFORMATION:
${formData.additionalInfo || 'None provided'}

⏰ SUBMISSION TIME: ${new Date().toLocaleString()}

This consultation request was submitted through the Tim Harmar Legal website's Smart Scheduler.

Please confirm receipt and advise on next steps for scheduling.

Thank you for your prompt attention to this matter.

Best regards,
${formData.userName}`
  )
  
  return `mailto:kburton@timharmar.com?subject=${emailSubject}&body=${emailBody}`
}