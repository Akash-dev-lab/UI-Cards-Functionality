let arr = [
  {
    id: 1,
    fullname: "Wade Wilson",
    designation: "UI/UX Designer",
    istatus: "Stranger 🧟‍♀️",
    skills: ["UI", "UX", "Photoshop"],
    about: "Wade is a 32 year old UI/UX designer, with an impressive porfolio behind him.",
    image: "https://i.pinimg.com/1200x/52/46/49/524649971a55b2f3a0dae1d537c61098.jpg",
    price: "$55/hr"
  },
  {
    id: 2,
    fullname: "Antonio Banderas",
    designation: "Front-end Developer",
    istatus: "Stranger 🧟‍♀️",
    skills: ["HTML", "CSS", "React"],
    about: "Antonio is a 28 year old front-end developer, with an impressive porfolio behind her.",
    image: "https://i.pinimg.com/736x/7d/e6/d3/7de6d3b4452a48fbe6862645021545b3.jpg",
    price: "$40/hr"
  },
  {
    id: 3,
    fullname: "Devin Bacon",
    designation: "Full Stack Developer",
    istatus: "Stranger 🧟‍♀️",
    skills: ["JavaScript", "Node.js", "MongoDB"],
    about: "Devin is a 35 year old full stack developer, with an impressive porfolio behind him.",
    image: "https://i.pinimg.com/736x/8d/a7/41/8da7418c70faa5abfacc5bd20ba78e23.jpg",
    price: "$70/hr"
  },
  {
    id: 4,
    fullname: "Alexa Vega",
    designation: "Data Scientist",
    istatus: "Stranger 🧟‍♀️",
    skills: ["Python", "TensorFlow", "Pandas"],
    about: "Alexa is a 30 year old data scientist, with an impressive porfolio behind him.",
    image: "https://i.pinimg.com/736x/3f/28/7e/3f287e9e4a8b7e10ddb1ade049c35650.jpg",
    price: "$20/hr"
  },
  {
    id: 5,
    fullname: "Brayden Smith",
    designation: "Product Manager",
    istatus: "Stranger 🧟‍♀️",
    skills: ["Agile", "Scrum", "Communication"],
    about: "Brayden is a 40 year old data scientist, with an impressive porfolio behind him.",
    image: "https://i.pinimg.com/736x/c4/10/96/c4109664b44ef3f88e92639ca96aa96b.jpg",
    price: "$32/hr"
  },
];

function hero() {
  let card = arr.map((dets, idx) => `
    <section>
      <div class="head">
        <span class="availability">Available</span>
        <span class="price">${dets.price}</span>
      </div>
      <img src="${dets.image}" alt="${dets.fullname}" class="profile-img" />
      <h2>${dets.fullname}</h2>
      <p class="designation">${dets.designation}</p>
      <p class="company">${dets.istatus}</p>
      <div class="skills">
        ${dets.skills.map(skill => `<span class="skill">${skill}</span>`).join("")}
        <div class="skill more-skills">+4</div>
      </div>
      <p class="about">${dets.about}</p>
      <button id="${idx}">${getButtonText(dets.istatus)}</button>
    </section>
  `).join("");

  let main = document.querySelector("main")

  main.innerHTML = card;
}

function getButtonText(status) {
  return status === "Stranger 🧟‍♀️" ? "Add Friend" :
         status === "Waiting for response..." ? "Request Sent" : "Remove Friend";
}

function updateStatus(idx) {
  let user = arr[idx];
  if (!user) return;

  if (user.istatus === "Stranger 🧟‍♀️") {
    user.istatus = "Waiting for response...";
    hero();
    setTimeout(() => {
      user.istatus = "Friends 👩‍❤️‍👨";
      hero();
    }, 2000);
  } else if (user.istatus === "Friends 👩‍❤️‍👨") {
    user.istatus = "Stranger 🧟‍♀️";
    hero();
  }
}

let main = document.querySelector("main")

main.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") updateStatus(e.target.id);
});

hero();
