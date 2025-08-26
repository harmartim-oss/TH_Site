import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import jsPDF from 'jspdf'
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
          <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Type</label>
          <select
            value={consultationType}
            onChange={(e) => setConsultationType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Available Times</label>
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

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white p-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
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

  // Function to generate and download Privacy Compliance Guide PDF
  const downloadPrivacyGuide = () => {
    const doc = new jsPDF()

    // Set font size and add title
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text('Privacy Compliance Guide for Small Business', 20, 30)

    doc.setFontSize(14)
    doc.setFont('helvetica', 'normal')
    doc.text('Essential Steps to Ensure Your Business Complies with Canadian Privacy Laws', 20, 45)

    // Add introduction
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('Introduction', 20, 65)

    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    const introText =
      "This guide provides small businesses in Ontario with a clear and practical roadmap to comply with Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and Ontario's privacy regulations."
    doc.text(doc.splitTextToSize(introText, 170), 20, 75)

    // Add key steps
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('Key Steps for Privacy Compliance', 20, 100)

    let yPosition = 115
    const steps = [
      {
        title: '1. Understand Applicable Laws',
        content:
          'PIPEDA applies to private-sector organizations in Canada that collect, use, or disclose personal information during commercial activities.',
      },
      {
        title: '2. Appoint a Privacy Officer',
        content:
          'Designate a person responsible for overseeing privacy compliance and handling privacy policies and complaints.',
      },
      {
        title: '3. Develop a Privacy Policy',
        content:
          'Create a clear, accessible privacy policy that explains how your business collects, uses, stores, and protects personal information.',
      },
      {
        title: '4. Obtain Consent',
        content:
          'Obtain explicit or implied consent before collecting personal information and clearly explain why the information is needed.',
      },
      {
        title: '5. Secure Personal Information',
        content:
          'Implement safeguards such as encryption, secure storage, and restricted access to personal data.',
      },
      {
        title: '6. Limit Data Retention',
        content:
          'Retain personal information only as long as necessary for the identified purpose.',
      },
      {
        title: '7. Respond to Access Requests',
        content:
          'Allow individuals to access their personal information and respond to requests within 30 days.',
      },
      {
        title: '8. Prepare for Data Breaches',
        content:
          'Develop a data breach response plan and document all breaches to prevent recurrence.',
      },
    ]

    doc.setFontSize(11)
    steps.forEach((step) => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 30
      }

      doc.setFont('helvetica', 'bold')
      doc.text(step.title, 20, yPosition)
      yPosition += 8

      doc.setFont('helvetica', 'normal')
      const stepText = doc.splitTextToSize(step.content, 170)
      doc.text(stepText, 20, yPosition)
      yPosition += stepText.length * 5 + 8
    })

    // Add resources
    if (yPosition > 220) {
      doc.addPage()
      yPosition = 30
    }

    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('Resources', 20, yPosition)
    yPosition += 15

    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    doc.text('Office of the Privacy Commissioner of Canada: https://www.priv.gc.ca', 20, yPosition)
    yPosition += 8
    doc.text('PIPEDA Compliance Guide: https://www.priv.gc.ca/en/for-businesses', 20, yPosition)
    yPosition += 15

    // Add disclaimer
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('Disclaimer', 20, yPosition)
    yPosition += 10

    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    const disclaimerText =
      'This guide is for informational purposes only and does not constitute legal advice. Consult a qualified lawyer to ensure compliance with all applicable laws.'
    doc.text(doc.splitTextToSize(disclaimerText, 170), 20, yPosition)

    // Add footer
    doc.setFontSize(9)
    doc.text(
      'Prepared by Tim Harmar Legal & Consulting Services - Sault Ste. Marie, Ontario',
      20,
      280
    )

    // Download the PDF
    doc.save('Privacy-Compliance-Guide-for-Small-Business.pdf')
  }

  // Function to generate and download Contract Review Checklist PDF
  const downloadContractChecklist = () => {
    const doc = new jsPDF()

    // Set font size and add title
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text('Contract Review Checklist', 20, 30)

    doc.setFontSize(14)
    doc.setFont('helvetica', 'normal')
    doc.text('Key Elements to Review Before Signing Any Business Contract', 20, 45)

    // Add introduction
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    const introText =
      "This checklist is designed as a quick reference for small business owners and entrepreneurs to ensure they've thoroughly evaluated a contract before committing. It's not a substitute for professional legal advice—consult a lawyer for complex agreements."
    doc.text(doc.splitTextToSize(introText, 170), 20, 60)

    let yPosition = 85

    // Add checklist items
    const checklistItems = [
      {
        title: '1. Parties and Identification',
        items: [
          'Confirm all parties are correctly identified (full legal names, addresses, and roles)',
          'Verify authority: Does the signer have the right to bind the party (e.g., officer, partner)?',
          'Check for any subsidiaries, affiliates, or third parties involved',
        ],
      },
      {
        title: '2. Scope of Work/Services/Goods',
        items: [
          'Clearly define what is being provided (deliverables, timelines, quality standards)',
          'Look for ambiguities: Are terms like "reasonable efforts" or "as needed" defined?',
          "Identify any exclusions or limitations on what's included",
        ],
      },
      {
        title: '3. Payment Terms',
        items: [
          'Review amounts, payment schedule, methods (e.g., wire, check), and currency',
          'Check for milestones, retainers, late fees, interest, or penalties',
          'Understand conditions for payment (e.g., upon delivery, approval)',
        ],
      },
      {
        title: '4. Term and Termination',
        items: [
          'Note the start date, duration (fixed term or ongoing), and renewal options',
          'Examine termination clauses: For cause (breach), without cause (notice period)',
          'Look for survival clauses: What obligations continue post-termination?',
        ],
      },
      {
        title: '5. Confidentiality and Non-Disclosure',
        items: [
          'Define what information is confidential and how it must be protected',
          'Check duration of confidentiality (e.g., perpetual or time-limited)',
          'Identify exceptions (e.g., public information, court orders)',
        ],
      },
      {
        title: '6. Intellectual Property (IP) Rights',
        items: [
          'Clarify ownership: Who owns new IP created under the contract?',
          'Review licenses granted: Exclusive/non-exclusive, duration, territory',
          'Ensure protections against infringement claims',
        ],
      },
      {
        title: '7. Warranties and Representations',
        items: [
          'Assess promises made (e.g., quality, compliance with laws, no conflicts)',
          'Check disclaimers: Are warranties limited or "as-is"?',
          'Understand remedies for breach of warranties',
        ],
      },
      {
        title: '8. Liability and Indemnification',
        items: [
          'Review caps on liability (e.g., limited to contract value)',
          'Check indemnification: Who covers losses from claims?',
          'Note insurance requirements',
        ],
      },
      {
        title: '9. Dispute Resolution',
        items: [
          'Identify method: Litigation, arbitration, mediation?',
          'Specify venue, jurisdiction, and applicable rules',
          'Look for attorney fees provisions (who pays in a dispute)',
        ],
      },
      {
        title: '10. Governing Law and Miscellaneous',
        items: [
          'Confirm governing law (e.g., state/country) and jurisdiction',
          'Check force majeure (excuses for non-performance due to unforeseen events)',
          'Review boilerplate: Assignment, amendments, entire agreement clause',
          'Ensure no unfair terms (e.g., one-sided clauses)',
        ],
      },
    ]

    doc.setFontSize(11)
    checklistItems.forEach((section) => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 30
      }

      doc.setFont('helvetica', 'bold')
      doc.text(section.title, 20, yPosition)
      yPosition += 8

      doc.setFont('helvetica', 'normal')
      section.items.forEach((item) => {
        const checkboxText = `☐ ${item}`
        const wrappedText = doc.splitTextToSize(checkboxText, 165)
        doc.text(wrappedText, 25, yPosition)
        yPosition += wrappedText.length * 5 + 3
      })
      yPosition += 5
    })

    // Add tips
    if (yPosition > 230) {
      doc.addPage()
      yPosition = 30
    }

    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('Tips for Review:', 20, yPosition)
    yPosition += 10

    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    const tips = [
      'Read the entire contract multiple times',
      'Highlight unclear language and seek clarification',
      'Compare against industry standards or similar contracts',
      'Consider potential worst-case scenarios',
    ]

    tips.forEach((tip) => {
      doc.text(`• ${tip}`, 25, yPosition)
      yPosition += 7
    })

    // Add disclaimer
    yPosition += 10
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    const disclaimerText =
      'Prepared by Tim Harmar Legal & Consulting Services – For informational purposes only. This is not legal advice.'
    doc.text(doc.splitTextToSize(disclaimerText, 170), 20, yPosition)

    // Download the PDF
    doc.save('Contract-Review-Checklist.pdf')
  }

  // Function to generate and download IP Protection Basics PDF
  const downloadIPGuide = () => {
    const doc = new jsPDF()

    // Set font size and add title
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text('IP Protection Basics', 20, 30)

    doc.setFontSize(14)
    doc.setFont('helvetica', 'normal')
    doc.text('Understanding Trademarks, Copyrights, and Trade Secrets for Your Business', 20, 45)

    // Add introduction
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('Introduction to IP', 20, 65)

    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    const introText =
      'Intellectual property refers to creations of the mind, such as inventions, designs, brands, and artistic works. Protecting IP helps prevent others from using your ideas without permission, potentially saving your business from costly disputes. The three main types relevant to most small businesses are trademarks, copyrights, and trade secrets.'
    doc.text(doc.splitTextToSize(introText, 170), 20, 75)

    let yPosition = 110

    // Add IP sections
    const ipSections = [
      {
        title: '1. Trademarks',
        subtitle: 'What They Are:',
        content:
          'Trademarks protect brand identifiers like names, logos, slogans, and symbols that distinguish your goods/services from others. Examples: Your company name, product logos, or taglines like "Just Do It."',
        howToProtect: [
          'Conduct a search: Use the USPTO database or tools like Google to check for existing marks',
          'Register: Federal registration (via USPTO) provides nationwide protection',
          'Use properly: Always use ™ for unregistered marks or ® for registered',
          'Monitor and enforce: Watch for infringers and send cease-and-desist letters if needed',
        ],
        pitfalls:
          'Choosing generic terms (e.g., "Coffee Shop") that can\'t be trademarked, or not renewing registrations (every 10 years).',
      },
      {
        title: '2. Copyrights',
        subtitle: 'What They Are:',
        content:
          "Copyrights protect original works of authorship fixed in a tangible medium, such as writings, music, art, software code, websites, photos, and videos. They don't protect ideas, only the expression of ideas.",
        howToProtect: [
          'Automatic protection: Copyright exists from the moment of creation—no registration needed',
          'Register: With the U.S. Copyright Office for stronger enforcement',
          'Document creation: Keep records of drafts, dates, and authors',
          'Licenses and contracts: Use agreements for collaborations or employee works',
        ],
        pitfalls:
          'Assuming "fair use" covers everything (it\'s limited), or using others\' works without permission.',
      },
      {
        title: '3. Trade Secrets',
        subtitle: 'What They Are:',
        content:
          "Confidential business information that provides a competitive advantage, such as formulas, processes, customer lists, recipes, or algorithms. Examples: Coca-Cola's formula or Google's search algorithm.",
        howToProtect: [
          'Identify secrets: Label documents as "confidential" and restrict access',
          'Use NDAs: Require non-disclosure agreements for employees, contractors, and partners',
          'Security measures: Implement passwords, restricted access, employee training',
          'Enforce: Sue for misappropriation if stolen (e.g., by ex-employees)',
        ],
        pitfalls:
          'Not having written policies, or publicly disclosing info, which destroys secrecy.',
      },
    ]

    ipSections.forEach((section) => {
      if (yPosition > 240) {
        doc.addPage()
        yPosition = 30
      }

      // Section title
      doc.setFontSize(14)
      doc.setFont('helvetica', 'bold')
      doc.text(section.title, 20, yPosition)
      yPosition += 10

      // Subtitle and content
      doc.setFontSize(11)
      doc.setFont('helvetica', 'bold')
      doc.text(section.subtitle, 20, yPosition)
      yPosition += 7

      doc.setFont('helvetica', 'normal')
      const contentText = doc.splitTextToSize(section.content, 170)
      doc.text(contentText, 20, yPosition)
      yPosition += contentText.length * 5 + 8

      // How to protect
      doc.setFont('helvetica', 'bold')
      doc.text('How to Protect:', 20, yPosition)
      yPosition += 7

      doc.setFont('helvetica', 'normal')
      section.howToProtect.forEach((item) => {
        const itemText = doc.splitTextToSize(`• ${item}`, 165)
        doc.text(itemText, 25, yPosition)
        yPosition += itemText.length * 5 + 3
      })

      // Common pitfalls
      yPosition += 5
      doc.setFont('helvetica', 'bold')
      doc.text('Common Pitfalls:', 20, yPosition)
      yPosition += 7

      doc.setFont('helvetica', 'normal')
      const pitfallText = doc.splitTextToSize(section.pitfalls, 170)
      doc.text(pitfallText, 20, yPosition)
      yPosition += pitfallText.length * 5 + 15
    })

    // Add next steps
    if (yPosition > 220) {
      doc.addPage()
      yPosition = 30
    }

    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('Next Steps for Your Business', 20, yPosition)
    yPosition += 10

    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    const nextSteps = [
      'Audit your IP: List assets and assess risks',
      'Develop an IP strategy: Prioritize protections based on business needs',
      'Seek professional help: A lawyer can handle searches, registrations, and contracts',
      'Stay informed: IP laws evolve—monitor changes via resources like USPTO.gov',
    ]

    nextSteps.forEach((step) => {
      doc.text(`• ${step}`, 25, yPosition)
      yPosition += 7
    })

    // Add disclaimer
    yPosition += 10
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    const disclaimerText =
      'Prepared by Tim Harmar Legal & Consulting Services – For informational purposes only. This is not legal advice.'
    doc.text(doc.splitTextToSize(disclaimerText, 170), 20, yPosition)

    // Download the PDF
    doc.save('IP-Protection-Basics.pdf')
  }

  const resources = {
    guides: [
      {
        title: 'Privacy Compliance Guide for Small Business',
        description: 'Essential steps to ensure your business complies with Canadian privacy laws.',
        type: 'PDF Guide',
        icon: '🔒',
        downloadable: true,
        downloadAction: downloadPrivacyGuide,
      },
      {
        title: 'Contract Review Checklist',
        description: 'Key elements to review before signing any business contract.',
        type: 'Checklist',
        icon: '✅',
        downloadable: true,
        downloadAction: downloadContractChecklist,
      },
      {
        title: 'IP Protection Basics',
        description: 'Understanding trademarks, copyrights, and trade secrets for your business.',
        type: 'Guide',
        icon: '💡',
        downloadable: true,
        downloadAction: downloadIPGuide,
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
                  <span>Download PDF</span>
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
            <button className="flex-1 bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors">
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
