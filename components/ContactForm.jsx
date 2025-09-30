"use client";
import React, { useState } from 'react';
import Title from '@/components/layout/ui/Title';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const schema = Yup.object().shape({
  fullname: Yup.string()
    .required("Full name is required.")
    .min(3, "Full name must be at least 3 characters."),
  phone: Yup.string()
    .required("Phone number is required.")
    .min(10, "Phone number must be at least 10 characters."),
  email: Yup.string().required("Email is required.").email("Email is invalid."),
  message: Yup.string().required("Message is required."),
  file: Yup.mixed()
    .nullable()
    .test("fileSize", "File size must be less than 5MB", value => {
      return !value || (value && value.size <= 5 * 1024 * 1024);
    })
    .test("fileType", "Unsupported file format. Allowed: PDF, JPG, PNG", value => {
      return (
        !value ||
        (value && ["application/pdf", "image/jpeg", "image/png"].includes(value.type))
      );
    }),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      phone: "",
      email: "",
      message: "",
      file: null,
    },
    validationSchema: schema,
    onSubmit: async ({ fullname, phone, email, message, file }) => {
      setIsLoading(true);
      try {
        const payload = { fullname, phone, email, message };

        if (file) {
          const base64File = await toBase64(file);
          payload.file = base64File;
        }

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        setIsLoading(false);
        if (data.status === 200) {
          showPopup(200);
          formik.resetForm();
        } else {
          showPopup(400);
        }
      } catch (error) {
        console.error('Error sending data:', error);
        setIsLoading(false);
        showPopup(400);
      }
    },
  });

  const { errors, touched, values, handleChange, handleSubmit, setFieldValue } = formik;

  const hidePopup = () => {
    document.body.classList.remove('no-scroll');
    setStatus(null);
    setShowModal(false);
  };

  const showPopup = (status) => {
    document.body.classList.add('no-scroll');
    setStatus(status);
    setShowModal(true);
  };

  return (
    <section className="container mx-auto text-black m:px-6 md:px-8" id='contactForm'>
      <Title addClass="text-[40px] pt-[80px] text-center mb-10">Contact Us</Title>
      <div className="flex justify-between flex-wrap-reverse gap-10 mt-5 mb-12 ">
        <form className="lg:flex-1 w-full max-w-xl mx-auto" onSubmit={handleSubmit} method='post'>
          <div className="space-y-4">
            <div>
              <label htmlFor="fullname" className='label'>Full Name</label>
              <input
                className={`form-control ${touched.fullname && errors.fullname ? "border-red-500" : "border-primary"}`}
                type="text"
                name="fullname"
                placeholder="Enter your full name"
                value={values.fullname}
                onChange={handleChange}
                id="fullname"
              />
              {errors.fullname && touched.fullname && <span className='input-error'>{errors.fullname}</span>}
            </div>

            <div>
              <label htmlFor="phone" className='label'>Phone Number</label>
              <input
                className={`form-control ${touched.phone && errors.phone ? "border-red-500" : "border-primary"}`}
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={values.phone}
                onChange={handleChange}
                id="phone"
              />
              {errors.phone && touched.phone && <span className='input-error'>{errors.phone}</span>}
            </div>

            <div>
              <label htmlFor="email" className='label'>Email Address</label>
              <input
                className={`form-control ${touched.email && errors.email ? "border-red-500" : "border-primary"}`}
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={values.email}
                onChange={handleChange}
                id="email"
              />
              {errors.email && touched.email && <span className='input-error'>{errors.email}</span>}
            </div>

            <div>
              <label htmlFor="message" className='label'>Message</label>
              <textarea
                className={`form-control h-52 ${touched.message && errors.message ? "border-red-500" : "border-primary"}`}
                name="message"
                placeholder="Write your message here..."
                value={values.message}
                onChange={handleChange}
                id="message"
              />
              {errors.message && touched.message && <span className='input-error'>{errors.message}</span>}
            </div>

          <div>
  <label htmlFor="file" className="label">Attach File (PDF, JPG, PNG)</label>

  <div className="flex items-center gap-3">
    <label
      htmlFor="file"
      className="bg-gray-800 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-900"
    >
      Choose File
    </label>
    <span className="text-sm text-gray-600">
      {values.file ? values.file.name : "No file selected"}
    </span>
  </div>

  <input
    type="file"
    id="file"
    name="file"
    className="hidden"
    onChange={(event) => {
      setFieldValue("file", event.currentTarget.files[0]);
    }}
  />

  {errors.file && touched.file && (
    <span className="input-error">{errors.file}</span>
  )}
</div>

          </div>

          <button className="overflow-hidden rounded-full btn w-32 h-12 bg-secondary-150 text-white relative group mt-9">
            SEND
          </button>
        </form>
      </div>

      {isLoading && (
        <div className="backdrop-brightness-50 flex items-center justify-center fixed top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.3)] z-50">
          <div role="status">
            <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin fill-gray-800" viewBox="0 0 100 101" fill="none">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591..." fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038..." fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      <div id="popup-container" onClick={hidePopup} className={`${showModal ? "flex" : "hidden"} backdrop-brightness-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-screen`}>
        <div className="relative p-4 w-full max-w-lg max-h-full">
          <div className="relative p-4 text-center bg-white rounded-lg shadow">
            <div className="flex items-center justify-end">
              <button onClick={hidePopup} type="button" className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/></svg>
              </button>
            </div>
            {status === 200 ? (
              <>
                <div className="w-12 h-12 rounded-full bg-green-100 p-2 flex items-center justify-center mx-auto mb-3.5">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1..." clipRule="evenodd" />
                  </svg>
                </div>
                <p className="mb-4 text-lg font-semibold text-gray-900">Your message has been submitted successfully.</p>
              </>
            ) : (
              <>
                <div className="w-12 h-12 rounded-full bg-red-100 p-2 flex items-center justify-center mx-auto mb-3.5">
                  <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/></svg>
                </div>
                <p className="mb-4 text-lg font-semibold text-gray-900">Something went wrong. Please try again later.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
