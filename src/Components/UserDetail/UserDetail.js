import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function UserDetail() {
  const [userDetail, setUserDetail] = useState({});
  const { id } = useParams();

  const getUserDetails = async () => {
    const { data } = await axios.get(`https://dummyapi.io/data/v1/user/${id}`, {
      headers: {
        "app-id": "61421a5a6a9b4d3ad64b8cb1",
      },
    });
    console.log(data);
    setUserDetail(data);
  };

  useEffect(() => {
    getUserDetails();
  });

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div>
              <p>{userDetail.id}</p>
              <img
                className="img-fluid"
                src={userDetail.picture}
                alt={userDetail.firstName}
              />
            </div>
          </div>
          <div className="col-md-4">
            <section>
              <div>
                <p>
                  {" "}
                  {userDetail.title} {userDetail.firstName}{" "}
                </p>
                <p>
                  {" "}
                  <strong>Gender</strong> {userDetail.gender}
                </p>
                <p>Date Of Birth {userDetail.dateOfBirth}</p>
                <p>Register {userDetail.registerDate}</p>
              </div>
              <div className="mt-3">
                <p>Email {userDetail.email}</p>
                <p>Phone Number {userDetail.phone}</p>
              </div>
            </section>
          </div>
          <div className="col-md-4">
            <section>
              <section>
                <h3>Address</h3>
                <p>
                  <strong>State</strong>
                  {userDetail?.location?.state}
                </p>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
