import { technologyList } from "../../mocks/mockForInterview";

export default {
  isPrimaryButtonVisible: true,
  isSecondaryButtonVisible: false,
  primaryButtonText: "Submit",
  fields: [
    {
      id: "name",
      label: "Name",
      type: "string",
      allowNew: true
    },
    {
      id: "mobile",
      label: "Mobile",
      type: "phone",
      allowNew: true
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      allowNew: true
    },
    {
      id: "technology",
      label: "Technology",
      type: "dropdown",
      allowNew: true,
      options: technologyList
    },
    {
      id: "experience",
      label: "Experience",
      type: "number",
      allowNew: true
    }
  ]
};
