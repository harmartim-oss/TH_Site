import React, { useState } from 'react'
import {
  AILegalAssistant,
  SmartScheduler,
  LegalResourcesLibrary,
  LegalNewsFeed,
  LegalAssessment,
} from './components/CuttingEdgeFeatures'
import {
  Scale,
  Shield,
  Lightbulb,
  Building2,
  Rocket,
  Target,
  Award,
  Monitor,
  Users,
  Globe,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Calendar,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  FileText,
  UserCheck,
  User,
  ExternalLink,
} from 'lucide-react'
import logoImage from './assets/tim_harmar_logo_updated.png'

// Policy Content
const PRIVACY_POLICY = `Privacy Policy for www.timharmar.com

Last Updated: August 26, 2025

At Tim Harmar Law (operating www.timharmar.com), we are committed to protecting your privacy and personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and other applicable laws in Ontario, Canada. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information as a law firm providing legal services. By using our website or engaging our services, you consent to the practices described in this policy.

1. Information We Collect

We may collect the following types of personal information:

• Client Information: Name, address, email, phone number, and other details provided when you engage our legal services, submit inquiries, or complete forms.

• Case-Related Information: Sensitive information related to your legal matter, such as financial details, health information, or other personal data necessary for representation.

• Automatically Collected Information: Data such as IP address, browser type, device information, and website usage (e.g., pages visited, time spent) collected via cookies or analytics tools.

• Communication Data: Records of correspondence, including emails or phone calls, related to your legal matters or inquiries.

2. How We Use Your Information

We use your personal information to:

• Provide legal services, including case management, representation, and advice.
• Communicate with you about your legal matters or respond to inquiries.
• Improve our website and services through analytics (e.g., Google Analytics).
• Comply with legal and professional obligations, including those set by the Law Society of Ontario.
• Protect against fraud, unauthorized access, or security threats.

3. Legal Basis for Processing

We process personal information based on:

• Contract: To fulfill our agreement to provide legal services.
• Consent: When you provide explicit consent, such as for newsletters or cookies.
• Legal Obligation: To comply with PIPEDA, court orders, or Law Society requirements.
• Legitimate Interests: For website analytics or security, provided your rights are not overridden.

4. Disclosure of Your Information

We may disclose your information to:

• Service Providers: Third parties (e.g., cloud storage, billing software, or analytics providers) who assist in our operations, bound by strict confidentiality agreements.
• Courts or Authorities: When required by law, court order, or to comply with regulatory obligations.
• Other Parties: With your consent, or as necessary for your legal representation (e.g., sharing with opposing counsel or mediators).
• Professional Obligations: To comply with audits or investigations by the Law Society of Ontario.

We do not sell your personal information.

5. Cookies and Tracking Technologies

Our website uses cookies to enhance functionality and analyze usage. You can manage cookie preferences through our cookie consent tool or your browser settings. For details, see our Cookie Policy (linked in the website footer).

6. Data Security

We implement robust security measures, including encryption (e.g., SSL), access controls, and secure storage, to protect your data. As a law firm, we adhere to the Law Society of Ontario's guidelines for safeguarding client information. However, no system is entirely secure, and we cannot guarantee absolute security.

7. Data Retention

We retain personal information only as long as necessary for the purposes outlined or as required by law. Client files are retained in accordance with the Law Society of Ontario's retention guidelines (typically 7–15 years for certain records) or until no longer needed for your legal matter.

8. Your Rights Under PIPEDA

You have the following rights regarding your personal information:

• Access: Request access to your personal data we hold.
• Correction: Request correction of inaccurate or incomplete data.
• Withdrawal of Consent: Withdraw consent for non-essential processing (e.g., marketing).
• Complaint: Lodge a complaint with us or the Office of the Privacy Commissioner of Canada.

To exercise these rights, contact us at privacy@timharmar.com. We will respond within 30 days, as required by PIPEDA.

9. Third-Party Links

Our website may link to external sites. We are not responsible for their privacy practices. Please review their policies before sharing information.

10. Children's Privacy

Our services are not directed to individuals under 19, the age of majority in Ontario. We do not knowingly collect data from minors without parental consent. Contact us if you believe we have such data.

11. International Data Transfers

Your data is primarily stored in Canada. If transferred outside Canada (e.g., to US-based service providers), we ensure compliance with PIPEDA through safeguards like contractual agreements.

12. Updates to This Policy

We may update this policy to reflect changes in law or our practices. We will notify you of material changes via email or a website notice at least 7 days in advance. The updated policy takes effect upon posting.

13. Contact Us

For questions, concerns, or to exercise your rights, contact our Privacy Officer, Kelly Burton at privacy@timharmar.com.

You may also contact the Office of the Privacy Commissioner of Canada at www.priv.gc.ca or 1-800-282-1376 for complaints.`

const TERMS_OF_SERVICE = `Terms of Use for www.timharmar.com

Last Updated: January 27, 2025

Welcome to Tim Harmar: Legal and Consulting Services ("we," "us," or "our"). These Terms of Use ("Terms") govern your access to and use of our website www.timharmar.com and all related services provided by our law firm. By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy, which is incorporated herein by reference.

1. ACCEPTANCE OF TERMS

By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and all applicable laws and regulations in Ontario, Canada. If you do not agree to these Terms, you must not use this website.

2. ABOUT OUR FIRM

Tim Harmar: Legal and Consulting Services is a law firm licensed to practice law in Ontario, Canada, under the regulatory authority of the Law Society of Ontario (LSO). Our principal lawyer, Tim J. Harmar, is a member in good standing with the LSO.

Our areas of practice include:
• Civil litigation and dispute resolution
• Privacy and cybersecurity law
• Intellectual property law
• Business law and corporate counsel
• Business startup and strategy consulting
• General legal consulting services

3. NO SOLICITOR-CLIENT RELATIONSHIP

IMPORTANT: Use of this website does not create a solicitor-client relationship between you and Tim Harmar: Legal and Consulting Services. A solicitor-client relationship is established only through:
a) A signed retainer agreement or engagement letter
b) Formal acceptance of representation by our firm
c) Payment of a retainer fee, where applicable

Information provided on this website is for general informational purposes only and does not constitute legal advice. You should not act or refrain from acting based solely on information from this website without seeking appropriate legal counsel.

4. CONFIDENTIALITY AND COMMUNICATIONS

Communications sent through this website, including contact forms and emails, are not confidential and do not enjoy solicitor-client privilege until a formal solicitor-client relationship has been established. 

Do not send confidential, sensitive, or privileged information through:
• Contact forms on this website
• Unsecured email
• Public messaging systems

For secure communications, please contact us directly to establish proper confidential communication channels.

5. WEBSITE USE AND PROHIBITED CONDUCT

You may use our website for lawful purposes consistent with these Terms. You agree NOT to:

a) Use the website for any unlawful purpose or in violation of any local, provincial, or federal laws
b) Transmit any content that is defamatory, harassing, threatening, or obscene
c) Infringe on intellectual property rights of any party
d) Attempt to gain unauthorized access to our systems, networks, or accounts
e) Interfere with or disrupt the website's functionality or servers
f) Use automated tools, bots, or scrapers to access or collect information
g) Distribute malware, viruses, or harmful code
h) Impersonate our firm or any of our lawyers or staff

6. INTELLECTUAL PROPERTY RIGHTS

All content on this website, including but not limited to:
• Text, articles, and written materials
• Graphics, images, and multimedia content
• Website design and layout
• Software and source code
• Trademarks and service marks
• Legal resources and guides

Is owned by Tim Harmar: Legal and Consulting Services or our licensors and is protected by Canadian copyright law, trademark law, and other intellectual property laws.

You may view and print content for personal, non-commercial use only. You may not reproduce, distribute, modify, create derivative works, publicly display, or commercially exploit any content without our express written permission.

7. THIRD-PARTY LINKS AND RESOURCES

Our website may contain links to third-party websites, legal databases, government resources, or other external sites. These links are provided for convenience only. We do not:
• Endorse or control third-party content
• Guarantee the accuracy of external information
• Accept responsibility for third-party privacy practices
• Warrant the security of external websites

Your use of third-party websites is entirely at your own risk and subject to their terms of use.

8. DISCLAIMERS AND LIMITATIONS

TO THE MAXIMUM EXTENT PERMITTED BY ONTARIO LAW:

a) WEBSITE PROVIDED "AS IS": This website is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.

b) NO GUARANTEE OF ACCURACY: We do not warrant that information on this website is accurate, complete, current, or reliable. Legal information may become outdated due to changes in law.

c) NO GUARANTEE OF AVAILABILITY: We do not guarantee uninterrupted access to this website or that it will be error-free.

d) PROFESSIONAL OUTCOMES: We cannot guarantee any specific legal outcomes or results. Success in legal matters depends on numerous factors including applicable law, facts, judicial discretion, and opposing parties.

9. LIMITATION OF LIABILITY

TO THE MAXIMUM EXTENT PERMITTED BY ONTARIO LAW:

Tim Harmar: Legal and Consulting Services shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:
• Your use of or inability to use this website
• Any content or information obtained through this website
• Unauthorized access to or alteration of your transmissions or data
• Statements or conduct of any third party on the website
• Any other matter relating to this website or our services

This limitation applies regardless of the theory of liability (contract, tort, negligence, strict liability, or otherwise) and even if we have been advised of the possibility of such damages.

10. INDEMNIFICATION

You agree to indemnify, defend, and hold harmless Tim Harmar: Legal and Consulting Services, our lawyers, employees, and agents from any claims, losses, damages, liabilities, costs, and expenses (including reasonable legal fees) arising from:
• Your use of this website
• Your violation of these Terms
• Your violation of any rights of another party
• Any content you submit or transmit through this website

11. GOVERNING LAW AND JURISDICTION

These Terms are governed by and construed in accordance with the laws of Ontario, Canada, without regard to conflict of law principles.

Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts of Ontario, and you hereby consent to the personal jurisdiction of such courts.

12. PRIVACY AND DATA PROTECTION

Your privacy is important to us. Our collection, use, and disclosure of personal information is governed by our Privacy Policy, which complies with the Personal Information Protection and Electronic Documents Act (PIPEDA) and Ontario privacy laws.

13. CHANGES TO THESE TERMS

We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this website with an updated "Last Updated" date. Your continued use of the website after changes constitutes acceptance of the modified Terms.

We encourage you to review these Terms periodically to stay informed of any updates.

14. ACCESSIBILITY

We are committed to ensuring our website is accessible to persons with disabilities. If you experience difficulty accessing any part of our website, please contact us for assistance.

15. SEVERABILITY

If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be severed, and the remaining provisions shall remain in full force and effect.

16. ENTIRE AGREEMENT

These Terms, together with our Privacy Policy, constitute the entire agreement between you and Tim Harmar: Legal and Consulting Services regarding use of this website.

17. CONTACT INFORMATION

For questions about these Terms of Use or our legal services:

Tim Harmar: Legal and Consulting Services
Sault Ste. Marie, Ontario, Canada
Email: legal@timharmar.com
Phone: +1 (705) 943-5049
Website: www.timharmar.com

For immediate legal consultation, please call during business hours or submit a consultation request through our secure contact form.

© 2025 Tim Harmar: Legal and Consulting Services. All rights reserved.`

const LEGAL_NOTICES = `Legal Notices for www.timharmar.com

Last Updated: January 27, 2025

IMPORTANT LEGAL INFORMATION FOR WEBSITE USERS

1. PROFESSIONAL LICENSING AND REGULATORY AUTHORITY

Tim J. Harmar is a lawyer licensed to practice law in Ontario, Canada, and is a member in good standing with the Law Society of Ontario (LSO). 

License Information:
• Law Society of Ontario Member Number: [Available upon request]
• Current practicing certificate issued by the LSO
• Professional liability insurance maintained as required by LSO regulations
• Member directory information available at: lso.ca

The Law Society of Ontario regulates the practice of law in Ontario and establishes professional standards for lawyers. For information about our regulatory obligations, visit lso.ca.

2. JURISDICTIONAL SCOPE AND LIMITATIONS

ONTARIO JURISDICTION: Our legal services are provided in accordance with Ontario and Canadian federal law. Tim Harmar: Legal and Consulting Services is licensed to practice law only in Ontario, Canada.

MULTI-JURISDICTIONAL MATTERS: We may provide legal services in other Canadian provinces through:
• Temporary admission for specific matters (where permitted)
• Association with local counsel
• Referral to qualified lawyers in other jurisdictions

INTERNATIONAL MATTERS: For matters involving foreign law, we work with qualified international counsel or provide referrals to appropriate legal professionals.

LIMITATION NOTICE: Legal advice and representation are provided based on Ontario and Canadian federal law. We do not provide advice on laws of other countries or provinces unless specifically qualified to do so.

3. PROFESSIONAL STANDARDS AND CONDUCT

Our law firm operates in strict accordance with:
• Law Society of Ontario Rules of Professional Conduct
• Canadian Bar Association Code of Professional Conduct
• Provincial and federal laws governing legal practice
• Professional confidentiality and privilege requirements

PROFESSIONAL OBLIGATIONS include:
• Duty of loyalty to clients
• Competent representation
• Confidentiality protection
• Conflict of interest management
• Proper client fund management
• Continuing legal education requirements

4. LANGUAGE OF SERVICE

PRIMARY LANGUAGE: Legal services are provided primarily in English, which is the working language of our firm.

FRENCH LANGUAGE SERVICES: As required under the French Language Services Act (Ontario), we can arrange for French language legal services upon request, subject to:
• Availability of qualified French-speaking counsel
• Nature and complexity of the legal matter
• Advance notice requirements

TRANSLATION SERVICES: For clients requiring document translation or interpretation in other languages, we can provide referrals to certified translation services at the client's expense.

5. FEE STRUCTURE AND BILLING TRANSPARENCY

WRITTEN FEE AGREEMENTS: All legal fees are established by written retainer agreement or engagement letter before commencing legal services.

BILLING PRACTICES:
• Transparent hourly rates or fixed fee arrangements
• Detailed time records and expense tracking
• Regular billing statements with clear descriptions
• HST (Harmonized Sales Tax) applied as required by law
• Trust account management for client funds

PAYMENT TERMS: Payment terms, accepted methods, and collection procedures are outlined in our retainer agreements.

FEE DISPUTES: Clients have the right to seek fee assessment through the Law Society of Ontario if fee disputes cannot be resolved directly.

6. CONFLICT OF INTEREST MANAGEMENT

CONFLICT CHECKING: We maintain comprehensive conflict-checking procedures using professional software systems to identify potential conflicts before accepting new matters.

CONFLICT RESOLUTION: When conflicts are identified, we will:
• Decline representation if conflicts cannot be resolved
• Seek written consent from affected parties where appropriate
• Implement appropriate safeguards (Chinese walls) when permitted
• Withdraw from representation if conflicts develop during retainer

CONFLICT TYPES include:
• Client vs. client conflicts
• Personal interest conflicts
• Business relationship conflicts
• Former client conflicts

7. CLIENT FILE MANAGEMENT AND RETENTION

RETENTION PERIODS: Client files are retained in accordance with Law Society of Ontario guidelines:
• Active files: Duration of retainer plus applicable limitation periods
• Closed files: Minimum 7-15 years depending on matter type
• Will and estate files: Permanent retention recommended
• Real estate files: 15+ years or as required by law

ELECTRONIC RECORDS: Digital files are maintained with:
• Secure cloud storage with Canadian data residency
• Regular backup procedures
• Access controls and audit trails
• Encryption for sensitive documents

FILE RETRIEVAL: Former clients may request file copies subject to:
• Payment of outstanding fees
• Reasonable copying costs
• Applicable limitation periods
• Confidentiality obligations to other parties

8. ACCESSIBILITY AND ACCOMMODATION

ACCESSIBILITY COMMITMENT: We are committed to providing accessible legal services in compliance with the Accessibility for Ontarians with Disabilities Act (AODA).

AVAILABLE ACCOMMODATIONS:
• Alternative format documents
• Sign language interpretation (arranged in advance)
• Accessible meeting locations
• Extended appointment times when needed
• Alternative communication methods

ACCOMMODATION REQUESTS: Clients requiring accommodation should contact us as early as possible to arrange appropriate services.

9. COMPLAINTS AND PROFESSIONAL RESPONSIBILITY

INTERNAL COMPLAINTS PROCESS:
1. Contact Tim Harmar directly to discuss concerns
2. Formal written complaint to firm management
3. Mediation services if available and appropriate

LAW SOCIETY COMPLAINTS: If internal resolution is unsuccessful, clients may file complaints with:
• Law Society of Ontario Complaints Process
• Online at: lso.ca
• Phone: 1-800-668-7380
• Mail: Law Society of Ontario, 130 Queen Street West, Toronto, ON M5H 2N6

COMPLAINT TYPES include:
• Professional misconduct
• Competence concerns
• Fee disputes
• Service quality issues

10. PROFESSIONAL ASSOCIATIONS AND MEMBERSHIPS

Tim J. Harmar maintains active membership in:
• Law Society of Ontario (Mandatory professional body)
• Canadian Bar Association
• Ontario Bar Association
• Specialized practice sections relevant to areas of expertise

CONTINUING EDUCATION: Ongoing professional development through:
• Mandatory continuing professional development (CPD) programs
• Legal conferences and seminars
• Professional skills training
• Ethics and professionalism courses

11. TECHNOLOGY, SECURITY, AND DATA PROTECTION

SECURITY MEASURES:
• Industry-standard encryption for electronic communications
• Secure document management systems
• Regular security audits and updates
• Access controls and authentication procedures
• Backup and disaster recovery protocols

DATA PROTECTION: Client information is protected under:
• Personal Information Protection and Electronic Documents Act (PIPEDA)
• Law Society confidentiality requirements
• Professional privilege protections
• Firm privacy policies and procedures

CYBERSECURITY: We implement current cybersecurity best practices and regularly update our security protocols to protect client information.

12. EMERGENCY PROCEDURES AND AFTER-HOURS CONTACT

EXISTING CLIENTS: Emergency contact procedures are provided in retainer agreements for urgent legal matters outside regular business hours.

NEW CLIENTS: For immediate legal assistance outside business hours:
• Contact Legal Aid Ontario: 1-800-668-8258
• Duty Counsel services at local courts
• Emergency legal clinics in your area

COURT EMERGENCIES: For urgent court matters, contact the appropriate court registry or duty counsel services.

13. PROFESSIONAL LIABILITY AND INSURANCE

PROFESSIONAL LIABILITY INSURANCE: We maintain professional liability insurance coverage as required by the Law Society of Ontario, including:
• Minimum coverage amounts as mandated by LSO
• Extended reporting period coverage
• Coverage for past and present partners and associates

INSURANCE DETAILS: Specific insurance information is available upon client request as required by professional conduct rules.

14. REGULATORY COMPLIANCE AND PROFESSIONAL UPDATES

REGULATORY CHANGES: We monitor and comply with ongoing changes to:
• Law Society regulations and rules
• Federal and provincial legislation
• Court rules and procedures
• Professional conduct requirements

PROFESSIONAL DEVELOPMENT: Continuous updates through mandatory and voluntary professional development to ensure current knowledge of legal developments.

15. WEBSITE DISCLAIMERS AND LIMITATIONS

INFORMATION CURRENCY: While we strive to maintain current information, legal developments occur regularly. Website content may not reflect the most recent changes in law.

NO LEGAL ADVICE: Information on this website is for general informational purposes only and does not constitute legal advice for specific situations.

LIMITATION OF WARRANTIES: This website is provided "as is" without warranties of any kind regarding accuracy, completeness, or fitness for any particular purpose.

16. COPYRIGHT AND INTELLECTUAL PROPERTY NOTICE

COPYRIGHT NOTICE: © 2025 Tim Harmar: Legal and Consulting Services. All rights reserved.

CONTENT PROTECTION: All website content is protected by Canadian copyright law. Unauthorized reproduction, distribution, or commercial use is prohibited without express written permission.

TRADEMARK NOTICE: Tim Harmar: Legal and Consulting Services and associated logos are trademarks of our firm.

17. CONTACT INFORMATION FOR LEGAL NOTICES

For matters related to these legal notices, professional compliance, or regulatory concerns:

Tim Harmar: Legal and Consulting Services
Principal Lawyer: Tim J. Harmar
Location: Sault Ste. Marie, Ontario, Canada
Email: legal@timharmar.com
Phone: +1 (705) 943-5049

PROFESSIONAL INQUIRIES:
• Law Society complaints: lso.ca
• Fee assessment: Law Society of Ontario
• Professional conduct issues: Contact the Law Society directly

BUSINESS HOURS: Monday to Friday, 9:00 AM to 5:00 PM EST
After-hours emergency procedures are provided to retained clients.

This legal notice is governed by Ontario law and is subject to the exclusive jurisdiction of Ontario courts.

© 2025 Tim Harmar: Legal and Consulting Services. All rights reserved.`

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedService, setExpandedService] = useState(null)
  const [showTimBio, setShowTimBio] = useState(false)
  const [showPolicyModal, setShowPolicyModal] = useState(false)
  const [currentPolicy, setCurrentPolicy] = useState('')

  const openPolicyModal = (policyType) => {
    let policyContent = ''
    switch (policyType) {
      case 'privacy':
        policyContent = PRIVACY_POLICY
        break
      case 'terms':
        policyContent = TERMS_OF_SERVICE
        break
      case 'legal':
        policyContent = LEGAL_NOTICES
        break
      default:
        return
    }
    setCurrentPolicy(policyContent)
    setShowPolicyModal(true)
  }

  const closePolicyModal = () => {
    setShowPolicyModal(false)
    setCurrentPolicy('')
  }

  return (
    <div className="min-h-screen bg-surface-default">
      {/* Header/Navigation */}
      <header className="bg-surface-default/98 backdrop-blur-sm shadow-token-sm sticky top-0 z-40 border-b border-brand-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex items-center">
              <img
                src={logoImage}
                alt="Tim Harmar: Legal and Consulting Services"
                className="h-12 w-auto md:h-16 drop-shadow-sm"
              />
              <div className="ml-4">
                <h1 className="text-xl md:text-2xl font-bold text-brand-primary font-heading">
                  Tim Harmar: Legal and Consulting Services
                </h1>
                <p className="text-sm text-brand-secondary font-semibold tracking-wide">
                  Excellence in Legal Solutions
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex space-x-8"
              role="navigation"
              aria-label="Main navigation"
            >
              <a
                href="#services"
                className="text-brand-primary hover:text-brand-accent font-medium transition-all duration-300 hover:scale-105 relative group"
                aria-label="Navigate to services section"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                className="text-brand-primary hover:text-brand-accent font-medium transition-all duration-300 hover:scale-105 relative group"
                aria-label="Navigate to about section"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-brand-primary hover:text-brand-accent font-medium transition-all duration-300 hover:scale-105 relative group"
                aria-label="Navigate to contact section"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <button
                className="bg-brand-accent hover:bg-brand-accent/90 text-text-inverse px-8 py-3 rounded-token-sm font-semibold shadow-token-sm hover:shadow-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 border border-brand-accent/20"
                onClick={() =>
                  (window.location.href =
                    'mailto:kburton@timharmar.com?subject=Schedule Consultation&body=Hello,%0D%0A%0D%0AI would like to schedule a consultation.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!')
                }
                aria-label="Schedule consultation via email"
              >
                <Calendar className="inline-block w-4 h-4 mr-2" aria-hidden="true" />
                Schedule Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-token-sm text-brand-primary hover:text-brand-accent hover:bg-brand-secondary/20 focus:outline-none transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 border-t border-brand-secondary/30 bg-surface-default shadow-large">
              <nav className="flex flex-col space-y-2 pt-6">
                <a
                  href="#services"
                  className="text-brand-primary hover:text-brand-accent font-medium py-3 px-4 rounded-token-sm hover:bg-brand-secondary/20 transition-all duration-300 mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-brand-primary hover:text-brand-accent font-medium py-3 px-4 rounded-token-sm hover:bg-brand-secondary/20 transition-all duration-300 mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-brand-primary hover:text-brand-accent font-medium py-3 px-4 rounded-token-sm hover:bg-brand-secondary/20 transition-all duration-300 mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <button
                  className="bg-brand-accent hover:bg-brand-accent/90 text-text-inverse px-6 py-3 rounded-token-sm font-semibold shadow-token-sm hover:shadow-medium transition-all duration-300 mx-2 mt-4"
                  onClick={() =>
                    (window.location.href =
                      'mailto:kburton@timharmar.com?subject=Schedule Consultation&body=Hello,%0D%0A%0D%0AI would like to schedule a consultation.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!')
                  }
                >
                  <Calendar className="inline-block w-4 h-4 mr-2" />
                  Schedule Consultation
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-surface-default text-text-primary py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Optional 5% opacity shield-outline watermark pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-brand-primary rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border-2 border-brand-primary rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <div className="animate-slide-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-6 font-heading leading-tight text-brand-primary">
                Excellence in Legal Solutions
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-xl mb-8 leading-relaxed text-brand-secondary">
                Award-winning legal expertise specialized in civil litigation, privacy and
                cybersecurity law, intellectual property, and business strategy consulting in Sault
                Ste. Marie, Ontario.
              </p>

              <div className="animate-slide-up delay-200">
                <button
                  className="bg-brand-accent hover:bg-brand-accent/90 text-text-inverse px-8 md:px-10 py-4 md:py-5 rounded-token-sm font-bold text-base md:text-lg shadow-token-sm hover:shadow-medium transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 active:scale-95"
                  onClick={() =>
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                  }
                  aria-label="Navigate to contact section to schedule a free consultation"
                >
                  <Calendar
                    className="inline-block w-5 h-5 mr-3 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  Schedule Free Consultation
                </button>
              </div>
            </div>

            {/* Right Column: Circular headshot */}
            <div className="flex justify-center lg:justify-end animate-slide-up delay-100">
              <div className="relative">
                <img
                  src={logoImage}
                  alt="Tim Harmar: Legal and Consulting Services"
                  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover shadow-token-sm border-4 border-brand-secondary/30"
                />
                {/* Decorative elements */}
                <div className="absolute -inset-4 rounded-full border-2 border-brand-accent/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 font-heading">
              Comprehensive Legal Services
            </h2>
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto leading-relaxed">
              Award-winning legal expertise with cutting-edge solutions for your business needs.
            </p>
            <div className="w-24 h-1 bg-brand-accent mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: 'Civil Litigation',
                description:
                  'Expert representation in complex civil matters with a track record of success.',
                icon: Scale,
                color: 'from-primary-600 to-primary-700',
                detailed:
                  'Our civil litigation practice encompasses comprehensive legal representation for businesses and individuals in complex disputes. We handle contract disputes, tort claims, employment litigation, commercial disputes, and appellate matters. With extensive courtroom experience and strategic case management, we provide aggressive advocacy while exploring cost-effective resolution strategies including mediation and arbitration.',
              },
              {
                title: 'Privacy and Cybersecurity Law',
                description:
                  'Comprehensive privacy compliance, data protection, and cybersecurity strategies.',
                icon: Shield,
                color: 'from-trust-600 to-trust-700',
                detailed:
                  'Navigate the complex landscape of Canadian privacy and cybersecurity laws including PIPEDA, provincial privacy legislation, and sector-specific regulations. Our services include privacy impact assessments, data breach response protocols, privacy policy development, CASL compliance, cross-border data transfer agreements, cybersecurity compliance audits, incident response planning, and regulatory compliance guidance for businesses of all sizes in the digital age.',
              },
              {
                title: 'Intellectual Property',
                description: 'Protecting your innovations and creative assets in the digital age.',
                icon: Lightbulb,
                color: 'from-accent-500 to-accent-600',
                detailed:
                  'Comprehensive intellectual property protection including trademark registration and enforcement, copyright matters, trade secret protection, licensing agreements, IP due diligence for mergers and acquisitions, and IP portfolio management. We help businesses protect their most valuable intangible assets and develop strategic IP licensing and monetization strategies.',
              },
              {
                title: 'Business Law',
                description: 'Strategic legal counsel for business growth and compliance.',
                icon: Building2,
                color: 'from-secondary-600 to-secondary-700',
                detailed:
                  'Full-spectrum business law services including corporate formation and governance, shareholder agreements, commercial contracts, regulatory compliance, employment law matters, and corporate restructuring. We serve as outside general counsel for emerging companies and established businesses, providing strategic legal guidance for sustainable growth.',
              },
              {
                title: 'Business Start Up and Strategy',
                description:
                  'Comprehensive legal guidance for entrepreneurs and new business ventures.',
                icon: Rocket,
                color: 'from-primary-700 to-primary-800',
                detailed:
                  "End-to-end legal support for entrepreneurs launching new ventures including business entity selection and formation, founders' agreements, intellectual property strategy, regulatory compliance roadmaps, employment policies, privacy frameworks, and strategic partnerships. We help startups build solid legal foundations while remaining agile and cost-effective.",
              },
              {
                title: 'Legal Consulting',
                description: 'Strategic advice and risk management for complex legal challenges.',
                icon: Target,
                color: 'from-accent-600 to-accent-700',
                detailed:
                  'Strategic legal consulting for complex business challenges including regulatory compliance reviews, risk assessment and mitigation strategies, legal project management, and specialized advisory services. We provide senior-level legal expertise for organizations requiring sophisticated legal analysis and strategic guidance.',
              },
            ].map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="group bg-surface-default p-8 rounded-token-md hover:shadow-medium transition-all duration-500 cursor-pointer border border-brand-secondary/30 hover:border-brand-accent transform hover:scale-102 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                >
                  <div className="w-16 h-16 rounded-token-sm bg-brand-accent/20 p-4 mb-6 group-hover:bg-brand-accent/30 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4 flex items-center justify-between font-heading">
                    {service.title}
                    <span className="text-brand-accent transition-colors">
                      {expandedService === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </h3>
                  <p className="text-text-neutral mb-4 leading-relaxed">{service.description}</p>
                  {expandedService === index && (
                    <div className="mt-6 p-6 bg-surface-alt rounded-token-sm border-l-4 border-brand-accent animate-slide-down">
                      <p className="text-text-neutral leading-relaxed mb-4">{service.detailed}</p>
                      <button
                        className="bg-brand-accent hover:bg-brand-accent/90 text-text-inverse px-6 py-3 rounded-token-sm font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 shadow-token-sm hover:shadow-medium"
                        onClick={() =>
                          (window.location.href = `mailto:kburton@timharmar.com?subject=Consultation Request - ${service.title}&body=Hello,%0D%0A%0D%0AI would like to schedule a consultation regarding ${service.title}.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!`)
                        }
                      >
                        <Calendar className="inline-block w-4 h-4 mr-2" />
                        Schedule Consultation
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-heading">
              Innovative Legal Technology
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Experience the future of legal services with our cutting-edge tools and assessments.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-accent-600 mx-auto mt-4 rounded-full shadow-glow"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <LegalAssessment />
            <LegalResourcesLibrary />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LegalNewsFeed />
            <SmartScheduler />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 font-heading">
              Meet Our Team
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Our dedicated legal professionals are committed to providing exceptional service and
              expertise to every client.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-600 mx-auto mt-6 rounded-full shadow-glow"></div>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
            {/* Tim J. Harmar - Featured prominently */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary-50 to-accent-50 p-10 rounded-3xl border-2 border-accent-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-up">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-primary-700 to-primary-800 text-white p-4 rounded-xl mr-6 shadow-medium hover:shadow-glow transition-all duration-300">
                  <Scale className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-900 font-heading">
                    Tim J. Harmar
                  </h3>
                  <p className="text-accent-600 font-bold text-xl">Principal Lawyer & Founder</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white p-6 rounded-xl mb-8 shadow-medium hover:shadow-glow transition-all duration-300">
                <p className="font-bold text-xl flex items-center mb-2">
                  <Award className="w-6 h-6 mr-3" />
                  Award-Winning Legal Excellence
                </p>
                <p className="text-accent-100 text-lg">
                  Supreme Court of Canada Experience • 15+ Years Practice
                </p>
              </div>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                Tim Harmar is a distinguished lawyer with extensive experience in civil litigation,
                privacy and cybersecurity law, and intellectual property. As the founder of Tim
                Harmar: Legal and Consulting Services, he brings award-winning legal expertise and
                Supreme Court of Canada experience to clients throughout Sault Ste. Marie and
                Northern Ontario. His practice focuses on delivering innovative legal solutions with
                cutting-edge technology integration.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                    <GraduationCap className="text-primary-600 mr-3 w-5 h-5" />
                    <span className="text-gray-700 font-medium">
                      University of Windsor Faculty of Law
                    </span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                    <GraduationCap className="text-primary-600 mr-3 w-5 h-5" />
                    <span className="text-gray-700 font-medium">
                      York University Osgoode Hall Law School
                    </span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                    <Award className="text-primary-600 mr-3 w-5 h-5" />
                    <span className="text-gray-700 font-medium">
                      Supreme Court of Canada Experience
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                    <Scale className="text-primary-600 mr-3 w-5 h-5" />
                    <span className="text-gray-700 font-medium">Civil Litigation Specialist</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                    <Shield className="text-primary-600 mr-3 w-5 h-5" />
                    <span className="text-secondary-700 font-medium">
                      Privacy & Cybersecurity Expert
                    </span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                    <Lightbulb className="text-accent-600 mr-3 w-5 h-5" />
                    <span className="text-secondary-700 font-medium">IP Strategy Advisor</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mb-8">
                <button
                  className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-6 py-3 rounded-xl font-semibold shadow-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                  onClick={() =>
                    (window.location.href =
                      'mailto:kburton@timharmar.com?subject=Schedule Consultation with Tim Harmar&body=Hello,%0D%0A%0D%0AI would like to schedule a consultation with Tim Harmar.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!')
                  }
                >
                  <Calendar className="inline-block w-4 h-4 mr-2" />
                  Schedule with Tim
                </button>
                <button
                  className="border-2 border-accent-500 text-accent-600 hover:text-accent-700 px-6 py-3 rounded-xl hover:bg-accent-50 hover:border-accent-600 transition-all duration-300 font-semibold transform hover:scale-105"
                  onClick={() => setShowTimBio(!showTimBio)}
                >
                  <User className="inline-block w-4 h-4 mr-2" />
                  {showTimBio ? 'Hide Bio' : 'Read Full Bio'}
                </button>
              </div>

              {/* Expanded Bio Section */}
              {showTimBio && (
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl border-2 border-accent-200 shadow-xl mb-8 animate-slide-down">
                  <div className="flex items-center mb-6">
                    <User className="w-8 h-8 text-accent-600 mr-4" />
                    <h4 className="text-2xl font-bold text-primary-900 font-heading">
                      Professional Biography - Tim J. Harmar
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h5 className="text-xl font-bold text-primary-600 mb-3 flex items-center">
                          <GraduationCap className="w-5 h-5 mr-2" />
                          Educational Background
                        </h5>
                        <div className="space-y-3 text-gray-700">
                          <p>
                            <strong>University of Windsor Faculty of Law (J.D.)</strong>
                            <br />
                            Graduated with distinction, focusing on civil litigation and
                            constitutional law.
                          </p>
                          <p>
                            <strong>York University Osgoode Hall Law School (LL.M.)</strong>
                            <br />
                            Advanced studies in intellectual property and privacy law, with
                            specialized focus on technology law.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-xl font-bold text-primary-600 mb-3 flex items-center">
                          <Award className="w-5 h-5 mr-2" />
                          Professional Recognition
                        </h5>
                        <div className="space-y-2 text-gray-700">
                          <p>• Supreme Court of Canada counsel designation</p>
                          <p>• Award-winning legal practitioner recognized for excellence</p>
                          <p>• Featured speaker at Canadian privacy law conferences</p>
                          <p>• Certified in advanced cybersecurity law frameworks</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h5 className="text-xl font-bold text-primary-600 mb-3 flex items-center">
                          <Scale className="w-5 h-5 mr-2" />
                          Practice Areas & Expertise
                        </h5>
                        <div className="space-y-2 text-gray-700">
                          <p>
                            <strong>Civil Litigation:</strong> Complex commercial disputes, contract
                            litigation, and appellate practice with a proven track record in both
                            trial and appellate courts.
                          </p>
                          <p>
                            <strong>Privacy & Cybersecurity Law:</strong> PIPEDA compliance, data
                            breach response, cross-border data transfers, and emerging cybersecurity
                            regulations.
                          </p>
                          <p>
                            <strong>Intellectual Property:</strong> Trademark strategy, copyright
                            protection, trade secrets, and IP licensing for technology companies.
                          </p>
                          <p>
                            <strong>Business Law:</strong> Corporate governance, regulatory
                            compliance, and strategic legal consulting for emerging businesses.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-xl font-bold text-primary-600 mb-3 flex items-center">
                          <Building2 className="w-5 h-5 mr-2" />
                          Professional Philosophy
                        </h5>
                        <p className="text-gray-700 italic">
                          "My approach combines traditional legal excellence with innovative
                          technology solutions. I believe in providing clients with not just legal
                          advice, but strategic guidance that positions them for long-term success
                          in an increasingly complex regulatory environment."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-white rounded-xl border border-primary-200">
                    <h5 className="text-lg font-bold text-gray-900 mb-3">
                      Community Involvement & Leadership
                    </h5>
                    <p className="text-gray-700">
                      Tim is actively involved in the Northern Ontario legal community, serving as a
                      mentor to young lawyers and contributing to legal education initiatives. He
                      regularly provides pro bono services to local non-profits and startups,
                      demonstrating his commitment to supporting economic development in Sault Ste.
                      Marie and the surrounding region.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Kelly Burton */}
            <div className="bg-gradient-to-br from-trust-50 to-primary-50 p-8 rounded-2xl border border-trust-200 shadow-medium hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-slide-up delay-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-trust-600 to-trust-700 text-white p-3 rounded-xl mr-4 shadow-medium hover:shadow-glow transition-all duration-300">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-900 font-heading">Kelly Burton</h3>
                  <p className="text-trust-600 font-semibold text-lg">Legal Assistant</p>
                </div>
              </div>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Kelly Burton provides dedicated support as our Legal Assistant, ensuring seamless
                client communication and efficient case management. With expertise in legal research
                and document preparation, Kelly plays a crucial role in our team's success.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                  <FileText className="text-trust-600 mr-3 w-4 h-4" />
                  <span className="text-secondary-700 text-sm font-medium">
                    Legal research and case management
                  </span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                  <FileText className="text-trust-600 mr-3 w-4 h-4" />
                  <span className="text-secondary-700 text-sm font-medium">
                    Document preparation and coordination
                  </span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                  <Scale className="text-trust-600 mr-3 w-4 h-4" />
                  <span className="text-secondary-700 text-sm font-medium">
                    Professional standards excellence
                  </span>
                </div>
              </div>
              <button
                className="w-full bg-gradient-to-r from-trust-600 to-trust-700 hover:from-trust-700 hover:to-trust-800 text-white px-4 py-3 rounded-xl font-semibold shadow-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                onClick={() => (window.location.href = 'mailto:kburton@timharmar.com')}
              >
                <Mail className="inline-block w-4 h-4 mr-2" />
                Contact Kelly
              </button>
            </div>

            {/* Josh Ochoa */}
            <div className="bg-gradient-to-br from-accent-50 to-secondary-50 p-8 rounded-2xl border border-accent-200 shadow-medium hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-slide-up delay-200">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-accent-600 to-accent-700 text-white p-3 rounded-xl mr-4 shadow-medium hover:shadow-glow transition-all duration-300">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-900 font-heading">Josh Ochoa</h3>
                  <p className="text-accent-600 font-semibold text-lg">Office Administrator</p>
                </div>
              </div>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Josh Ochoa serves as our Office Administrator, providing essential administrative
                support and ensuring smooth daily operations. With expertise in office management
                and client relations, Josh maintains our high standards of professional service and
                organizational excellence.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                  <Building2 className="text-accent-600 mr-3 w-4 h-4" />
                  <span className="text-secondary-700 text-sm font-medium">
                    Office operations and administration
                  </span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                  <Phone className="text-accent-600 mr-3 w-4 h-4" />
                  <span className="text-secondary-700 text-sm font-medium">
                    Client relations and communication
                  </span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                  <Monitor className="text-accent-600 mr-3 w-4 h-4" />
                  <span className="text-secondary-700 text-sm font-medium">
                    Administrative systems management
                  </span>
                </div>
              </div>
              <button
                className="w-full bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white px-4 py-3 rounded-xl font-semibold shadow-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                onClick={() => (window.location.href = 'mailto:admin@timharmar.com')}
              >
                <Mail className="inline-block w-4 h-4 mr-2" />
                Contact Josh
              </button>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900 p-10 rounded-3xl text-white text-center shadow-2xl border border-accent-500/20">
            <h3 className="text-3xl font-bold mb-8 font-heading">
              Why Choose Tim Harmar: Legal and Consulting Services?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-500/30 transition-all duration-300 group-hover:scale-110 shadow-glow">
                  <Award className="text-accent-300 w-8 h-8" />
                </div>
                <span className="font-semibold text-lg">Award-winning legal expertise</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-500/30 transition-all duration-300 group-hover:scale-110 shadow-glow">
                  <Monitor className="text-accent-300 w-8 h-8" />
                </div>
                <span className="font-semibold text-lg">Cutting-edge legal technology</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-500/30 transition-all duration-300 group-hover:scale-110 shadow-glow">
                  <Users className="text-accent-300 w-8 h-8" />
                </div>
                <span className="font-semibold text-lg">Personalized service approach</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all duration-200">
                  <Globe className="text-white w-8 h-8" />
                </div>
                <span className="font-semibold text-lg">Local expertise, global perspective</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Call To Action */}
      <section className="py-20 bg-brand-primary text-text-inverse">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-text-inverse/90 leading-relaxed">
            Contact us today for a consultation and discover how our legal expertise can help your business thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              className="bg-brand-accent hover:bg-brand-accent/90 text-text-inverse px-8 py-4 rounded-token-sm font-bold text-lg shadow-token-sm hover:shadow-medium transition-all duration-300 transform hover:scale-105 active:scale-95"
              onClick={() =>
                (window.location.href =
                  'mailto:kburton@timharmar.com?subject=Schedule Consultation&body=Hello,%0D%0A%0D%0AI would like to schedule a consultation.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!')
              }
              aria-label="Schedule free consultation via email"
            >
              <Calendar className="inline-block w-5 h-5 mr-3" aria-hidden="true" />
              Schedule Free Consultation
            </button>
            
            <a
              href="tel:+17059435049"
              className="text-text-inverse hover:text-brand-accent border-b-2 border-transparent hover:border-brand-accent font-semibold text-lg transition-all duration-300"
              aria-label="Call Tim Harmar Legal Services"
            >
              <Phone className="inline-block w-5 h-5 mr-2" aria-hidden="true" />
              Call (705) 943-5049
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-surface-alt"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-brand-primary">
              Contact Information
            </h2>
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto leading-relaxed">
              Get in touch with our legal team for expert guidance and consultation.
            </p>
            <div className="w-24 h-1 bg-brand-accent mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-surface-default p-8 rounded-token-md border border-brand-secondary/30 hover:border-brand-accent transition-all duration-200 hover:shadow-token-sm">
              <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Mail className="text-brand-accent w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading text-brand-primary">Email</h3>
              <a
                href="mailto:kburton@timharmar.com"
                className="text-brand-accent hover:text-brand-accent/80 text-lg transition-colors"
              >
                kburton@timharmar.com
              </a>
            </div>
            <div className="bg-surface-default p-8 rounded-token-md border border-brand-secondary/30 hover:border-brand-accent transition-all duration-200 hover:shadow-token-sm">
              <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Phone className="text-brand-accent w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading text-brand-primary">Phone</h3>
              <a
                href="tel:+17059435049"
                className="text-brand-accent hover:text-brand-accent/80 text-lg transition-colors"
              >
                +1 (705) 943-5049
              </a>
            </div>
            <div className="bg-surface-default p-8 rounded-token-md border border-brand-secondary/30 hover:border-brand-accent transition-all duration-200 hover:shadow-token-sm">
              <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MapPin className="text-brand-accent w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading text-brand-primary">Location</h3>
              <p className="text-brand-secondary text-lg">
                Sault Ste. Marie
                <br />
                Ontario, Canada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-primary text-text-inverse py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Stacked Logo Column */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <img
                  src={logoImage}
                  alt="Tim Harmar: Legal and Consulting Services"
                  className="h-16 w-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2 font-heading">
                  Tim Harmar: Legal and Consulting Services
                </h3>
                <p className="text-sm text-text-inverse/80 font-semibold tracking-wide">
                  Excellence in Legal Solutions
                </p>
              </div>
              <p className="text-text-inverse/90 mb-6 text-base leading-relaxed">
                Providing expert legal solutions in civil litigation, privacy and cybersecurity law,
                intellectual property, and business startup consulting in Northern Ontario.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/tim-harmar-legal-consulting-services"
                  className="bg-brand-accent hover:bg-brand-accent/90 p-3 rounded-token-sm transition-all duration-200 transform hover:scale-105 shadow-token-sm"
                  aria-label="Visit our LinkedIn page"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Quick Links Column */}
            <div>
              <h4 className="text-xl font-bold mb-6 font-heading flex items-center">
                <Scale className="w-5 h-5 mr-2 text-brand-accent" />
                Services
              </h4>
              <ul className="space-y-3 text-text-inverse/90">
                <li>
                  <a
                    href="#services"
                    className="hover:text-brand-accent transition-colors flex items-center"
                  >
                    <Scale className="w-4 h-4 mr-2 text-brand-accent" />
                    Civil Litigation
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-brand-accent transition-colors flex items-center"
                  >
                    <Shield className="w-4 h-4 mr-2 text-brand-accent" />
                    Privacy & Cybersecurity Law
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-brand-accent transition-colors flex items-center"
                  >
                    <Lightbulb className="w-4 h-4 mr-2 text-brand-accent" />
                    Intellectual Property
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-brand-accent transition-colors flex items-center"
                  >
                    <Building2 className="w-4 h-4 mr-2 text-brand-accent" />
                    Business Law
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-brand-accent transition-colors flex items-center"
                  >
                    <Rocket className="w-4 h-4 mr-2 text-brand-accent" />
                    Business Start Up & Strategy
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info Column */}
            <div>
              <h4 className="text-xl font-bold mb-6 font-heading flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-brand-accent" />
                Contact Info
              </h4>
              <ul className="space-y-3 text-text-inverse/90">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-brand-accent" />
                  Sault Ste. Marie, ON
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-brand-accent" />
                  +1 (705) 943-5049
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-brand-accent" />
                  kburton@timharmar.com
                </li>
              </ul>
              
              {/* Clear consultation pathway */}
              <div className="mt-6">
                <button
                  className="bg-brand-accent hover:bg-brand-accent/90 text-text-inverse px-6 py-3 rounded-token-sm font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-token-sm"
                  onClick={() =>
                    (window.location.href =
                      'mailto:kburton@timharmar.com?subject=Schedule Consultation&body=Hello,%0D%0A%0D%0AI would like to schedule a consultation.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!')
                  }
                  aria-label="Schedule consultation via email"
                >
                  <Calendar className="inline-block w-4 h-4 mr-2" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom bar with legal links */}
          <div className="border-t border-text-inverse/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-text-inverse/70 text-center md:text-left mb-4 md:mb-0 text-sm">
                &copy; 2025 Tim Harmar: Legal and Consulting Services. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-text-inverse/70">
                <button
                  onClick={() => openPolicyModal('privacy')}
                  className="hover:text-brand-accent transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => openPolicyModal('terms')}
                  className="hover:text-brand-accent transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
                <button
                  onClick={() => openPolicyModal('legal')}
                  className="hover:text-brand-accent transition-colors cursor-pointer"
                >
                  Legal Notices
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant Chat Widget */}
      <AILegalAssistant />

      {/* Policy Modal */}
      {showPolicyModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center px-4">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closePolicyModal}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-accent-50">
                <h2 className="text-2xl font-bold text-primary-900">
                  {currentPolicy.includes('Privacy Policy')
                    ? 'Privacy Policy'
                    : currentPolicy.includes('Terms of Service')
                      ? 'Terms of Service'
                      : 'Legal Notices'}
                </h2>
                <button
                  onClick={closePolicyModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close policy modal"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[70vh]">
                <div className="prose prose-lg max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
                    {currentPolicy}
                  </pre>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">
                    For questions, please contact us at{' '}
                    <a
                      href="mailto:info@timharmar.com"
                      className="text-primary-600 hover:text-primary-700 underline"
                    >
                      info@timharmar.com
                    </a>
                  </p>
                  <button
                    onClick={closePolicyModal}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
