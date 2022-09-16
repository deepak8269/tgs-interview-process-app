import { candidateList, interviewerList, technologyList,statusList } from "../../mocks/mockForInterview";

export default {
    isPrimaryButtonVisible: true,
  isSecondaryButtonVisible: false,
  primaryButtonText: "Submit",
  fields: [
    {
      id: "interviewerName",
      label: "Interviewer Name",
      type: "dropdown",
      allowNew: true,
      options: interviewerList
    },
    {
      id: "candidateName",
      label: "Candidate Name",
      type: "dropdown",
      allowNew: true,
      options: candidateList
    },
    {
      id: "dateOfInterview",
      label: "Date of Interview",
      type: "dateRange",
      allowNew: true,
    },
    {
        id: "role",
        label: "Role",
        type: "dropdown",
        allowNew: true,
        options:technologyList
    },
    {
        id: "status",
        label: "Status",
        type: "dropdown",
        allowNew: true,
        options:statusList
    },
    {
      id: "feedback",
      label: "Feedback",
      type: "string",
      allowNew: true,
    }
  ]
}