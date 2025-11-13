import { useState } from "react";
import axios from "axios";

const API_URL = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

export default function Main() {
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false,
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleCheckboxChange(e) {
        const { name, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: checked }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await axios.post(API_URL, formData);
            console.log("POST success:", res.data);
        } catch (err) {
            console.error("POST error:", err);
        }
    }

    return (
        <main>
            <h1>Crea un nuovo post</h1>

            <form onSubmit={handleSubmit}>
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