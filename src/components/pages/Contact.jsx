import React, { useRef } from "react";
import emailjs from "@emailjs/browser"

const Contact = () => {

    const formData = useRef('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_x4tzrh4", "template_nftnb6y", formData.current, "uFG1C78ZYBc3_w5C5").then(
            () => {
                alert("Message sent successfully!");
                formData.current.reset();
            },
            (error) => {
                alert("Failed to send message. Please try again later.");
                console.error(error.text);

            }
        )
    };

    return (
        <section
            id="contact"
            className="py-16 px-4 flex flex-col items-center bg-[rgba(11,11,13,0.85)]"
        >
            <div className="w-full max-w-xl bg-[rgba(20,20,25,0.85)] rounded-3xl shadow-2xl p-10 flex flex-col items-center backdrop-blur-md">
                <h2 className="text-4xl font-extrabold mb-2 text-center text-white tracking-tight">
                    Get in Touch
                </h2>
                <p className="text-lg text-gray-300 mb-8 text-center max-w-md">
                    Have a question, project, or just want to say hi? Fill out
                    the form below and I'll get back to you soon!
                </p>
                <form
                    autoComplete="off"
                    className="w-full flex flex-col gap-6"
                    ref={formData}
                    onSubmit={sendEmail}
                >
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="name"
                            className="text-gray-200 font-medium"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="bg-[rgba(255,255,255,0.08)] border border-[var(--color-accent)]/30 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/40 text-white p-3 rounded-xl outline-none transition"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="text-gray-200 font-medium"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="bg-[rgba(255,255,255,0.08)] border border-[var(--color-accent)]/30 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/40 text-white p-3 rounded-xl outline-none transition"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="subject"
                            className="text-gray-200 font-medium"
                        >
                            Subject
                        </label>
                        <input
                            id="subject"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="bg-[rgba(255,255,255,0.08)] border border-[var(--color-accent)]/30 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/40 text-white p-3 rounded-xl outline-none transition"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="message"
                            className="text-gray-200 font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            className="bg-[rgba(255,255,255,0.08)] border border-[var(--color-accent)]/30 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/40 text-white p-3 rounded-xl outline-none transition resize-none"
                            rows={5}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-2 py-3 px-8 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-button-bg)] text-black font-bold shadow-lg hover:from-[var(--color-button-hover)] hover:to-[var(--color-accent)] transition-all duration-300 text-lg tracking-wide"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
