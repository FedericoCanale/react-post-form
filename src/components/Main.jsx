import React, { useState } from "react";

export default function Main() {
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false,
    });

    // Per input di tipo text e textarea
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    // Per la checkbox (booleano)
    function handleCheckboxChange(e) {
        const { name, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: checked,
        }));
    }

    return (
        <main>
            <h1>Crea un nuovo post</h1>

            <form>
                <div>
                    <label htmlFor="author">Author</label>
                    <input
                        id="author"
                        name="author"
                        type="text"
                        value={formData.author}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="body">Body</label>
                    <textarea
                        id="body"
                        name="body"
                        rows="5"
                        value={formData.body}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="public">
                        <input
                            id="public"
                            name="public"
                            type="checkbox"
                            checked={formData.public}
                            onChange={handleCheckboxChange}
                        />
                        Public post
                    </label>
                </div>

                <button type="submit">Invia</button>
            </form>
        </main>
    );
}