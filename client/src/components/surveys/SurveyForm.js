//shows the form in which the user adds their input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return (
                <Field key={name} component={SurveyField} type="text" label={label} name={name} />
            );
        });
    }
    
// Without lodash
// renderFields() {
//     return (
//         <div>
//             <Field
//                 label="Survey Title" 
//                 type="text" 
//                 name="title" 
//                 component={SurveyField} 
//             />
//             <Field
//                 label="Subject Line" 
//                 type="text" 
//                 name="subject" 
//                 component={SurveyField} 
//             />
//             <Field
//                 label="Email Body" 
//                 type="text" 
//                 name="body" 
//                 component={SurveyField} 
//             />
//             <Field
//                 label="Recipient List" 
//                 type="text" 
//                 name="emails" 
//                 component={SurveyField} 
//             />
//         </div>
//     );
// }

    render() {
        return (
            <div>
                {/* I don't invoke onSurveySubmit function so now I call it after the user has submitted the form */}
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    if(!values.title) {
        errors.title = 'You must provide a title';
    }
    if(!values.subject) {
        errors.subject = 'You must provide a subject';
    }
    if(!values.body) {
        errors.body = 'You must provide a body';
    }

    // _.each(formFields, ({ name }) => {
    //     if(!values[name]) {
    //         errors[name] = 'You must provide a value';
    //     }
    // });

    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);