import React from "react";
import { connect } from "react-redux";
import * as feedbackActions from "../Actions/Feedback";
import PropTypes from "prop-types";
import RadioButton from "./Common/RadioButton";
import * as feedbackSelectors from "../Selectors/Feedback";
import { TextInput, TEXT_AREA } from "../Components/Common/TextInput";
import { WideButton } from "./Common/WideButton";

const EmailFormField = ({ visible, formValues, handleInputChange, errors }) => {
  if (!visible) {
    return null;
  }
  return <TextInput name="email" value={formValues.email} onChange={handleInputChange} required={false} placeholder="Email" error={errors.email} />;
};

const FeedbackForm = ({ toggledEnableEmailFormField, emailFormFieldEnabled, onChange, formValues, onSubmit, errors, disableSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextInput name={"comment"} value={formValues.comment} onChange={onChange} required={true} placeholder="Comment" error={errors.comment} inputType={TEXT_AREA} />
        <div className="my-3 flex">
          <RadioButton checked={emailFormFieldEnabled} onClick={toggledEnableEmailFormField} />
          <p className="info-minor ml-1">Receive email confirmation?</p>
        </div>
        <EmailFormField visible={emailFormFieldEnabled} formValues={formValues} handleInputChange={onChange} errors={errors} />
        <div className="mt-6">
          <WideButton buttonText="Submit" type="submit" disabled={disableSubmit} />
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
