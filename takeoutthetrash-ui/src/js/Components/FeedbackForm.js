import React from "react";
import { connect } from "react-redux";
import * as feedbackActions from "../Actions/Feedback";
import PropTypes from "prop-types";
import RadioButton from "./Common/RadioButton";
import * as feedbackSelectors from "../Selectors/Feedback";
import { TextInput, TEXT_AREA } from "../Components/Common/TextInput";
import * as citiesSelectors from "../Selectors/Cities";
import { isNilOrEmpty } from "../Utilities/RamdaUtilities";

export const preventFormSubmission = (formValues, city, errors) => {
  return isNilOrEmpty(formValues.comment) ||
    !Object.keys(city).length ||
    Object.keys(errors).length
    ? true
    : false;
};

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
  city,
  onChange,
  formValues,
  onSubmit,
  errors,
}) => {
  //const disableSubmitButton = preventFormSubmission(formValues, city, errors);

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
            //disabled={disableSubmitButton}
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
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rules: PropTypes.arrayOf(PropTypes.object),
  }),
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
};

const mapStateToProps = (state) => ({
  emailFormFieldEnabled: feedbackSelectors.emailFormFieldEnabled(state),
  city: citiesSelectors.getCity(state),
});

const mapDispatchToProps = {
  toggledEnableEmailFormField: feedbackActions.enableEmailFormFieldToggled,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
