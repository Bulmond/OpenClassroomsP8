import React from "react";

const Form = () => {
    return (
        <section id="contact" className="flex-center">
            <form
                action={
                    "https://formsubmit.co/ce43bf302b76ae58bf16357216c08494"
                }
                method="POST"
            >
                <label htmlFor="name">Name</label>
                <input
                    className="input-field"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    className="input-field"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="john@doe.com"
                    required
                />
                <label htmlFor="message">Message</label>
                <textarea
                    className="input-field w-full"
                    rows={6}
                    name="message"
                    id="message"
                    placeholder="Que souhaitez-vous dire ?"
                ></textarea>
                <button
                    type="submit"
                    className="button flex-center mx-auto w-1/4 gap-2 p-2"
                >
                    Envoyer
                </button>
            </form>
        </section>
    );
};

export default Form;
