const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Contact Us</h1>
      <form>
        <input
          type="text"
          className="border-black p-2 m-2 border rounded-md"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border-black p-2 m-2 border rounded-md"
          placeholder="message"
        ></input>
        <button
          type="submit "
          className="border-black p-2 m-2 border rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
