export function Data({ category, president, vicePresident }) {
  return (
    <div className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 shadow-lg mb-6 text-[#f7f6f4] w-full">
      <p className="font-bold text-xl sm:text-2xl mb-3 text-center">{category}</p>
      <div className="space-y-2">
        <div>
          <p className="italic text-sm sm:text-base"><b>President: </b> {president.name}</p>
          <p className="text-sm sm:text-base"><b>Phone:</b> <a href={`tel:${president.phone}`} className="hover:underline">{president.phone}</a></p>
        </div>
        <div className="pt-2">
          <p className="italic text-sm sm:text-base"><b>Vice President: </b> {vicePresident.name}</p>
          <p className="text-sm sm:text-base"><b>Phone:</b> <a href={`tel:${vicePresident.phone}`} className="hover:underline">{vicePresident.phone}</a></p>
        </div>
      </div>
    </div>
  );
}

const contacts = [
  {
    category: "Arts",
    president: {
      name: "Hassan Amiruddin Ansari",
      phone: "+92 314 4133798"
    },
    vicePresident: {
      name: "Omer Khawar",
      phone: "+92 335 4768007"
    }
  },
  {
    category: "Media",
    president: {
      name: "Abubakar Farrukh",
      phone: "+92 332 4637107"
    },
    vicePresident: {
      name: "Dawood Adeel",
      phone: "+92 334 3111974"
    }
  },
  {
    category: "Literary",
    president: {
      name: "Ahmad Hassan Sohail",
      phone: "+92 332 4538321"
    },
    vicePresident: {
      name: "Muhammad bin Nauman",
      phone: "+92 336 7355649"
    }
  },
  {
    category: "Music",
    president: {
      name: "Ibrahim Aftab Qureshi",
      phone: "+92 300 0988725"
    },
    vicePresident: {
      name: "Sheikh Saaram",
      phone: "+92 335 0457575"
    }
  },
  {
    category: "Dramatics",
    president: {
      name: "Ayan Habib",
      phone: "+92 307 7817442"
    },
    vicePresident: {
      name: "Musa Wattoo",
      phone: "+92 300 8807300"
    }
  },
  {
    category: "Registerations",
    president: {
      name: "Arshman Shahjahan",  
      phone: "+92 316 4931028"
    },
    vicePresident: {
      name: "Ayaan Aquib",
      phone: "+92 316 4846440"
    }
  }
];

function Contact() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 mb-10 mt-6">
      <h1 className="Headings text-center sm:text-left">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-10">
        {contacts.map((contact, index) => (
          <Data
            key={index}
            category={contact.category}
            president={contact.president}
            vicePresident={contact.vicePresident}
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;