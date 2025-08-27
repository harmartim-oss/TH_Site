import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  Calendar,
  FileText,
  Search,
  Bell,
  Shield,
  Zap,
  Brain,
  Globe,
  Clock,
  Users,
  TrendingUp,
  Download,
} from 'lucide-react'

// AI-Powered Legal Assistant Chat Widget
export const AILegalAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Tim's AI legal assistant. How can I help you today?",
      sender: 'bot',
    },
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = { id: Date.now(), text: inputValue, sender: 'user' }
      setMessages([...messages, newMessage])
      setInputValue('')

      // Simulate AI response
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: 'Thank you for your question. Tim Harmar specializes in privacy law, civil litigation, and economic development. Would you like to schedule a consultation to discuss your specific legal needs?',
          sender: 'bot',
        }
        setMessages((prev) => [...prev, botResponse])
      }, 1000)
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full shadow-lg z-50 hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-40 right-8 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col"
          >
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-t-lg">
              <h3 className="font-semibold">AI Legal Assistant</h3>
              <p className="text-sm opacity-90">Powered by Tim Harmar Legal</p>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask a legal question..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <MessageCircle size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Smart Appointment Scheduler
export const SmartScheduler = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [consultationType, setConsultationType] = useState('')
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [additionalInfo, setAdditionalInfo] = useState('')

  const handleScheduleSubmit = () => {
    if (!consultationType || !selectedDate || !selectedTime || !userName || !userEmail) {
      alert('Please fill in all required fields.')
      return
    }

    const emailBody =
      `Hello,%0D%0A%0D%0A` +
      `I would like to schedule a consultation with the following details:%0D%0A%0D%0A` +
      `Name: ${userName}%0D%0A` +
      `Email: ${userEmail}%0D%0A` +
      `Phone: ${userPhone}%0D%0A` +
      `Consultation Type: ${consultationType}%0D%0A` +
      `Preferred Date: ${selectedDate}%0D%0A` +
      `Preferred Time: ${selectedTime}%0D%0A%0D%0A` +
      `Additional Information:%0D%0A${additionalInfo}%0D%0A%0D%0A` +
      `Thank you!`

    const subject = `Consultation Request - ${consultationType}`
    window.location.href = `mailto:kburton@timharmar.com?subject=${subject}&body=${emailBody}`
  }

  const availableTimes = ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM', '4:30 PM']
  const consultationTypes = [
    'Privacy Law Consultation',
    'Civil Litigation Review',
    'IP Strategy Session',
    'Business Development Consultation',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
    >
      <div className="flex items-center mb-6">
        <Calendar className="w-8 h-8 text-teal-600 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">Smart Scheduler</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Consultation Type *
          </label>
          <select
            value={consultationType}
            onChange={(e) => setConsultationType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          >
            <option value="">Select consultation type</option>
            {consultationTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Available Times *</label>
          <div className="grid grid-cols-2 gap-2">
            {availableTimes.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`p-2 rounded-lg border transition-all ${
                  selectedTime === time
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-teal-500'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Information
          </label>
          <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            placeholder="Please provide any additional details about your legal needs..."
            rows="3"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleScheduleSubmit}
          className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white p-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
        >
          Schedule Consultation
        </motion.button>
      </div>
    </motion.div>
  )
}

// Legal Resources Library
export const LegalResourcesLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('guides')

  // Function to open Privacy Compliance Guide in new window
  const openPrivacyGuide = () => {
    const content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Compliance Guide for Small Business</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }
        h1 { color: #1f2937; border-bottom: 3px solid #3b82f6; padding-bottom: 10px; }
        h2 { color: #374151; margin-top: 30px; }
        h3 { color: #4b5563; }
        .step { margin-bottom: 20px; padding: 15px; background: #f9fafb; border-left: 4px solid #3b82f6; }
        .disclaimer { background: #fef3c7; padding: 15px; margin: 20px 0; border-radius: 5px; }
        .footer { text-align: center; margin-top: 40px; padding: 20px; background: #f3f4f6; }
    </style>
</head>
<body>
    <h1>Privacy Compliance Guide for Small Business</h1>
    <h2>Essential Steps to Ensure Your Business Complies with Canadian Privacy Laws</h2>
    
    <h3>Introduction</h3>
    <p>This guide provides small businesses in Ontario with a clear and practical roadmap to comply with Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and Ontario's privacy regulations.</p>
    
    <h3>Key Steps for Privacy Compliance</h3>
    
    <div class="step">
        <h4>1. Understand Applicable Laws</h4>
        <p>PIPEDA applies to private-sector organizations in Canada that collect, use, or disclose personal information during commercial activities.</p>
    </div>
    
    <div class="step">
        <h4>2. Appoint a Privacy Officer</h4>
        <p>Designate a person responsible for overseeing privacy compliance and handling privacy policies and complaints.</p>
    </div>
    
    <div class="step">
        <h4>3. Develop a Privacy Policy</h4>
        <p>Create a clear, accessible privacy policy that explains how your business collects, uses, stores, and protects personal information.</p>
    </div>
    
    <div class="step">
        <h4>4. Obtain Consent</h4>
        <p>Obtain explicit or implied consent before collecting personal information and clearly explain why the information is needed.</p>
    </div>
    
    <div class="step">
        <h4>5. Secure Personal Information</h4>
        <p>Implement safeguards such as encryption, secure storage, and restricted access to personal data.</p>
    </div>
    
    <div class="step">
        <h4>6. Limit Data Retention</h4>
        <p>Retain personal information only as long as necessary for the identified purpose.</p>
    </div>
    
    <div class="step">
        <h4>7. Respond to Access Requests</h4>
        <p>Allow individuals to access their personal information and respond to requests within 30 days.</p>
    </div>
    
    <div class="step">
        <h4>8. Prepare for Data Breaches</h4>
        <p>Develop a data breach response plan and document all breaches to prevent recurrence.</p>
    </div>
    
    <h3>Resources</h3>
    <ul>
        <li>Office of the Privacy Commissioner of Canada: <a href="https://www.priv.gc.ca" target="_blank">https://www.priv.gc.ca</a></li>
        <li>PIPEDA Compliance Guide: <a href="https://www.priv.gc.ca/en/for-businesses" target="_blank">https://www.priv.gc.ca/en/for-businesses</a></li>
    </ul>
    
    <div class="disclaimer">
        <h4>Disclaimer</h4>
        <p>This guide is for informational purposes only and does not constitute legal advice. Consult a qualified lawyer to ensure compliance with all applicable laws.</p>
    </div>
    
    <div class="footer">
        <p>Prepared by Tim Harmar: Legal and Consulting Services - Sault Ste. Marie, Ontario</p>
    </div>
</body>
</html>
    `

    const newWindow = window.open('', '_blank')
    newWindow.document.write(content)
    newWindow.document.close()
  }

  // Function to open Contract Review Checklist in new window
  const openContractChecklist = () => {
    const content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contract Review Checklist</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }
        h1 { color: #1f2937; border-bottom: 3px solid #3b82f6; padding-bottom: 10px; }
        h2 { color: #374151; margin-top: 30px; }
        h3 { color: #4b5563; }
        .section { margin-bottom: 25px; padding: 15px; background: #f9fafb; border-left: 4px solid #3b82f6; }
        .checklist-item { margin: 8px 0; padding-left: 20px; }
        .disclaimer { background: #fef3c7; padding: 15px; margin: 20px 0; border-radius: 5px; }
        .footer { text-align: center; margin-top: 40px; padding: 20px; background: #f3f4f6; }
        ul { list-style-type: none; }
        li:before { content: "☐ "; margin-right: 8px; }
    </style>
</head>
<body>
    <h1>Contract Review Checklist</h1>
    <h2>Key Elements to Review Before Signing Any Business Contract</h2>
    
    <p>This checklist is designed as a quick reference for small business owners and entrepreneurs to ensure they've thoroughly evaluated a contract before committing. It's not a substitute for professional legal advice—consult a lawyer for complex agreements.</p>
    
    <div class="section">
        <h3>1. Parties and Identification</h3>
        <ul>
            <li>Confirm all parties are correctly identified (full legal names, addresses, and roles)</li>
            <li>Verify authority: Does the signer have the right to bind the party (e.g., officer, partner)?</li>
            <li>Check for any subsidiaries, affiliates, or third parties involved</li>
        </ul>
    </div>
    
    <div class="section">
        <h3>2. Scope of Work/Services/Goods</h3>
        <ul>
            <li>Clearly define what is being provided (deliverables, timelines, quality standards)</li>
            <li>Look for ambiguities: Are terms like "reasonable efforts" or "as needed" defined?</li>
            <li>Identify any exclusions or limitations on what's included</li>
        </ul>
    </div>
    
    <div class="section">
        <h3>3. Payment Terms</h3>
        <ul>
            <li>Review amounts, payment schedule, methods (e.g., wire, check), and currency</li>
            <li>Check for milestones, retainers, late fees, interest, or penalties</li>
            <li>Understand conditions for payment (e.g., upon delivery, approval)</li>
        </ul>
    </div>
    
    <div class="section">
        <h3>4. Term and Termination</h3>
        <ul>
            <li>Note the start date, duration (fixed term or ongoing), and renewal options</li>
            <li>Examine termination clauses: For cause (breach), without cause (notice period)</li>
            <li>Look for survival clauses: What obligations continue post-termination?</li>
        </ul>
    </div>
    
    <div class="section">
        <h3>5. Confidentiality and Non-Disclosure</h3>
        <ul>
            <li>Define what information is confidential and how it must be protected</li>
            <li>Check duration of confidentiality (e.g., perpetual or time-limited)</li>
            <li>Identify exceptions (e.g., public information, court orders)</li>
        </ul>
    </div>
    
    <div class="section">
        <h3>6. Intellectual Property (IP) Rights</h3>
        <ul>
            <li>Clarify ownership: Who owns new IP created under the contract?</li>
            <li>Review licenses granted: Exclusive/non-exclusive, duration, territory</li>
            <li>Ensure protections against infringement claims</li>
        </ul>
    </div>
    
    <div class="section">
        <h3>7. Warranties and Representations</h3>
        <ul>
            <li>Assess promises made (e.g., quality, compliance with laws, no conflicts)</li>
            <li>Check disclaimers: Are warranties limited or "as-is"?</li>
            <li>Understand remedies for breach of warranties</li>
        </ul>
    </div>
    
    <div class="section">
        <h3>8. Liability and Indemnification</h3>
        <ul>
            <li>Review caps on liability (e.g., limited to contract value)</li>
            <li>Check indemnification: Who covers losses from claims?</li>
            <li>Note insurance requirements</li>
        </ul>
    </div>
    
    <div class="section">
        <h3>9. Dispute Resolution</h3>
        <ul>
            <li>Identify method: Litigation, arbitration, mediation?</li>
            <li>Specify venue, jurisdiction, and applicable rules</li>
            <li>Look for attorney fees provisions (who pays in a dispute)</li>
        </ul>
    </div>
    
    <div class="section">
        <h3>10. Governing Law and Miscellaneous</h3>
        <ul>
            <li>Confirm governing law (e.g., state/country) and jurisdiction</li>
            <li>Check force majeure (excuses for non-performance due to unforeseen events)</li>
            <li>Review boilerplate: Assignment, amendments, entire agreement clause</li>
            <li>Ensure no unfair terms (e.g., one-sided clauses)</li>
        </ul>
    </div>
    
    <h3>Tips for Review:</h3>
    <ul style="margin-left: 20px;">
        <li>Read the entire contract multiple times</li>
        <li>Highlight unclear language and seek clarification</li>
        <li>Compare against industry standards or similar contracts</li>
        <li>Consider potential worst-case scenarios</li>
    </ul>
    
    <div class="disclaimer">
        <p><strong>Disclaimer:</strong> Prepared by Tim Harmar: Legal and Consulting Services – For informational purposes only. This is not legal advice.</p>
    </div>
    
    <div class="footer">
        <p>Prepared by Tim Harmar: Legal and Consulting Services - Sault Ste. Marie, Ontario</p>
    </div>
</body>
</html>
    `

    const newWindow = window.open('', '_blank')
    newWindow.document.write(content)
    newWindow.document.close()
  }

  // Function to open IP Protection Basics in new window
  const openIPGuide = () => {
    const content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IP Protection Basics</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }
        h1 { color: #1f2937; border-bottom: 3px solid #3b82f6; padding-bottom: 10px; }
        h2 { color: #374151; margin-top: 30px; }
        h3 { color: #4b5563; }
        .section { margin-bottom: 30px; padding: 20px; background: #f9fafb; border-left: 4px solid #3b82f6; }
        .subsection { margin: 15px 0; }
        .disclaimer { background: #fef3c7; padding: 15px; margin: 20px 0; border-radius: 5px; }
        .footer { text-align: center; margin-top: 40px; padding: 20px; background: #f3f4f6; }
        ul { margin: 10px 0; }
        li { margin: 5px 0; }
    </style>
</head>
<body>
    <h1>Intellectual Property Guide</h1>
    <h2>Understanding Trademarks, Copyrights, and Trade Secrets for Your Ontario Business</h2>
    
    <h3>Introduction</h3>
    <p>Intellectual property (IP) refers to creations of the mind, such as inventions, designs, brand identifiers, and creative works. Protecting your IP is critical for Ontario businesses to prevent unauthorized use, maintain competitive advantage, and avoid costly disputes. This guide, prepared by Tim Harmar Law, outlines the three main types of IP relevant to small businesses in Ontario—trademarks, copyrights, and trade secrets—under Canadian law, including the Trademarks Act (R.S.C., 1985, c. T-13), Copyright Act (R.S.C., 1985, c. C-42), and common law principles for trade secrets.</p>
    
    <div class="disclaimer">
        <p><strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal advice. Contact Tim Harmar Law for personalized legal advice tailored to your business.</p>
    </div>
    
    <div class="section">
        <h3>1. Trademarks</h3>
        
        <div class="subsection">
            <h4>What They Are</h4>
            <p>Trademarks protect brand identifiers that distinguish your goods or services from others, such as business names, logos, slogans, or symbols. Examples include your company name, product logos, or taglines like "Tim Hortons Always Fresh." In Canada, trademarks are governed by the Trademarks Act and administered by the Canadian Intellectual Property Office (CIPO).</p>
        </div>
        
        <div class="subsection">
            <h4>How to Protect</h4>
            <ul>
                <li><strong>Conduct a Search:</strong> Before using a trademark, search the CIPO Trademarks Database (available at www.canada.ca/en/services/business/ip/trademarks) to ensure it's not already registered or in use. Additional searches via Google or the Ontario Business Registry can help identify unregistered marks protected by common law.</li>
                <li><strong>Register with CIPO:</strong> Registering your trademark with CIPO provides nationwide protection for 10 years (renewable). Registration strengthens your legal rights, especially in disputes. File online at www.ic.gc.ca/eic/site/cipointernet-internetopic.nsf/eng/h_wr00002.html.</li>
                <li><strong>Use Properly:</strong> Use ™ for unregistered trademarks or ® for registered marks to signal your claim. Consistent use in commerce (e.g., on packaging, websites) strengthens common law rights, even without registration.</li>
                <li><strong>Monitor and Enforce:</strong> Regularly monitor for unauthorized use. If infringement occurs, consult a lawyer to send a cease-and-desist letter or pursue action under the Trademarks Act.</li>
            </ul>
        </div>
        
        <div class="subsection">
            <h4>Common Pitfalls</h4>
            <ul>
                <li>Choosing generic or descriptive terms (e.g., "Ontario Legal Services") that cannot be registered under s. 12 of the Trademarks Act.</li>
                <li>Failing to renew registrations every 10 years, as required by s. 46.</li>
                <li>Not documenting use of unregistered marks, which weakens common law claims in Ontario.</li>
            </ul>
        </div>
    </div>
    
    <div class="section">
        <h3>2. Copyrights</h3>
        
        <div class="subsection">
            <h4>What They Are</h4>
            <p>Copyright protects original works of authorship fixed in a tangible medium, such as writings, music, artwork, software, websites, photographs, and videos. It covers the expression of ideas, not the ideas themselves. In Canada, copyright is governed by the Copyright Act and automatically applies upon creation.</p>
        </div>
        
        <div class="subsection">
            <h4>How to Protect</h4>
            <ul>
                <li><strong>Automatic Protection:</strong> Under s. 5 of the Copyright Act, copyright exists from the moment a work is created in a fixed form (e.g., written, recorded). No registration is required, but it lasts for the creator's lifetime plus 70 years (as amended in 2022).</li>
                <li><strong>Register with CIPO:</strong> Voluntary registration (via www.ic.gc.ca/eic/site/cipointernet-internetopic.nsf/eng/h_wr00003.html) provides a certificate that strengthens enforcement in disputes, per s. 53. It's recommended for high-value works.</li>
                <li><strong>Document Creation:</strong> Keep records of drafts, creation dates, and authorship to prove ownership, especially in disputes.</li>
                <li><strong>Use Agreements:</strong> For works created by employees or contractors, use contracts to clarify ownership (e.g., "work-made-for-hire" agreements). Under s. 13(3), employer ownership applies to employee-created works in the course of employment.</li>
                <li><strong>Display Notice:</strong> Include a copyright notice (e.g., © 2025 Tim Harmar Law) to deter infringement, though not required under the Copyright Act.</li>
            </ul>
        </div>
        
        <div class="subsection">
            <h4>Common Pitfalls</h4>
            <ul>
                <li>Assuming "fair dealing" (Canada's equivalent to fair use, per s. 29) allows broad use of others' works. Fair dealing is limited to purposes like research, private study, or criticism.</li>
                <li>Using third-party content (e.g., images, music) without permission or proper licensing, risking infringement claims.</li>
            </ul>
        </div>
    </div>
    
    <div class="section">
        <h3>3. Trade Secrets</h3>
        
        <div class="subsection">
            <h4>What They Are</h4>
            <p>Trade secrets are confidential business information that provides a competitive edge, such as client lists, business processes, recipes, or proprietary methods. Examples include a law firm's client database or a unique marketing strategy. In Ontario, trade secrets are protected under common law, not a specific statute, though misappropriation may violate contracts or tort law (e.g., breach of confidence).</p>
        </div>
        
        <div class="subsection">
            <h4>How to Protect</h4>
            <ul>
                <li><strong>Identify Secrets:</strong> Clearly mark confidential information as "confidential" and limit access to authorized personnel only.</li>
                <li><strong>Use Non-Disclosure Agreements (NDAs):</strong> Require employees, contractors, and partners to sign NDAs to protect sensitive information. Ensure NDAs comply with Ontario contract law principles.</li>
                <li><strong>Implement Security Measures:</strong> Use passwords, encryption, and restricted access to safeguard data. Train employees on confidentiality obligations, aligning with Law Society of Ontario guidelines for client data protection.</li>
                <li><strong>Enforce Rights:</strong> If a trade secret is misappropriated (e.g., by a former employee), pursue legal remedies like injunctions or damages through Ontario courts for breach of confidence or contract.</li>
            </ul>
        </div>
        
        <div class="subsection">
            <h4>Common Pitfalls</h4>
            <ul>
                <li>Failing to use written NDAs, which weakens legal recourse.</li>
                <li>Publicly disclosing confidential information (e.g., on social media), which destroys trade secret status under common law.</li>
                <li>Not training employees on confidentiality, risking accidental leaks.</li>
            </ul>
        </div>
    </div>
    
    <h3>Next Steps for Your Ontario Business</h3>
    <ul>
        <li><strong>Audit Your IP:</strong> Identify all IP assets (e.g., logos, website content, client lists) and assess risks of infringement or loss.</li>
        <li><strong>Develop an IP Strategy:</strong> Prioritize protections based on your business goals. For example, register key trademarks with CIPO, document copyrightable works, and secure trade secrets with NDAs.</li>
        <li><strong>Seek Professional Help:</strong> Consult Tim Harmar Law for trademark searches, copyright registration, or drafting NDAs tailored to Ontario law. We can also assist with enforcement actions.</li>
        <li><strong>Stay Informed:</strong> Monitor changes to Canadian IP law through CIPO (www.ic.gc.ca) or the Law Society of Ontario for professional obligations.</li>
    </ul>
    
    <div class="disclaimer">
        <h4>Disclaimer</h4>
        <p>This guide, prepared by Tim Harmar Law, is for informational purposes only and does not constitute legal advice. For specific legal guidance, contact our firm to discuss your needs.</p>
    </div>
    
    <div class="footer">
        <p>Prepared by Tim Harmar: Legal and Consulting Services - Sault Ste. Marie, Ontario</p>
    </div>
</body>
</html>
    `

    const newWindow = window.open('', '_blank')
    newWindow.document.write(content)
    newWindow.document.close()
  }

  const resources = {
    guides: [
      {
        title: 'Privacy Compliance Guide for Small Business',
        description: 'Essential steps to ensure your business complies with Canadian privacy laws.',
        type: 'PDF Guide',
        icon: '🔒',
        downloadable: true,
        downloadAction: openPrivacyGuide,
      },
      {
        title: 'Contract Review Checklist',
        description: 'Key elements to review before signing any business contract.',
        type: 'Checklist',
        icon: '✅',
        downloadable: true,
        downloadAction: openContractChecklist,
      },
      {
        title: 'Intellectual Property Guide',
        description: 'Comprehensive guide to IP protection under Canadian law for Ontario businesses.',
        type: 'Guide',
        icon: '💡',
        downloadable: true,
        downloadAction: openIPGuide,
      },
    ],
    faqs: [
      {
        title: 'When do I need a lawyer for my startup?',
        description: 'Learn the critical moments when legal counsel becomes essential.',
        type: 'FAQ',
        icon: '❓',
      },
      {
        title: 'Understanding PIPEDA compliance',
        description: 'Common questions about Canadian privacy law requirements.',
        type: 'FAQ',
        icon: '🛡️',
      },
      {
        title: 'Employment law basics',
        description: 'Key employment law considerations for Canadian businesses.',
        type: 'FAQ',
        icon: '👥',
      },
    ],
    tools: [
      {
        title: 'Legal Budget Calculator',
        description: 'Estimate legal costs for common business services.',
        type: 'Tool',
        icon: '💰',
      },
      {
        title: 'Contract Template Library',
        description: 'Basic templates for common business agreements.',
        type: 'Templates',
        icon: '📄',
      },
      {
        title: 'Compliance Calendar',
        description: 'Track important legal deadlines and requirements.',
        type: 'Calendar',
        icon: '📅',
      },
    ],
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl shadow-lg"
    >
      <div className="flex items-center mb-6">
        <FileText className="w-8 h-8 text-blue-600 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">Legal Resources Library</h3>
      </div>

      <p className="text-gray-600 mb-6">
        Access helpful legal resources, guides, and tools to support your business.
      </p>

      <div className="flex space-x-2 mb-6">
        {Object.keys(resources).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {resources[selectedCategory].map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start flex-1">
                <span className="text-2xl mr-3">{resource.icon}</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">{resource.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{resource.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
              </div>
              {resource.downloadable && (
                <button
                  onClick={resource.downloadAction}
                  className="ml-4 flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  <span>View Guide</span>
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Access Full Resource Library
      </motion.button>
    </motion.div>
  )
}

// Legal News & Updates Feed
export const LegalNewsFeed = () => {
  const [activeTab, setActiveTab] = useState('privacy')

  const newsItems = {
    privacy: [
      {
        title: 'New PIPEDA Amendments Coming in 2025',
        date: '2025-01-15',
        category: 'Privacy Law',
        link: 'https://www.priv.gc.ca/en/about-the-opc/what-we-do/provincial-and-territorial-collaboration/provincial-and-territorial-privacy-laws-and-oversight/',
      },
      {
        title: 'Supreme Court Rules on Digital Privacy Rights',
        date: '2025-01-10',
        category: 'Privacy Law',
        link: 'https://www.scc-csc.ca/case-dossier/info/sum-som-eng.aspx',
      },
      {
        title: 'CASL Enforcement Trends for Small Business',
        date: '2025-01-05',
        category: 'Privacy Law',
        link: 'https://crtc.gc.ca/eng/casl-lcap/',
      },
    ],
    litigation: [
      {
        title: 'Ontario Court of Appeal Updates Civil Procedure Rules',
        date: '2025-01-12',
        category: 'Civil Litigation',
        link: 'https://www.ontariocourts.ca/coa/en/',
      },
      {
        title: 'New Anti-SLAPP Legislation Developments',
        date: '2025-01-08',
        category: 'Civil Litigation',
        link: 'https://www.ontario.ca/laws/statute/10015',
      },
      {
        title: 'Commercial Dispute Resolution Trends',
        date: '2025-01-03',
        category: 'Civil Litigation',
        link: 'https://www.ontariocourts.ca/scj/en/',
      },
    ],
    business: [
      {
        title: 'Economic Development Incentives for Northern Ontario',
        date: '2025-01-14',
        category: 'Business Law',
        link: 'https://www.ontario.ca/page/northern-ontario-heritage-fund',
      },
      {
        title: 'Corporate Governance Best Practices Update',
        date: '2025-01-09',
        category: 'Business Law',
        link: 'https://www.osc.ca/en',
      },
      {
        title: 'IP Strategy for Tech Startups',
        date: '2025-01-06',
        category: 'Business Law',
        link: 'https://www.ic.gc.ca/eic/site/cipointernet-internetopic.nsf/eng/home',
      },
    ],
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-xl shadow-lg"
    >
      <div className="flex items-center mb-6">
        <Bell className="w-8 h-8 text-teal-600 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">In the News</h3>
      </div>

      <div className="flex space-x-4 mb-6">
        {Object.keys(newsItems).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab
                ? 'bg-teal-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {newsItems[activeTab].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-l-4 border-teal-500 pl-4 py-2"
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:bg-gray-50 rounded-lg p-2 transition-colors"
            >
              <h4 className="font-semibold text-gray-900 hover:text-teal-600 transition-colors">
                {item.title}
              </h4>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <Clock className="w-4 h-4 mr-1" />
                {item.date} • {item.category}
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Interactive Legal Assessment Tool
export const LegalAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 'business_type',
      question: 'What type of business do you operate?',
      options: ['Technology Startup', 'Manufacturing', 'Professional Services', 'Retail', 'Other'],
    },
    {
      id: 'legal_concerns',
      question: 'What are your primary legal concerns?',
      options: [
        'Privacy Compliance',
        'Contract Review',
        'IP Protection',
        'Regulatory Compliance',
        'Litigation Risk',
      ],
    },
    {
      id: 'urgency',
      question: 'How urgent is your legal need?',
      options: ['Immediate (within 1 week)', 'Soon (within 1 month)', 'Planning ahead (3+ months)'],
    },
  ]

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: answer }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const resetAssessment = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-lg"
    >
      <div className="flex items-center mb-6">
        <Brain className="w-8 h-8 text-purple-600 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">Legal Needs Assessment</h3>
      </div>

      {!showResults ? (
        <div>
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h4 className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</h4>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswer(option)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-3 text-left border border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all"
              >
                {option}
              </motion.button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h4 className="text-lg font-semibold mb-4">Assessment Complete!</h4>
          <div className="bg-white p-6 rounded-lg mb-4">
            <p className="text-gray-700 mb-4">
              Based on your responses, Tim Harmar can help you with specialized legal services
              tailored to your needs.
            </p>
            <div className="space-y-2">
              <p>
                <strong>Business Type:</strong> {answers.business_type}
              </p>
              <p>
                <strong>Primary Concern:</strong> {answers.legal_concerns}
              </p>
              <p>
                <strong>Timeline:</strong> {answers.urgency}
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={resetAssessment}
              className="flex-1 bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Retake Assessment
            </button>
            <button
              onClick={() => {
                const emailBody =
                  `Hello,%0D%0A%0D%0A` +
                  `I have completed the legal needs assessment and would like to schedule a consultation.%0D%0A%0D%0A` +
                  `Assessment Results:%0D%0A` +
                  `Business Type: ${answers.business_type}%0D%0A` +
                  `Primary Concern: ${answers.legal_concerns}%0D%0A` +
                  `Timeline: ${answers.urgency}%0D%0A%0D%0A` +
                  `Please let me know your availability.%0D%0A%0D%0A` +
                  `Thank you!`

                window.location.href = `mailto:kburton@timharmar.com?subject=Consultation Request - Legal Assessment Complete&body=${emailBody}`
              }}
              className="flex-1 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white p-3 rounded-lg font-semibold shadow-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default {
  AILegalAssistant,
  SmartScheduler,
  LegalResourcesLibrary,
  LegalNewsFeed,
  LegalAssessment,
}
