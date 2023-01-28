const Blogs = ({blogs , title, handleDelete}) => {
    
    // Props is the data/properties passed between components.
    // you can import props like this, or use a deconstrunctor in the above function

    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs);

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{ blog.title }</h2>
                        <p>Written by {blog.author}</p>
                        <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                    </div>
            ))}
        </div>
                
     );
}

export default Blogs;

// handleDelete is defiend where the data resides, and we have passed handle delete as a function to a prop