import { NavItem, Feature } from './types';
import AnimatedExcelImport from './components/animations/AnimatedExcelImport';
import AnimatedBulkUpload from './components/animations/AnimatedBulkUpload';
import AnimatedGmailIntegration from './components/animations/AnimatedGmailIntegration';
import AnimatedChromePlugin from './components/animations/AnimatedChromePlugin';
import AnimatedResumeScreening from './components/animations/AnimatedResumeScreening';
import AnimatedWhatsappFlow from './components/animations/AnimatedWhatsappFlow';
import AnimatedClickToCall from './components/animations/AnimatedClickToCall';
import AnimatedAIInterview from './components/animations/AnimatedAIInterview';
import AnimatedAIProctoring from './components/animations/AnimatedAIProctoring';
import AnimatedCopilotFeedback from './components/animations/AnimatedCopilotFeedback';

export const NAVIGATION_ITEMS: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Sourcing', path: '/#sourcing-section' },
  { name: 'Screening', path: '/#screening-section' },
  { name: 'Interview', path: '/#interview-section' },
  { name: 'Copilot', path: '/#copilot-section' },
];

// Simplified for homepage showcase: one key feature per category
export const HOME_PAGE_FEATURES: { [key: string]: Feature } = {
  sourcing: {
    id: 'excel-import',
    title: 'Universal Excel/CSV Import',
    description: 'Import candidates from any Excel or CSV format, supporting exports from Hirist, Naukri, and more. Auto-processes resume links.',
    link: '/#sourcing-section', // Links to section on homepage
    animationComponent: AnimatedExcelImport,
    details: [
      "Seamlessly integrate candidate data from various job portals.",
      "Supports custom column mapping for maximum flexibility.",
      "If a resume link (e.g., Google Drive, Dropbox) is present, Recruit41 automatically downloads and parses the resume."
    ]
  },
  screening: {
    id: 'ai-resume-screener',
    title: 'AI-Powered Resume Screener',
    description: 'Rank candidates based on their fitment to the job. You explain the criteria, our AI does the grunt work.',
    link: '/#screening-section',
    animationComponent: AnimatedResumeScreening,
    details: [
      "Natural language criteria input: simply describe what you're looking for.",
      "Example criteria: 'Has a career trajectory from hands-on software development to senior development roles to technical leadership positions across a decade or more.'",
      "Provides a fitment score and highlights relevant sections in the resume."
    ]
  },
  interview: {
    id: 'ai-interviews',
    title: 'AI-Conducted Interviews',
    description: 'AI conducts first and second round interviews through 2-way real-time discussions, just like an online meeting.',
    link: '/#interview-section',
    animationComponent: AnimatedAIInterview,
    details: [
      "Candidates can take interviews anytime, eliminating scheduling conflicts.",
      "Supports various formats: basic screening, work experience discussion, technical Q&A, coding exercises, system design, business cases, behavioral questions.",
      "Candidates can talk naturally, share screens, and ask clarifying questions to the AI."
    ]
  },
  copilot: {
    id: 'interview-documentation',
    title: 'Automated Interview Documentation',
    description: 'Like a meeting assistant for interviews, Copilot documents feedback in your organization-specific formats.',
    link: '/#copilot-section',
    animationComponent: AnimatedCopilotFeedback,
    details: [
      "Automatically transcribes and summarizes interview discussions.",
      "Populates predefined feedback templates, saving recruiter time.",
      "Ensures consistent and structured feedback across all interviews."
    ]
  },
};

// Original FEATURES_DATA can be kept if we plan to have more detailed pages later,
// or removed if homepage is the sole focus for feature details.
// For this change, we are focusing on homepage, so the simplified HOME_PAGE_FEATURES is key.
// If other features per category are needed elsewhere, the original structure can be adapted or maintained.
export const ALL_FEATURES_DATA: { [key: string]: Feature[] } = {
  sourcing: [
    HOME_PAGE_FEATURES.sourcing,
    {
      id: 'bulk-resume-upload',
      title: 'Bulk Resume Upload',
      description: 'Easily upload multiple resumes at once using ZIP files or entire folders (PDF, DOCX).',
      link: '/#sourcing-section', // Could link to a sub-part of sourcing section if needed
      animationComponent: AnimatedBulkUpload,
      details: [
        "Drag and drop functionality for user-friendly uploads.",
        "Supports common resume formats like PDF, DOCX, DOC, RTF.",
        "Background processing ensures you can continue working while resumes are imported."
      ]
    },
    {
      id: 'gmail-gdrive-integration',
      title: 'Gmail & Google Drive Integration',
      description: 'Connect your Gmail or Google Drive to automatically identify and import resumes based on your filters.',
      link: '/#sourcing-section',
      animationComponent: AnimatedGmailIntegration,
      details: [
        "Secure OAuth 2.0 connection to your Google account.",
        "Set custom date ranges, sender filters, or subject line keywords.",
        "Identifies resume attachments and inline resumes, automatically parsing them."
      ]
    },
    {
      id: 'chrome-plugin',
      title: 'Chrome Sourcing Plugin',
      description: 'Add candidates directly from LinkedIn or other sourcing websites with our intelligent Chrome plugin.',
      link: '/#sourcing-section',
      animationComponent: AnimatedChromePlugin,
      details: [
        "One-click candidate import from popular professional networking sites.",
        "AI-powered field detection automatically populates candidate information.",
        "Option to add notes or assign to specific jobs directly from the plugin."
      ]
    },
  ],
  screening: [
    HOME_PAGE_FEATURES.screening,
    {
      id: 'whatsapp-crm',
      title: 'Inbuilt WhatsApp CRM',
      description: 'Send personalized WhatsApp messages to candidates. Responses are automatically stored and searchable in the ATS.',
      link: '/#screening-section',
      animationComponent: AnimatedWhatsappFlow,
      details: [
        "Send bulk personalized messages using templates.",
        "Example: 'Hi [Candidate Name], I am [Recruiter Name] from [Company]. You applied for [Job Title] via [Source]. This role requires working out of [Location]. Are you comfortable with this?'",
        "Responses like 'Yes, willing to work from HSR' can automatically update custom ATS fields (e.g., Location Preference -> HSR).",
      ]
    },
    {
      id: 'click-to-call',
      title: 'Click-to-Call',
      description: 'Sync candidate phone numbers to your phone and call them directly from the ATS with a single click.',
      link: '/#screening-section',
      animationComponent: AnimatedClickToCall,
      details: [
        "Integrates with your phone's default calling app or VOIP services.",
        "Reduces manual dialing errors and saves time.",
      ]
    },
  ],
  interview: [
    HOME_PAGE_FEATURES.interview,
    {
      id: 'ai-proctoring',
      title: 'Advanced Proctoring',
      description: 'Detects malpractice through eye-tracking, voice analysis, screenshare analysis, and honeytrap questions.',
      link: '/#interview-section',
      animationComponent: AnimatedAIProctoring,
      details: [
        "Comprehensive malpractice detection correlated with answer quality.",
        "Provides flags for suspicious activities, not outright disqualification.",
      ]
    },
    {
      id: 'ai-evaluation',
      title: 'Job-Specific Evaluation',
      description: 'AI provides data-backed evaluations based on job-specific criteria, empowering hiring managers to make informed decisions. Video and screen recordings available.',
      link: '/#interview-section',
      // animationComponent: SomeOtherAnimationForEvaluation, // If available
      details: [
        "AI does not make hiring recommendations but provides structured data.",
        "Hiring managers and recruiters can review full video recordings and screen shares.",
      ]
    },
  ],
  copilot: [
    HOME_PAGE_FEATURES.copilot,
    {
      id: 'copilot-malpractice-detection',
      title: 'Copilot Malpractice Detection',
      description: 'Utilizes voice analysis and eye-tracking to identify specific instances of cheating during human-led or AI interviews.',
      link: '/#copilot-section',
      // animationComponent: SomeAnimationForCopilotMalpractice, // If available
      details: [
        "Provides an additional layer of integrity for all interview types.",
        "Helps maintain fairness and identify potential issues for review."
      ]
    },
    {
      id: 'interviewer-alignment',
      title: 'Interviewer Alignment',
      description: 'Ensures consistent interview standards and evaluation criteria across the organization.',
      link: '/#copilot-section',
      // animationComponent: SomeAnimationForAlignment, // If available
      details: [
        "Analyzes feedback patterns to identify discrepancies in interviewer scoring.",
        "Provides insights and suggestions for calibrating interview processes.",
      ]
    },
  ],
};
