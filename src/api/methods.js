// import { auth } from "../firebase";
import { setAxiosConfig } from "./AxiosConfig";
const axios = require("axios").default;
//GET METHOD
export const makeGETAPICall = async (url, additionalHeaders) => {
  try {
    const idToken =
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjVkMzQwZGRiYzeyJhbGciOiJSUzI1NiIsImtpZCI6IjVkMzQwZGRiYzNjNWJhY2M0Y2VlMWZiOWQxNmU5ODM3ZWM2MTYzZWIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoic29mdHdhcmUgZXVybyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BSXRidm1uc05iQjQyRVVCUEszVHp4T0Zab0lUZmxDcUdqR2l6dkduVlZhZD1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9vbmVjcmlja2V0LTRmNDMyIiwiYXVkIjoib25lY3JpY2tldC00ZjQzMiIsImF1dGhfdGltZSI6MTY2NjEwMDYyOCwidXNlcl9pZCI6ImRqM0lhdVJGM2pYekpCQ1lOTHU3TGhhakZPWTIiLCJzdWIiOiJkajNJYXVSRjNqWHpKQkNZTkx1N0xoYWpGT1kyIiwiaWF0IjoxNjY2MTAwNjMzLCJleHAiOjE2NjYxMDQyMzMsImVtYWlsIjoic29mdHdhcmVldXJvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTA5NTg2NjI5OTY4MzM3NjM4NzE2Il0sImVtYWlsIjpbInNvZnR3YXJlZXVyb0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.q2k-rMKLcHmnSXptr35LSbIwizWlh00YUd7hqAqmGdVwOUAkkzfNepvpDVzjavR_bErkMmpo_gyUJjWGJcdqeRgvYV82z31VHLQQERFnRjnipgnQsvirFFoQVHhMsdZrBNOg5ixBgYi7PwjmGa5VqaeTeEO-LbtSPQRf9sFWm2H3fIZEK5qQRI76QbaK15inlz2Lf3w4BmeQssh3Uu1RvAcSyL1X0_TXm_aJ3LKwCCG4QZW9kbAgw4Q2lL12EkT0fBi2ZS316n2BbE7KdvE_Ysi8y7h5Db8WbwYQ-PCJWLL7cWIjAnt0mMXq78pevZTsdaQx9chhJrAfQ0T3kNiyDANjNWJhY2M0Y2VlMWZiOWQxNmU5ODM3ZWM2MTYzZWIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoic29mdHdhcmUgZXVybyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BSXRidm1uc05iQjQyRVVCUEszVHp4T0Zab0lUZmxDcUdqR2l6dkduVlZhZD1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9vbmVjcmlja2V0LTRmNDMyIiwiYXVkIjoib25lY3JpY2tldC00ZjQzMiIsImF1dGhfdGltZSI6MTY2NjA5NTEzNywidXNlcl9pZCI6ImRqM0lhdVJGM2pYekpCQ1lOTHU3TGhhakZPWTIiLCJzdWIiOiJkajNJYXVSRjNqWHpKQkNZTkx1N0xoYWpGT1kyIiwiaWF0IjoxNjY2MDk5OTM4LCJleHAiOjE2NjYxMDM1MzgsImVtYWlsIjoic29mdHdhcmVldXJvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTA5NTg2NjI5OTY4MzM3NjM4NzE2Il0sImVtYWlsIjpbInNvZnR3YXJlZXVyb0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.Mbk3604ZeT_2USlbo4zSncy_37PllQaEqOoL2eJnEp4dCU2iYtgWDaTTChsq-7LwaX2fwsZV-au9r_QMXmbDCeoYhwevH_A4ftEgDWXbWISSI7K8QDe4pw_O4u8YCi_oIBK2jHmSyY54cxVE4JUnTYO_CTT50H_SOZmQ41oeSxIDjLjhXTWdhJ83xYO7lOz1zek5bESaZ6xNa8wssR3dSUi31khrgPCUGuz6MCzUTckAExMSJk891-Y_aQDl2N9XDTI5vyLpmmcjaobSiRzTB3YX3Zo5p4dYaIU0YShHjLAvZsRzFnNIA5ly0OraNp4fFtp59sz3tpBGqmY9rsp-CQ";
    console.log(idToken);
    if (idToken) {
      const apiResponse = await axios.get(
        url,
        setAxiosConfig(
          idToken,
          additionalHeaders ? additionalHeaders : undefined
        )
      );
      return apiResponse;
    } else {
      throw new Error("Error occurred, please login again to continue");
    }
  } catch (error) {
    console.log("makeGETAPICall newapicall", error, url);
    throw error;
  }
};

//PUT METHOD

// export const makePUTAPICall = async (url, body) => {
//   try {
//     const idToken = await auth.currentUser.getIdToken(true);
//     if (idToken) {
//       const apiResponse = await axios.put(url, body, setAxiosConfig(idToken));
//       return apiResponse;
//     } else {
//       throw new Error("Error occurred, please login again to continue");
//     }
//   } catch (error) {
//     throw error;
//   }
// };

// POST METHOD

// export const makePOSTAPICall = async (url, body) => {
//   try {
//     const idToken = await auth.currentUser.getIdToken(true);
//     var apiResponse = {};
//     if (idToken) {
//       apiResponse = await axios.post(url, body, setAxiosConfig(idToken));
//       return apiResponse;
//     } else {
//       throw new Error("Error occurred, please login again to continue");
//     }
//   } catch (error) {
//     apiResponse.status = 500;
//     return apiResponse;
//   }
// };
