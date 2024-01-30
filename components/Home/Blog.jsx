import React from "react";

const Blog = () => {
  return (
    <div className="p-20">
      <div className="flex justify-between items-center">
        <h1 className="font-bold p-1 text-4xl">Latest Blog</h1>
        <p className="w-2/4 text-gray-500">
          Choose a topic you’re interested in learning about. If you need to
          know more, post a comment, and one of our experts will reply.
        </p>
      </div>
      <div className="flex my-10 justify-evenly">
       <BlogPost title=" What is Neuromarketing & Why It is Crucial for Today’s Marketers"    />
       <BlogPost title=" What is Neuromarketing & Why It is Crucial for Today’s Marketers"    />
       <BlogPost title=" What is Neuromarketing & Why It is Crucial for Today’s Marketers"    />
       <BlogPost title=" What is Neuromarketing & Why It is Crucial for Today’s Marketers"    />
     
      </div>
    </div>
  );
};

export default Blog;

    function BlogPost({img, title}) {
      return (<div className="w-56">
          <div className="h-64 w-56 bg-gray-600"></div>
          <h1 className="font-bold mt-4">
           {title}
          </h1>
        </div>);
    }
  