import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Create.css';

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      // history.go(-1); // use this to go back to the previous page
      history.push("/");
    })
  }

  return (
    <div className="create">
      <h2>add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Content</label>
        <textarea
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog Author</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { isPending
          ? <button disabled>Adding Blog...</button>
          : <button>Add Blog</button>
        }
      </form>
    </div>
  );
}

export default Create;
