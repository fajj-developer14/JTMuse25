export function Data({ name, email, phone }) {
  return (
    <div className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg ml-0 lg:ml-20 mb-6 text-[#f7f6f4] w-[90vw] lg:w-full">
      <p className="font-bold text-2xl mb-2">{name}</p>
      <p><b>Email:</b> {email}</p>
      <p><b>Phone:</b> {phone}</p>
    </div>
  );
}

function Contact() {
  const contacts = [
    {
      name: "Hassan Amiruddin Ansari",
      email: "contact@example.com",
      phone: "+92 314 4133798"
    },
    {
      name: "Abubakr Farukh",
      email: "contact2@example.com",
      phone: "+92 332 4637107"
    }
  ];

  return (
    <div className="ml-20 mr-20 mb-10">
      <div className="">
        <h1 className="Headings">Contact Us</h1>
        <div className="grid place-items-center gap-4 grid-cols-1 lg:grid-cols-2 ">
          {contacts.map((contact, index) => (
            <Data
              key={index}
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
            />
          ))}
        </div>
      </div>
     
    </div>


      
  );
}

export default Contact;