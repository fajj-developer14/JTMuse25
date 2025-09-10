function Contact({name,email,phone}) {
  return (
        <div className="inline-block lg:w-150 bg-white/20 backdrop-blur-xs border border-white/20 rounded-xl lg:p-6 shadow-lg lg:ml-20 mb-20 text-[#f7f6f4]">
            <p className="font-bold text-2xl mb-2">{name}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Phone:</b> {phone}</p>
        </div>

  );
}

export default Contact;
