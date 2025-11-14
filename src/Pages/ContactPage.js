import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";
import emailjs from "@emailjs/browser";
import "../app.scss";

function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;

  const form = useRef();

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errorColor, setErrorColor] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!values.name || !values.email || !values.subject || !values.message) {
      setErrorMsg("All fields are required");
      // setErrorColor(true);
    } else
      emailjs
        .sendForm(
          "service_30hqb0w",
          "template_6tvrp1j",
          form.current,
          "zWzC46TdsJhioSrIX"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccessMsg("Message sent successful");
          },
          (error) => {
            console.log(error.text);
            setErrorMsg("An error occured");
          }
        );

    e.target.reset();
  };

  useEffect(() => {
    if (successMsg) {
      setTimeout(() => {
        setSuccessMsg("");
      }, 3000);
    }
  }, [successMsg]);

  useEffect(() => {
    if (errorMsg) {
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    }
  }, [errorMsg]);
  useEffect(() => {
    if (errorColor) {
      setTimeout(() => {
        setErrorColor(false);
      }, 3000);
    }
  }, [errorColor]);

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form" ref={form} onSubmit={sendEmail}>
              <div className="form-field">
                <label htmlFor="name" className={errorColor ? "err" : ""}>
                  Enter your name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email" className={errorColor ? "err" : ""}>
                  Enter your email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="subject" className={errorColor ? "err" : ""}>
                  Enter your subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="text-area" className={errorColor ? "err" : ""}>
                  Enter your Message*
                </label>
                <textarea
                  name="message"
                  id="textarea"
                  cols="10"
                  rows="5"
                  value={values.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-field f-button">
                <button className="snd-mail" type="submit">
                  SEND MAIL
                </button>
                <span className="green-txt"> {successMsg} </span>
                <span className="red-txt"> {errorMsg} </span>
              </div>
              <div></div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Phone"}
              icon={phone}
              cont1={"+2349033098293"}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              cont1={"ohagamichael@gmail.com"}
            />
            <ContactItem
              title={"Address"}
              icon={location}
              cont1={"Owerri, Nigeria"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        // width: 100%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;
