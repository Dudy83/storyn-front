import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const instance = axios.create();

// config header ================================================================================================
instance.interceptors.request.use(
  (config: any) => {
    const token = window.localStorage.getItem("tkn");
    const language = window.localStorage.getItem("i18n") || "en";

    if (token && !config.url.endsWith("refresh"))
      config.headers["Authorization"] = `Bearer ${token}`;
    if (language) config.headers["Accept-Language"] = `${language}`;

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);


// config interceptors ================================================================================================
instance.interceptors.response.use(undefined, (err) => {
  if (err.message === "Network Error" && !err.response) {
    toast.error(`Network Error!`);
  }

  const { status, data } = err.response || {};

  if (status === 404) toast.error("Error Unknow endpoint..");

  if (status === 401 || status === 400) {
    // window.localStorage.removeItem("tkn");
    // window.location.href = "/";
    // toast.info("Connexion expirée");
    return Promise.reject(err);
  }

  if (status === 500) toast.error(`500 ${data.errors}`);

  throw err.response;
});


//=====================================================================================================================
// Build API ================================================================================================

const Menu = {
 // signin: (data) => instance.post("http://localhost:3000/pmeAPI/auth/login", data),
  findById: (id: any) => instance.get(`menu/${id}`),
};

const Story = {
  // signin: (data) => instance.post("http://localhost:3000/pmeAPI/auth/login", data),
  //  findById: (id: any) => instance.get(`menu/${id}`),
 };

//Build export var
const routes = {
  Menu,
  Story
};

export default routes;