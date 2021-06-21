export default interface Question {
    category: string
    type: boolean
    difficulty: string
    correct_answer: boolean
    incorrect_answers: boolean[]
    question: string
}