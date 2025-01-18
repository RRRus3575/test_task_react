import { useState } from "react";
import { useDispatch } from "react-redux";
import css from "./FormDetails.module.css";
import Button from "../Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormDetails() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  });

  // Обработчик изменений в полях формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(saveFormData(formData));

    setFormData({
      name: "",
      email: "",
      bookingDate: "",
      comment: "",
    });
  };

  return (
    <section className={css.section}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.formcontainer}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            required
            className={css.input}
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            className={css.input}
            value={formData.email}
            onChange={handleChange}
          />
          <DatePicker
            selected={
              formData.bookingDate ? new Date(formData.bookingDate) : null
            }
            onChange={(date) =>
              setFormData((prevData) => ({
                ...prevData,
                bookingDate: date ? date.toISOString().split("T")[0] : "",
              }))
            }
            placeholderText="Booking date*"
            className={css.input}
          />
          <textarea
            name="comment"
            className={css.textarea}
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
        </div>

        <Button type="submit">Send</Button>
      </form>
    </section>
  );
}

export default FormDetails;
