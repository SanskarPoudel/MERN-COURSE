import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./RegistrationForm.css";
export default function RegistrationForm() {
  const { error } = useContext(AuthContext);
  return (
    <div>
      <section className="h-100 bg-dark">
        <div className="container py-2 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://wallpaper.dog/large/20492984.jpg"
                      alt="ntg"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                      }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h1 className="mb-5 text-uppercase">Registration form</h1>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="firstName"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="firstName">
                              First name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="lastName"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="lastName">
                              Last name
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="address"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="address">
                          Address
                        </label>
                      </div>
                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <h6 className="mb-0 me-4">Gender: </h6>
                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            defaultValue="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            Female
                          </label>
                        </div>
                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            defaultValue="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="maleGender"
                          >
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            defaultValue="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="otherGender"
                          >
                            Other
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <select className="select">
                            <option value={1}>State</option>
                            <option value={2}>Gandaki</option>
                            <option value={3}>Mahakali</option>
                            <option value={4}>Others</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-4">
                          <select className="select">
                            <option value={1}>City</option>
                            <option value={2}>Pokhara</option>
                            <option value={3}>Kathmandu</option>
                            <option value={4}>Others</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="date"
                          id="date"
                          className="form-control form-control-lg"
                          required
                        />
                        <label className="form-label" htmlFor="date">
                          DOB
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="email">
                          Email ID
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="confirmPassword"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="confirmPassword">
                          Confirm password
                        </label>
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light btn-lg">
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-lg ms-2"
                        >
                          Submit form
                        </button>
                      </div>
                      <hr className="pt-3 mt-4  "></hr>
                      <div className="h-100 d-flex align-items-center justify-content-center mt-3">
                        <h5>Already have an Account?</h5>
                      </div>
                      <div className="h-100 d-flex align-items-center justify-content-center mt-1">
                        <button type="button" className="btn btn-primary">
                          Log in
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
