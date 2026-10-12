import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, CheckCircle2, AlertCircle, Copy, Check, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message should be at least 15 characters.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(formData.subject || 'Software Opportunity / Inquiry')}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Connect & Collaborate
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          {profileData.availability}
        </p>
      </section>

      {/* Grid: Contact Methods & Direct Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <h2 className="text-lg font-bold text-white">
              Direct Contact Information
            </h2>

            <div className="space-y-4 text-xs">
              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Mail className="w-4 h-4 text-cyan-400" /> Primary Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedEmail ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors break-all block"
                >
                  {profileData.email}
                </a>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                <span className="flex items-center gap-1.5 font-medium text-slate-400">
                  <Phone className="w-4 h-4 text-cyan-400" /> Phone & WhatsApp
                </span>
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors block"
                >
                  {profileData.phone}
                </a>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                <span className="flex items-center gap-1.5 font-medium text-slate-400">
                  <MapPin className="w-4 h-4 text-cyan-400" /> Location
                </span>
                <div className="text-sm font-semibold text-white">
                  {profileData.location}
                </div>
                <p className="text-[11px] text-slate-400">
                  Available for remote engineering, regional contracts, and international teams.
                </p>
              </div>

              {/* GitHub */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <span className="flex items-center gap-1.5 font-medium text-slate-400">
                  <Github className="w-4 h-4 text-cyan-400" /> GitHub Profile
                </span>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  github.com/scondlythorp
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Collaboration Areas */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Areas Open for Discussion
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Full-Stack & Backend Software Engineering Roles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Relational Database Design & REST API Development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Applied AI, Agritech & Decision Support Platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Python Simulation & Drone Telemetry Research Collaborations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <h2 className="text-lg font-bold text-white">
              Send a Message
            </h2>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 space-y-4 text-slate-200">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  Inquiry Prepared Successfully!
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  Thank you, <strong>{formData.name}</strong>. Your message has been formatted. To ensure direct inbox delivery, you can launch your email client with your pre-filled inquiry:
                </p>

                <div className="p-3 bg-slate-950 rounded border border-slate-800 text-xs font-mono space-y-1">
                  <div><strong className="text-slate-400">Subject:</strong> {formData.subject}</div>
                  <div><strong className="text-slate-400">To:</strong> {profileData.email}</div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={mailtoUrl}
                    className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Open Email Client Now
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jane@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-medium text-slate-300">
                      Subject / Topic <span className="text-rose-400">*</span>
                    </label>
                  </div>

                  {/* Quick Subject Templates */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {[
                      "Software Engineering Role",
                      "Full-Stack Project Collaboration",
                      "ChiaLink & Agritech Inquiry",
                      "Freelance Backend Development"
                    ].map(tpl => (
                      <button
                        key={tpl}
                        type="button"
                        onClick={() => setFormData({ ...formData, subject: tpl })}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700 transition-colors"
                      >
                        + {tpl}
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Opportunity / Technical Project"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-medium text-slate-300">
                      Your Message <span className="text-rose-400">*</span>
                    </label>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {formData.message.length} chars (min 15)
                    </span>
                  </div>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, engineering role, or technical collaboration inquiry..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-y"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    Submit & Prepare Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
