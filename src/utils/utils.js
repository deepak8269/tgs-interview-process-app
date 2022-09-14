import { NavConfigs } from "./navigationConfigs";

export const formatDate = (date) => {
  if (typeof date === "string") return date;
  if (date.month && date.day && date.year) {
    return `${date.month}/${date.day}/${date.year}`;
  }
  return null;
};

export const getObjectShapeDate = (date) => {
  // to check date variable is type of Date or Not
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1; // months from 1-12
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  return {
    day,
    month,
    year
  };
};

export const calculateYearOfExperiences = (experience) => {
  const diffTime = experience.reduce(
    (ac, data) =>
      ac +
      (data.ends_at && data.starts_at
        ? Math.ceil(
            Math.abs(new Date(formatDate(data.ends_at)) - new Date(formatDate(data.starts_at))) /
              (1000 * 60 * 60 * 24)
          )
        : 0),
    0
  );
  return (diffTime / (30 * 12)).toFixed(2);
};

export const getFormattedDateForResume = (date) => {
  // const [month, , year] = date.split('/');
  const formatedDate = date.month ? formatDate(date) : date;
  const [month, , year] = formatedDate.split("/");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];
  return date ? `${months[month - 1]}-${year}` : "";
};

export const getCompanyLogo = (companyUrl) => `https://logo.clearbit.com/${companyUrl}`;

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const getTempIcon = (type) => {
  if (type) {
    const navData = NavConfigs.filter((nav) => nav.id.trim() === type.trim());
    if (navData.length > 0) {
      return navData[0].icon;
    }
  }
  return null;
};

export const numberQueryParamValuePicker = (queryParam) => {
  const str = queryParam.split("=")[1];
  const num = parseInt(str, 10);
  return num;
};

export const generateNumberArray = (length) => Array.from({ length }, (_, i) => i + 1);

export const sanitizeArray = (array, predicateFieldName = "name") =>
  Array.isArray(array) ? array.filter((item) => item[predicateFieldName]) : [];

export const yearsOfExperiences = (count, increment) =>
  Array(count)
    .fill(0)
    .map((_, i) => increment * (i + 1));

export const findDiffInNewObj = (oldObj, newObj) => {
  const diff = {};
  Object.keys(oldObj).forEach((k) => {
    if (JSON.stringify(oldObj[k]) !== JSON.stringify(newObj[k])) diff[k] = newObj[k];
  });
  return diff;
};
