import React from 'react';
import DocsLayout from '@/components/docs/DocsLayout';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Info, Mail, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmailTemplates = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const preInterviewTemplate = `Subject: Your Recruit41 Interview Invitation for [Position] on [Date]

Dear [Candidate Name],

Congratulations! Following your application for the [Position], we are pleased to invite you to an interview with Recruit41.

This interview will be conducted on an AI-powered platform and will be led by the AI interviewer, Kiran.

Interview Details:

• Date: [Full Date]
• Time: [Time, e.g., 2:00 PM]
• Estimated Duration: Approximately [60 minutes]. (Please allow for a few extra minutes in case of any technical setup.)

Crucial Preparation:

Please read our Interviewing with Recruit41 Guide thoroughly before your interview. It contains vital information to ensure a smooth experience and a fair evaluation.

Key Highlights from the Guide:

• Browser Requirement: 
  - You must use the official Google Chrome browser. 
  - Other browsers (including Chromium-based ones like Brave/Arc, Safari, Edge, and mobile browsers) are not supported.

• Camera and Microphone:
  - Ensure you have a working camera and microphone.
  - Test them before the interview using webcammictest.com.
  - If using Bluetooth devices, ensure they are set as the default audio input/output in your operating system.

• Screen Sharing:
  - You might be required to share your entire screen (not just a window or tab) during parts of the interview, especially for coding exercises. This is critical for our evaluation.

• Familiarize Yourself: 
  - We highly recommend trying a mock interview on the platform at https://demo.recruit41.com/ to get comfortable with the controls and environment.

• Environment: 
  - Choose a quiet, well-lit, and distraction-free space.

What to Expect:

The interview will be 2-way conversational, and may include technical questions, problem-solving scenarios, and maybe a live coding exercise. Kiran, our AI interviewer, will guide you through the process.

Next Steps:

1. Thoroughly Review the Guide: This is the most important step to prepare.
2. Prepare Your Setup: Test your equipment and browser well in advance.

We understand that interviews can be demanding, and we want to support you in performing your best. Preparing according to the attached guide will significantly help.

If you have any questions before your interview, please don't hesitate to reply to this email or contact us at support@recruit41.com.

We look forward to interviewing you!

Best regards,
[TA Team]`;

  const interviewDayTemplate = `Subject: Your Recruit41 Interview for [Position] is Today – Interview Link Enclosed!

Dear [Candidate Name],

Today's the day! We're looking forward to your interview for the [Position] with Recruit41, scheduled from [Time].

Your Unique Interview Link:

Please use the following link to join your interview:

[INSERT UNIQUE INTERVIEW LINK HERE]

Important - Link Activation & Access:

• This interview link will become active 15 minutes before your scheduled start time.
• The link will remain active until [End Time] on [End Date]
• We recommend joining 5-10 minutes before your scheduled time to settle in and ensure your audio/video is working correctly on the platform's pre-meeting check page.
• Please aim to start the interview promptly at [Time]

Final Preparation:

Please read our Interviewing with Recruit41 Guide thoroughly before your interview. It contains vital information to ensure a smooth experience and a fair evaluation.

Key Highlights from the Guide:

• Browser Requirement: 
  - You must use the official Google Chrome browser.
  - Other browsers (including Chromium-based ones like Brave/Arc, Safari, Edge, and mobile browsers) are not supported.

• Camera and Microphone:
  - Ensure you have a working camera and microphone.
  - Test them before the interview using webcammictest.com.
  - If using Bluetooth devices, ensure they are set as the default audio input/output in your operating system.

• Screen Sharing: 
  - You might be required to share your entire screen (not just a window or tab) during parts of the interview, especially for coding exercises. This is critical for our evaluation.

• Familiarize Yourself: 
  - We highly recommend trying a mock interview on the platform at https://demo.recruit41.com/ to get comfortable with the controls and environment.

• Environment: 
  - Choose a quiet, well-lit, and distraction-free space.

• Close Unnecessary Applications: 
  - To ensure optimal performance and minimize distractions, please close any applications or browser tabs not required for the interview.

During the Interview:

• Remember to keep your upper body, including your face, arms, and hands, visible.
• If you encounter any technical issues during the interview, please use the Live Chat Support option available on the bottom control panel of the interview platform.
• If Kiran seems unresponsive, you can say, "Hey Kiran, are you there?" to prompt it.

Next Steps After the Interview:

• We will be in touch regarding the outcome of your interview within [5-7 business days].

We are excited to learn more about you. Relax, be yourself, and good luck!

If you have any questions before your interview, please don't hesitate to reply to this email or contact us at support@recruit41.com.

Best regards,
[TA Team]`;

  return (
    <DocsLayout title="Email Templates">
      <div className="space-y-8">
        
        <Alert className="border-blue-200 bg-blue-50">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>About These Templates:</strong> These email templates are designed for communicating with candidates 
            throughout the interview process. They provide clear instructions and set expectations for the AI-powered interview experience.
          </AlertDescription>
        </Alert>

        <div className="mb-6">
          <Link to="/docs/recruiter">
            <Button variant="outline" className="mb-4">
              ← Back to Recruiter Guide
            </Button>
          </Link>
        </div>

        {/* Pre-Interview Email */}
        <Card className="border-slate-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Email 1: Pre-Interview / Intimation Email</CardTitle>
                  <p className="text-slate-600 text-sm mt-1">Send this email when scheduling the interview</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(preInterviewTemplate)}
                className="flex items-center space-x-2"
              >
                <Copy className="h-4 w-4" />
                <span>Copy</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <pre className="whitespace-pre-wrap text-sm text-slate-700 font-mono">
                {preInterviewTemplate}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Interview Day Email */}
        <Card className="border-slate-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Email 2: Actual Interview Day - With Interview Link</CardTitle>
                  <p className="text-slate-600 text-sm mt-1">Send this email on the day of the interview with the link</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(interviewDayTemplate)}
                className="flex items-center space-x-2"
              >
                <Copy className="h-4 w-4" />
                <span>Copy</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <pre className="whitespace-pre-wrap text-sm text-slate-700 font-mono">
                {interviewDayTemplate}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Usage Tips */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl flex items-center space-x-2">
              <Clock className="h-5 w-5 text-orange-600" />
              <span>Usage Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Customization Fields</h3>
                <p className="text-slate-600 mb-2">Make sure to replace these placeholders before sending:</p>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                  <li><code className="bg-slate-100 px-1 rounded">[Candidate Name]</code> - The candidate's full name</li>
                  <li><code className="bg-slate-100 px-1 rounded">[Position]</code> - The job title they're interviewing for</li>
                  <li><code className="bg-slate-100 px-1 rounded">[Date]</code> - The interview date</li>
                  <li><code className="bg-slate-100 px-1 rounded">[Time]</code> - The interview time</li>
                  <li><code className="bg-slate-100 px-1 rounded">[TA Team]</code> - Your team or company name</li>
                  <li><code className="bg-slate-100 px-1 rounded">[INSERT UNIQUE INTERVIEW LINK HERE]</code> - The actual interview link</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Timing Recommendations</h3>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                  <li><strong>Email 1:</strong> Send 2-3 days before the interview to give candidates time to prepare</li>
                  <li><strong>Email 2:</strong> Send on the morning of the interview (2-4 hours before scheduled time)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Important Links to Include</h3>
                <p className="text-slate-600 text-sm">
                  Always include links to the{' '}
                  <Link to="/docs/candidate" className="text-blue-600 hover:text-blue-800 underline">
                    Candidate Guide
                  </Link>{' '}
                  and the{' '}
                  <a 
                    href="https://demo.recruit41.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    demo interview platform
                  </a>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  );
};

export default EmailTemplates;