import "../style/contact.css";

const Contact = () => {
  return (
    <section className="contact-page ">
      <article className="contact-form">
        <h3 className="font-semibold capitalize text-2xl text-gray-300 mb-2">
          get in touch
        </h3>
        <form
          action="https://formspree.io/myybljov"
          method="POST"
          className="w-full"
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              className="form-control"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="message"
              className="form-control"
            ></textarea>
            <button
              type="submit"
              className="bg-[#1D4ED8] w-full px-3 py-2 rounded-md text-yellow-50 capitalize font-semibold text-lg"
            >
              submit here
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Contact;
