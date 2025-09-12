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
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Send,
  X,
  MoreHorizontal,
  Scale,
  Lightbulb,
  Building2,
  ArrowRight,
} from 'lucide-react'

// AI-Powered Legal Assistant Chat Widget
export const AILegalAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Tim's AI legal assistant. I can help you with information about our legal services, answer common questions, and guide you to the right resources. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Enhanced AI response logic with appointment integration
  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase()

    // Emergency legal help
    if (
      message.includes('urgent') ||
      message.includes('emergency') ||
      message.includes('asap') ||
      message.includes('immediately')
    ) {
      return {
        text: 'I understand this is urgent. For immediate legal assistance, please call us directly at (705) 943-5049. Tim Harmar provides emergency legal consultations for time-sensitive matters. I can also help you schedule an expedited appointment.',
        quickActions: ['Call Now (705) 943-5049', 'Emergency Consultation', 'Text Us'],
      }
    }

    // Startup and business formation
    if (
      message.includes('startup') ||
      message.includes('business formation') ||
      message.includes('new business') ||
      message.includes('incorporate')
    ) {
      return {
        text: "Great! Tim specializes in startup legal services. Our Business Start Up & Strategy package includes: business entity selection, founders' agreements, IP strategy, regulatory compliance roadmaps, and employment policies. We help you build a solid legal foundation while staying agile and cost-effective. What stage is your startup in?",
        quickActions: ['Startup Consultation', 'Incorporation Guide', 'Founders Agreement Info'],
      }
    }

    // Privacy and cybersecurity
    if (
      message.includes('privacy') ||
      message.includes('data') ||
      message.includes('cybersecurity') ||
      message.includes('pipeda') ||
      message.includes('gdpr') ||
      message.includes('breach')
    ) {
      return {
        text: 'Tim is a leading expert in Canadian privacy and cybersecurity law. Our services include PIPEDA compliance, data breach response protocols, privacy impact assessments, CASL compliance, cross-border data transfers, and cybersecurity audits. We help businesses of all sizes navigate the complex privacy landscape. What specific privacy challenge are you facing?',
        quickActions: ['Privacy Assessment', 'Data Breach Response', 'PIPEDA Consultation'],
      }
    }

    // Litigation and disputes
    if (
      message.includes('litigation') ||
      message.includes('dispute') ||
      message.includes('contract') ||
      message.includes('lawsuit') ||
      message.includes('sued') ||
      message.includes('court')
    ) {
      return {
        text: 'Tim has extensive litigation experience, including cases argued at the Supreme Court of Canada. Our civil litigation practice covers contract disputes, employment litigation, commercial disputes, and appellate matters. We provide strategic advocacy while exploring cost-effective resolution options like mediation. Tell me more about your situation.',
        quickActions: ['Litigation Strategy', 'Contract Dispute Help', 'Mediation Options'],
      }
    }

    // Intellectual property
    if (
      message.includes('intellectual property') ||
      message.includes('trademark') ||
      message.includes('copyright') ||
      message.includes('patent') ||
      message.includes('ip') ||
      message.includes('brand protection')
    ) {
      return {
        text: 'Our IP practice provides comprehensive protection for your innovations and creative assets. We handle trademark registration and enforcement, copyright matters, trade secret protection, licensing agreements, and IP portfolio management. Tim helps businesses develop strategic IP licensing and monetization strategies. What IP assets need protection?',
        quickActions: ['Trademark Registration', 'IP Strategy Session', 'Copyright Protection'],
      }
    }

    // Pricing and consultation
    if (
      message.includes('cost') ||
      message.includes('price') ||
      message.includes('fee') ||
      message.includes('consultation') ||
      message.includes('free')
    ) {
      return {
        text: 'We believe in transparent, value-based pricing. Your initial consultation is completely FREE with no obligation. During this 30-minute session, Tim will assess your legal needs and provide strategic guidance. Our fee structures are competitive and we offer flexible payment arrangements. Ready to schedule?',
        quickActions: ['Book Free Consultation', 'Learn About Fees', 'Payment Options'],
      }
    }

    // Scheduling and appointments
    if (
      message.includes('schedule') ||
      message.includes('appointment') ||
      message.includes('meet') ||
      message.includes('book') ||
      message.includes('available')
    ) {
      return {
        text: 'Perfect! I can help you schedule a consultation with Tim. We offer flexible scheduling including morning, afternoon, and evening slots. Our Smart Scheduler below makes it easy to book your preferred time. Tim also offers virtual consultations via secure video call. What time works best for you?',
        quickActions: ['Use Smart Scheduler', 'Virtual Meeting', 'Call to Schedule'],
      }
    }

    // Location and service area
    if (
      message.includes('location') ||
      message.includes('where') ||
      message.includes('sault') ||
      message.includes('ontario') ||
      message.includes('office')
    ) {
      return {
        text: 'Tim Harmar Legal is based in Sault Ste. Marie, Ontario, serving clients throughout Northern Ontario and beyond. We offer in-person consultations at our Sault Ste. Marie office, as well as secure virtual meetings for clients anywhere in Ontario. Our practice covers all of Canada for federal matters.',
        quickActions: ['Virtual Consultation', 'Office Location', 'Service Areas'],
      }
    }

    // Legal experience and credentials
    if (
      message.includes('experience') ||
      message.includes('background') ||
      message.includes('qualified') ||
      message.includes('credentials') ||
      message.includes('supreme court')
    ) {
      return {
        text: 'Tim Harmar is an award-winning lawyer with 15+ years of experience and has argued cases at the Supreme Court of Canada. He holds degrees from University of Windsor Faculty of Law and York University Osgoode Hall Law School. Tim is a member in good standing with the Law Society of Ontario and regularly speaks at legal conferences.',
        quickActions: ["Tim's Full Bio", 'Awards & Recognition', 'Schedule with Tim'],
      }
    }

    // Contact information
    if (
      message.includes('contact') ||
      message.includes('phone') ||
      message.includes('email') ||
      message.includes('reach')
    ) {
      return {
        text: 'You can reach us several ways: Phone: (705) 943-5049 | Email: kburton@timharmar.com | Or use our contact form for non-urgent matters. We typically respond to emails within 2 business hours during office hours (9 AM - 5 PM EST). For urgent matters, please call directly.',
        quickActions: ['Call (705) 943-5049', 'Send Email', 'Contact Form'],
      }
    }

    // Default comprehensive response
    return {
      text: 'Welcome! Tim Harmar Legal provides cutting-edge legal solutions in Northern Ontario. Our award-winning practice specializes in civil litigation, privacy & cybersecurity law, intellectual property, business law, and startup consulting. Tim combines 15+ years of experience with innovative technology to deliver exceptional results. What legal challenge can we help you with?',
      quickActions: ['View All Services', 'Free Consultation', 'Legal Assessment'],
    }
  }

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: Date.now(),
        text: inputValue,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString(),
      }
      setMessages([...messages, newMessage])
      setInputValue('')
      setIsTyping(true)

      // Simulate AI processing and response
      setTimeout(() => {
        const aiResponse = generateAIResponse(inputValue)
        const botResponse = {
          id: Date.now() + 1,
          text: aiResponse.text,
          sender: 'bot',
          timestamp: new Date().toLocaleTimeString(),
          quickActions: aiResponse.quickActions,
        }
        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      }, 1500)
    }
  }

  const handleQuickAction = (action) => {
    const actionMessage = {
      id: Date.now(),
      text: action,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
    }
    setMessages((prev) => [...prev, actionMessage])
    setIsTyping(true)

    setTimeout(() => {
      let responseText = ''
      let hasActions = false
      let newQuickActions = []

      switch (action) {
        case 'Schedule Consultation':
        case 'Schedule Free Consultation':
        case 'Free Consultation':
        case 'Book Free Consultation':
          responseText =
            'Excellent! Your initial consultation is completely FREE (30 minutes) with no obligation. I can help you schedule immediately. Please use our Smart Scheduler below, or contact us directly: (705) 943-5049 | kburton@timharmar.com. We offer both in-person and virtual consultations.'
          newQuickActions = [
            'Use Smart Scheduler',
            'Call (705) 943-5049',
            'Email kburton@timharmar.com',
          ]
          hasActions = true
          break

        case 'Call (705) 943-5049':
        case 'Call Now (705) 943-5049':
        case 'Call Now':
          window.location.href = 'tel:+17059435049'
          responseText =
            "Calling (705) 943-5049... If the call doesn't connect automatically, please dial (705) 943-5049 directly. We're available Monday-Friday 9 AM - 5 PM EST."
          break

        case 'Send Email':
        case 'Email Us':
        case 'Email kburton@timharmar.com':
          window.location.href =
            'mailto:kburton@timharmar.com?subject=Legal Inquiry from Website&body=Hello,%0D%0A%0D%0AI am interested in legal services and would like to discuss my needs.%0D%0A%0D%0APlease contact me to schedule a consultation.%0D%0A%0D%0AThank you!'
          responseText =
            "Opening your email client to contact kburton@timharmar.com... If it doesn't open automatically, please email kburton@timharmar.com directly."
          break

        case 'Use Smart Scheduler':
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          responseText =
            "Perfect! I'm scrolling to our Smart Scheduler below. It's the easiest way to book your free consultation. Just fill in your details and preferred time, and we'll confirm your appointment within 2 hours."
          break

        case 'View All Services':
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
          responseText =
            'Here are our comprehensive legal services: Civil Litigation (contract disputes, commercial litigation), Privacy & Cybersecurity Law (PIPEDA compliance, data breach response), Intellectual Property (trademarks, copyrights), Business Law (corporate formation, contracts), and Business Start Up & Strategy (comprehensive startup legal support).'
          break

        case 'Legal Assessment':
          responseText =
            'I can help assess your legal needs! Please tell me: 1) What type of business/situation are you in? 2) What specific legal challenge are you facing? 3) How urgent is this matter? This helps me provide more targeted guidance.'
          break

        case 'Resource Library':
          responseText =
            'Our Legal Resources Library includes: Privacy Compliance Guide for Small Business, Contract Review Checklist, and IP Protection Guide. These comprehensive guides are available in the Innovative Legal Technology section below. All resources are free and prepared by Tim Harmar Legal.'
          newQuickActions = ['Privacy Guide', 'Contract Checklist', 'IP Guide']
          hasActions = true
          break

        case 'Privacy Assessment':
        case 'PIPEDA Consultation':
          responseText =
            'Tim is a recognized expert in Canadian privacy law. Our privacy assessment covers: PIPEDA compliance review, privacy policy development, data breach response planning, employee training, and cross-border data transfer protocols. What specific privacy concerns do you have?'
          newQuickActions = [
            'Schedule Privacy Consultation',
            'Data Breach Help',
            'PIPEDA Compliance',
          ]
          hasActions = true
          break

        case 'Startup Consultation':
        case 'Business Formation Guide':
          responseText =
            "Our startup legal package includes: business entity selection (incorporation, partnership, LLC), founders' agreements, IP strategy development, employment policies, regulatory compliance roadmaps, and investor agreements. What stage is your startup currently in?"
          newQuickActions = ['Incorporation Help', 'Founders Agreements', 'IP Strategy']
          hasActions = true
          break

        case 'Litigation Strategy':
        case 'Contract Dispute Help':
          responseText =
            'Tim has extensive litigation experience including Supreme Court cases. We handle: contract disputes, employment litigation, commercial disputes, breach of fiduciary duty, and appellate matters. We also offer mediation and strategic resolution options. What type of dispute are you facing?'
          newQuickActions = ['Contract Dispute', 'Employment Issue', 'Commercial Litigation']
          hasActions = true
          break

        case "Tim's Full Bio":
          responseText =
            'Tim J. Harmar is an award-winning lawyer with 15+ years experience. Education: University of Windsor Faculty of Law (J.D.), York University Osgoode Hall Law School (LL.M.). Notable achievements: Supreme Court of Canada counsel designation, legal conference speaker, recognized privacy law expert.'
          newQuickActions = ['Schedule with Tim', 'Awards & Recognition', 'Supreme Court Cases']
          hasActions = true
          break

        case 'Virtual Consultation':
        case 'Virtual Meeting':
          responseText =
            'We offer secure virtual consultations via video call for clients anywhere in Ontario. Virtual meetings are perfect for initial consultations, document review, and ongoing legal guidance. Same professional service, convenient access from your location.'
          newQuickActions = ['Book Virtual Meeting', 'Technical Requirements', 'Privacy & Security']
          hasActions = true
          break

        case 'Emergency Consultation':
          responseText =
            'For urgent legal matters, please call (705) 943-5049 immediately. Tim provides emergency consultations for time-sensitive issues including litigation deadlines, regulatory compliance, data breaches, and business crises. After-hours emergency contact available for existing clients.'
          newQuickActions = ['Call Emergency Line', 'Urgent Appointment', 'Crisis Management']
          hasActions = true
          break

        default:
          responseText =
            "I'd be happy to help you with that. For specific assistance, please contact our office at (705) 943-5049 or email kburton@timharmar.com. Our team provides personalized guidance for your unique legal needs."
          newQuickActions = ['Schedule Consultation', 'Call Now', 'Email Us']
          hasActions = true
      }

      const botResponse = {
        id: Date.now() + 1,
        text: responseText,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString(),
        quickActions: hasActions ? newQuickActions : undefined,
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full shadow-lg z-50 hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isOpen ? '0 0 20px rgba(59, 130, 246, 0.5)' : '0 10px 25px rgba(0,0,0,0.3)',
        }}
      >
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-40 right-8 w-96 h-[500px] bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
          >
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">AI Legal Assistant</h3>
                  <p className="text-sm opacity-90">Powered by Tim Harmar Legal</p>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="max-w-[80%]">
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-white text-gray-800 rounded-bl-none shadow-sm border'
                      }`}
                    >
                      {message.text}
                    </div>
                    {message.timestamp && (
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === 'user'
                            ? 'text-right text-gray-500'
                            : 'text-left text-gray-500'
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    )}
                    {message.quickActions && (
                      <div className="mt-2 space-y-1">
                        {message.quickActions.map((action, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleQuickAction(action)}
                            className="block w-full text-left p-2 text-sm bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors border border-blue-200"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {action}
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-3 rounded-lg rounded-bl-none shadow-sm border">
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask a legal question..."
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  disabled={isTyping}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={18} />
                </motion.button>
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
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleScheduleSubmit = () => {
    if (!consultationType || !selectedDate || !selectedTime || !userName || !userEmail) {
      alert('Please fill in all required fields.')
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(userEmail)) {
      alert('Please enter a valid email address.')
      return
    }

    // Show confirmation message
    setIsSubmitted(true)

    // Enhanced email content with professional formatting
    const emailSubject = `🏛️ Consultation Request - ${consultationType} - ${userName}`

    const emailBody =
      `Dear Tim Harmar Legal Team,%0D%0A%0D%0A` +
      `I would like to schedule a consultation with the following details:%0D%0A%0D%0A` +
      `📋 CLIENT INFORMATION:%0D%0A` +
      `• Name: ${userName}%0D%0A` +
      `• Email: ${userEmail}%0D%0A` +
      `• Phone: ${userPhone || 'Not provided'}%0D%0A%0D%0A` +
      `⚖️ CONSULTATION DETAILS:%0D%0A` +
      `• Type: ${consultationType}%0D%0A` +
      `• Preferred Date: ${selectedDate}%0D%0A` +
      `• Preferred Time: ${selectedTime}%0D%0A%0D%0A` +
      `📝 ADDITIONAL INFORMATION:%0D%0A${additionalInfo || 'None provided'}%0D%0A%0D%0A` +
      `⏰ SUBMISSION TIME: ${new Date().toLocaleString()}%0D%0A%0D%0A` +
      `This consultation request was submitted through the Tim Harmar Legal website's Smart Scheduler.%0D%0A%0D%0A` +
      `Please confirm receipt and advise on next steps for scheduling.%0D%0A%0D%0A` +
      `Thank you for your prompt attention to this matter.%0D%0A%0D%0A` +
      `Best regards,%0D%0A${userName}`

    // Delay the email redirect to allow user to see the confirmation message
    setTimeout(() => {
      window.location.href = `mailto:kburton@timharmar.com?subject=${emailSubject}&body=${emailBody}`
    }, 2000)

    // Auto-reset form after 5 seconds for new submissions
    setTimeout(() => {
      setIsSubmitted(false)
      setUserName('')
      setUserEmail('')
      setUserPhone('')
      setConsultationType('')
      setSelectedDate('')
      setSelectedTime('')
      setAdditionalInfo('')
    }, 5000)
  }

  const availableTimes = ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM', '4:30 PM']
  const consultationTypes = [
    'Privacy Law Consultation',
    'Civil Litigation Review',
    'IP Strategy Session',
    'Business Development Consultation',
    'Startup Legal Package',
    'Contract Review & Disputes',
    'Cybersecurity & Data Protection',
    'General Legal Consultation',
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
        <h3 className="text-2xl font-bold text-gray-800">Smart Scheduler</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">Your Name *</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">Email Address *</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">Phone Number</label>
          <input
            type="tel"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Consultation Type *
          </label>
          <select
            value={consultationType}
            onChange={(e) => setConsultationType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-300"
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
          <label className="block text-sm font-medium text-gray-500 mb-2">Preferred Date *</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">Available Times *</label>
          <div className="grid grid-cols-2 gap-2">
            {availableTimes.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`p-2 rounded-md border transition-all ${
                  selectedTime === time
                    ? 'bg-brand-accent text-white border-brand-accent'
                    : 'bg-white text-gray-500 border-gray-300 hover:border-brand-accent'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Additional Information
          </label>
          <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            placeholder="Please provide any additional details about your legal needs..."
            rows="3"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-300"
          />
        </div>

        {/* Enhanced confirmation message when submitted */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg shadow-lg"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="h-8 w-8 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-green-900">
                  🎉 Consultation Request Submitted Successfully!
                </h3>
                <div className="mt-3 space-y-2 text-sm text-green-800">
                  <p className="font-semibold">
                    ✅ Your request for a <span className="text-green-900">{consultationType}</span>{' '}
                    on <span className="text-green-900">{selectedDate}</span> at{' '}
                    <span className="text-green-900">{selectedTime}</span> has been sent to our
                    legal team.
                  </p>
                  <div className="bg-white/50 p-3 rounded border border-green-200">
                    <p className="font-medium text-green-900">What happens next:</p>
                    <ul className="mt-1 space-y-1 text-xs">
                      <li>📧 Email confirmation sent to kburton@timharmar.com</li>
                      <li>📞 We'll contact you within 2 business hours to confirm</li>
                      <li>🗓️ Calendar invitation will be sent once confirmed</li>
                      <li>💼 Your FREE 30-minute consultation is guaranteed</li>
                    </ul>
                  </div>
                  <p className="text-xs text-green-700 italic">
                    Need immediate assistance? Call (705) 943-5049 directly.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleScheduleSubmit}
          disabled={isSubmitted}
          className={`w-full p-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 shadow-token-sm hover:shadow-medium ${
            isSubmitted
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-brand-accent hover:bg-brand-accent/90 text-white'
          }`}
        >
          {isSubmitted ? 'Request Submitted' : 'Schedule Consultation'}
        </motion.button>
      </div>
    </motion.div>
  )
}

// Legal Resources Library
export const LegalResourcesLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('guides')
  const [expandedItem, setExpandedItem] = useState(null)
  
  // Budget Calculator state
  const [budgetInputs, setBudgetInputs] = useState({
    serviceType: '',
    complexity: 'medium',
    urgency: 'normal',
    duration: 'one-time'
  })
  const [budgetResults, setBudgetResults] = useState(null)

  // Calculate budget estimate
  const calculateBudget = () => {
    const baseRates = {
      'business-formation': { base: 2500, hourly: 350 },
      'contract-services': { base: 1200, hourly: 300 },
      'employment-law': { base: 1500, hourly: 325 },
      'intellectual-property': { base: 2000, hourly: 375 },
      'litigation-support': { base: 5000, hourly: 400 },
      'privacy-compliance': { base: 2200, hourly: 350 }
    }

    const complexityMultipliers = {
      'simple': 0.7,
      'medium': 1.0,
      'complex': 1.5
    }

    const urgencyMultipliers = {
      'normal': 1.0,
      'urgent': 1.3,
      'rush': 1.6
    }

    const durationMultipliers = {
      'one-time': 1.0,
      'ongoing': 0.85,
      'retainer': 0.75
    }

    if (!budgetInputs.serviceType) return

    const service = baseRates[budgetInputs.serviceType]
    const baseEstimate = service.base * 
      complexityMultipliers[budgetInputs.complexity] * 
      urgencyMultipliers[budgetInputs.urgency] * 
      durationMultipliers[budgetInputs.duration]

    const hourlyRate = service.hourly * complexityMultipliers[budgetInputs.complexity]

    setBudgetResults({
      baseEstimate: Math.round(baseEstimate),
      hourlyRate: Math.round(hourlyRate),
      range: {
        low: Math.round(baseEstimate * 0.8),
        high: Math.round(baseEstimate * 1.4)
      },
      monthly: budgetInputs.duration === 'retainer' ? Math.round(baseEstimate * 0.3) : null
    })
  }

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

  // Function to download PDF version of Privacy Guide
  const downloadPrivacyGuidePDF = () => {
    // For now, we'll use the existing popup functionality
    // In a real implementation, you'd use jsPDF to generate a proper PDF
    openPrivacyGuide()
    
    // Add a small delay and then trigger a print dialog which can save as PDF
    setTimeout(() => {
      const newWindow = window.open('', '_blank')
      newWindow.document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Privacy Compliance Guide - Download</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .download-info { background: #f0f9ff; padding: 20px; border-radius: 8px; border: 2px solid #0ea5e9; }
    </style>
</head>
<body>
    <div class="download-info">
        <h2>📄 Privacy Compliance Guide PDF</h2>
        <p><strong>To download this guide as a PDF:</strong></p>
        <ol>
            <li>Press <kbd>Ctrl+P</kbd> (Windows) or <kbd>Cmd+P</kbd> (Mac)</li>
            <li>Select "Save as PDF" as your printer destination</li>
            <li>Click "Save" and choose your download location</li>
        </ol>
        <p>Or use your browser's "Save as PDF" option from the File menu.</p>
        <hr>
        <p><em>This guide is provided by Tim Harmar: Legal and Consulting Services for informational purposes only.</em></p>
    </div>
    <script>
        // Auto-trigger print dialog after a short delay
        setTimeout(() => {
            window.print();
        }, 1000);
    </script>
</body>
</html>
      `)
      newWindow.document.close()
    }, 500)
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
        downloadPDF: downloadPrivacyGuidePDF,
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
        description:
          'Comprehensive guide to IP protection under Canadian law for Ontario businesses.',
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
        expandable: true,
        detailed: `Legal counsel becomes essential at several key stages of your startup journey:

**Formation Stage:** When choosing your business structure (corporation, LLC, partnership), registering your business, and understanding liability implications.

**Intellectual Property Protection:** Before publicly disclosing your product or service, to protect trademarks, copyrights, and trade secrets.

**Fundraising:** When seeking investment, drafting term sheets, or negotiating with investors to ensure favorable terms and compliance.

**Employment Issues:** When hiring your first employees, creating employment agreements, and understanding labor law compliance.

**Contracts & Partnerships:** Before signing significant contracts, partnerships, or strategic alliances that could impact your business.

**Regulatory Compliance:** When entering regulated industries or dealing with specific compliance requirements like privacy laws or industry standards.`,
        features: [
          'Business structure selection and incorporation',
          'IP strategy and protection filing',
          'Investment and fundraising documentation',
          'Employment law compliance and agreements',
          'Contract negotiation and risk assessment',
          'Regulatory compliance planning',
        ],
      },
      {
        title: 'Understanding PIPEDA compliance',
        description: 'Common questions about Canadian privacy law requirements.',
        type: 'FAQ',
        icon: '🛡️',
        expandable: true,
        detailed: `PIPEDA (Personal Information Protection and Electronic Documents Act) is Canada's federal privacy law that governs how private sector organizations collect, use, and disclose personal information:

**Key Principles:**
- **Consent:** Organizations must obtain meaningful consent before collecting personal information
- **Purpose Limitation:** Personal information can only be used for the purposes for which it was collected
- **Data Minimization:** Collect only what is necessary for the stated purpose

**Compliance Requirements:**
- Implement privacy policies and procedures
- Conduct privacy impact assessments
- Provide individuals access to their personal information
- Report privacy breaches to the Privacy Commissioner
- Ensure adequate safeguards for personal information

**Common Compliance Challenges:**
- Cross-border data transfers to the US or other countries
- Employee personal information handling
- Customer data retention and disposal
- Third-party service provider agreements`,
        features: [
          'Privacy policy development and implementation',
          'Consent management procedures',
          'Privacy impact assessment guidance',
          'Data breach response planning',
          'Cross-border transfer compliance',
          'Employee privacy training programs',
        ],
      },
      {
        title: 'Employment law basics',
        description: 'Key employment law considerations for Canadian businesses.',
        type: 'FAQ',
        icon: '👥',
        expandable: true,
        detailed: `Employment law in Canada varies by province but includes several fundamental principles that all employers must understand:

**Hiring Process:**
- Human rights compliance in job postings and interviews
- Background checks and reference verification limits
- Probationary period rules and limitations

**Employment Standards:**
- Minimum wage, overtime, and vacation pay requirements
- Hours of work and rest period regulations
- Statutory holidays and leaves of absence

**Termination and Severance:**
- Notice periods for termination without cause
- Severance pay calculations and entitlements
- Constructive dismissal and wrongful termination

**Workplace Rights:**
- Occupational health and safety obligations
- Accommodation duties for disabilities
- Protection against harassment and discrimination

**Contract Essentials:**
- Terms of employment and job descriptions
- Confidentiality and non-competition clauses
- Intellectual property assignment provisions`,
        features: [
          'Employment contract drafting and review',
          'Workplace policy development',
          'Termination and severance planning',
          'Human rights compliance training',
          'Workplace investigation procedures',
          'Labour standards compliance audits',
        ],
      },
    ],
    tools: [
      {
        title: 'Legal Budget Calculator',
        description: 'Estimate legal costs for common business services.',
        type: 'Tool',
        icon: '💰',
        expandable: true,
        detailed: `Our interactive legal budget calculator helps you estimate costs for various legal services and plan your legal expenses effectively:

**Service Categories:**
- **Business Formation:** Corporation setup, partnership agreements, and regulatory filings
- **Contract Services:** Drafting, review, and negotiation of business agreements
- **Employment Law:** Employment contracts, workplace policies, and compliance
- **Intellectual Property:** Trademark registration, copyright protection, and licensing
- **Litigation Support:** Dispute resolution, court proceedings, and settlement negotiations

**Cost Factors Considered:**
- Complexity and scope of legal work required
- Time estimates based on similar matters
- Court fees, filing costs, and third-party expenses
- Ongoing legal support and maintenance requirements

**Budget Planning Features:**
- Monthly and annual legal expense projections
- Comparison of different service options
- Cost-benefit analysis for preventive legal measures
- Financing and payment plan options`,
        features: [
          'Customized cost estimates by practice area',
          'Monthly and annual budget projections',
          'Cost comparison for different service levels',
          'ROI analysis for preventive legal services',
          'Payment plan and financing options',
          'Regular budget review and adjustment recommendations',
        ],
      },
      {
        title: 'Contract Template Library',
        description: 'Basic templates for common business agreements.',
        type: 'Templates',
        icon: '📄',
        expandable: true,
        detailed: `Access our comprehensive library of legal contract templates designed specifically for Canadian businesses:

**Available Templates:**
- **Employment Agreements:** Full-time, part-time, and contractor agreements
- **Service Agreements:** Professional services, consulting, and vendor contracts
- **Partnership Agreements:** Business partnerships, joint ventures, and collaborations
- **Licensing Agreements:** Intellectual property licensing and technology transfers
- **Non-Disclosure Agreements:** Mutual and unilateral confidentiality agreements
- **Purchase Orders:** Goods and services procurement agreements

**Template Features:**
- Province-specific legal compliance
- Industry-specific customization options
- Built-in legal protection clauses
- Easy-to-understand language and formatting
- Guidance notes for completion

**Customization Support:**
- Step-by-step completion guides
- Legal review and modification services
- Industry-specific adaptations
- Ongoing template updates based on law changes`,
        features: [
          'Province-specific legal compliance built-in',
          'Industry customization for various sectors',
          'Step-by-step completion guidance',
          'Professional legal review services available',
          'Regular updates reflecting law changes',
          'Secure document management and storage',
        ],
      },
      {
        title: 'Compliance Calendar',
        description: 'Track important legal deadlines and requirements.',
        type: 'Calendar',
        icon: '📅',
        expandable: true,
        detailed: `Stay on top of your legal obligations with our comprehensive compliance calendar system:

**Key Compliance Areas:**
- **Corporate Filings:** Annual returns, director resolutions, and corporate maintenance
- **Employment Standards:** Payroll remittances, vacation pay calculations, and statutory reporting
- **Privacy Law:** PIPEDA compliance reviews, breach notification timelines, and policy updates
- **Intellectual Property:** Trademark renewals, patent maintenance, and copyright registrations
- **Tax Obligations:** Corporate tax filings, HST remittances, and payroll tax deadlines
- **Industry-Specific:** Sector regulations, licensing renewals, and professional requirements

**Calendar Features:**
- Automated deadline reminders and alerts
- Customizable notification preferences
- Integration with popular calendar applications
- Document management for compliance filings
- Regulatory change notifications and impact analysis

**Proactive Management:**
- Early warning systems for upcoming deadlines
- Annual compliance planning and scheduling
- Regulatory change impact assessments
- Priority ranking for critical compliance matters`,
        features: [
          'Automated deadline tracking and reminders',
          'Integration with business calendar systems',
          'Regulatory change notifications and updates',
          'Document management for compliance filings',
          'Custom compliance schedules by industry',
          'Annual compliance planning and strategy sessions',
        ],
      },
    ],
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-blue-50 via-white to-teal-50 p-8 rounded-2xl shadow-large border border-blue-100"
    >
      <div className="flex items-center mb-8">
        <div className="bg-blue-600 p-3 rounded-xl mr-4 shadow-medium">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-1">Legal Resources Library</h3>
          <p className="text-gray-600 text-sm">Professional tools and guides for your business</p>
        </div>
      </div>

      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
        Access comprehensive legal resources, interactive guides, and professional tools designed to
        support your business growth and compliance.
      </p>

      {/* Enhanced category tabs */}
      <div className="flex flex-wrap gap-3 mb-8 p-2 bg-gray-100 rounded-xl">
        {Object.keys(resources).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 capitalize text-sm relative overflow-hidden ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-medium transform scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600 hover:shadow-soft'
            }`}
          >
            <span className="relative z-10">{category}</span>
            {selectedCategory === category && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg"></div>
            )}
          </button>
        ))}
      </div>

      {/* Enhanced resource grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {resources[selectedCategory].map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-large ${
              resource.expandable ? 'cursor-pointer' : ''
            }`}
            onClick={() => {
              if (resource.expandable) {
                setExpandedItem(expandedItem === index ? null : index)
              }
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start flex-1">
                <div className="bg-blue-100 p-3 rounded-xl mr-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">{resource.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-800 text-lg group-hover:text-blue-700 transition-colors">
                      {resource.title}
                    </h4>
                    {resource.expandable && (
                      <span className="text-blue-600 transition-all duration-300 group-hover:scale-110">
                        {expandedItem === index ? (
                          <ChevronUp className="w-6 h-6" />
                        ) : (
                          <ChevronDown className="w-6 h-6" />
                        )}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-xs px-3 py-2 rounded-full font-medium">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      {resource.type}
                    </span>
                    {resource.downloadable && (
                      <div className="flex space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            resource.downloadAction()
                          }}
                          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm font-semibold shadow-medium hover:shadow-large transform hover:scale-105"
                        >
                          <FileText className="w-4 h-4" />
                          <span>View Guide</span>
                        </button>
                        {resource.downloadPDF && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              resource.downloadPDF()
                            }}
                            className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 text-sm font-semibold shadow-medium hover:shadow-large transform hover:scale-105"
                          >
                            <Download className="w-4 h-4" />
                            <span>PDF</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced expandable content */}
            {resource.expandable && (
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  expandedItem === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg mb-6">
                    <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                      {resource.detailed}
                    </div>
                  </div>

                  {/* Enhanced features list */}
                  {resource.features && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-blue-700 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Key Services & Features:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {resource.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-sm text-gray-700 bg-white p-3 rounded-lg border border-gray-100"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Interactive Budget Calculator for Legal Budget Calculator tool */}
                  {selectedCategory === 'tools' && index === 0 && resource.title === 'Legal Budget Calculator' && (
                    <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                      <h4 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                        💰 Interactive Budget Calculator
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                          <select
                            value={budgetInputs.serviceType}
                            onChange={(e) => setBudgetInputs({...budgetInputs, serviceType: e.target.value})}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Select a service...</option>
                            <option value="business-formation">Business Formation</option>
                            <option value="contract-services">Contract Services</option>
                            <option value="employment-law">Employment Law</option>
                            <option value="intellectual-property">Intellectual Property</option>
                            <option value="litigation-support">Litigation Support</option>
                            <option value="privacy-compliance">Privacy & Compliance</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Complexity Level</label>
                          <select
                            value={budgetInputs.complexity}
                            onChange={(e) => setBudgetInputs({...budgetInputs, complexity: e.target.value})}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="simple">Simple (-30%)</option>
                            <option value="medium">Medium (Standard)</option>
                            <option value="complex">Complex (+50%)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
                          <select
                            value={budgetInputs.urgency}
                            onChange={(e) => setBudgetInputs({...budgetInputs, urgency: e.target.value})}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="normal">Normal Timeline</option>
                            <option value="urgent">Urgent (+30%)</option>
                            <option value="rush">Rush (+60%)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Service Duration</label>
                          <select
                            value={budgetInputs.duration}
                            onChange={(e) => setBudgetInputs({...budgetInputs, duration: e.target.value})}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="one-time">One-time Project</option>
                            <option value="ongoing">Ongoing Support (-15%)</option>
                            <option value="retainer">Monthly Retainer (-25%)</option>
                          </select>
                        </div>
                      </div>

                      <button
                        onClick={calculateBudget}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
                      >
                        Calculate Estimate
                      </button>

                      {budgetResults && (
                        <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                          <h5 className="font-bold text-blue-800 mb-3">Your Estimated Legal Budget</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-600">Base Estimate</div>
                              <div className="text-xl font-bold text-blue-800">${budgetResults.baseEstimate.toLocaleString()}</div>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-600">Hourly Rate</div>
                              <div className="text-xl font-bold text-green-800">${budgetResults.hourlyRate}/hr</div>
                            </div>
                            <div className="bg-purple-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-600">Range</div>
                              <div className="text-lg font-bold text-purple-800">${budgetResults.range.low.toLocaleString()} - ${budgetResults.range.high.toLocaleString()}</div>
                            </div>
                            {budgetResults.monthly && (
                              <div className="bg-orange-50 p-3 rounded-lg">
                                <div className="text-sm text-gray-600">Monthly Retainer</div>
                                <div className="text-lg font-bold text-orange-800">${budgetResults.monthly.toLocaleString()}/month</div>
                              </div>
                            )}
                          </div>
                          <div className="mt-4 text-xs text-gray-500">
                            * Estimates are based on typical matters and may vary depending on specific circumstances. 
                            Contact us for a detailed consultation and personalized quote.
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          // Show all resources at once by setting expanded items for tools that have calculators or interactive features
          if (selectedCategory === 'tools') {
            setExpandedItem(expandedItem === 0 ? null : 0) // Toggle first tool (Legal Budget Calculator)
          } else {
            // For guides and faqs, show all items by expanding them
            const totalItems = resources[selectedCategory].length
            for (let i = 0; i < totalItems; i++) {
              if (resources[selectedCategory][i].expandable) {
                setExpandedItem(i)
                break
              }
            }
          }
        }}
        className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-large hover:shadow-xl relative overflow-hidden"
      >
        <span className="relative z-10">Access Full Resource Library</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      </motion.button>
    </motion.div>
  )
}

// Legal News & Updates Feed
export const LegalNewsFeed = () => {
  const [activeTab, setActiveTab] = useState('privacy')

  // Function to get current date in YYYY-MM-DD format
  const getCurrentDate = (daysAgo = 0) => {
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return date.toISOString().split('T')[0]
  }

  // Auto-updating news items with current dates
  const newsItems = {
    privacy: [
      {
        title: 'Bill C-27 Consumer Privacy Protection Act Updates',
        date: getCurrentDate(2),
        category: 'Privacy Law',
        link: 'https://www.parl.ca/DocumentViewer/en/44-1/bill/C-27/third-reading',
      },
      {
        title: 'Privacy Commissioner Guidance on AI and Algorithmic Impact',
        date: getCurrentDate(5),
        category: 'Privacy Law',
        link: 'https://www.priv.gc.ca/en/privacy-topics/technology/artificial-intelligence/',
      },
      {
        title: 'CASL Anti-Spam Compliance for Digital Marketing',
        date: getCurrentDate(8),
        category: 'Privacy Law',
        link: 'https://crtc.gc.ca/eng/casl-lcap/',
      },
      {
        title: 'Cross-Border Data Transfer Requirements Update',
        date: getCurrentDate(12),
        category: 'Privacy Law',
        link: 'https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/pipeda/',
      },
    ],
    litigation: [
      {
        title: 'Ontario Superior Court Practice Direction Updates',
        date: getCurrentDate(1),
        category: 'Civil Litigation',
        link: 'https://www.ontariocourts.ca/scj/practice/',
      },
      {
        title: 'Class Action Certification Trends in Canada',
        date: getCurrentDate(4),
        category: 'Civil Litigation',
        link: 'https://www.ontariocourts.ca/scj/en/',
      },
      {
        title: 'Commercial Arbitration vs Court Proceedings',
        date: getCurrentDate(7),
        category: 'Civil Litigation',
        link: 'https://www.adric.ca/',
      },
      {
        title: 'Limitation Periods and COVID-19 Impact',
        date: getCurrentDate(10),
        category: 'Civil Litigation',
        link: 'https://www.ontario.ca/laws/statute/02061',
      },
    ],
    business: [
      {
        title: 'Northern Ontario Development Incentives 2025',
        date: getCurrentDate(3),
        category: 'Business Law',
        link: 'https://www.ontario.ca/page/northern-ontario-heritage-fund',
      },
      {
        title: 'Corporate Governance Best Practices for SMEs',
        date: getCurrentDate(6),
        category: 'Business Law',
        link: 'https://www.ic.gc.ca/eic/site/cd-dgc.nsf/eng/home',
      },
      {
        title: 'Intellectual Property Strategy for Tech Startups',
        date: getCurrentDate(9),
        category: 'Business Law',
        link: 'https://www.ic.gc.ca/eic/site/cipointernet-internetopic.nsf/eng/home',
      },
      {
        title: 'Employment Standards Act Updates Ontario',
        date: getCurrentDate(13),
        category: 'Business Law',
        link: 'https://www.ontario.ca/laws/statute/00041',
      },
    ],
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-white via-teal-50 to-blue-50 p-8 rounded-2xl shadow-large border border-teal-100"
    >
      <div className="flex items-center mb-8">
        <div className="bg-teal-600 p-3 rounded-xl mr-4 shadow-medium">
          <Bell className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-1">Legal News & Updates</h3>
          <p className="text-gray-600 text-sm">Stay informed with the latest legal developments</p>
        </div>
      </div>

      {/* Enhanced tab navigation */}
      <div className="flex flex-wrap gap-3 mb-8 p-2 bg-gray-100 rounded-xl">
        {Object.keys(newsItems).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 capitalize text-sm relative overflow-hidden ${
              activeTab === tab
                ? 'bg-teal-600 text-white shadow-medium transform scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-teal-600 hover:shadow-soft'
            }`}
          >
            <span className="relative z-10">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
            {activeTab === tab && (
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg"></div>
            )}
          </button>
        ))}
      </div>

      {/* Enhanced news items */}
      <div className="space-y-4">
        {newsItems[activeTab].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-xl border border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-large overflow-hidden"
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 hover:bg-gradient-to-br hover:from-teal-50 hover:to-blue-50 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start mb-3">
                    <div className="w-1 h-12 bg-gradient-to-b from-teal-500 to-teal-600 rounded-full mr-4 group-hover:h-16 transition-all duration-300"></div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 group-hover:text-teal-700 transition-colors text-lg leading-tight mb-2">
                        {item.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Clock className="w-4 h-4 mr-2 text-teal-500" />
                        <span className="font-medium">{item.date}</span>
                        <span className="mx-2">•</span>
                        <span className="inline-flex items-center bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-4 text-teal-600 group-hover:text-teal-700 transition-colors">
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              <div className="mt-3 pl-5">
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                  Click to view the latest updates and official information.
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Auto-update indicator */}
      <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200">
        <div className="flex items-center justify-center text-sm">
          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
          <span className="text-green-700 font-medium">
            Updates automatically refreshed daily • Last updated: {getCurrentDate()}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// Interactive Legal Assessment Tool
// Enhanced Legal Assessment with Learning Modules
export const LegalAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [completedModules, setCompletedModules] = useState([])
  const [currentModule, setCurrentModule] = useState(null)

  const questions = [
    {
      id: 'business_type',
      question: 'What type of business do you operate?',
      options: ['Technology Startup', 'Manufacturing', 'Professional Services', 'Retail', 'Other'],
      learningModule: {
        title: 'Business Structure Fundamentals',
        description: 'Learn about different business structures and their legal implications',
        content:
          'Understanding your business type is crucial for determining the right legal structure, compliance requirements, and risk management strategies...',
      },
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
      learningModule: {
        title: 'Legal Risk Assessment',
        description: 'Identify and prioritize legal risks in your business',
        content:
          'Different businesses face different legal challenges. Understanding your primary concerns helps prioritize legal resources and develop protective strategies...',
      },
    },
    {
      id: 'urgency',
      question: 'How urgent is your legal need?',
      options: ['Immediate (within 1 week)', 'Soon (within 1 month)', 'Planning ahead (3+ months)'],
      learningModule: {
        title: 'Legal Planning & Timing',
        description: 'Strategic timing for legal consultations and implementations',
        content:
          'Timing is critical in legal matters. Early planning allows for more comprehensive solutions and can prevent costly legal issues...',
      },
    },
    {
      id: 'budget_concern',
      question: 'What is your approximate budget for legal services?',
      options: [
        'Under $5,000',
        '$5,000 - $15,000',
        '$15,000 - $50,000',
        'Over $50,000',
        'Need guidance on budgeting',
      ],
      learningModule: {
        title: 'Legal Services Investment',
        description: 'Understanding legal service costs and value',
        content:
          'Legal services are an investment in your business protection and growth. Understanding costs helps make informed decisions...',
      },
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

  const completeModule = (moduleIndex) => {
    if (!completedModules.includes(moduleIndex)) {
      setCompletedModules([...completedModules, moduleIndex])
    }
    setCurrentModule(null)
  }

  const getRecommendations = () => {
    // eslint-disable-next-line no-unused-vars
    const { business_type, legal_concerns, urgency, budget_concern } = answers

    let recommendations = []
    let priority = 'Medium'

    if (urgency === 'Immediate (within 1 week)') {
      priority = 'High'
      recommendations.push('Schedule emergency consultation within 24 hours')
    }

    if (legal_concerns === 'Privacy Compliance') {
      recommendations.push(
        'PIPEDA Compliance Assessment',
        'Privacy Policy Development',
        'Data Audit Services'
      )
    } else if (legal_concerns === 'IP Protection') {
      recommendations.push(
        'Trademark Search and Registration',
        'IP Portfolio Assessment',
        'Trade Secret Protection'
      )
    } else if (legal_concerns === 'Contract Review') {
      recommendations.push(
        'Contract Template Development',
        'Risk Assessment Review',
        'Negotiation Strategy'
      )
    }

    if (business_type === 'Technology Startup') {
      recommendations.push(
        'Startup Legal Package',
        'Terms of Service Review',
        'Employment Agreement Templates'
      )
    }

    return { recommendations, priority }
  }

  const resetAssessment = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setCurrentModule(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-lg border border-purple-100"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Brain className="w-8 h-8 text-purple-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-800">Legal Needs Assessment</h3>
        </div>
        {completedModules.length > 0 && (
          <div className="flex items-center text-sm text-purple-600">
            <CheckCircle className="w-4 h-4 mr-1" />
            {completedModules.length} modules completed
          </div>
        )}
      </div>

      {currentModule ? (
        // Learning Module View
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg border border-purple-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-purple-700">
              {questions[currentModule].learningModule.title}
            </h4>
            <button
              onClick={() => setCurrentModule(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-600 mb-4">
            {questions[currentModule].learningModule.description}
          </p>
          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              {questions[currentModule].learningModule.content}
            </p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentModule(null)}
              className="px-4 py-2 text-purple-600 border border-purple-300 rounded-lg hover:bg-purple-50 transition-colors"
            >
              Back to Assessment
            </button>
            <button
              onClick={() => completeModule(currentModule)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Mark as Complete
            </button>
          </div>
        </motion.div>
      ) : !showResults ? (
        // Assessment Questions
        <div>
          <div className="mb-6">
            <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-500"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-800">
              {questions[currentQuestion].question}
            </h4>
            <motion.button
              onClick={() => setCurrentModule(currentQuestion)}
              className="text-sm text-purple-600 hover:text-purple-700 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Brain className="w-4 h-4 mr-1" />
              Learn More
            </motion.button>
          </div>

          <div className="grid gap-3">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswer(option)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transform group-hover:translate-x-1 transition-all" />
                </div>
              </motion.button>
            ))}
          </div>

          {currentQuestion > 0 && (
            <motion.button
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              className="mt-4 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Previous Question
            </motion.button>
          )}
        </div>
      ) : (
        // Results with Recommendations
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center mb-4">
            <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
            <h4 className="text-xl font-semibold text-gray-800">Assessment Complete!</h4>
          </div>

          <div className="bg-white p-6 rounded-lg mb-6 border border-purple-200">
            <h5 className="font-semibold text-gray-800 mb-3">Your Legal Profile:</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Business Type:</span>
                <p className="font-medium">{answers.business_type}</p>
              </div>
              <div>
                <span className="text-gray-500">Primary Concern:</span>
                <p className="font-medium">{answers.legal_concerns}</p>
              </div>
              <div>
                <span className="text-gray-500">Timeline:</span>
                <p className="font-medium">{answers.urgency}</p>
              </div>
              {answers.budget_concern && (
                <div>
                  <span className="text-gray-500">Budget Range:</span>
                  <p className="font-medium">{answers.budget_concern}</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg mb-6">
            <h5 className="font-semibold mb-3">Recommended Services:</h5>
            <div className="space-y-2">
              {getRecommendations().recommendations.map((rec, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-purple-200" />
                  <span className="text-sm">{rec}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-white/20 rounded-lg">
              <p className="text-sm">
                <strong>Priority Level:</strong> {getRecommendations().priority}
                {getRecommendations().priority === 'High' && ' - Immediate attention recommended'}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={resetAssessment}
              className="flex-1 bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Retake Assessment
            </motion.button>
            <motion.button
              onClick={() => {
                const { recommendations, priority } = getRecommendations()
                const emailBody =
                  `Hello,%0D%0A%0D%0A` +
                  `I have completed the legal needs assessment and would like to schedule a consultation.%0D%0A%0D%0A` +
                  `Assessment Results:%0D%0A` +
                  `Business Type: ${answers.business_type}%0D%0A` +
                  `Primary Concern: ${answers.legal_concerns}%0D%0A` +
                  `Timeline: ${answers.urgency}%0D%0A` +
                  `Budget: ${answers.budget_concern || 'Not specified'}%0D%0A` +
                  `Priority Level: ${priority}%0D%0A%0D%0A` +
                  `Recommended Services:%0D%0A` +
                  recommendations.map((rec) => `• ${rec}`).join('%0D%0A') +
                  `%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!`

                window.location.href = `mailto:kburton@timharmar.com?subject=Consultation Request - Legal Assessment Complete&body=${emailBody}`
              }}
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-4 h-4 inline mr-2" />
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
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
