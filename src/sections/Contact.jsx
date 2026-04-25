import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert.jsx";
import { Globe } from "../components/globe.jsx";
import MagicBento from "../components/MagicBento.jsx";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_2dyjf3g",
        "template_5n9qk5l",
        {
          from_name: formData.name,
          to_name: "sharad",
          from_email: formData.email,
          to_email: "sharad93100@gmail.com",
          message: formData.message,
        },
        "gqpxnbWFUq0Nx8UQb",
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };
  return (
    <section
      className="relative flex flex-col items-center c-space section-spacing "
      id="contact"
    >
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="mb-15 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <main className="flex flex-col md:flex-row md:gap-28 mt-8">

        <div className="relative flex flex-col items-center justify-center order-2 md:order-1 mt-12 md:mt-10">
          <figure className="relative w-[20rem] mb-10 sm:w-[30rem]">
            <Globe />
          </figure>
          

          {/* Glowing Stand / Pedestal */}
          <div className="absolute bottom-[8%] w-3/4 max-w-[350px] h-10 bg-gradient-to-r from-transparent via-purple-600/30 to-transparent rounded-[100%] blur-md pointer-events-none" />
          <div className="absolute bottom-[10%] w-50 max-w-[200px] h-4 border-b-[3px] border-purple-400/50 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent rounded-[100%] shadow-[0_5px_30px_rgba(99,102,241,0.8)] pointer-events-none" />
        </div>

      <MagicBento
                className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl w-[80%] md:w-full order-1 md:order-2"
                particleCount={12}
                glowColor="132,0,255"
                clickEffect
              >
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're loking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Sherry keos"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="example@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation opacity-80"
          >
            {!isLoading ? "Transmit Message" : "Transmitting..."}
          </button>
        </form>
        </MagicBento>
    

    


      </main>
    </section>
  );
};

export default Contact;
