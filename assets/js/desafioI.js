// desafioI.js
const obtenerPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener los posts");
  }
};

const getPosts = async () => {
  try {
    const posts = await obtenerPosts();
    const postContainer = document.getElementById("post-data");
    postContainer.innerHTML = "";
    posts.forEach((post) => {
      const postHTML = `
          <ul>
            <li><strong>${post.title}</strong><br>${post.body}</li>
          </ul>
        `;
      const postElement = document.createElement("div");
      postElement.innerHTML = postHTML;
      postContainer.appendChild(postElement);
    });
  } catch (error) {
    alert.error(error);
  }
};

document.getElementById("get-posts").addEventListener("click", getPosts);
