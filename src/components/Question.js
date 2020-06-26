import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Answers from './Answers';
// import { selectedAnswer } from '../actions';

class Question extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList() {
    const { questions } = this.props;
    const { question } = this.props;
    console.log(questions);
    if (!questions) return <div>loading</div>;
    if (question) {
      console.log(question);

      return (
        <div>
          <button className="ui right floated button">
            {question.category}
          </button>
          <button className="ui left floated button">
            {question.difficulty}
          </button>
          <div className="ui hidden divider"></div>
          <div className="ui hidden divider"></div>
          <div className="ui hidden divider"></div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {question.question}
          </div>
          <div className="ui hidden divider"></div>

          <Answers question={question} state={this.stateChange}></Answers>
        </div>
      );
    }
  }
  stateChange = () => {
    const { state } = this.props;
    console.log(state);
    state.posts.shift();
    console.log(state);
    if (state.posts.length === 0) this.props.fetchPosts();
  };

  render() {
    return (
      <div className="ui container">
        <h1>{this.renderList()}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { questions: state.posts, question: state.posts[0], state: state };
};

export default connect(mapStateToProps, { fetchPosts })(Question);
