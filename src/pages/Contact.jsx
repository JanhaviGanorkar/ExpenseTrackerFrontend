import { useState } from "react";
import { useThemeStore } from "../store/store";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const Contact = () => {
  const { isdark } = useThemeStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Query:", { name, email, message });
    alert("Message sent successfully! (Mock)");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={`w-full max-w-2xl mx-auto transition-colors duration-300 ${isdark ? 'text-white' : 'text-slate-900'}`}>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-black text-emerald-500 tracking-tight mb-2">
          Contact Us
        </h1>
        <p className="text-sm text-slate-400 font-medium">
          Koi dikkat hai ya koi sujhav? Hamein message bhejiye!
        </p>
      </div>

      {/* Contact Form Container */}
      <div className={`p-8 rounded-2xl shadow-xl border transition-all duration-300
        ${isdark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}
      >
        <form onSubmit={handleMessageSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Your Name</label>
            <Input type="text" placeholder="Rahul Kumar" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Email Address</label>
            <Input type="email" placeholder="rahul@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Message</label>
            {/* Kyunki input alag hota hai aur textarea bada hota hai, isko yahan standard custom style de dete hain */}
            <textarea
              rows="4"
              placeholder="Aapka sandesh yahan likhein..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full p-3 text-sm rounded-xl border font-sans focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all
                ${isdark ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'}`}
            />
          </div>

          <div className="pt-2">
            <Button type="submit" bg="#10b981" className="w-full font-bold py-3 rounded-xl shadow-lg">
              Send Message 🚀
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
