function Contact({name,email,phone}) {
  return (
        <div className="inline-block w-150 bg-white/20 backdrop-blur-xs border border-white/20 rounded-xl p-6 shadow-lg ml-20">
            <p className="font-bold text-2xl mb-2">{name}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Phone:</b> {phone}</p>
        </div>

  );
}

export default Contact;
