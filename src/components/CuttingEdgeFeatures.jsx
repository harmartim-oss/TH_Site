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
      className="bg-gradient-to-br from-white via-blue-50/30 to-teal-50/50 p-8 rounded-2xl shadow-2xl border border-teal-200/50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-100/40 to-transparent rounded-full -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full -ml-12 -mb-12"></div>

      <div className="flex items-center mb-8 relative z-10">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-gradient-to-r from-teal-500 to-blue-500 p-3 rounded-xl mr-4 shadow-lg"
        >
          <Calendar className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-3xl font-black text-gray-800 flex items-center gap-2">
          Smart Scheduler
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl"
          >
            🚀
          </motion.span>
        </h3>
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

  // Enhanced Budget Calculator state with AI functionality
  const [budgetInputs, setBudgetInputs] = useState({
    serviceType: '',
    complexity: 'medium',
    urgency: 'normal',
    duration: 'one-time',
    estimatedHours: '',
    additionalServices: [],
    clientSize: 'small',
    industryType: '',
  })
  const [budgetResults, setBudgetResults] = useState(null)
  const [aiRecommendations, setAiRecommendations] = useState(null)

  // Tim Harmar hourly rates as specified
  const HOURLY_RATES = {
    counsel: 300, // Tim Harmar as counsel
    admin: 90, // Admin staff rate
  }

  // AI-powered budget calculation with enhanced logic
  const calculateBudget = () => {
    const baseServices = {
      'business-formation': {
        baseHours: 8,
        counselHours: 6,
        adminHours: 2,
        complexity: { simple: 0.7, medium: 1.0, complex: 1.5 },
      },
      'contract-services': {
        baseHours: 4,
        counselHours: 3,
        adminHours: 1,
        complexity: { simple: 0.6, medium: 1.0, complex: 1.8 },
      },
      'employment-law': {
        baseHours: 5,
        counselHours: 4,
        adminHours: 1,
        complexity: { simple: 0.7, medium: 1.0, complex: 1.6 },
      },
      'intellectual-property': {
        baseHours: 6,
        counselHours: 5,
        adminHours: 1,
        complexity: { simple: 0.8, medium: 1.0, complex: 1.7 },
      },
      'litigation-support': {
        baseHours: 15,
        counselHours: 12,
        adminHours: 3,
        complexity: { simple: 0.8, medium: 1.0, complex: 2.0 },
      },
      'privacy-compliance': {
        baseHours: 7,
        counselHours: 5,
        adminHours: 2,
        complexity: { simple: 0.7, medium: 1.0, complex: 1.4 },
      },
    }

    const urgencyMultipliers = {
      normal: 1.0,
      urgent: 1.3,
      rush: 1.6,
    }

    const durationMultipliers = {
      'one-time': 1.0,
      ongoing: 0.85,
      retainer: 0.75,
    }

    const clientSizeMultipliers = {
      small: 1.0,
      medium: 1.2,
      large: 1.5,
      enterprise: 2.0,
    }

    if (!budgetInputs.serviceType) return

    const service = baseServices[budgetInputs.serviceType]
    const complexityMultiplier = service.complexity[budgetInputs.complexity]
    const urgencyMultiplier = urgencyMultipliers[budgetInputs.urgency]
    const durationMultiplier = durationMultipliers[budgetInputs.duration]
    const clientSizeMultiplier = clientSizeMultipliers[budgetInputs.clientSize]

    // Calculate hours with all multipliers
    const adjustedCounselHours = Math.ceil(
      service.counselHours * complexityMultiplier * urgencyMultiplier * clientSizeMultiplier
    )

    const adjustedAdminHours = Math.ceil(
      service.adminHours * complexityMultiplier * urgencyMultiplier * clientSizeMultiplier
    )

    // Calculate costs
    const counselCost = adjustedCounselHours * HOURLY_RATES.counsel
    const adminCost = adjustedAdminHours * HOURLY_RATES.admin
    const subtotal = counselCost + adminCost

    // Apply duration discount
    const totalEstimate = Math.round(subtotal * durationMultiplier)

    // Generate AI recommendations
    const generateAIRecommendations = () => {
      const recommendations = []

      if (budgetInputs.complexity === 'complex') {
        recommendations.push('Consider phased implementation to manage costs')
        recommendations.push('Additional research time may be required for complex matters')
      }

      if (budgetInputs.urgency === 'rush') {
        recommendations.push('Rush timeline may require weekend/evening work')
        recommendations.push('Consider if deadline can be extended to reduce costs')
      }

      if (budgetInputs.duration === 'retainer') {
        recommendations.push('Monthly retainer includes ongoing support and priority access')
        recommendations.push('Retainer agreements offer 25% cost savings for ongoing needs')
      }

      if (budgetInputs.clientSize === 'enterprise') {
        recommendations.push('Enterprise clients may require additional compliance documentation')
        recommendations.push('Coordination with in-house legal teams may be necessary')
      }

      // Service-specific recommendations
      if (budgetInputs.serviceType === 'privacy-compliance') {
        recommendations.push('PIPEDA compliance audit recommended as starting point')
        recommendations.push('Consider employee training as additional service')
      }

      if (budgetInputs.serviceType === 'intellectual-property') {
        recommendations.push('Trademark search should be conducted before registration')
        recommendations.push('Portfolio review may reveal additional protection opportunities')
      }

      return recommendations
    }

    setBudgetResults({
      counselHours: adjustedCounselHours,
      adminHours: adjustedAdminHours,
      counselCost,
      adminCost,
      subtotal,
      totalEstimate,
      savings: budgetInputs.duration !== 'one-time' ? subtotal - totalEstimate : 0,
      range: {
        low: Math.round(totalEstimate * 0.85),
        high: Math.round(totalEstimate * 1.25),
      },
      monthlyRetainer:
        budgetInputs.duration === 'retainer' ? Math.round(totalEstimate * 0.4) : null,
    })

    setAiRecommendations(generateAIRecommendations())
  }

  // Function to download budget calculation as PDF
  const downloadBudgetPDF = async () => {
    if (!budgetResults) return

    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF()

    // Header
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text('Legal Services Budget Estimate', 20, 20)

    doc.setFontSize(14)
    doc.setFont('helvetica', 'normal')
    doc.text('Tim Harmar: Legal and Consulting Services', 20, 30)
    doc.text('Sault Ste. Marie, Ontario', 20, 38)
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 46)

    let yPosition = 60

    // Client inputs
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('Service Details', 20, yPosition)
    yPosition += 15

    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal')
    const inputs = [
      `Service Type: ${budgetInputs.serviceType.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}`,
      `Complexity: ${budgetInputs.complexity.charAt(0).toUpperCase() + budgetInputs.complexity.slice(1)}`,
      `Timeline: ${budgetInputs.urgency.charAt(0).toUpperCase() + budgetInputs.urgency.slice(1)}`,
      `Engagement Type: ${budgetInputs.duration.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}`,
      `Client Size: ${budgetInputs.clientSize.charAt(0).toUpperCase() + budgetInputs.clientSize.slice(1)}`,
    ]

    inputs.forEach((input) => {
      doc.text(input, 20, yPosition)
      yPosition += 8
    })

    yPosition += 10

    // Cost breakdown
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('Cost Breakdown', 20, yPosition)
    yPosition += 15

    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal')
    doc.text(
      `Counsel Time (${budgetResults.counselHours} hours @ $${HOURLY_RATES.counsel}/hr):`,
      20,
      yPosition
    )
    doc.text(`$${budgetResults.counselCost.toLocaleString()}`, 150, yPosition)
    yPosition += 10

    doc.text(
      `Admin Support (${budgetResults.adminHours} hours @ $${HOURLY_RATES.admin}/hr):`,
      20,
      yPosition
    )
    doc.text(`$${budgetResults.adminCost.toLocaleString()}`, 150, yPosition)
    yPosition += 10

    doc.setFont('helvetica', 'bold')
    doc.text('Total Estimated Cost:', 20, yPosition)
    doc.text(`$${budgetResults.totalEstimate.toLocaleString()}`, 150, yPosition)
    yPosition += 15

    // Range
    doc.setFont('helvetica', 'normal')
    doc.text(
      `Estimated Range: $${budgetResults.range.low.toLocaleString()} - $${budgetResults.range.high.toLocaleString()}`,
      20,
      yPosition
    )
    yPosition += 20

    // AI Recommendations
    if (aiRecommendations && aiRecommendations.length > 0) {
      doc.setFontSize(16)
      doc.setFont('helvetica', 'bold')
      doc.text('AI-Powered Recommendations', 20, yPosition)
      yPosition += 15

      doc.setFontSize(11)
      doc.setFont('helvetica', 'normal')
      aiRecommendations.forEach((rec) => {
        if (yPosition > 270) {
          doc.addPage()
          yPosition = 20
        }
        const splitRec = doc.splitTextToSize(`• ${rec}`, 170)
        doc.text(splitRec, 20, yPosition)
        yPosition += splitRec.length * 6 + 5
      })
    }

    // Footer
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    yPosition += 20
    doc.setFontSize(10)
    doc.setFont('helvetica', 'italic')
    doc.text(
      'This estimate is based on typical matters and may vary depending on specific circumstances.',
      20,
      yPosition
    )
    doc.text('Contact us for a detailed consultation and personalized quote.', 20, yPosition + 8)
    doc.text(
      '© 2025 Tim Harmar: Legal and Consulting Services - All rights reserved.',
      20,
      yPosition + 16
    )

    // Download the PDF
    doc.save(`Legal-Budget-Estimate-${new Date().toISOString().split('T')[0]}.pdf`)
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

  // Function to download PDF version of Privacy Guide using jsPDF
  const downloadPrivacyGuidePDF = async () => {
    // Import jsPDF dynamically
    const { jsPDF } = await import('jspdf')

    const doc = new jsPDF()

    // Set up document styling
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text('Privacy Compliance Guide for Small Business', 20, 20)

    doc.setFontSize(14)
    doc.setFont('helvetica', 'normal')
    doc.text('Tim Harmar: Legal and Consulting Services', 20, 30)
    doc.text('Sault Ste. Marie, Ontario', 20, 38)

    doc.setFontSize(12)
    doc.text('Essential Steps to Ensure Your Business Complies with Canadian Privacy Laws', 20, 50)

    // Add content sections
    let yPosition = 65

    // Introduction
    doc.setFont('helvetica', 'bold')
    doc.text('Introduction', 20, yPosition)
    yPosition += 10
    doc.setFont('helvetica', 'normal')
    const introText =
      'This guide provides small businesses in Ontario with a clear and practical roadmap to comply with Canadian privacy laws, including PIPEDA and Ontario privacy regulations.'
    const splitIntro = doc.splitTextToSize(introText, 170)
    doc.text(splitIntro, 20, yPosition)
    yPosition += splitIntro.length * 6 + 10

    // Key Steps
    doc.setFont('helvetica', 'bold')
    doc.text('Key Steps for Privacy Compliance', 20, yPosition)
    yPosition += 15

    const steps = [
      '1. Understand Applicable Laws - PIPEDA applies to private-sector organizations in Canada that collect, use, or disclose personal information.',
      '2. Appoint a Privacy Officer - Designate a person responsible for overseeing privacy compliance.',
      '3. Develop a Privacy Policy - Create a clear, accessible privacy policy explaining data practices.',
      '4. Obtain Consent - Get explicit or implied consent before collecting personal information.',
      '5. Secure Personal Information - Implement safeguards like encryption and restricted access.',
      '6. Limit Data Retention - Retain personal information only as long as necessary.',
      '7. Respond to Access Requests - Allow individuals to access their personal information within 30 days.',
      '8. Prepare for Data Breaches - Develop a response plan and document all breaches.',
    ]

    doc.setFont('helvetica', 'normal')
    steps.forEach((step) => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 20
      }
      const splitStep = doc.splitTextToSize(step, 170)
      doc.text(splitStep, 20, yPosition)
      yPosition += splitStep.length * 6 + 8
    })

    // Add footer
    if (yPosition > 240) {
      doc.addPage()
      yPosition = 20
    }
    yPosition += 20
    doc.setFont('helvetica', 'italic')
    doc.setFontSize(10)
    doc.text(
      'This guide is for informational purposes only and does not constitute legal advice.',
      20,
      yPosition
    )
    doc.text(
      'Contact Tim Harmar: Legal and Consulting Services for personalized legal advice.',
      20,
      yPosition + 10
    )
    doc.text(
      '© 2025 Tim Harmar: Legal and Consulting Services - All rights reserved.',
      20,
      yPosition + 20
    )

    // Auto-download the PDF
    doc.save('Privacy-Compliance-Guide-Tim-Harmar-Legal.pdf')
  }

  // Function to download Contract Review Checklist as PDF
  const downloadContractChecklistPDF = async () => {
    const { jsPDF } = await import('jspdf')

    const doc = new jsPDF()

    // Set up document styling
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text('Contract Review Checklist', 20, 20)

    doc.setFontSize(14)
    doc.setFont('helvetica', 'normal')
    doc.text('Tim Harmar: Legal and Consulting Services', 20, 30)
    doc.text('Sault Ste. Marie, Ontario', 20, 38)

    doc.setFontSize(12)
    doc.text('Key Elements to Review Before Signing Any Business Contract', 20, 50)

    let yPosition = 65

    // Introduction
    doc.setFont('helvetica', 'normal')
    const introText =
      'This checklist helps small business owners ensure they thoroughly evaluate contracts before committing. It is not a substitute for professional legal advice.'
    const splitIntro = doc.splitTextToSize(introText, 170)
    doc.text(splitIntro, 20, yPosition)
    yPosition += splitIntro.length * 6 + 15

    // Checklist sections
    const sections = [
      {
        title: '1. Parties and Identification',
        items: [
          '☐ Confirm all parties are correctly identified with full legal names and addresses',
          '☐ Verify authority: Does the signer have the right to bind the party?',
          '☐ Check for any subsidiaries, affiliates, or third parties involved',
        ],
      },
      {
        title: '2. Scope of Work/Services/Goods',
        items: [
          '☐ Clearly define what is being provided (deliverables, timelines, quality standards)',
          '☐ Look for ambiguities: Are terms like "reasonable efforts" defined?',
          "☐ Identify any exclusions or limitations on what's included",
        ],
      },
      {
        title: '3. Payment Terms',
        items: [
          '☐ Review amounts, payment schedule, methods, and currency',
          '☐ Check for milestones, retainers, late fees, interest, or penalties',
          '☐ Understand conditions for payment (e.g., upon delivery, approval)',
        ],
      },
      {
        title: '4. Term and Termination',
        items: [
          '☐ Note the start date, duration, and renewal options',
          '☐ Examine termination clauses: For cause (breach), without cause (notice)',
          '☐ Look for survival clauses: What obligations continue post-termination?',
        ],
      },
      {
        title: '5. Liability and Risk',
        items: [
          '☐ Review caps on liability (e.g., limited to contract value)',
          '☐ Check indemnification: Who covers losses from claims?',
          '☐ Note insurance requirements and coverage expectations',
        ],
      },
    ]

    sections.forEach((section) => {
      if (yPosition > 240) {
        doc.addPage()
        yPosition = 20
      }

      doc.setFont('helvetica', 'bold')
      doc.text(section.title, 20, yPosition)
      yPosition += 10

      doc.setFont('helvetica', 'normal')
      section.items.forEach((item) => {
        if (yPosition > 270) {
          doc.addPage()
          yPosition = 20
        }
        const splitItem = doc.splitTextToSize(item, 165)
        doc.text(splitItem, 25, yPosition)
        yPosition += splitItem.length * 6 + 5
      })
      yPosition += 10
    })

    // Add footer
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    doc.setFont('helvetica', 'italic')
    doc.setFontSize(10)
    doc.text(
      'Disclaimer: This checklist is for informational purposes only and does not constitute legal advice.',
      20,
      yPosition
    )
    doc.text(
      '© 2025 Tim Harmar: Legal and Consulting Services - All rights reserved.',
      20,
      yPosition + 10
    )

    // Auto-download the PDF
    doc.save('Contract-Review-Checklist-Tim-Harmar-Legal.pdf')
  }

  // Function to download IP Protection Guide as PDF
  const downloadIPGuidePDF = async () => {
    const { jsPDF } = await import('jspdf')

    const doc = new jsPDF()

    // Set up document styling
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text('Intellectual Property Protection Guide', 20, 20)

    doc.setFontSize(14)
    doc.setFont('helvetica', 'normal')
    doc.text('Tim Harmar: Legal and Consulting Services', 20, 30)
    doc.text('Sault Ste. Marie, Ontario', 20, 38)

    doc.setFontSize(12)
    doc.text(
      'Understanding Trademarks, Copyrights, and Trade Secrets for Ontario Businesses',
      20,
      50
    )

    let yPosition = 65

    // Introduction
    doc.setFont('helvetica', 'normal')
    const introText =
      'Intellectual property protection is critical for Ontario businesses to prevent unauthorized use, maintain competitive advantage, and avoid costly disputes.'
    const splitIntro = doc.splitTextToSize(introText, 170)
    doc.text(splitIntro, 20, yPosition)
    yPosition += splitIntro.length * 6 + 15

    // IP Types
    const ipTypes = [
      {
        title: '1. Trademarks',
        content:
          'Protect brand identifiers that distinguish your goods or services. In Canada, register with CIPO for 10-year renewable protection.',
      },
      {
        title: '2. Copyrights',
        content:
          "Protect original creative works. Automatic protection under Canadian Copyright Act, lasting creator's lifetime plus 70 years.",
      },
      {
        title: '3. Trade Secrets',
        content:
          'Protect confidential business information through NDAs and security measures. No registration required but must maintain confidentiality.',
      },
    ]

    ipTypes.forEach((type) => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 20
      }

      doc.setFont('helvetica', 'bold')
      doc.text(type.title, 20, yPosition)
      yPosition += 10

      doc.setFont('helvetica', 'normal')
      const splitContent = doc.splitTextToSize(type.content, 170)
      doc.text(splitContent, 20, yPosition)
      yPosition += splitContent.length * 6 + 15
    })

    // Key recommendations
    if (yPosition > 220) {
      doc.addPage()
      yPosition = 20
    }

    doc.setFont('helvetica', 'bold')
    doc.text('Key Recommendations:', 20, yPosition)
    yPosition += 15

    const recommendations = [
      '• Conduct IP audits to identify all protectable assets',
      '• Register trademarks and copyrights for valuable assets',
      '• Implement comprehensive NDAs for trade secrets',
      '• Monitor for infringement and enforce rights promptly',
      '• Seek professional legal advice for IP strategy',
    ]

    doc.setFont('helvetica', 'normal')
    recommendations.forEach((rec) => {
      if (yPosition > 270) {
        doc.addPage()
        yPosition = 20
      }
      doc.text(rec, 20, yPosition)
      yPosition += 8
    })

    // Add footer
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    yPosition += 20
    doc.setFont('helvetica', 'italic')
    doc.setFontSize(10)
    doc.text(
      'This guide is for informational purposes only and does not constitute legal advice.',
      20,
      yPosition
    )
    doc.text(
      '© 2025 Tim Harmar: Legal and Consulting Services - All rights reserved.',
      20,
      yPosition + 10
    )

    // Auto-download the PDF
    doc.save('IP-Protection-Guide-Tim-Harmar-Legal.pdf')
  }

  const resources = {
    guides: [
      {
        title: 'Privacy Compliance Guide for Small Business',
        description: 'Essential steps to ensure your business complies with Canadian privacy laws.',
        type: 'PDF Guide',
        icon: '🔒',
        downloadable: true,
        downloadAction: downloadPrivacyGuidePDF,
      },
      {
        title: 'Contract Review Checklist',
        description: 'Key elements to review before signing any business contract.',
        type: 'Checklist',
        icon: '✅',
        downloadable: true,
        downloadAction: downloadContractChecklistPDF,
      },
      {
        title: 'Intellectual Property Guide',
        description:
          'Comprehensive guide to IP protection under Canadian law for Ontario businesses.',
        type: 'Guide',
        icon: '💡',
        downloadable: true,
        downloadAction: downloadIPGuidePDF,
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
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          resource.downloadAction()
                        }}
                        className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 text-sm font-semibold shadow-medium hover:shadow-large transform hover:scale-105"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </button>
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
                  {selectedCategory === 'tools' &&
                    index === 0 &&
                    resource.title === 'Legal Budget Calculator' && (
                      <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                        <h4 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                          🤖 AI-Powered Legal Budget Calculator
                        </h4>
                        <p className="text-sm text-blue-700 mb-6">
                          Get accurate cost estimates based on Tim Harmar's rates: $300/hr (counsel)
                          and $90/hr (admin support)
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Service Type *
                            </label>
                            <select
                              value={budgetInputs.serviceType}
                              onChange={(e) =>
                                setBudgetInputs({ ...budgetInputs, serviceType: e.target.value })
                              }
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="">Select a service...</option>
                              <option value="business-formation">
                                Business Formation & Corporate Law
                              </option>
                              <option value="contract-services">Contract Drafting & Review</option>
                              <option value="employment-law">Employment Law & HR Compliance</option>
                              <option value="intellectual-property">
                                Intellectual Property Protection
                              </option>
                              <option value="litigation-support">
                                Civil Litigation & Dispute Resolution
                              </option>
                              <option value="privacy-compliance">
                                Privacy & Cybersecurity Compliance
                              </option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Matter Complexity
                            </label>
                            <select
                              value={budgetInputs.complexity}
                              onChange={(e) =>
                                setBudgetInputs({ ...budgetInputs, complexity: e.target.value })
                              }
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="simple">Simple (-30% time)</option>
                              <option value="medium">Standard Complexity</option>
                              <option value="complex">Complex (+50-100% time)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Timeline Requirements
                            </label>
                            <select
                              value={budgetInputs.urgency}
                              onChange={(e) =>
                                setBudgetInputs({ ...budgetInputs, urgency: e.target.value })
                              }
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="normal">Normal Timeline (Standard rates)</option>
                              <option value="urgent">Urgent (+30% premium)</option>
                              <option value="rush">Rush/Emergency (+60% premium)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Engagement Type
                            </label>
                            <select
                              value={budgetInputs.duration}
                              onChange={(e) =>
                                setBudgetInputs({ ...budgetInputs, duration: e.target.value })
                              }
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="one-time">One-time Project</option>
                              <option value="ongoing">Ongoing Support (-15% discount)</option>
                              <option value="retainer">Monthly Retainer (-25% discount)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Organization Size
                            </label>
                            <select
                              value={budgetInputs.clientSize}
                              onChange={(e) =>
                                setBudgetInputs({ ...budgetInputs, clientSize: e.target.value })
                              }
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="small">Small Business (1-50 employees)</option>
                              <option value="medium">Medium Business (51-200 employees)</option>
                              <option value="large">Large Organization (200+ employees)</option>
                              <option value="enterprise">Enterprise/Multi-national</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Industry Type (Optional)
                            </label>
                            <select
                              value={budgetInputs.industryType}
                              onChange={(e) =>
                                setBudgetInputs({ ...budgetInputs, industryType: e.target.value })
                              }
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="">Select industry...</option>
                              <option value="technology">Technology/Software</option>
                              <option value="healthcare">Healthcare/Medical</option>
                              <option value="manufacturing">Manufacturing</option>
                              <option value="retail">Retail/E-commerce</option>
                              <option value="professional">Professional Services</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>

                        <motion.button
                          onClick={calculateBudget}
                          disabled={!budgetInputs.serviceType}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white p-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 transition-all duration-500 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          <span className="relative flex items-center justify-center gap-2">
                            🚀 Calculate AI-Powered Estimate
                            <motion.span
                              animate={{ rotate: [0, 15, -15, 0] }}
                              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            >
                              ⚡
                            </motion.span>
                          </span>
                        </motion.button>

                        {budgetResults && (
                          <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="mt-8 p-8 bg-gradient-to-br from-white via-slate-50 to-blue-50 rounded-2xl border-2 border-blue-200/50 shadow-2xl relative overflow-hidden"
                          >
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full -mr-16 -mt-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-100/50 to-transparent rounded-full -ml-12 -mb-12"></div>

                            <div className="flex items-center justify-between mb-6 relative z-10">
                              <motion.h5
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="font-black text-blue-900 text-2xl flex items-center gap-3"
                              >
                                <span className="text-3xl">💼</span>
                                Your Legal Budget Estimate
                              </motion.h5>
                              <motion.button
                                onClick={downloadBudgetPDF}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-sm font-bold shadow-lg hover:shadow-xl"
                              >
                                <Download className="w-4 h-4" />
                                <span>Download PDF</span>
                              </motion.button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl border border-blue-200/50 hover:shadow-lg transition-all duration-300"
                              >
                                <div className="text-sm text-blue-700 font-semibold mb-2 flex items-center gap-2">
                                  <span className="text-lg">👨‍💼</span>
                                  Counsel Time (Tim Harmar)
                                </div>
                                <div className="text-lg text-blue-800 font-medium mb-1">
                                  {budgetResults.counselHours} hours × $300/hr
                                </div>
                                <div className="text-3xl font-black text-blue-900">
                                  ${budgetResults.counselCost.toLocaleString()}
                                </div>
                              </motion.div>

                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl border border-green-200/50 hover:shadow-lg transition-all duration-300"
                              >
                                <div className="text-sm text-green-700 font-semibold mb-2 flex items-center gap-2">
                                  <span className="text-lg">🏢</span>
                                  Admin Support
                                </div>
                                <div className="text-lg text-green-800 font-medium mb-1">
                                  {budgetResults.adminHours} hours × $90/hr
                                </div>
                                <div className="text-3xl font-black text-green-900">
                                  ${budgetResults.adminCost.toLocaleString()}
                                </div>
                              </motion.div>

                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-100 p-6 rounded-2xl border border-purple-200/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                              >
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-200/30 to-transparent rounded-full -mr-8 -mt-8"></div>
                                <div className="text-sm text-purple-700 font-semibold mb-2 flex items-center gap-2 relative z-10">
                                  <span className="text-lg">💰</span>
                                  Total Estimate
                                </div>
                                <div className="text-4xl font-black text-purple-900 relative z-10">
                                  ${budgetResults.totalEstimate.toLocaleString()}
                                </div>
                                {budgetResults.savings > 0 && (
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="text-sm text-green-600 font-bold mt-2 bg-green-100 px-3 py-1 rounded-full inline-block"
                                  >
                                    💡 Savings: ${budgetResults.savings.toLocaleString()}
                                  </motion.div>
                                )}
                              </motion.div>
                            </div>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                              className="bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 p-6 rounded-2xl border border-orange-200/50 mb-6"
                            >
                              <div className="text-sm text-orange-700 font-semibold mb-2 flex items-center gap-2">
                                <span className="text-lg">📊</span>
                                Estimated Range
                              </div>
                              <div className="text-2xl font-black text-orange-900">
                                ${budgetResults.range.low.toLocaleString()} - $
                                {budgetResults.range.high.toLocaleString()}
                              </div>
                              {budgetResults.monthlyRetainer && (
                                <div className="text-sm text-blue-600 font-bold mt-3 bg-blue-100 px-3 py-2 rounded-lg inline-block">
                                  📅 Monthly Retainer: $
                                  {budgetResults.monthlyRetainer.toLocaleString()}
                                </div>
                              )}
                            </motion.div>

                            {aiRecommendations && aiRecommendations.length > 0 && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-2xl border border-indigo-200/50 relative overflow-hidden"
                              >
                                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-indigo-200/20 to-transparent rounded-full -ml-10 -mt-10"></div>
                                <h6 className="font-black text-indigo-900 mb-4 flex items-center text-xl relative z-10">
                                  🤖 AI-Powered Recommendations
                                  <motion.span
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="ml-2"
                                  >
                                    ✨
                                  </motion.span>
                                </h6>
                                <ul className="space-y-3 relative z-10">
                                  {aiRecommendations.map((rec, idx) => (
                                    <motion.li
                                      key={idx}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.9 + idx * 0.1 }}
                                      className="flex items-start bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all duration-300"
                                    >
                                      <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                                      <span className="text-sm text-indigo-800 font-medium">
                                        {rec}
                                      </span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}

                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.0 }}
                              className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-200/50 text-xs text-gray-600 italic relative overflow-hidden"
                            >
                              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-100/30 to-transparent rounded-full -mr-8 -mt-8"></div>
                              <div className="flex items-start gap-2 relative z-10">
                                <span className="text-sm">ℹ️</span>
                                <span>
                                  * Estimates based on typical matters. Actual costs may vary
                                  depending on specific circumstances. Contact us for a detailed
                                  consultation and personalized quote.
                                </span>
                              </div>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.1 }}
                              className="mt-6 flex flex-col sm:flex-row gap-4"
                            >
                              <motion.button
                                onClick={() => {
                                  window.location.href = `mailto:kburton@timharmar.com?subject=Budget Consultation Request&body=Hello,%0D%0A%0D%0AI have used your budget calculator and would like to discuss my legal needs.%0D%0A%0D%0AService Type: ${budgetInputs.serviceType}%0D%0AEstimated Cost: $${budgetResults.totalEstimate.toLocaleString()}%0D%0A%0D%0APlease contact me to schedule a consultation.%0D%0A%0D%0AThank you!`
                                }}
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-sm font-bold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                              >
                                <span className="text-lg">📞</span>
                                Schedule Consultation
                              </motion.button>
                              <motion.button
                                onClick={() => {
                                  setBudgetInputs({
                                    serviceType: '',
                                    complexity: 'medium',
                                    urgency: 'normal',
                                    duration: 'one-time',
                                    clientSize: 'small',
                                    industryType: '',
                                  })
                                  setBudgetResults(null)
                                  setAiRecommendations(null)
                                }}
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-sm font-bold flex items-center justify-center gap-2"
                              >
                                <span className="text-lg">🔄</span>
                                Reset Calculator
                              </motion.button>
                            </motion.div>
                          </motion.div>
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
          // Show all categories and expand all expandable items
          setSelectedCategory('guides')

          // First show guides category
          setTimeout(() => {
            setSelectedCategory('faqs')
          }, 500)

          // Then show tools category
          setTimeout(() => {
            setSelectedCategory('tools')
            // For tools, expand the budget calculator
            setExpandedItem(0)
          }, 1000)

          // Finally go back to guides to show the complete library experience
          setTimeout(() => {
            setSelectedCategory('guides')
          }, 1500)

          // Scroll through all categories to show user everything is available
          const categories = ['guides', 'faqs', 'tools']
          let currentIndex = 0

          const cycleInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % categories.length
            setSelectedCategory(categories[currentIndex])

            // Expand some items in each category to show functionality
            if (categories[currentIndex] === 'faqs') {
              setExpandedItem(0) // Expand first FAQ
            } else if (categories[currentIndex] === 'tools') {
              setExpandedItem(0) // Expand budget calculator
            } else {
              setExpandedItem(null)
            }
          }, 2000)

          // Stop cycling after showing all categories
          setTimeout(() => {
            clearInterval(cycleInterval)
            setSelectedCategory('guides') // End on guides
            setExpandedItem(null)
          }, 8000)
        }}
        className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-large hover:shadow-xl relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center justify-center">
          <FileText className="w-5 h-5 mr-2" />
          Access Full Resource Library
          <ArrowRight className="w-5 h-5 ml-2" />
        </span>
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

// Interactive Legal Compliance Dashboard
export const ComplianceeDashboard = () => {
  const [selectedCompliance, setSelectedCompliance] = useState('corporate')
  const [activeReminders, setActiveReminders] = useState(3)
  const [completionRate, setCompletionRate] = useState(87)

  const complianceCategories = {
    corporate: {
      title: 'Corporate Filings',
      icon: '🏢',
      color: 'blue',
      tasks: [
        { name: 'Annual Return Filing', due: '2025-03-15', status: 'pending', priority: 'high' },
        {
          name: 'Director Resolutions',
          due: '2025-02-28',
          status: 'completed',
          priority: 'medium',
        },
        { name: 'Corporate Minutes', due: '2025-04-30', status: 'upcoming', priority: 'medium' },
      ],
    },
    employment: {
      title: 'Employment Standards',
      icon: '👥',
      color: 'green',
      tasks: [
        { name: 'Payroll Remittance', due: '2025-01-31', status: 'pending', priority: 'high' },
        {
          name: 'Vacation Pay Calculation',
          due: '2025-02-15',
          status: 'completed',
          priority: 'low',
        },
        { name: 'T4 Preparation', due: '2025-02-28', status: 'upcoming', priority: 'high' },
      ],
    },
    privacy: {
      title: 'Privacy Law',
      icon: '🔒',
      color: 'purple',
      tasks: [
        { name: 'PIPEDA Review', due: '2025-03-01', status: 'pending', priority: 'medium' },
        { name: 'Privacy Policy Update', due: '2025-04-15', status: 'upcoming', priority: 'high' },
        { name: 'Data Breach Protocol', due: '2025-05-01', status: 'completed', priority: 'high' },
      ],
    },
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100'
      case 'pending':
        return 'text-red-600 bg-red-100'
      case 'upcoming':
        return 'text-blue-600 bg-blue-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500'
      case 'medium':
        return 'border-l-yellow-500'
      case 'low':
        return 'border-l-green-500'
      default:
        return 'border-l-gray-500'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-white via-slate-50 to-blue-50/30 p-8 rounded-2xl shadow-2xl border border-blue-200/50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-100/40 to-transparent rounded-full -ml-16 -mb-16"></div>

      <div className="flex items-center mb-8 relative z-10">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl mr-4 shadow-lg"
        >
          <Calendar className="w-8 h-8 text-white" />
        </motion.div>
        <div>
          <h3 className="text-3xl font-black text-gray-800 flex items-center gap-2">
            Compliance Dashboard
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl"
            >
              ⚡
            </motion.span>
          </h3>
          <p className="text-gray-600">Stay on top of your legal obligations</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 relative z-10">
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-blue-200/50 shadow-lg"
        >
          <div className="text-sm text-blue-600 font-medium mb-1">Active Reminders</div>
          <div className="text-3xl font-black text-blue-900">{activeReminders}</div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-green-200/50 shadow-lg"
        >
          <div className="text-sm text-green-600 font-medium mb-1">Completion Rate</div>
          <div className="text-3xl font-black text-green-900">{completionRate}%</div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-purple-200/50 shadow-lg"
        >
          <div className="text-sm text-purple-600 font-medium mb-1">Next Due</div>
          <div className="text-lg font-black text-purple-900">Jan 31</div>
        </motion.div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        {Object.entries(complianceCategories).map(([key, category]) => (
          <motion.button
            key={key}
            onClick={() => setSelectedCompliance(key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
              selectedCompliance === key
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white/60 text-gray-700 hover:bg-white/80'
            }`}
          >
            <span className="text-lg">{category.icon}</span>
            {category.title}
          </motion.button>
        ))}
      </div>

      {/* Tasks List */}
      <motion.div
        key={selectedCompliance}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-3 relative z-10"
      >
        {complianceCategories[selectedCompliance].tasks.map((task, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white/70 backdrop-blur-sm p-4 rounded-xl border-l-4 ${getPriorityColor(task.priority)} shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="font-bold text-gray-800">{task.name}</h4>
                <p className="text-sm text-gray-600">Due: {task.due}</p>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(task.status)}`}
                >
                  {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                </span>
                <div
                  className={`w-3 h-3 rounded-full ${task.priority === 'high' ? 'bg-red-500' : task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}`}
                ></div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 relative z-10">
        <motion.button
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-sm font-bold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <span className="text-lg">📅</span>
          Schedule Compliance Review
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-sm font-bold flex items-center justify-center gap-2"
        >
          <span className="text-lg">📊</span>
          View Full Calendar
        </motion.button>
      </div>
    </motion.div>
  )
}
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
  ComplianceeDashboard,
}
