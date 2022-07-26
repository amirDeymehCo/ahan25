// import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

let token,
  uploadHeader = { "Content-type": "multipart/form-data" },
  header = {};
const baseUrl = "https://metalbackend.ryt-service.ir";

/*<-----------AddHeder------->*/
export function AddHeader(key, value) {
  header[key] = value;
  uploadHeader[key] = value;
}
/*<-----------POST------->*/
export const Post = async (
  customUrl,
  data,
  then,
  isAuth = true,
  responseType = "json"
) => {
  if (isAuth) {
    await ApiRequestAuthorized(
      customUrl,
      "Post",
      data,
      null,
      responseType,
      then
    );
  } else {
    await ApiRequestUnauthorized(
      customUrl,
      "Post",
      data,
      null,
      responseType,
      then
    );
  }
};
/*<-----------GET------->*/
export const Get = async (
  customUrl,
  params,
  then,
  isAuth = true,
  responseType
) => {
  if (isAuth) {
    await ApiRequestAuthorized(
      customUrl,
      "GET",
      null,
      params,
      responseType,
      then
    );
  } else {
    // await ApiRequestUnauthorized(customUrl, 'GET', null, params, responseType, then)
  }
};
/*<-----------DELETE------->*/
export function Delete(
  customUrl,
  params,
  then,
  isAuth = true,
  responseType = "json"
) {
  if (isAuth) {
    ApiRequestAuthorized(customUrl, "Delete", null, params, responseType, then);
  } else {
    ApiRequestUnauthorized(
      customUrl,
      "Delete",
      null,
      params,
      responseType,
      then
    );
  }
}
/*<-----------Put------->*/
export function Put(
  customUrl,
  data,
  then,
  isAuth = true,
  responseType = "json"
) {
  if (isAuth) {
    ApiRequestAuthorized(customUrl, "PUT", data, null, responseType, then);
  } else {
    ApiRequestUnauthorized(customUrl, "PUT", data, null, responseType, then);
  }
}

export function Upload(
  customUrl,
  data,
  files,
  then,
  isAuth = true,
  responseType = "json"
) {
  // if ((!token || token === '')) {
  // window.location.href = '/login'
  // }
  let formData = new FormData();

  if (data != null) {
    Object.keys(data).map((d) => {
      formData.append(d, data[d]);
    });
  }

  files.map((item) => {
    formData.append("file", item);
  });
  var options = {
    method: "POST",
    url: baseUrl + customUrl,
    headers: uploadHeader,
    responseType: responseType,
    data: formData,
  };
  axios(options)
    .then((response) => responseFunction(response, then))
    .catch((error) => errorAuthorized(error, then));
}

/*------Unauthorized Request------*/
function ApiRequestUnauthorized(
  customUrl,
  method,
  data,
  params,
  responseType,
  then
) {
  var options = {
    method: method,
    url: baseUrl + customUrl,
    responseType: responseType,
    data: data,
    params: params,
  };
  axios(options)
    .then((response) => responseFunction(response, then))
    .catch((error) => errorUnauthorized(error, then));
}
/*------errorUnauthorized------*/

function errorUnauthorized(error, then) {
  // if (error.response) {
  //     if (error.response.status === 401) {
  //         toast.error("عدم دسترسی به سرور");
  //         localStorage.removeItem("authentication");
  //         window.location.href = '/login'
  //     } else if (error.response.status === 400) {
  //         toast.error((error.response.data && error.response.data.message) ? error.response.data.message : "داده ارسالی صحیح نمی باشد");
  //         then({ suucess: false });
  //     } else {
  //         toast.error("خطای برقراری ارتباط با سرور");
  //         then({ suucess: false });
  //     }
  // }
}

/*------Authorized Request------*/
async function ApiRequestAuthorized(
  customUrl,
  method,
  data,
  params,
  responseType,
  then
) {
  // if ((!token || token === '')) {
  //     window.location.href = '/login'
  // }

  !header.Authorization && AddHeader("Authorization", token);

  var options = {
    method: method,
    url: baseUrl + customUrl,
    headers: header,
    responseType: responseType,
    data: data,
    params: params,
  };
  await axios(options)
    .then((response) => responseFunction(response, then))
    .catch((error) => errorAuthorized(error, then));
}

function responseFunction(response, then) {
  if (response.status === 200) {
    if (response.config.responseType === "image/png") {
      then(response.request.responseURL);
    } else {
      then(response.data);
    }
  }
}

/*------errorAuthorized------*/
function errorAuthorized(error, then) {
  // toast.error(error.response.data.message);
  // if (error.response) {
  //     if (error.response.status === 401) {
  //         localStorage.removeItem("authentication");
  //         window.location.href = '/login'
  //     } else if (error.response.status === 400) {
  //         toast.error((error.response.data && error.response.data.message) ? error.response.data.message : "داده ارسالی صحیح نمی باشد");
  //         then({ success: false });
  //     } else {
  //         toast.error("خطای برقراری ارتباط با سرور");
  //         if (then) {
  //             then({ success: false });
  //         }
  //     }
  // }
}

/*<-----------SetToken------->*/
export function SetToken(tokenParam) {
  return new Promise((resolve, reject) => {
    // if ((!tokenParam || tokenParam === '')) {
    //     window.location.href = '/login'
    // }
    token = tokenParam;
    AddHeader("Authorization", tokenParam ? tokenParam : token);
    resolve(true);
  });
}
