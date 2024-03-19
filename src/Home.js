import BlogList from './BlogList';
import useFetch from './useFetch';
import './Home.css';

const Home = () => {
  const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      { error && <div>{error}</div> }
      { isPending && <div>loading...</div> }
      { blogs && <BlogList blogs={blogs} title={"All Blogs!"} /> }
    </div>
  )
}

export default Home;

  // BUTTON EXAMPLES
  // const [name, setName] = useState("Mario");
  // const [age, setAge] = useState(25);

  // const handleClick = (e) => {
  //   console.log(e);
  // }

  // const myArg = 9;
  // const handleClickWithArg = (e, val) => {
  //   console.log(e);
  //   console.log(val);
  // }

  // const handleClickChangeState = (e) => {
  //   setName("Luigi");
  //   setAge(30);
  // }

  // return (
  //   <div className="home">
  //     <h2>Home</h2>
  //     <p>{name} is {age} years old</p>
  //     <button onClick={handleClickChangeState}>Click me</button>
  //     <button onClick={(e) => handleClickWithArg(e, myArg)}>Click me</button>
  //     <button onClick={handleClick}>Click me</button>
  //   </div>
  //  );

  // PREPOPULATED STATE EXAMPLE
  // const [blogs, setBlogs] = useState([
  //   {title: "My new website", body: "thing", author: "mario", id: 1},
  //   {title: "welcome party", body: "thing", author: "yoshi", id: 2},
  //   {title: "web dev top tips", body: "thing", author: "mario", id: 3},
  // ]);

  // DELETION EXAMPLE
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((b) => id !== b.id);
  //   setBlogs(newBlogs);
  // }

  // const [blogs, setBlogs] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect runs after renders
  // godd place to fetch data!
  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch("http://localhost:8000/blogs")
  //     .then(res => {
  //       if (!res.ok) {
  //         throw Error("could not fetch the data for resource");
  //       }
  //       return res.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       setBlogs(data);
  //       setIsPending(false);
  //       setError(null);
  //     })
  //     .catch(err => {
  //       console.log(err.message);
  //       setIsPending(false);
  //       setError(err.message);
  //     })
  //   }, 1000);
  // }, []);
