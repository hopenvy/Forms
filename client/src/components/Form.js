import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';

import { useFormInputValidation } from "react-form-input-validation";

import * as formService from '../services/formService';

const Form = () => {
  const [fields, errors, form] = useFormInputValidation({
    name: "",
    email_address: "",
    age: "",
    password: "",
    tel: "",
    terms: [],
    time: "",
    date: "",
    datetime_local: "",
    month: "",
    week: "",
    gender: "",
    search: "",
    message: "",
  }, {
    name: "required",
    email_address: "required|email",
    age: "required",
    password: "required",
    tel: "required",
    terms: "required|array",
    time: "required",
    date: "required|date",
    datetime_local: "required",
    month: "required",
    week: "required",
    gender: "required",
    search: "required",
    message: "required",
  });
  const onSubmit = (e) => {
    e.preventDefault();

    const formsData = Object.fromEntries(new FormData(e.target));

    console.log(formsData);
    formhandler(formsData)
  }
  const [forms, setForms] = useState({});

  const navigate = useNavigate();

  const formhandler = (formData) => {
    setForms(state => [
      ...state,
      {
        ...formData,
        _id: uniqid(),
      },
    ]);
    navigate('/');
    console.log(forms)
  };

  useEffect(() => {
    if (form.isValidForm) {
      formService.getAll()
        .then(res => res.json())
        .then(res => {
          setForms(res);
        })
    }

  }, [form.isValidForm]);





  return <div style={{ maxWidth: "600px", margin: "0 auto" }}>
    <h3>React Form Input Validation</h3>
    <form
      className="myForm"
      noValidate
      autoComplete="off"
      onSubmit={form.handleSubmit}
    >
      <p>
        <label>
          Name
          <input
            type="text"
            name="name"
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
            value={fields.name}
          />
        </label>
        <label className="error">
          {errors.name
            ? errors.name
            : ""}
        </label>
      </p>
      <p>
        <label>
          Email
          <input
            type="email"
            name="email_address"
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
            value={fields.email_address}
          />
        </label>
        <label className="error">
          {errors.email_address
            ? errors.email_address
            : ""}
        </label>
      </p>

      <p>
        <label>
          Type in your age
          <input
            type="number"
            name="age"
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
            value={fields.age}
          />
        </label>
        <label className="error">
          {errors.age
            ? errors.age
            : ""}
        </label>
      </p>

      <p>
        <label>
          Password
          <input
            type="password"
            name="password"
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
            value={fields.password}
          />
        </label>
        <label className="error">
          {errors.password
            ? errors.password
            : ""}
        </label>
      </p>

      <p>
        <label>
          Telephone
          <input
            type="tel"
            name="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
            value={fields.tel}
          />
        </label>
        <label className="error">
          {errors.tel
            ? errors.tel
            : ""}
        </label>
      </p>

      <p>
        <label>
          Time
          <input
            type="time"
            name="time"
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
            value={fields.time}
          />
        </label>
        <label className="error">
          {errors.time
            ? errors.time
            : ""}
        </label>
      </p>

      <p>
        <label>
          Date
          <input
            type="date"
            name="date"
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
            value={fields.date}
          />
        </label>
        <label className="error">
          {errors.date
            ? errors.date
            : ""}
        </label>
      </p>

      <p>
        <label>
          Datetime-local
          <input
            type="datetime-local"
            name="datetime_local"
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
            value={fields.datetime_local}
          />
        </label>
        <label className="error">
          {errors.datetime_local
            ? errors.datetime_local
            : ""}
        </label>
      </p>

      <p>
        <label>
          Month
          <input
            type="month"
            name="month"
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
            value={fields.month}
          />
        </label>
        <label className="error">
          {errors.month
            ? errors.month
            : ""}
        </label>
      </p>

      <p>
        <label>
          Week
          <input
            type="week"
            name="week"
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
            value={fields.week}
          />
        </label>
        <label className="error">
          {errors.week
            ? errors.week
            : ""}
        </label>
      </p>

      <p>
        <label>
          Import file
          <input
            type="file"
            name="file"
            accept="image/png, image/jpeg"
          />
        </label>
      </p>

      <p>
        <label>
          Search
          <input
            type="search"
            name="search"
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
            value={fields.search}
          />
        </label>
        <label className="error">
          {errors.search
            ? errors.search
            : ""}
        </label>
      </p>

      <p>
        <label>Write something</label>
        <br />
        <textarea
          name="message"
          onBlur={form.handleBlurEvent}
          onChange={form.handleChangeEvent}
          value={fields.message}
        >
        </textarea>

        <label className="error">
          {errors.message
            ? errors.message
            : ""}
        </label>
      </p>



      <p >
        <label>
          Gender<br />
          <label htmlFor="male" className="container1">Male
            <input
              type="radio"
              name="gender"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value="male"
            />
          </label>
          <label htmlFor="female" className="container1">Female
            <input
              type="radio"
              name="gender"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value="female"
            />
          </label>
        </label>
        <label className="error">
          {errors.gender
            ? errors.gender
            : ""}
        </label>
      </p>

      <p>
        <label className="container">
          I agree with terms and conditions
          <input
            type="checkbox"
            name="terms"
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
            value="terms"
          />
          <span className="checkmark"></span>
        </label>
        <label className="error">
          {errors.terms
            ? errors.terms
            : ""}
        </label>
      </p>


      <p>
        <button type="submit" onSubmit={onSubmit}>Submit</button>
      </p>
    </form>
  </div >
}

export default Form;
