//shows users their inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, field => {
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>
                    {formValues[field.name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>Back</button>
            <button className="green white-text btn-flat right" onClick={() => submitSurvey(formValues, history)}>
                Submit
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state){
    //console.log(state);
    return {
        formValues: state.form.surveyForm.values 
    };
}

//here I will use withRouter to connect this component to ReactRouter and get access to the history object passing it to the action creator
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));