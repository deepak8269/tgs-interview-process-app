import * as yup from "yup";

export const schoolsList = [
  {
    id: 1,
    label: "Indian Institute of Technology (Banaras Hindu University), Varanasi",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQHyenVUtyQrLg/company-logo_100_100/0/1519882359806?e=1650499200&v=beta&t=eE4KJosICPt6L2cvqeAKwy4Z9SQGxmR_JpQpHS5CH4w"
  },
  {
    id: 2,
    label: "CFA Institute",
    image:
      "https://media-exp1.licdn.com/dms/image/C510BAQGhKpDZa2hDDQ/company-logo_100_100/0/1519883593759?e=1650499200&v=beta&t=h4dZ6F6XLkvjxbtRb5_Q03qcPNJtr_W-Dnvrl9t-keQ"
  },
  {
    id: 3,
    label: "Delhi Public School - B.S.City",
    image: ""
  }
];

export const degreesList = [
  {
    id: 1,
    label: "Bachelor of Technology - BTech",
    image: ""
  },
  {
    id: 2,
    label: "Level 1",
    image: ""
  },
  {
    id: 3,
    label: "Degree 1",
    image: ""
  }
];

export const fieldOfStudyList = [
  {
    id: 1,
    label: "Electrical",
    image: ""
  },
  {
    id: 2,
    label: "Finance",
    image: ""
  },
  {
    id: 3,
    label: "field Of Study 1",
    image: ""
  }
];

export const educationConfig = {
  isPrimaryButtonVisible: true,
  isSecondaryButtonVisible: true,
  primaryButtonText: "Save & Next",
  secondaryButtonText: "Back",
  fields: [
    {
      id: "school",
      label: "School",
      type: "autoComplete",
      allowNew: true,
      options: schoolsList
    },
    {
      id: "degree_name",
      label: "Degree Name",
      type: "autoComplete",
      allowNew: true,
      options: degreesList
    },
    {
      id: "field_of_study",
      label: "Field of Study",
      type: "autoComplete",
      allowNew: true,
      options: fieldOfStudyList
    },
    {
      id: "starts_at",
      label: "Start Date",
      type: "dateRange"
    },
    {
      id: "ends_at",
      label: "End Date",
      type: "dateRange"
    }
  ],
  validationSchema: {
    school: yup.object().required("School name is Required").nullable(),
    degree_name: yup.object().required("Degree Name is Required").nullable(),
    field_of_study: yup.object().required("Field of Study is Required").nullable(),
    starts_at: yup.string().required("Start Date is Required").nullable(),
    ends_at: yup.string().required("End Date is Required").nullable()
  }
};
