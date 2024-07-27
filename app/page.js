"use client";

import { useState } from 'react';
import Results from './components/Results';

const questions = [
  {
    question: "How should the government handle healthcare?",
    answers: ["A) Implement a universal healthcare system.", "B) Provide a public option alongside private insurance.", "C) Leave healthcare primarily to private companies with minimal government intervention.", "D) Completely privatize healthcare."]
  },
  {
    question: "What is your stance on taxation?",
    answers: ["A) Increase taxes on the wealthy to fund social programs.", "B) Maintain current tax rates but close loopholes for the wealthy.", "C) Lower taxes across the board to stimulate economic growth.", "D) Drastically reduce taxes and government spending."]
  },
  {
    question: "How do you view climate change?",
    answers: ["A) It's a critical issue that requires immediate and significant government action.", "B) It's important, but solutions should involve both government and private sector efforts.", "C) It's an issue, but government regulation should be limited.", "D) Climate change is not a significant concern and does not require government intervention."]
  },
  {
    question: "What should be the approach to immigration?",
    answers: ["A) Provide a path to citizenship for undocumented immigrants and increase legal immigration.", "B) Strengthen border security but also offer a pathway to citizenship.", "C) Increase border security and reduce the number of legal immigrants allowed.", "D) Strictly enforce immigration laws and significantly reduce immigration."]
  },
  {
    question: "How should the government address income inequality?",
    answers: ["A) Implement policies to redistribute wealth, such as higher taxes on the wealthy and increased social spending.", "B) Encourage policies that promote equal opportunity and education.", "C) Allow the free market to address income disparities with minimal intervention.", "D) Income inequality is not a major concern that requires government action."]
  },
  {
    question: "What is your view on gun control?",
    answers: ["A) Implement strict gun control laws and background checks.", "B) Enforce existing laws more effectively and introduce some additional regulations.", "C) Protect the Second Amendment rights with minimal restrictions.", "D) Reduce existing gun control laws and increase individual freedoms."]
  },
  {
    question: "How do you feel about LGBTQ+ rights?",
    answers: ["A) Fully support LGBTQ+ rights, including marriage equality and anti-discrimination laws.", "B) Support most LGBTQ+ rights but allow for some religious exemptions.", "C) Respect individuals' choices but oppose government mandates on private businesses.", "D) Traditional values should be prioritized over LGBTQ+ rights."]
  },
  {
    question: "What is your stance on foreign policy?",
    answers: ["A) Promote diplomacy and international cooperation, reducing military interventions.", "B) Maintain strong international alliances and a balanced approach to military intervention.", "C) Focus on national interests with limited involvement in global conflicts.", "D) Adopt an isolationist stance, prioritizing domestic issues over foreign entanglements."]
  },
  {
    question: "How should the education system be managed?",
    answers: ["A) Increase funding for public schools and make higher education free or affordable.", "B) Support public schools and provide vouchers for private education.", "C) Increase school choice and reduce government involvement in education.", "D) Privatize education and eliminate government-funded schools."]
  },
  {
    question: "What is your opinion on social welfare programs?",
    answers: ["A) Expand social welfare programs to support the needy and reduce poverty.", "B) Maintain current levels of social welfare with efficient management.", "C) Reduce the scope of social welfare and promote work incentives.", "D) Eliminate most social welfare programs and encourage private charity."]
  }
];

const alignments = {
  trump: ['C', 'D', 'C', 'C', 'D', 'C', 'C', 'C', 'C', 'C'],
  harris: ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
};

const topics = [
  "healthcare",
  "taxation",
  "climateChange",
  "immigration",
  "incomeInequality",
  "gunControl",
  "lgbtqRights",
  "foreignPolicy",
  "education",
  "socialWelfare"
];

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState({ trump: 0, harris: 0, neutral: 0 });
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [reasons, setReasons] = useState([]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setAnswers([...answers, answer]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setShowResults(true);
      calculateScore([...answers, answer]);
    }
  };

  const calculateScore = (answers) => {
    let trumpScore = 0;
    let harrisScore = 0;
    let neutralScore = 0;
    let reasonsList = [];

    answers.forEach((answer, index) => {
      const topic = topics[index];
      const question = questions[index].question;
      const answerText = questions[index].answers.find(a => a.startsWith(answer));
      if (answer === alignments.trump[index]) {
        trumpScore++;
        reasonsList.push({ question, answer, answerText, candidate: "Donald Trump", topic });
      } else if (answer === alignments.harris[index]) {
        harrisScore++;
        reasonsList.push({ question, answer, answerText, candidate: "Kamala Harris", topic });
      } else {
        neutralScore++;
        reasonsList.push({ question, answer, answerText, candidate: "neither candidate", topic });
      }
    });

    setScore({ trump: trumpScore, harris: harrisScore, neutral: neutralScore });
    setReasons(reasonsList);
  };

  if (showResults) {
    return <Results score={score} reasons={reasons} />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h3>Political Leaning Quiz: Created by Steve Benner</h3>
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8 dark:bg-gray-800">
        <h2 className="text-2xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
        <div className="flex flex-col space-y-4">
          {questions[currentQuestion].answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer[0])}
              className="w-full p-4 text-left bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
