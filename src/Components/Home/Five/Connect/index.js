import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button, Input, InputLabel, TextField } from "@mui/material";
import axios from "axios";
import Toast from "./Toast";

function Connect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);

    const data = {
      service_id: process.env.REACT_APP_SERVICE_ID,
      template_id: process.env.REACT_APP_TEMPLATE_ID,
      user_id: process.env.REACT_APP_PUBLIC_KEY,
      template_params: {
        from_name: name,
        to_name: "Amaan",
        from_email: email,
        message,
      },
    };

    async function sendEmail() {
      try {
        await axios
          .post("https://api.emailjs.com/api/v1.0/email/send", data)
          .then(() => {
            setLoading(false);
          });
        reset();
        setToastType("success");
      } catch (e) {
        console.log("error : ", e);
        setLoading(false);
        setToastType("error");
      }
    }
    sendEmail();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>Send me a message!</div>

      <div className={styles.sub_header}>
        Got a question or proposal, or just want to say hi? Go ahead.
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.upper_controls}>
          <div className={styles.name}>
            <InputLabel htmlFor="name" sx={{ mb: 2 }} className={styles.label}>
              Your Name
            </InputLabel>
            <Input
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              variant="outlined"
              color="primary"
              sx={{ mb: 6 }}
              value={name}
              placeholder="Enter your name"
            />
          </div>

          <div className={styles.email}>
            <InputLabel htmlFor="email" sx={{ mb: 2 }} className={styles.label}>
              Your Email
            </InputLabel>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              variant="outlined"
              color="primary"
              type="email"
              sx={{ mb: 6, minWidth: "240px" }}
              value={email}
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className={styles.message}>
          <InputLabel htmlFor="message" sx={{ mb: 2 }} className={styles.label}>
            Your Message
          </InputLabel>
          <TextField
            onChange={(e) => setMessage(e.target.value)}
            required
            fullWidth
            variant="standard"
            color="primary"
            sx={{ mb: 6 }}
            multiline
            rows={2}
            value={message}
            placeholder="Hi, we have openings for an amazing frontend developers. 
            How soon can you hop on to discuss this?"
          />
        </div>

        <div className={styles.btn_container}>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            className={styles.submit_btn}
            disabled={loading}
          >
            Shoot
            <svg
              width="72"
              height="22"
              viewBox="0 0 72 22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#4831d4"
                stroke-width="2"
                stroke-miterlimit="0"
                d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
              ></path>
            </svg>
          </Button>
        </div>
      </form>

      {toastType ? (
        <Toast type={toastType} setToastType={setToastType} />
      ) : null}
    </div>
  );
}

export default Connect;
