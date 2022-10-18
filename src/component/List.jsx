import React from "react";
import {
  doc,
  getDocs,
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";

import { APIURLs } from "../api/ApiUrls";
import { makeGETAPICall } from "../api/methods";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase";
import { connectStorageEmulator } from "firebase/storage";

export default function List() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "sb"));
      onSnapshot(q, (querySnapshot) => {
        getAllSports()
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    };

    getData();
  }, []);

  return (
    <>
      {data.length &&
        data.map((e, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              width: "500px",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <div>
              {`${(index += 1)}`}. Name - {e.name}
            </div>
            <div>Singer - {e.singer}</div>
          </div>
        ))}
    </>
  );
}
export const getAllSports = async () => {
  var apiUrl = APIURLs.getAllSports;
  console.log(apiUrl);
  const apiResponse = await makeGETAPICall(apiUrl); //[{"Access-Control-Allow-Origin":"*"},{"Access-Control-Allow-Headers":"*"}]
  if (apiResponse.status === 200) {
    return apiResponse.data;
  } else {
    return null;
  }
};
