import React, { useState } from 'react';
import { Calendar, Users, TrendingUp, MessageSquare, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import UpToUsLogo from './UpToUsLogo';

export default function UpToUsWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [quizState, setQuizState] = useState({ started: false, currentQuestion: 0, answers: [], score: 0 });

  const quizQuestions = [
    {
      question: "What are the two main components of fiscal policy?",
      options: [
        "Credits (revenue) and debits (spending)",
        "Taxes and loans",
        "Income and expenses",
        "Savings and investments"
      ],
      correct: 0
    },
    {
      question: "What happens when a government spends more than it generates in revenue?",
      options: [
        "It creates a surplus",
        "It borrows money",
        "It increases taxes automatically",
        "It reduces spending automatically"
      ],
      correct: 1
    },
    {
      question: "Is all government debt bad?",
      options: [
        "Yes, all debt is bad",
        "No, debt can be used for productive investments",
        "Only during crises",
        "Only for military defense"
      ],
      correct: 1
    },
    {
      question: "What is the current national debt of the United States?",
      options: [
        "$36 trillion",
        "$37 trillion",
        "$38 trillion",
        "$40 trillion"
      ],
      correct: 1
    },
    {
      question: "How much does the U.S. spend on interest on the national debt every day?",
      options: [
        "$2.4 billion",
        "$2.6 billion",
        "$2.8 billion",
        "$3.0 billion"
      ],
      correct: 1
    },
    {
      question: "What is the main problem facing the United States regarding national debt?",
      options: [
        "The amount of debt",
        "The trajectory of debt (yearly deficits)",
        "The interest rate",
        "The lenders"
      ],
      correct: 1
    },
    {
      question: "Within the next decade, federal spending on interest will exceed spending on which areas combined?",
      options: [
        "Defense and healthcare",
        "Education, infrastructure, and research & development",
        "Social Security and Medicare",
        "Transportation and housing"
      ],
      correct: 1
    },
    {
      question: "What are the two main ways to adjust fiscal policy?",
      options: [
        "Increase spending and decrease taxes",
        "Decrease spending and increase taxes",
        "Decreasing spending, increasing taxes, or a combination of both",
        "Borrowing more and spending less"
      ],
      correct: 2
    },
    {
      question: "Who determines fiscal policy?",
      options: [
        "The President",
        "The Federal Reserve",
        "Congress",
        "The Treasury Department"
      ],
      correct: 2
    },
    {
      question: "What is essential for addressing the national debt problem?",
      options: [
        "Higher taxes only",
        "Lower spending only",
        "Bipartisan collaboration in government",
        "Individual action only"
      ],
      correct: 2
    }
  ];

  const startQuiz = () => {
    setQuizState({ started: true, currentQuestion: 0, answers: [], score: 0 });
  };

  const selectAnswer = (answerIndex) => {
    const newAnswers = [...quizState.answers, answerIndex];
    const isCorrect = answerIndex === quizQuestions[quizState.currentQuestion].correct;
    const newScore = isCorrect ? quizState.score + 1 : quizState.score;
    
    if (quizState.currentQuestion < quizQuestions.length - 1) {
      // Move to next question
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1,
        answers: newAnswers,
        score: newScore
      });
    } else {
      // Quiz complete - set currentQuestion to length to trigger results view
      setQuizState({
        ...quizState,
        currentQuestion: quizQuestions.length,
        answers: newAnswers,
        score: newScore
      });
    }
  };

  const resetQuiz = () => {
    setQuizState({ started: false, currentQuestion: 0, answers: [], score: 0 });
  };

  const sections = {
    home: (
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 md:p-12 rounded-2xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-1 w-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Building a Sustainable Fiscal Future</h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">Up to Us Southern Miss Takes Action on America's Economic Challenges</p>
              <p className="text-base md:text-lg mb-6 md:mb-8 max-w-3xl">
                Join us in creating awareness and meaningful dialogue about fiscal sustainability. 
                Our generation's voice matters in shaping America's economic future.
              </p>
              <a 
                href="https://uptous.jotform.com/252657891175166" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg w-full md:w-auto text-center"
              >
                Sign the Pledge
              </a>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <img 
                src="/images/logo.png" 
                alt="Up to Us x Southern Miss Partnership"
                className="max-w-full md:max-w-xs lg:max-w-sm w-full h-auto rounded-lg bg-white p-2 mx-auto md:mx-0"
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                }}
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">$37T</div>
            <div className="text-sm md:text-base text-gray-700 font-semibold">National Debt</div>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-red-500">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">$2.6B</div>
            <div className="text-sm md:text-base text-gray-700 font-semibold">Daily Interest on Debt</div>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-gray-700 sm:col-span-2 md:col-span-1">
            <div className="text-3xl md:text-4xl font-bold text-gray-700 mb-2">Non-Partisan</div>
            <div className="text-sm md:text-base text-gray-700 font-semibold">Our Approach</div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 p-6 md:p-10 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3 flex items-center">
                <TrendingUp className="mr-2" /> Urgent
              </h3>
              <p className="text-gray-700">
                We understand the fiscal challenges we face are critical and raise awareness with urgency, but never with fear.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-3 flex items-center">
                <Users className="mr-2" /> Empowered
              </h3>
              <p className="text-gray-700">
                We're proud to give our generation a compelling and strong voice on fiscal and economic challenges.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3 flex items-center">
                <MessageSquare className="mr-2" /> Non-Partisan
              </h3>
              <p className="text-gray-700">
                We promote progress by fostering conversations that cross political affiliations and are open to all.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
                <Users className="mr-2" /> Inclusive
              </h3>
              <p className="text-gray-700">
                We're perceptive to how expansive views and backgrounds facilitate respectful dialogue.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    
    about: (
      <div className="space-y-6 md:space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">About Up to Us at USM</h2>
        
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-3 md:mb-4">What is Up to Us?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Up to Us is a national campaign that empowers college students to engage their peers in 
            conversations about fiscal sustainability and America's economic future. We believe that 
            our generation has a vital role to play in addressing the fiscal challenges facing our country.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At USM, we're bringing this conversation to our campus through events, social media engagement, 
            deliberative dialogues, and community outreach. We're not about pushing political agendas—we're 
            about creating informed, engaged citizens who understand the fiscal issues that will shape our future.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Part of the solution is for everyday Americans to understand our fiscal outlook and the economic 
            policies that can help our country thrive. In Up to Us, you'll create space for conversations on 
            campus to help people understand the problem, and the solutions that exist.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-6 md:p-8 rounded-xl">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">Why This Matters</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">•</span>
              <span>Within the next decade, our federal government will spend more on interest than on education, infrastructure, and research and development combined</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">•</span>
              <span>The problem is the trajectory of our national debt—year after year, spending exceeds revenue, creating persistent deficits</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">•</span>
              <span>Bipartisan collaboration in government is essential to address the drivers of our national debt and secure a fiscally sound economy</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">•</span>
              <span>Everyday Americans need to understand our fiscal outlook and the economic policies that can help our country thrive</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-3 md:mb-4">Meet the USM Team</h3>
          <p className="text-gray-700 mb-6">
            Our team is made up of passionate USM students from diverse backgrounds and majors, 
            united by a common goal: to create awareness about fiscal sustainability on our campus.
          </p>
          <div className="flex justify-center">
            <div className="text-center p-6 bg-gray-50 rounded-lg max-w-sm">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 flex items-center justify-center overflow-hidden rounded-full bg-gray-200 shadow-lg">
                <img 
                  src="/images/team-lead.jpg" 
                  alt="Dol Raj Bashyal - Team Leader"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-blue-600 rounded-full items-center justify-center text-white text-2xl font-bold hidden">
                  DRB
                </div>
              </div>
              <h4 className="font-semibold text-xl mb-2">Dol Raj Bashyal</h4>
              <p className="text-gray-600 text-base mb-1">Team Leader</p>
              <p className="text-gray-500 text-sm">University of Southern Mississippi</p>
            </div>
          </div>
        </div>
      </div>
    ),
    
    events: (
      <div className="space-y-6 md:space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">Upcoming Events</h2>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 md:p-8 rounded-xl shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center mb-3">
                <Calendar className="mr-2" />
                <span className="font-semibold">Coming Soon</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Fiscal Future Forum</h3>
              <p className="mb-4">Join us for an interactive discussion on fiscal policy and economic challenges</p>
              <p className="text-blue-100">Location: USM Student Union | Time: TBA</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
            <h3 className="text-xl font-semibold mb-2">Deliberative Dialogue Sessions</h3>
            <p className="text-gray-700 mb-3">
              Small group discussions exploring different perspectives on fiscal challenges
            </p>
            <p className="text-sm text-gray-600">Weekly sessions | Details coming soon</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-2">Watch Parties</h3>
            <p className="text-gray-700 mb-3">
              Watch and discuss important political debates and fiscal policy hearings together
            </p>
            <p className="text-sm text-gray-600">Scheduled around key events</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
            <h3 className="text-xl font-semibold mb-2">Classroom Presentations</h3>
            <p className="text-gray-700 mb-3">
              We bring fiscal awareness directly to USM classrooms with engaging presentations
            </p>
            <p className="text-sm text-gray-600">Request a presentation for your class</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">Want to Host an Event?</h3>
          <p className="text-gray-700 mb-6">
            We're always looking for new ways to engage the USM community. If you have ideas for events 
            or want to collaborate, we'd love to hear from you!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
            Contact Us
          </button>
        </div>
      </div>
    ),
    
    resources: (
      <div className="space-y-6 md:space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">Resources & Learn More</h2>
        
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-3 md:mb-4">Understanding Fiscal Policy and the National Debt</h3>
          
          <div className="space-y-6 mb-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-800">Fiscal Policy Basics</h4>
              <p className="text-gray-700 leading-relaxed">
                Fiscal policy is all about understanding credits (revenue) and debits (spending). When a government 
                is spending more than it's generating in revenue, it borrows money. This borrowed money is subject 
                to interest, just like a mortgage loan or student loan. As you know on the individual level, interest 
                rates on debt can pile up! It's the same concept with our national debt.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-800">Understanding Debt</h4>
              <p className="text-gray-700 leading-relaxed">
                It's important to understand that all debt is not bad from a government's perspective. Debt, or 
                borrowed money, is essentially credit that may go towards productive investments in the economy. 
                We use this borrowed money to pay for everything from military defense to Social Security payments 
                which help the poor and elderly. It's also extremely important during times of crisis, such as 
                COVID-19, when people need cash in hand due to massive unemployment or natural disasters.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-3 text-red-600">The Problem</h4>
              <p className="text-gray-700 leading-relaxed">
                The problem that the United States is currently facing is the <strong>trajectory</strong> of our 
                national debt. Year after year, the amount that we spend exceeds the amount that we take in through 
                tax revenue, causing a deficit. The accumulation of our deficits, year over year, is our national 
                debt, which currently stands at <strong>$37 trillion</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                We spend about <strong>$2.6 billion on interest on the national debt every single day</strong>. 
                Within the next decade, our federal government will spend more on interest than on education, 
                infrastructure, and research and development combined.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-3 text-blue-600">The Solution</h4>
              <p className="text-gray-700 leading-relaxed">
                The two main "tools" of fiscal policy are spending and revenues. This means that the two ways we 
                can adjust fiscal policy are either through decreasing spending, increasing taxes, or a combination 
                of the two. Fiscal policy is determined by Congress, which is made up of elected officials who 
                represent us—the people of the United States.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                The solution is dependent on <strong>bipartisan collaboration</strong> in the highest offices of 
                government and a deep understanding from our elected officials of what's at stake. The good news 
                is that many policy solutions do exist. It's just a matter of political will.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Part of the solution is for everyday Americans to understand our fiscal outlook and the economic 
                policies that can help our country thrive. In Up to Us, you'll create space for conversations on 
                campus to help people understand the problem, and the solutions that exist.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg mt-6">
            <h4 className="font-semibold text-lg mb-3">The $37 Trillion Question</h4>
            <p className="text-gray-700 italic">
              How do we close the gap between federal spending and federal revenue so that we can create a strong 
              fiscal foundation, allowing us room for public investment such as research, education, and infrastructure 
              so that our grandchildren can enjoy a prosperous economy?
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 md:p-8 rounded-xl">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">Take the Fiscal Trivia Quiz</h3>
          {!quizState.started ? (
            <div>
              <p className="text-gray-700 mb-6">
                Test your knowledge about fiscal policy, the national debt, and economic issues. 
                Learn interesting facts while challenging yourself!
              </p>
              <button 
                onClick={startQuiz}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Start Quiz
              </button>
            </div>
          ) : quizState.currentQuestion < quizQuestions.length ? (
            <div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  Question {quizState.currentQuestion + 1} of {quizQuestions.length}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full transition-all"
                    style={{ width: `${((quizState.currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-6">
                {quizQuestions[quizState.currentQuestion].question}
              </h4>
              <div className="space-y-3">
                {quizQuestions[quizState.currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => selectAnswer(index)}
                    className="w-full text-left bg-white hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-400 p-4 rounded-lg transition-all font-medium"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Quiz Complete!</h4>
              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4 md:p-6 mb-6">
                <p className="text-2xl md:text-3xl font-bold text-blue-700 mb-2 text-center">
                  {quizState.score} out of {quizQuestions.length} Correct!
                </p>
                <p className="text-lg md:text-xl text-gray-700 text-center mb-4">
                  {Math.round((quizState.score / quizQuestions.length) * 100)}% Score
                </p>
                <p className="text-gray-700 text-center">
                  {quizState.score === quizQuestions.length 
                    ? "Perfect! You're a fiscal policy expert! 🎉" 
                    : quizState.score >= quizQuestions.length * 0.7
                    ? "Great job! You have a strong understanding of fiscal policy. 👍"
                    : "Good effort! Keep learning about fiscal policy and the national debt. 📚"}
                </p>
              </div>
              <div className="space-y-4 mb-6">
                {quizQuestions.map((q, qIndex) => {
                  const userAnswer = quizState.answers[qIndex];
                  const isCorrect = userAnswer === q.correct;
                  return (
                    <div key={qIndex} className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}`}>
                      <p className="font-semibold mb-2">{q.question}</p>
                      <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        {isCorrect ? '✓' : '✗'} Your answer: {q.options[userAnswer]}
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-green-700 mt-1">
                          ✓ Correct answer: {q.options[q.correct]}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
              <button 
                onClick={resetQuiz}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Take Quiz Again
              </button>
            </div>
          )}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Additional Resources</h3>
          <div className="space-y-4">
            <a href="https://www.itsuptous.org" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
              <h4 className="font-semibold text-blue-600 mb-1">Official Up to Us Website</h4>
              <p className="text-gray-600 text-sm">Learn more about the national campaign and access educational materials</p>
            </a>
            
            <div className="block p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-1">Fiscal Policy Articles</h4>
              <p className="text-gray-600 text-sm">Stay updated with the latest news and analysis on fiscal sustainability</p>
            </div>
            
            <div className="block p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-1">Discussion Guides</h4>
              <p className="text-gray-600 text-sm">Tools for facilitating meaningful conversations about economic issues</p>
            </div>
          </div>
        </div>
      </div>
    ),
    
    getinvolved: (
      <div className="space-y-6 md:space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">Get Involved</h2>
        
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 md:p-10 rounded-xl shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Sign the Up to Us Pledge</h3>
          <p className="text-lg md:text-xl mb-4 md:mb-6">
            Commit to learning about fiscal sustainability and engaging in meaningful dialogue 
            about America's economic future.
          </p>
          <p className="text-base md:text-lg mb-4 md:mb-6 text-blue-100">
            Join fellow USM students in taking action on fiscal responsibility. Your voice matters!
          </p>
          <a 
            href="https://uptous.jotform.com/252657891175166" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Sign the Pledge - USM DRB
          </a>
          <p className="text-sm mt-4 text-blue-200">
            Select "University of Southern Mississippi-DRB" when signing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-3 md:mb-4">Launch Events Together</h3>
            <p className="text-gray-700 mb-6">
              Collaborate with other student organizations to create impactful events that raise awareness about fiscal sustainability. Together, we can reach more students and create meaningful change on campus!
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Partner with student clubs and organizations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Co-host events that combine interests and expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Expand your network and build partnerships</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Create larger, more impactful campus events</span>
              </li>
            </ul>
            <a 
              href="https://www.linkedin.com/company/up2us-usm-drb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Partner With Us
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-3 md:mb-4">Attend Our Events</h3>
            <p className="text-gray-700 mb-6">
              You don't have to be a team member to participate! Come to our events, join discussions, 
              and learn about fiscal issues affecting our generation.
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✓</span>
                <span>No commitment required</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✓</span>
                <span>Free food at most events</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✓</span>
                <span>Meet like-minded students</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✓</span>
                <span>Learn from guest speakers</span>
              </li>
            </ul>
            <a 
              href="https://www.linkedin.com/company/up2us-usm-drb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              View Events
            </a>
          </div>
        </div>

        <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">Spread the Word</h3>
          <p className="text-gray-700 mb-6">
            Help us reach more USM students by sharing our campaign on social media and telling 
            your friends about Up to Us!
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://www.linkedin.com/company/up2us-usm-drb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              <Linkedin className="mr-2" size={20} />
              Follow on LinkedIn
            </a>
          </div>
          <div className="mt-6 p-4 bg-white rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-gray-700 font-semibold mb-2">Our Handle:</p>
            <p className="text-gray-600">LinkedIn: <a href="https://www.linkedin.com/company/up2us-usm-drb/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UP2US_USM</a></p>
            <p className="text-sm text-gray-500 mt-3">Use hashtags: #UptoUs #OurFiscalFuture</p>
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">Contact the Team</h3>
          <p className="text-gray-700 mb-6">
            Have questions? Want to collaborate? Interested in bringing a presentation to your class? 
            Reach out to us!
          </p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Email:</strong> bashyal.dolraj30@gmail.com</p>
            <p><strong>Office Hours:</strong> Tuesday & Thursday, 2-4 PM at Student Union</p>
            <p><strong>Follow us on social media</strong> for the latest updates and announcements</p>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            <button 
              onClick={() => setActiveSection('home')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <UpToUsLogo className="w-10 h-10 md:w-12 md:h-12" />
              <div>
                <h1 className="text-lg md:text-xl font-bold">Up to Us</h1>
                <p className="text-xs md:text-sm text-gray-300">USM Campaign</p>
              </div>
            </button>
            
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'events', 'resources', 'getinvolved'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all font-semibold ${
                    activeSection === section
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {section === 'getinvolved' ? 'Get Involved' : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden pb-4 flex flex-wrap gap-2">
            {['home', 'about', 'events', 'resources', 'getinvolved'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-3 py-2 rounded-lg transition-all text-sm font-semibold ${
                  activeSection === section
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {section === 'getinvolved' ? 'Get Involved' : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {sections[activeSection]}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12 md:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Up to Us at USM</h3>
              <p className="text-gray-300">
                Building a sustainable fiscal future for America's next generation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="https://www.itsuptous.org" className="hover:text-white">National Campaign</a></li>
                <li><button onClick={() => setActiveSection('resources')} className="hover:text-white">Resources</button></li>
                <li><button onClick={() => setActiveSection('events')} className="hover:text-white">Events</button></li>
                <li><button onClick={() => setActiveSection('getinvolved')} className="hover:text-white">Get Involved</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a 
                  href="https://www.linkedin.com/company/up2us-usm-drb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  <Linkedin className="hover:text-blue-500 cursor-pointer" />
                </a>
              </div>
              <p className="text-gray-300 text-sm">#UptoUs #OurFiscalFuture</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Up to Us Campaign at USM. Part of the national Up to Us initiative.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

