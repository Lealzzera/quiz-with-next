"use client";

import { Question } from "@/types/Question";
import React, { useState } from "react";

type QuestionItemProps = {
	question: Question;
	count: number;
	onAnswer: (answer: number) => void;
};

const QuestionItem = ({ question, count, onAnswer }: QuestionItemProps) => {
	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
	const checkQuestion = (key: number) => {
		if (selectedAnswer === null) {
			setSelectedAnswer(key);

      setTimeout(() => {
        onAnswer(key);
        setSelectedAnswer(null)
      }, 1300)
		}
	};
	return (
		<div>
			<div className='text-3xl font-bold mb-5'>
				{count}. {question.question}
			</div>
			<div>
				{question.options.map((item, key) => (
					<div
						onClick={() => checkQuestion(key)}
						key={key}
						className={`'border px-3 py-2 rounded-md text-lg mb-4  bg-blue-100 rounded border-blue-300'
          ${
						selectedAnswer !== null
							? "cursor-auto hover:opacity-100"
							: "cursor-pointer hover:opacity-60"
					}
          ${
            selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-400 border-green-600'
          }
          ${
            selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-400 border-red-600'
          }
          `}
					>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};

export default QuestionItem;
