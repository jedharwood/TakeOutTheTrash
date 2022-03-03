import React, { useState } from "react";
import { connect } from "react-redux";
import * as feedbackActions from "../Actions/Feedback";
import PropTypes from "prop-types";
import RadioButton from "./Common/RadioButton";
import * as feedbackSelectors from "../Selectors/Feedback";

const FeedbackForm = ({
  postFeedbackForm,
  feedbackFormValuesUpdated,
  toggledEnableEmailFormField,
  emailFormFieldEnabled,
}) => {
  let [formValues, setFormValues] = useState({ comment: "", email: "" });

  const handleInputChange = (target) => {
    const updatedFormValues = {
      ...formValues,
      [target.name]: target.value,
    };
    setFormValues(updatedFormValues);
    feedbackFormValuesUpdated(updatedFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postFeedbackForm();
  };

  const EmailFormField = ({ visible }) => {
    if (!visible) {
      return null;
    }
    return (
      <div className="input-group">
        <input
          name="email"
          value={formValues.email}
          onChange={(e) => handleInputChange(e.target)}
          required={false}
          placeholder="Email"
        />
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            name="comment"
            value={formValues.comment}
            onChange={(e) => handleInputChange(e.target)}
            required={true}
            placeholder="Comment"
          />
        </div>
        {/* style input-group */}
        {/* validation client side*/}
        {/* handle server side errors */}
        <RadioButton
          checked={emailFormFieldEnabled}
          onClick={toggledEnableEmailFormField}
        />
        <EmailFormField visible={emailFormFieldEnabled} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

FeedbackForm.propTypes = {
  feedbackFormValuesUpdated: PropTypes.func.isRequired,
  postFeedbackForm: PropTypes.func.isRequired,
  toggledEnableEmailFormField: PropTypes.func.isRequired,
  emailFormFieldEnabled: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  emailFormFieldEnabled: feedbackSelectors.emailFormFieldEnabled(state),
});

const mapDispatchToProps = {
  feedbackFormValuesUpdated: feedbackActions.feedbackFormValuesUpdated,
  postFeedbackForm: feedbackActions.postFeedbackForm,
  toggledEnableEmailFormField: feedbackActions.enableEmailFormFieldToggled,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
