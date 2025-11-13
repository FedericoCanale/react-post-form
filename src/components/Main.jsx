import React, { useState } from "react";

export default function Main() {
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false,
    });

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
                    />
                </div>

                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={formData.title}
                    />
                </div>

                <div>
                    <label htmlFor="body">Body</label>
                    <textarea
                        id="body"
                        name="body"
                        rows="5"
                        value={formData.body}
                    />
                </div>

                <div>
                    <label htmlFor="public">
                        <input
                            id="public"
                            name="public"
                            type="checkbox"
                            checked={formData.public}
                        />
                        Public post
                    </label>
                </div>

                <button type="submit">Invia</button>
            </form>
        </main>
    );
}