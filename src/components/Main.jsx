import { useState } from "react";

export default function Main() {
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false,
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleCheckboxChange(e) {
        const { name, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: checked
        }));
    }

    return (
        <main>
            <h1>Crea un nuovo post</h1>

            <form>
                <label>
                    Author
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Title
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Body
                    <textarea
                        name="body"
                        rows="5"
                        value={formData.body}
                        onChange={handleChange}
                    ></textarea>
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="public"
                        checked={formData.public}
                        onChange={handleCheckboxChange}
                    />
                    Public post
                </label>

                <button type="submit">Invia</button>
            </form>
        </main>
    );
}