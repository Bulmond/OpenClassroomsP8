import React from "react";
import Button from "./Button";

const Form = () => {
    return (
        <section className="flex-center">
            <form>
                <label htmlFor="email">Email</label>
                <div className="input-field">
                    <input type="email" id="email" placeholder="john@doe.com" />
                </div>
                <label htmlFor="message">Message</label>
                <div className="input-field">
                    <textarea
                        className="w-full"
                        rows={6}
                        id="message"
                        placeholder="Que souhaitez-vous dire ?"
                    ></textarea>
                </div>
                <button className="flex-center mx-auto w-1/4 gap-2 p-2">
                    Envoyer
                </button>
            </form>
        </section>
    );
};

export default Form;
