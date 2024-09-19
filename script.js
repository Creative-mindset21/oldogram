const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21987,
    liked: false,
  },

  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 400,
    liked: false,
  },

  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 15209,
    liked: false,
  },

  {
    name: "Albert Einstein",
    username: "ab4321",
    location: "London, United Kingdom",
    avatar: "images/avatar-albert.jpeg",
    post: "images/post-albert.jpeg",
    comment:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    likes: 22309,
    liked: false,
  },
];

const mainContent = document.querySelector(".main");

for (let i = 0; i < posts.length; i++) {
  mainContent.innerHTML += `
    <div class="profile">
          <div class="details">
            <img
              src="./${posts[i].avatar}"
              alt="avatar of ${posts[i].name}"
              id="avatar"
            />
            <div class="text">
              <h2>${posts[i].name}</h2>
              <p>${posts[i].location}</p>
            </div>
          </div>

          <img src="./${posts[i].post}" alt="post of ${posts[i].name}" />

          <div class="lcs">
            <img src="./images/icon-heart.png" alt="like icon" class="like-icon" data-index="${i}"/>
            <img src="./images/icon-comment.png" alt="comment icon" />
            <img src="./images/icon-dm.png" alt="share icon" />
          </div>

          <div class="likes lcs">
            <p id = "like-display-${i}">${posts[i].likes} likes</p>
          </div>

          <div class="comments lcs">
            <p><span>${posts[i].username}</span> ${posts[i].comment}</p>
          </div>
        </div>
    `;
}

// Add event listeners to each like icon
const likeIcons = document.querySelectorAll(".like-icon");

likeIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const index = this.getAttribute("data-index");

    // Toggle liked state
    if (!posts[index].liked) {
      posts[index].likes++; // Increase likes
    } else {
      posts[index].likes--; // Decrease likes
    }

    // Update liked state
    posts[index].liked = !posts[index].liked;

    // Update the displayed likes
    const likeDisplay = document.getElementById(`like-display-${index}`);
    likeDisplay.textContent = `${posts[index].likes} likes`; // Update the displayed likes
  });
});
