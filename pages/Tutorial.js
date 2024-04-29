import { useState } from 'react';
import T1 from '@/components/T1/T1';
import T2 from '@/components/T2/T2';
import T3 from '@/components/T3/T3';
import T4 from '@/components/T4/T4';
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
        return <T1 selectedOption={answers.T1} onAnswerChange={handleAnswerChange} onNext={nextStep} />;
      case 2:
        return <T2 selectedOption={answers.T2} onAnswerChange={handleAnswerChange} onNext={nextStep} onPrev={prevStep} />;
      case 3:
        return <T3 selectedOption={answers.T3} onAnswerChange={handleAnswerChange} onNext={nextStep} onPrev={prevStep} />;
      case 4:
        return <T4 selectedOption={answers.T4} onAnswerChange={handleAnswerChange} onNext={nextStep} onPrev={prevStep} />;
      case 5:
        return <Result answers={answers} onRestart={restartQuiz} />;
      default:
        return <div>You're not supposed to be here!</div>;
    }
  };

  return <div>{renderStep()}</div>;
}
