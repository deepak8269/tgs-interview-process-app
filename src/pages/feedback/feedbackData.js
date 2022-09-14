export const feedbackData = {
  isPrimaryButtonVisible: true,
  isSecondaryButtonVisible: false,
  onSecondaryButtonClick: () => {},
  onPrimaryButtonClick: () => {
    // TODO: Redirect to Next Form
  },
  primaryButtonText: "Save & Next",
  secondaryButtonText: "Back",
  fields: [
    {
      id: "first_name",
      label: "First Name",
      type: "string",
      defaultValue: "Ram"
    },
    {
      id: "last_name",
      label: "Last Name",
      type: "string",
      defaultValue: "Sharma"
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      defaultValue: "ram@f.com"
    },
    {
      id: "phone_number",
      label: "Phone Number",
      type: "phone"
    },
    {
      id: "summary",
      label: "Summary",
      type: "string"
    }
  ]
};
