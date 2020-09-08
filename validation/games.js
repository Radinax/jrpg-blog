const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.console = !isEmpty(data.console) ? data.console : "";

  // Remember Validator only take strings!
  if (Validator.isEmpty(data.name)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
