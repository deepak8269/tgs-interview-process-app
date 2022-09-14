// external imports
import { S3, config } from "aws-sdk";

// constants
const AWS_ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY;
const AWS_SECRET_KEY = process.env.REACT_APP_AWS_SECRET_KEY;
const BUCKET_NAME = process.env.REACT_APP_BUCKET_NAME;
const REGION = "us-east-1";
const EXPIRATION_TIME = 604800;
const FOLDER_NAME = "webcontent/img"; // TODO: Change the folder name

// Bucket policy generator - https://awspolicygen.s3.amazonaws.com/policygen.html
// S3 Documentation - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html

// AWS Configuration
config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  region: REGION
});

// Getting S3 instance
const s3 = new S3({ useAccelerateEndpoint: true });

// Function helps to get / put a file with pre-signed url from the S3 Bucket
const getOrPutObject = (fileName, fileType, folderName, isUpload = false, file = null) => {
  // Params only used while uploading files
  const uploadParams = {
    Body: file,
    ContentType: fileType
  };

  // Base params
  const params = {
    Bucket: BUCKET_NAME,
    Expires: EXPIRATION_TIME,
    Key: `${folderName}/${fileName}`,
    ...(isUpload ? uploadParams : {})
  };

  // Returns the promise that will be resolved with a pre-signed url
  return s3.getSignedUrlPromise(isUpload ? "putObject" : "getObject", params);
};

// Function helps to upload a File to the S3 Bucket
const uploadFile = (file, fileName, fileType, folderName = FOLDER_NAME) => {
  // Upload params
  const params = {
    Body: file,
    Bucket: BUCKET_NAME,
    ContentType: fileType,
    Expires: EXPIRATION_TIME,
    Key: `${folderName}/${fileName}`
  };

  return new Promise((resolve, reject) => {
    // Function helps to upload a file to the S3 Bucket
    s3.putObject(params).send((err, url) => {
      if (err) reject(err);
      else resolve(url);
    });
  }).then(() =>
    // Fetching the pre-signed url of the uploaded file
    getOrPutObject(fileName, fileType, folderName)
      .then((url) => url)
      .catch((err) => console.error("Error >>", err))
  );
};

// Function helps to retrieve the list of files from the S3 Bucket
const getListObjects = (otherParams = {}) => {
  const params = {
    Bucket: BUCKET_NAME,
    ...otherParams
  };
  return new Promise((resolve, reject) => {
    // Function helps to fetch all (or limited) files from the S3 Bucket
    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        console.error("Error >>", err, err.stack);
        reject(err);
      } else {
        const bucketContents = data.Contents;
        const listOfObjects = {};
        return new Promise((_resolve, _reject) => {
          bucketContents.map(({ Size, Key }, index) => {
            if (Size > 0) {
              const urlParams = { Bucket: BUCKET_NAME, Key };
              // Fetching the pre-signed url of the each file from the list of retrieved files
              s3.getSignedUrlPromise("getObject", urlParams)
                .then((url) => {
                  listOfObjects[Key] = url;
                  if (bucketContents.length === index + 1) _resolve(listOfObjects);
                })
                .catch((_err) => _reject(_err));
            }
            return null;
          });
        }).then((listOfObjs) => resolve(listOfObjs));
      }
      return null;
    });
  });
};

export { getOrPutObject, getListObjects, uploadFile };
