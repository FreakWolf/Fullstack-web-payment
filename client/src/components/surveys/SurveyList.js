import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.Surveys.reverse().map((survey) => {
      return (
        <div className="card blue-grey darken-1" key={survey.id}>
          <div className="card-content text-white">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
            <div className="card-action">
              <a>Yes: {survey.yes}</a>
              <a>No: {survey.no}</a>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { Surveys: surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
