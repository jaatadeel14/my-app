import React from "react";
import MyPost from "./mypost";

async function getPosts() {
    let postData = await fetch("https://jsonplaceholder.typicode.com/posts")
    postData = await postData.json()
    return postData;

}

const Post = async () => {
    let posts = await getPosts();
    // console.log(posts)
    return (
        <>
            <h2>Posts | fetch the Data with the API in server side Components</h2>
            {

                posts.map((post) =>
                    <React.Fragment key={post.id}>
                        <h4>#{post.id}) Post Title:{post.title}</h4>
                        <MyPost data={post.id} />
                    </React.Fragment>
                )
            }

        </>
    )
}

export default Post