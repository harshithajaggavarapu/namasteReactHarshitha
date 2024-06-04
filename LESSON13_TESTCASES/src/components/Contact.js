const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-lg"> Contact us page</h1>
      {/* <h2> You can contact via email for any inquiries. happyeats@gmail.com</h2> */}
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
