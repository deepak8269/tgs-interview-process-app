import React, { Fragment, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateEducationData } from "../../store/actions/login";
import Form from "../../components/formHandler/Form";
import ScrollableList from "../../components/ScrollableList";
import { educationConfig, schoolsList, degreesList, fieldOfStudyList } from "./educationData";
import {
  findDiffInNewObj,
  formatDate,
  getObjectShapeDate,
  numberQueryParamValuePicker
} from "../../utils/utils";
import routes from "../../router/Urls";
import Animate from "../../components/Animated";
import { useNavigateUtil } from "../../utils/useNavigateUtil";
import { AWS_EDUCATION_API_URL } from "../../utils/apiConstants";
import { commonFetch } from "../../apis/api";

const QUERY_PARAM = "course";

const getDefaultValues = (value, id) => {
  if (id === "school") {
    const result = schoolsList.filter((school) => school.label === value);
    if (result.length) {
      return result[0];
    }
    return "";
  }
  if (id === "degree_name") {
    const result = degreesList.filter((degree) => degree.label === value);
    if (result.length) {
      return result[0];
    }
    return "";
  }
  if (id === "field_of_study") {
    const result = fieldOfStudyList.filter((field) => field.label === value);
    if (result.length) {
      return result[0];
    }
    return "";
  }
  return "";
};

const getSelectedFormFields = (education) => [
  {
    id: "school",
    label: "School",
    type: "autoComplete",
    allowNew: true,
    options: schoolsList,
    defaultValue: getDefaultValues(education?.school, "school")
  },
  {
    id: "degree_name",
    label: "Degree Name",
    type: "autoComplete",
    options: degreesList,
    defaultValue: getDefaultValues(education?.degree_name, "degree_name")
  },
  {
    id: "field_of_study",
    label: "Field of Study",
    type: "autoComplete",
    options: fieldOfStudyList,
    defaultValue: getDefaultValues(education?.field_of_study, "field_of_study")
  },
  {
    id: "starts_at",
    label: "Start Date",
    type: "dateRange",
    defaultValue: education?.starts_at ? formatDate(education.starts_at) : ""
  },
  {
    id: "ends_at",
    label: "End Date",
    type: "dateRange",
    defaultValue: education?.ends_at ? formatDate(education.ends_at) : ""
  }
];

const createScrollableConfig = (educationData = []) => {
  if (educationData.length) {
    return educationData.map((item) => ({
      label: item.school,
      icon: item.logo_url
    }));
  }
  return [];
};

const styles = {
  formContainer: {
    mt: (theme) => theme.spacing(40)
  },
  form: {
    minHeight: "calc(100vh - 294px)"
  }
};

const Education = () => {
  const userProfile = useSelector(({ login }) => login.userProfile);
  const dispatch = useDispatch();
  const navigate = useNavigateUtil();
  const { search } = useLocation();
  const [educationData, setEducationData] = useState(userProfile.education || []);
  const [selectedForm, setSelectedForm] = useState(null);
  const [loader, setLoader] = useState(true);
  const [showAddEducationForm, setShowAddEducationForm] = useState(false);
  const [scrollableListConfig, setScrollableListConfig] = useState(
    createScrollableConfig(educationData)
  );

  const [addFormData, setAddFormData] = useState(null);

  const [formData, setFormData] = useState({
    ...educationConfig,
    onSecondaryButtonClick: () => {
      navigate(routes.USER.SKILLS.path);
    }
  });

  useEffect(() => {
    let currentSelectedForm = 0;
    if (search.includes(QUERY_PARAM)) currentSelectedForm = numberQueryParamValuePicker(search) - 1;
    setSelectedForm(currentSelectedForm);
    setFormData({
      ...formData,
      fields: getSelectedFormFields(
        educationData.length ? educationData[currentSelectedForm] : educationConfig.fields
      )
    });
  }, []);

  useEffect(() => {
    if (selectedForm !== null) {
      setFormData({
        ...formData,
        fields: getSelectedFormFields(
          educationData.length ? educationData[selectedForm] : educationConfig.fields
        ),
        onSecondaryButtonClick: () => {
          if (selectedForm > 0) {
            setSelectedForm(selectedForm - 1);
            setLoader(true);
          } else {
            navigate(routes.USER.SKILLS.path);
          }
        }
      });
      navigate({
        search: `?${QUERY_PARAM}=${selectedForm + 1}`
      });
    }
    setLoader(false);
  }, [selectedForm]);

  const onEducationSelect = (selected) => {
    setSelectedForm(selected);
    setLoader(true);
  };

  if (!userProfile.first_name) {
    return null;
  }

  const onAddFormClick = () => {
    setLoader(true);
    setAddFormData({
      ...educationConfig,
      onSecondaryButtonClick: () => {
        onEducationSelect(0);
        setShowAddEducationForm(false);
      },
      isSecondaryButtonVisible: true,
      primaryButtonText: "Save",
      secondaryButtonText: "Cancel",
      fields: getSelectedFormFields(educationConfig.fields)
    });
    onEducationSelect(false);
    setShowAddEducationForm(true);
  };

  // eslint-disable-next-line no-unused-vars
  const saveData = (payload, isNew = false) => {
    const method = isNew ? "POST" : "PUT";
    const url = AWS_EDUCATION_API_URL;
    const headers = {
      "Content-Type": "application/json"
    };

    setLoader(true);
    commonFetch(method, url, payload, headers)
      .then((res) => {
        if (res?.error) {
          console.error(res.error);
          // TODO: Trigger error toaster
        } else if (isNew) {
          const val = res?.data?.educations || [];
          if (val.length) {
            const filteredVal = val.filter(
              (i) =>
                i.school === payload?.education_data[0]?.school &&
                i.degree_name === payload?.education_data[0]?.degree_name
            );
            const newVal = [
              ...educationData,
              {
                ...payload?.education_data[0],
                education_id: filteredVal.education_id
              }
            ];
            setEducationData(newVal);
            dispatch(updateEducationData(newVal));
            onEducationSelect(educationData.length);
            setScrollableListConfig(createScrollableConfig(newVal));
          }
        }
      })
      .catch((err) => {
        console.error(err);
        // TODO: Trigger error toaster
      })
      .finally(() => setLoader(false));
  };

  const onSubmit = (data) => {
    const newData = data;

    Object.keys(newData).map((key) => {
      if (typeof newData[key] === "object") {
        newData[key] = data[key].label;
      } else if (key === "starts_at" || key === "ends_at") {
        newData[key] = getObjectShapeDate(data[key]);
      }
      return newData[key];
    });
    const oldData = educationData[selectedForm];
    const newEducation = educationData.map((item, index) =>
      index === selectedForm ? { ...item, ...newData } : item
    );
    setEducationData(newEducation);
    const updatedData = newEducation[selectedForm];
    const diffObj = findDiffInNewObj(oldData, updatedData);
    if (Object.keys(diffObj).length > 0) {
      const payload = {
        user_id: userProfile.id,
        education_data: [
          {
            education_id: updatedData.education_id || "",
            ...diffObj
          }
        ]
      };
      saveData(payload);
    }
    dispatch(updateEducationData(newEducation));
    if (selectedForm !== educationData.length - 1) {
      setLoader(true);
      setSelectedForm(selectedForm + 1);
    } else navigate(routes.USER.CONGRATULATION.path);
  };

  const addNewEducation = (data) => {
    const newData = data;

    Object.keys(newData).map((key) => {
      if (typeof newData[key] === "object") {
        newData[key] = data[key].label;
      } else if (key === "starts_at" || key === "ends_at") {
        newData[key] = getObjectShapeDate(data[key]);
      }
      return newData[key];
    });
    const payload = {
      user_id: userProfile.id,
      education_data: [{ ...newData }]
    };
    saveData(payload, true);
    setShowAddEducationForm(false);
  };

  if (selectedForm === null) return null;

  return (
    <Fragment>
      <ScrollableList
        type="education"
        data={scrollableListConfig}
        onChange={onEducationSelect}
        selected={selectedForm}
        onAddFormClick={onAddFormClick}
        disabled={showAddEducationForm}
      />

      {loader ? (
        ""
      ) : (
        <Animate animateXAxis>
          <Grid sx={styles.formContainer}>
            {showAddEducationForm ? (
              <Form
                onSubmit={addNewEducation}
                formData={addFormData}
                formGridStyles={styles.form}
              />
            ) : (
              <Form onSubmit={onSubmit} formData={formData} formGridStyles={styles.form} />
              /**
            focus on only line 311 and pass a json similar to educationData file for feedback only */
            )}
          </Grid>
        </Animate>
      )}
    </Fragment>
  );
};

export default Education;
