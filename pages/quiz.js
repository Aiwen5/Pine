import { useState } from 'react';
import Head from 'next/head';
import Q1 from '../components/Q1';
import Q2 from '../components/Q2';
import Q3 from '../components/Q3';
import Q4 from '../components/Q4';
import Result from '../components/Result';

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionId, selectedOption) => {
    setAnswers(prev => ({ ...prev, [questionId]: selectedOption }));
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);
  const restartQuiz = () => {
    setCurrentStep(1);
    setAnswers({});
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Q1 selectedOption={answers.Q1} onAnswerChange={handleAnswerChange} onNext={nextStep} />;
      case 2:
        return <Q2 selectedOption={answers.Q2} onAnswerChange={handleAnswerChange} onNext={nextStep} onPrev={prevStep} />;
      case 3:
        return <Q3 selectedOption={answers.Q3} onAnswerChange={handleAnswerChange} onNext={nextStep} onPrev={prevStep} />;
      case 4:
        return <Q4 selectedOption={answers.Q4} onAnswerChange={handleAnswerChange} onNext={nextStep} onPrev={prevStep} />;
      case 5:
        return <Result answers={answers} onRestart={restartQuiz} />;
      default:
        return <div>You're not supposed to be here!</div>;
    }
  };

  return(
    <>
      <Head>
        <title>Pine — Quiz</title>
        <meta name="description" content="Your personalized quiz." />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <div>{renderStep()}</div>;
    </>
  )
}
