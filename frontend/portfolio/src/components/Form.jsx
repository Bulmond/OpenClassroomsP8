import React from "react";

const Form = () => {
    return (
        <section>
            <form>
                <label htmlFor="email">Email</label>
                <div className="input-field">
                    <input type="email" id="email" placeholder="john@doe.com" />
                </div>
                <label htmlFor="message">Message</label>
                <div className="input-field">
                    <textarea
                        name="Message"
                        id="message"
                        placeholder="Que souhaitez-vous dire ?"
                    ></textarea>
                </div>
            </form>
        </section>
    );
};

export default Form;
