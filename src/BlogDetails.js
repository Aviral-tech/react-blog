import  useFetch  from './useFetch';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const BlogDetails = () => {

  const {id} = useParams();
  const {data:blog,error,isPending} = useFetch('http://localhost:8000/blogs/'+id); 
  const navigate= useNavigate();
  const handleclick= (e) => {
    fetch('http://localhost:8000/blogs/'+id, {
      method:'DELETE'
    }).then(()=>{
      navigate('/');
    })
  }

  return ( 
    <div>
      { isPending && <div>Loading... </div>}
      { error && <div>{ error }</div>}
      {blog && (
        <article>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleclick}>Delete</button>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;