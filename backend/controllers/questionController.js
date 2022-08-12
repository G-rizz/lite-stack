//@desc     Get question
//@route    GET /api/question

const { text } = require("express")

//@access   Private
const fetchQuestion = (req,res) => {    
    res.status(200).json({message: `Fetch question ${req.params.id}`})
}

//@desc     Get questions
//@route    GET /api/question
//@access   Private
const fetchQuestions = (req,res) => {
    res.status(200).json({message: 'Fetch all questions'})
}

//@desc     Post question
//@route    POST /api/question
//@access   Private
const addQuestion = (req,res) => {
    res.status(200).json({message: `Add question ${req.params.id}`})
}

//@desc     Post all questions
//@route    POST /api/question
//@access   Private
const addQuestions = (req,res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add some info in the field')
    }

    res.status(200).json({ message: 'Add all questions' })
}


//@desc     Update question
//@route    PUT /api/question
//@access   Private
const updateQuestion = (req,res) => {
    res.status(200).json({message: `Update question ${req.params.id}`})
}

//@desc     Delete question
//@route    DELETE /api/question
//@access   Private
const deleteQuestion = (req,res) => {
    res.status(200).json({message: `Delete question ${req.params.id}`})
}

module.exports = {
    fetchQuestion,
    fetchQuestions,
    addQuestion,
    addQuestions,
    updateQuestion,
    deleteQuestion 
}