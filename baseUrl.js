const url = process.env.BaseUrl || "https://emmtect.vercel.app"; // this is for production and live

// const url = process.env.BaseUrl || "http://localhost:5000"; // this is for production and live


module.exports = {
  baseUrl: `${url}/api/v1/`,
};
