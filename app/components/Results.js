import React from 'react';

const detailedReasons = {
  "A": {
    "healthcare": "Kamala Harris supports a public option alongside private insurance, aiming to expand healthcare access.",
    "taxation": "Kamala Harris supports increasing taxes on the wealthy to fund social programs.",
    "climateChange": "Kamala Harris views climate change as a critical issue that requires immediate and significant government action.",
    "immigration": "Kamala Harris supports providing a path to citizenship for undocumented immigrants and increasing legal immigration.",
    "incomeInequality": "Kamala Harris supports policies to redistribute wealth, such as higher taxes on the wealthy and increased social spending.",
    "gunControl": "Kamala Harris supports strict gun control laws and background checks.",
    "lgbtqRights": "Kamala Harris fully supports LGBTQ+ rights, including marriage equality and anti-discrimination laws.",
    "foreignPolicy": "Kamala Harris promotes diplomacy and international cooperation, reducing military interventions.",
    "education": "Kamala Harris supports increasing funding for public schools and making higher education free or affordable.",
    "socialWelfare": "Kamala Harris supports expanding social welfare programs to support the needy and reduce poverty."
  },
  "C": {
    "healthcare": "Donald Trump supports leaving healthcare primarily to private companies with minimal government intervention.",
    "taxation": "Donald Trump supports lowering taxes across the board to stimulate economic growth.",
    "climateChange": "Donald Trump views climate change as an issue but believes government regulation should be limited.",
    "immigration": "Donald Trump supports increasing border security and reducing the number of legal immigrants allowed.",
    "incomeInequality": "Donald Trump believes income inequality is not a major concern that requires government action.",
    "gunControl": "Donald Trump supports protecting the Second Amendment rights with minimal restrictions.",
    "lgbtqRights": "Donald Trump respects individuals' choices but opposes government mandates on private businesses.",
    "foreignPolicy": "Donald Trump focuses on national interests with limited involvement in global conflicts.",
    "education": "Donald Trump supports increasing school choice and reducing government involvement in education.",
    "socialWelfare": "Donald Trump supports reducing the scope of social welfare and promoting work incentives."
  }
};

const Results = ({ score, reasons }) => (
  <main className="flex min-h-screen flex-col items-center justify-center p-8">
    <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8 dark:bg-gray-800">
      <h2 className="text-2xl font-semibold mb-4">Your Results</h2>
      <p className="mb-2">Alignment with Donald Trump: <strong>{score.trump}/10</strong></p>
      <p className="mb-2">Alignment with Kamala Harris: <strong>{score.harris}/10</strong></p>
      <p className="mb-4">Neutral Responses: <strong>{score.neutral}/10</strong></p>
      <h3 className="text-xl font-semibold mt-4">Reasons for Scores:</h3>
      <ul className="list-disc list-inside mt-2 space-y-2">
        {reasons.map((reason, index) => {
          const detailedReason = detailedReasons[reason.answer]?.[reason.topic] || "No detailed reason available.";
          return (
            <li key={index} className="leading-relaxed">
              <p>
                <strong>Question {index + 1}:</strong> {reason.question} You answered "<strong>{reason.answer}</strong>" ({reason.answerText}), which aligns with <strong>{reason.candidate}</strong> because {detailedReason}.
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  </main>
);

export default Results;
