import {
  requiredFieldErrorMessageFunction,
  vF_regDescription,
  vF_regName,
  vF_regNumberCountPlus,
} from "./Validate_GenericRegexps";

export default function ValidateEditEquipment(values) {
  const errors = {};
  const { name, priority, description } = values;

  if (!name) {
    errors.name = requiredFieldErrorMessageFunction("Name");
  } else if (name.length < 2 || name.length > 255) {
    errors.name = "Name must be 2-255 characters long";
  } else if (!vF_regName.regExp.test(name)) {
    errors.name = vF_regName.errorMessageFunction("Name");
  }

  if (!priority) {
    errors.priority = requiredFieldErrorMessageFunction("Priority");
  } else if (priority < 0) {
    errors.priority = vF_regNumberCountPlus.errorMessageFunction("Priority");
  }

  if (!vF_regDescription.regExp.test(description)) {
    errors.description = vF_regDescription.errorMessageFunction("Description");
  }

  return errors;
}
