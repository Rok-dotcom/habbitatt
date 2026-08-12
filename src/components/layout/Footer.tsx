import { Link } from "react-router-dom";
import { Share2, AtSign, MessageSquare, Link2, Mail, MapPin, Phone } from "lucide-react";
import Logo from "../ui/Logo";

const columns = [
  {
    title: "Services",
    links: [
      { label: "AI Symptom Analyser", to: "/ai-symptom-checker" },
      { label: "Online Consultation", to: "/services" },
      // { label: "Medicine Delivery", to: "/medicine" },
      { label: "Lab Test Booking", to: "/services" },
      { label: "Mental Health", to: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Doctors", to: "/doctors" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", to: "/#faq" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms & Conditions", to: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-page py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            Smart care, anywhere. AI insights, expert doctors, and medicines delivered worldwide.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Share2, AtSign, MessageSquare, Link2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-brand-500 hover:text-white transition-colors"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold text-white mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm hover:text-brand-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-display text-sm font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-400" />
              <span>221B Wellness Ave, Bengaluru, India</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-brand-400" />
              <span>+91 80 4567 8901</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-brand-400" />
              <span>support@habitatt.health</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Habitatt Health, Inc. All rights reserved.</p>
          <p>Medicine Partner: Apollo · Courier Partner: FleetGo</p>
        </div>
      </div>
    </footer>
  );
}
