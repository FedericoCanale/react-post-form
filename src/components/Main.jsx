import React from "react";

export default function Main() {
    return (
        <main>
            <h1>Crea un nuovo post</h1>

            <form>
                <div>
                    <label htmlFor="author">Author</label>
                    <input id="author" name="author" type="text" />
                </div>

                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" type="text" />
                </div>

                <div>
                    <label htmlFor="body">Body</label>
                    <textarea id="body" name="body" rows="5" />
                </div>

                <div>
                    <label htmlFor="public">
                        <input id="public" name="public" type="checkbox" />
                        Public post
                    </label>
                </div>

                <button type="submit">Invia</button>
            </form>
        </main>
    );
}