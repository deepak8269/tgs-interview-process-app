import { technologyList } from "../../mocks/mockForInterview";

export default {
  isPrimaryButtonVisible: true,
  isSecondaryButtonVisible: false,
  primaryButtonText: "Submit",
  fields: [
    {
      id: "school",
      label: "School",
      type: "dropdown",
      allowNew: true,
      options: technologyList
    }
  ]
};
