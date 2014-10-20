class QuestionsController < ApplicationController

  def index
    @questions = Quiz.find(params[:quiz_id]).questions
    render json: @questions.to_json(include: :possible_answers)
  end

  def show
    @question = Question.find_by(params[:id])
    render json: @question.to_json(include: :possible_answers)
  end

end
