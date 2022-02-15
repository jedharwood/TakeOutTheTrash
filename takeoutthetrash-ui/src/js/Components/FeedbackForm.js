import React, { useState } from "react";
import { connect } from "react-redux";
import * as feedbackActions from "../Actions/Feedback";
import PropTypes from "prop-types";

const FeedbackForm = ({ postFeedbackForm, feedbackFormValuesUpdated }) => {
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            //type="comment"
            name="comment"
            //id="comment"
            value={formValues.comment}
            onChange={(e) => handleInputChange(e.target)}
            //title="Comment"
            required={true}
            placeholder="Comment"
          />
        </div>
        {/* style input-group */}
        {/* radio button to toggle hide email */}
        {/* validation client side*/}
        {/* handle server side errors */}
        <div className="input-group">
          <input
            //type="email"
            name="email"
            //id="email"
            value={formValues.email}
            onChange={(e) => handleInputChange(e.target)}
            //title="Email"
            required={false}
            placeholder="Email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

FeedbackForm.propTypes = {
  feedbackFormValuesUpdated: PropTypes.func.isRequired,
  postFeedbackForm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  feedbackFormValuesUpdated: feedbackActions.feedbackFormValuesUpdated,
  postFeedbackForm: feedbackActions.postFeedbackForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
