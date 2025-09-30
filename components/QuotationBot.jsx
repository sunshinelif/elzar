"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const QuotationBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });
  const [fileUrl, setFileUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleNext = () => setStep(step + 1);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Dosya boyutu en fazla 5MB olabilir.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "elzar");

    setUploading(true);

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dypxjkgd8/auto/upload", // Cloud name buraya
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setFileUrl(data.secure_url);
      setUploading(false);
    } catch (error) {
      console.error("No file uploaded", error);
      setUploading(false);
      alert("No file uploaded");
    }
  };

  const sendEmail = () => {
    if (uploading) {
      alert("Please wait until the file upload is complete.");
      return;
    }

    emailjs
      .send(
        "service_9cd2509", // EmailJS Service ID
        "template_7xadanl", // Template ID
        {
          ...form,
          file: fileUrl || "Dosya yüklenmedi",
        },
        "GPZjutzhD9df0z3Gs" // EmailJS Public Key
      )
      .then(() => {
        alert("Thank you! We will contact you as soon as possible 🚀");
        setIsOpen(false);
        setStep(0);
        setForm({
          name: "",
          email: "",
          phone: "",
          product: "",
          message: "",
        });
        setFileUrl("");
      })
      .catch((err) => {
        console.error("Email sending error:", err);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition"
        >
         🤖 Request for Quotation
        </button>
      ) : (
        <div className="bg-white w-80 p-4 rounded-xl shadow-xl border">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            🤖 Smart Quote Assistant
          </h3>

          {step === 0 && (
            <>
              <p className="mb-2">Hello! What's your name?</p>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  ✖ Close
                </button>
                <button
                  onClick={handleNext}
                  className="bg-gray-800  text-white px-4 py-2 rounded hover:bg-gray-900"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <p className="mb-2">Thanks {form.name}! Your email address?</p>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  ✖ Close
                </button>
                <button
                  onClick={handleNext}
                  className="bg-gray-800  text-white px-4 py-2 rounded hover:bg-gray-900"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <p className="mb-2">Your phone number:</p>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="+90 5xx xxx xx xx"
              />
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  ✖ Close
                </button>
                <button
                  onClick={handleNext}
                  className="bg-gray-800  text-white px-4 py-2 rounded hover:bg-gray-900"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <p className="mb-2">
                Which product or service are you interested in?
              </p>
              <input
                name="product"
                value={form.product}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-red-600 text-white px-4 py-2 rounded "
                >
                  ✖ Close
                </button>
                <button
                  onClick={handleNext}
                  className="bg-gray-800  text-white px-4 py-2 rounded hover:bg-gray-900"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <p className="mb-2">Any specific requirements or message?</p>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="w-full border p-2 rounded"
              />
              <div className="mt-4">
                <label className="block mb-1 text-sm text-gray-700">
                  (Optional) Upload a file (max 5MB):
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full border p-2 rounded text-sm"
                  accept=".pdf,.doc,.docx,.txt,.jpg,.png"
                />
                {uploading && <p className="text-sm text-blue-500 mt-1">Yükleniyor...</p>}
                {fileUrl && (
                  <p className="text-sm text-green-600 mt-1">
                    ✅ Dosya yüklendi!
                  </p>
                )}
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  ✖ Close
                </button>
                <button
                  onClick={sendEmail}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default QuotationBot;
