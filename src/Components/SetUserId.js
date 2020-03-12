import React from 'react';
import axios from 'axios';

import { Formik, Form, Field } from 'formik';

let initialValues = {
  id: ''
};

const SetUserId = ({ setUser }) => {
  const submitId = values => {
    axios
      .post('http://localhost:5000/set_id', values)
      .then(data => {
        setUser(data.data.id);
      })
      .catch(error => {
        debugger;
      });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={submitId}
        component={IdForm}
      />
    </div>
  );
};

const IdForm = () => {
  return (
    <Form>
      <Field name="id" type="text" placeholder="Set your user id" />
      <button type="submit">submit</button>
    </Form>
  );
};

export default SetUserId;
