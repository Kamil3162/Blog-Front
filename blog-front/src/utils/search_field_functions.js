
export const searchPost = (tag_name="HomeTitle", target_title) => {
    const posts = document.getElementsByTagName(tag_name);
    const filtered = Array.from(posts).filter(post =>
        post.textContent.toLowerCase().includes(target_title.toLowerCase())
    );
    console.log(filtered);
}