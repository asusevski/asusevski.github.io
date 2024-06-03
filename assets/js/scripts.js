document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = [
    ];

    const blogContainer = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');

        const titleElement = document.createElement('h3');
        titleElement.textContent = post.title;
        postElement.appendChild(titleElement);

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;
        postElement.appendChild(contentElement);

        blogContainer.appendChild(postElement);
    });
});
