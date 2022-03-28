import React from "react";
import { connect } from "react-redux";
import * as feedbackActions from "../Actions/Feedback";
import PropTypes from "prop-types";
import RadioButton from "./Common/RadioButton";
import * as feedbackSelectors from "../Selectors/Feedback";
import { TextInput, TEXT_AREA } from "../Components/Common/TextInput";

const EmailFormField = ({ visible, formValues, handleInputChange, errors }) => {
  if (!visible) {
    return null;
  }
  return (
    <TextInput
      name="email"
      value={formValues.email}
      onChange={handleInputChange}
      required={false}
      placeholder="Email"
      error={errors.email}
    />
  );
};

const FeedbackForm = ({
  toggledEnableEmailFormField,
  emailFormFieldEnabled,
  onChange,
  formValues,
  onSubmit,
  errors,
  disableSubmit,
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextInput
          name={"comment"}
          value={formValues.comment}
          onChange={onChange}
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
          handleInputChange={onChange}
          errors={errors}
        />
        <div className="feedback-submit-button">
          <button
            type="submit"
            className="submit-button"
            disabled={disableSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

FeedbackForm.propTypes = {
  toggledEnableEmailFormField: PropTypes.func.isRequired,
  emailFormFieldEnabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    comment: PropTypes.string,
    email: PropTypes.string,
  }),
  errors: PropTypes.shape({
    comment: PropTypes.string,
    email: PropTypes.string,
  }),
  disableSubmit: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  emailFormFieldEnabled: feedbackSelectors.emailFormFieldEnabled(state),
});

const mapDispatchToProps = {
  toggledEnableEmailFormField: feedbackActions.enableEmailFormFieldToggled,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
