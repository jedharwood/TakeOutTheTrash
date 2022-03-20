import React, { useState } from "react";
import { connect } from "react-redux";
import * as feedbackActions from "../Actions/Feedback";
import PropTypes from "prop-types";
import RadioButton from "./Common/RadioButton";
import * as feedbackSelectors from "../Selectors/Feedback";
import { TextInput, TEXT_AREA } from "../Components/Common/TextInput";
import * as citiesSelectors from "../Selectors/Cities";
import { isNilOrEmpty } from "../Utilities/RamdaUtilities";

const COMMENT_MAX = 150;

export const preventFormSubmission = (formValues, city, errors) => {
  return isNilOrEmpty(formValues.comment) ||
    !Object.keys(city).length ||
    Object.keys(errors).length
    ? true
    : false;
};

const EmailFormField = ({ visible, formValues, handleInputChange }) => {
  if (!visible) {
    return null;
  }
  return (
    <TextInput
      name="email"
      value={formValues.email}
      onChange={(e) => handleInputChange(e.target)}
      required={false}
      placeholder="Email"
    />
  );
};

const FeedbackForm = ({
  postFeedbackForm,
  feedbackFormValuesUpdated,
  toggledEnableEmailFormField,
  emailFormFieldEnabled,
  city,
}) => {
  let [formValues, setFormValues] = useState({ comment: "", email: "" });
  let [errors, setErrors] = useState({});

  const formIsValid = () => {
    const _errors = {};

    if (formValues.comment.length >= COMMENT_MAX)
      _errors.comment = `Maximum ${COMMENT_MAX} characters`;
    //regex validation for email address
    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  };

  const handleInputChange = (target) => {
    const updatedFormValues = {
      ...formValues,
      [target.name]: target.value,
    };
    setFormValues(updatedFormValues);
    feedbackFormValuesUpdated(updatedFormValues);
    if (!formIsValid()) return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postFeedbackForm();
  };

  const disableSubmitButton = preventFormSubmission(formValues, city, errors);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput
          name={"comment"}
          value={formValues.comment}
          onChange={(e) => handleInputChange(e.target)}
          required={true}
          placeholder="Comment"
          error={errors.comment}
          inputType={TEXT_AREA}
        />
        {/* validation client side*/}
        {/* handle server side errors */}
        <div className="info-minor">
          <RadioButton
            checked={emailFormFieldEnabled}
            onClick={toggledEnableEmailFormField}
          />
          Receive email confirmation?
        </div>
        <EmailFormField
          visible={emailFormFieldEnabled}
          formValues={formValues}
          handleInputChange={handleInputChange}
        />
        <div className="feedback-submit-button">
          <button
            type="submit"
            className="submit-button"
            disabled={disableSubmitButton}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

FeedbackForm.propTypes = {
  feedbackFormValuesUpdated: PropTypes.func.isRequired,
  postFeedbackForm: PropTypes.func.isRequired,
  toggledEnableEmailFormField: PropTypes.func.isRequired,
  emailFormFieldEnabled: PropTypes.bool,
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rules: PropTypes.arrayOf(PropTypes.object),
  }),
};

const mapStateToProps = (state) => ({
  emailFormFieldEnabled: feedbackSelectors.emailFormFieldEnabled(state),
  city: citiesSelectors.getCity(state),
});

const mapDispatchToProps = {
  feedbackFormValuesUpdated: feedbackActions.feedbackFormValuesUpdated,
  postFeedbackForm: feedbackActions.postFeedbackForm,
  toggledEnableEmailFormField: feedbackActions.enableEmailFormFieldToggled,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
