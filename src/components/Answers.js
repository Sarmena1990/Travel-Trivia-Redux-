import React from 'react';
import { connect } from 'react-redux';
import { selectedAnswer } from '../actions';

class Answers extends React.Component {
  renderList() {
    const { question } = this.props;

    if (question) {
      console.log(question);
      const answers = this.shuffle(question);

      return (
        <div>
          <div className="container-ui ui vertical buttons twenty wide tablet five wide computer column">
            <button
              className="ui button"
              value={answers[answers.length - 1]}
              onClick={(e) =>
                this.props.selectedAnswer(
                  question.correct_answer,
                  e.target.value,
                  this.props.correctAnswer,
                  this.props.incorrectAnswer
                )
              }
            >
              {answers.pop()}
            </button>
            <div className="ui hidden divider"></div>
            <button
              className="ui button"
              value={answers[answers.length - 1]}
              onClick={(e) =>
                this.props.selectedAnswer(
                  question.correct_answer,
                  e.target.value,
                  this.props.correctAnswer,
                  this.props.incorrectAnswer
                )
              }
            >
              {answers.pop()}
            </button>
            <div className="ui hidden divider"></div>
            <button
              className="ui button"
              value={answers[answers.length - 1]}
              onClick={(e) =>
                this.props.selectedAnswer(
                  question.correct_answer,
                  e.target.value,
                  this.props.correctAnswer,
                  this.props.incorrectAnswer
                )
              }
            >
              {answers.pop()}
            </button>
            <div className="ui hidden divider"></div>
            <button
              className="ui button"
              value={answers[answers.length - 1]}
              onClick={(e) =>
                this.props.selectedAnswer(
                  question.correct_answer,
                  e.target.value,
                  this.props.correctAnswer,
                  this.props.incorrectAnswer
                )
              }
            >
              {answers.pop()}
            </button>
          </div>
          <div className="ui hidden divider"></div>
          <div
            className="ui labeled button ui left floated button"
            tabIndex="0"
          >
            <div className="ui red button">
              <i className="thumbs down icon"></i> Incorrect
            </div>
            <a className="ui basic red left pointing label">
              {' '}
              {this.props.incorrectAnswer}
            </a>
          </div>
          <div
            className="ui labeled button ui right floated button"
            tabIndex="0"
          >
            <div className="ui blue button">
              <i className="thumbs up icon"></i> correct
            </div>
            <a className="ui basic left pointing blue label">
              {this.props.correctAnswer}
            </a>
          </div>

          <button className="ui right floated button ui inverted primary button">
            {this.props.correctAnswer}
          </button>
          <button className="ui left floated button ui inverted red button">
            {this.props.incorrectAnswer}
          </button>
        </div>
      );
    }
  }
  printAnswers = (answers) => {};
  shuffle = (question) => {
    var arrAnswers = [];
    question.incorrect_answers.forEach((element) => {
      arrAnswers.push(element);
    });
    arrAnswers.push(question.correct_answer);

    arrAnswers.sort(function (a, b) {
      return 0.5 - Math.random();
    });

    return arrAnswers;
  };

  render() {
    return (
      <div className="ui container">
        <h1>{this.renderList()}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  ownProps.state();
  const { answer } = state;
  console.log(answer);
  var answerO = answer[0];
  if (answer.length === 2) answer.pop();
  if (answerO) {
    return { correctAnswer: answerO.cC, incorrectAnswer: answerO.incC };
  }

  return { correctAnswer: 0, incorrectAnswer: 0 };
};

export default connect(mapStateToProps, { selectedAnswer })(Answers);
