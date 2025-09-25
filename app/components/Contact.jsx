import { useEffect, useRef, useState } from "react";

function stringToColor(str) {
	// Soft pastel hash to color
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}
	const pastel = [180, 200, 220, 240, 160, 210, 230, 250];
	let color = '#';
	for (let i = 0; i < 3; i++) {
		const value = (hash >> (i * 8)) & 0xff;
		color += (pastel[(value + i * 3) % pastel.length]).toString(16).padStart(2, '0');
	}
	return color;
}

function Contact() {
	const [inView, setInView] = useState(false);
	const contactRef = useRef(null);

	const contacts = [
		{ name: "Hassan Amiruddin Ansari", role: "Arts President", phone: "+92 314 4133798" },
		{ name: "Omer Khawar", role: "Arts Vice President", phone: "+92 335 4768007" },
		{ name: "Abubakar Farrukh", role: "Media President", phone: "+92 332 4637107" },
		{ name: "Dawood Adeel", role: "Media Vice President", phone: "+92 334 3111974" },
		{ name: "Ahmad Hassan Sohail", role: "Literary President", phone: "+92 332 4538321" },
		{ name: "Muhammad bin Nauman", role: "Literary Vice President", phone: "+92 336 7355649" },
		{ name: "Ibrahim Aftab Qureshi", role: "Music President", phone: "+92 300 0988725" },
		{ name: "Sheikh Saaram", role: "Music Vice President", phone: "+92 335 0457575" },
		{ name: "Ayan Habib", role: "Dramatics President", phone: "+92 307 7817442" },
		{ name: "Musa Wattoo", role: "Dramatics Vice President", phone: "+92 300 8807300" },
		{ name: "Arshman Shahjahan", role: "Registrations Director", phone: "+92 316 4931028" },
		{ name: "Ayaan Aquib", role: "Registrations Director", phone: "+92 316 4846440" },
	];

	useEffect(() => {
		const observer = new window.IntersectionObserver(
			([entry]) => {
				setInView(entry.isIntersecting);
			},
			{ threshold: 0.1 }
		);
		if (contactRef.current) {
			observer.observe(contactRef.current);
		}
		return () => {
			if (contactRef.current) observer.unobserve(contactRef.current);
		};
	}, []);

	return (
		<div 
			ref={contactRef}
			className="relative min-h-screen w-full flex flex-col items-center justify-center py-16 px-2 overflow-x-hidden lg:px-10 bg-gradient-to-br from-[#232323]/10 to-[#181818]/10 backdrop-blur border border-white/20 md:rounded-2xl p-6 shadow-2xl w-[97vw] mx-auto min-h-0"
		>
			{/* Subtle artsy background */}
			<div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#232323]/40 to-[#181818]/40 backdrop-blur border border-white/20" />

			{/* Section Heading */}
			<section className="w-full max-w-4xl mx-auto flex flex-col items-center mb-10">
				<h1 
					className={`Headings text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#dfc797] via-[#fff2d6] to-[#dfc797] bg-clip-text text-transparent mb-2 drop-shadow-lg tracking-tight text-center transition-all duration-700 ease-out transform ${
						inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
					}`}
					style={{
						fontFamily:'Montserrat, Inter, sans-serif',
						transitionDelay: inView ? '100ms' : '0ms'
					}}
				>
					Contact Us
				</h1>
				<p 
					className={`text-[#fff2d6] text-center max-w-2xl mb-6 font-medium text-base sm:text-lg transition-all duration-700 ease-out transform ${
						inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
					}`}
					style={{
						fontFamily:'Inter, sans-serif',
						transitionDelay: inView ? '200ms' : '0ms'
					}}
				>
					Reach out to our Arts Council for any queries or assistance. Tap a number to call directly.
				</p>
				<div 
					className={`flex flex-row justify-center items-center gap-6 px-8 py-3 rounded-2xl shadow-xl bg-white/20 backdrop-blur-md border border-[#dfc797]/20 mb-8 transition-all duration-700 ease-out transform ${
						inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
					}`}
					style={{
						boxShadow:'0 8px 32px 0 rgba(31,38,135,0.12)',
						transitionDelay: inView ? '300ms' : '0ms'
					}}
				>
					<a href="https://lgsjtmuse.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#dfc797] transition-colors" aria-label="Website">
						<svg width="26" height="26" fill="none" viewBox="0 0 24 24"><path fill="#dfc797" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2 0v12h12V6H6Zm2 2h8v2H8V8Zm0 4h8v2H8v-2Zm0 4h5v2H8v-2Z"/></svg>
					</a>
					<a href="mailto:lgsjtmuse@gmail.com" className="hover:text-[#dfc797] transition-colors" aria-label="Email">
						<svg width="26" height="26" fill="none" viewBox="0 0 24 24"><path fill="#dfc797" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4Z"/></svg>
					</a>
					<a href="https://instagram.com/lgsjt.muse" target="_blank" rel="noopener noreferrer" className="hover:text-[#dfc797] transition-colors" aria-label="Instagram">
						<svg width="26" height="26" fill="none" viewBox="0 0 24 24"><path fill="#dfc797" d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM12 7.25A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.25Zm0 1.5A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75Zm5.25-2.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"/></svg>
					</a>
				</div>
			</section>

			{/* Contact Cards Grid */}
			<section className="w-full max-w-7xl mx-auto">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{contacts.map((contact, index) => (
						<div
							key={index}
							className={`bg-white/10 border border-[#dfc797]/20 rounded-2xl p-6 shadow-lg flex flex-col gap-2 items-center text-center transition-all duration-700 ease-out transform hover:scale-[1.03] hover:shadow-2xl hover:border-[#dfc797]/60 cursor-pointer ${
								inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}
							style={{ 
								transitionDelay: inView ? `${400 + (index * 80)}ms` : '0ms'
							}}
						>
							<p className="font-extrabold text-lg text-[#dfc797] tracking-wide" style={{fontFamily:'Montserrat, Inter, sans-serif'}}>{contact.name}</p>
							{contact.role && <p className="text-xs text-[#fff2d6] font-semibold" style={{fontFamily:'Inter, sans-serif'}}>{contact.role}</p>}
							<a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="flex items-center justify-center gap-2 text-[#232323] bg-[#dfc797]/80 hover:bg-[#fff2d6] px-4 py-2 rounded-full font-bold shadow transition-colors duration-150 text-sm sm:text-base whitespace-nowrap">
								<svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#232323" d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"/></svg>
								{contact.phone}
							</a>
						</div>
					))}
				</div>
			</section>

			<div 
				className={`flex justify-center my-12 transition-all duration-700 ease-out transform ${
					inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
				}`}
				style={{ 
					transitionDelay: inView ? `${400 + (contacts.length * 80) + 200}ms` : '0ms'
				}}
			>
				<div className="relative group w-full">
					<div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-yellow-900/80 via-yellow-700/80 to-yellow-500/80 blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
					<div className="relative rounded-xl overflow-hidden border border-blue-400/25 backdrop-blur-sm bg-black/30">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12602.049475408632!2d74.27454330050205!3d31.46684539008887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e0fc887323%3A0xab96115d544c1796!2sLahore%20Grammar%20School%20for%20Boys%20(LGS%20JT)!5e1!3m2!1sen!2s!4v1725424124783!5m2!1sen!2s"
						className="filter brightness-90 hover:brightness-100 transition duration-300 mx-2 w-[80vw] h-[45vh]"
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					</div>
				</div>
			</div>

			<div 
				className={`text-center transition-all duration-700 ease-out transform ${
					inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
				}`}
				style={{ 
					transitionDelay: inView ? `${400 + (contacts.length * 80) + 400}ms` : '0ms'
				}}
			>
				<h2 className="text-lg font-semibold text-yellow-500/80">
					Location
				</h2>
				<p className="text-slate-300 max-w-2xl mx-auto font-open-sans font-medium tracking-wide text-sm md:text-base">
					364-E/1, M. A. Block E 1 Phase 1 Johar Town, Lahore, Punjab 54700
				</p>
			</div>
		</div>
	);
}

export default Contact;