import React, { useState, useRef } from 'react';

export default function App() {
	const questions = [
		{
			

			questionText: 'Why is it that fossil shells of animals that once lived in the sea can be found many miles from the coast of the ocean?',
			answerOptions: [
				{ answerText: 'Animals moved the fossils when they moved to warmer areas', isCorrect: false },
				{ answerText: 'The sea level lowered from where it was.', isCorrect: true },
				{ answerText: 'Strong winds moved the fossils away from the waste.', isCorrect: false },
				{ answerText: 'The sea animals began living on land', isCorrect: false },
			],
		},
		{
			
		
			questionText: 'Which one of the following options CANNOT be found in a rainforest?',
			answerOptions: [
				{ answerText: 'Tall trees', isCorrect: false },
				{ answerText: 'Monkeys', isCorrect: false },
				{ answerText: 'Protozoans', isCorrect: false },
				{ answerText: 'Very tall grasses', isCorrect: true },
			],
		},
		{
			
			questionText: 'When the stored in a pyramid decreases from the producers to the consumers, it is called __.',
			answerOptions: [
				{ answerText: 'pyramid of numbers', isCorrect: false },
				{ answerText: 'pyramid of mass', isCorrect: false },
				{ answerText: 'pyramid', isCorrect: true },
				{ answerText: 'potential of the pyramid', isCorrect: false },
			],
		},
		{
			

			questionText: 'Nigeria is divided into two major natural habitats namely __ and ___.?',
			answerOptions: [
				{ answerText: 'tropical Sahara, tropical savanna', isCorrect: false },
				{ answerText: 'tropical rainforest, tropical Sahara', isCorrect: false },
				{ answerText: 'tropical mangrove forest, tropical savanna', isCorrect: false },
				{ answerText: 'tropical rainforest, tropical savanna', isCorrect: true },
			],
		},
		{
			

			questionText: 'The organ which produces the female sex-cell in a mammal is the .......',
			answerOptions: [
				{ answerText: 'bladder', isCorrect: false },
				{ answerText: 'testis', isCorrect: false },
				{ answerText: 'ovary', isCorrect: true },
				{ answerText: 'vagina', isCorrect: false },
			],
		},
		{
			

			questionText: 'A coronavirus victim can be isolated for ....... days?',
			answerOptions: [
				{ answerText: '10', isCorrect: false },
				{ answerText: '14', isCorrect: true },
				{ answerText: '12', isCorrect: false },
				{ answerText: '18', isCorrect: false },
			],
		},
		{
			

			questionText: 'The process by which living organisms produce their kind is called',
			answerOptions: [
				{ answerText: 'reproduction', isCorrect: true },
				{ answerText: 'digestion', isCorrect: false },
				{ answerText: 'menstruation', isCorrect: false },
				{ answerText: 'production', isCorrect: false },
			],
		},
		{
			

			questionText: 'what is the force of gravity acting on an object?',
			answerOptions: [
				{ answerText: 'acceleration', isCorrect: false },
				{ answerText: 'weight', isCorrect: false },
				{ answerText: 'mass', isCorrect: false },
				{ answerText: 'gravity', isCorrect: true },
			],
		},
		{
			

			questionText: 'When solids change into liquid at appropriate temperature the process is called',
			answerOptions: [
				{ answerText: 'evaporation', isCorrect: false },
				{ answerText: 'melting', isCorrect: true },
				{ answerText: 'boiling', isCorrect: false },
				{ answerText: 'diffusion', isCorrect: false },
			],
		},
		{
			

			questionText: 'HIV/AIDS can be transmitted through?',
			answerOptions: [
				{ answerText: 'unsafe sex', isCorrect: true },
				{ answerText: 'handshake', isCorrect: false },
				{ answerText: 'insect bite', isCorrect: false },
				{ answerText: 'sharing bed', isCorrect: false },
			],
		},
		{
			

			questionText: 'Which of the following instruments is used for measuring the temperature?',
			answerOptions: [
				{ answerText: 'barometer', isCorrect: false },
				{ answerText: 'hydrometer', isCorrect: false },
				{ answerText: 'thermometer', isCorrect: true },
				{ answerText: 'hygrometer', isCorrect: false },
			],
		},
		{
			

			questionText: 'Drugs can be obtained from the following EXCEPT',
			answerOptions: [
				{ answerText: 'medicinal', isCorrect: false },
				{ answerText: 'plant barks', isCorrect: false },
				{ answerText: 'food materials', isCorrect: true },
				{ answerText: 'shrub and roots', isCorrect: false },
			],
		},
		{
			

			questionText: 'In clinical thermometer , the mercury can be replaced by?',
			answerOptions: [
				{ answerText: 'water', isCorrect: false },
				{ answerText: 'acid', isCorrect: false },
				{ answerText: 'alchoho', isCorrect: true },
				{ answerText: 'glucose', isCorrect: false },
			],
		},
		{
			

			questionText: 'what is the quantity of matter in a body',
			answerOptions: [
				{ answerText: 'mass', isCorrect: true },
				{ answerText: 'maths', isCorrect: false },
				{ answerText: 'volume', isCorrect: false },
				{ answerText: 'space', isCorrect: false },
			],
		},
		{
			

			questionText: 'All are examples of habitat EXCEPT',
			answerOptions: [
				{ answerText: 'aquatic', isCorrect: false },
				{ answerText: 'arboreal', isCorrect: false },
				{ answerText: 'terrestrial', isCorrect: false },
				{ answerText: 'ecology', isCorrect: true },
			],
		},
		{
			

			questionText: 'The instrument used in measuring the atmospheric pressure is?',
			answerOptions: [
				{ answerText: 'barometer', isCorrect: true },
				{ answerText: 'hydrometer', isCorrect: false },
				{ answerText: 'thermometer', isCorrect: false },
				{ answerText: 'potentiometer', isCorrect: false },
			],
		}
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const buttonRef = useRef(null)
	const [correct, setCorrect] = useState("");
	const [editAnswer, setEditAnswer] = useState("")
	const correctEmoji = 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/FFFFFF/external-thumbs-up-achievements-flaticons-lineal-color-flat-icons-2.png'
	const wrongEmoji = 'https://img.icons8.com/dusk/64/000000/thumbs-down.png'

	const handleAnswerOptionClick = (isCorrect, option) => {

		const findCorrOption = option.find(opt => opt.isCorrect === true);
		const getText = findCorrOption.answerText
		setEditAnswer(getText)
		console.log("getText", getText)

		isCorrect ? setCorrect("Correct!") : setCorrect("Wrong answer")

		//isCorrect === false ? console.log(isCorrect)
		setTimeout(() => {
			
			if (isCorrect) {
				setScore(score + 1);
				// buttonRef.current.style.backgroundColor ="green"

			}
		
			const nextQuestion = currentQuestion + 1;
			if (nextQuestion < questions.length) {
				setCurrentQuestion(nextQuestion);
			} else {
				setShowScore(true);
			}
			setCorrect("")
		}, 2000);
		
		
	};
	return (
		<div className='app'>
			<div style={{display: correct ? 'flex' : 'none'}} className="isCorrect">
				<h3 style={{color: correct === 'Correct!' ? 'green' : 'red' }}>{correct}</h3>
			<img src={correct === 'Correct!' ? correctEmoji : wrongEmoji} alt="praises"/>

			<p style={{display: correct === 'Correct!' ? "none" : "block", color: 'white'}}> Correct answer: {editAnswer}</p>
			</div>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}

					<button onClick={()=>window.location.reload()} className="restart">Restart</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						
						{questions[currentQuestion].answerOptions.map((answerOption, index) => {
							const quesArr = questions[currentQuestion].answerOptions
								
								return <button ref={buttonRef} key={index}
								onClick={() => handleAnswerOptionClick(answerOption.isCorrect, quesArr)}
								
								>
								{answerOption.answerText}
								</button>
							
						
							})}
					</div>
				</>
			)}
		</div>
	);
}
