const employees = [
  {
    id: 1,
    name: 'Susan Smith',
    job: 'Web Developer',
    img: `https://randomuser.me/api/portraits/women/50.jpg`,
    text: `I'm baby meggings twee health goth +1. Bicycle rights
    tumeric chartreuse before they sold but out chambray pop-up.
    Shaman humbleberg pickled coloring books salvia hoodie,
    cold-pressed four dollar toast everyday carry`,
  },

  {
    id: 2,
    name: 'Anna Johnson',
    job: 'Web Designer',
    img: `https://randomuser.me/api/portraits/women/69.jpg`,
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Ullam est dicta distinctio inventore. Similique, 
    blanditiis voluptates ratione odit commodi aperiam.`,
  },
  {
    id: 3,
    name: 'Mahdi Salmanizadehgan',
    job: 'Web Developer',
    img: `https://avatars.githubusercontent.com/mahdisalmanzade`,
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Ullam est dicta distinctio inventore.`,
  },
  {
    id: 4,
    name: 'Kyle Simpson',
    job: 'Open Web Evangelist',
    img: `kyle-simpson-v1.jpeg`,
    text: `I'm baby meggings twee health goth +1. Bicycle rights
    tumeric chartreuse before they sold but out chambray pop-up.
    Shaman humbleberg pickled coloring books salvia hoodie,
    cold-pressed four dollar toast everyday carry`,
  },
];

// Selecting DOM Elements
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const previousBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Initial Value
let currentItem = 0;
console.log(currentItem);
// Listen For DOMContentLoaded Event To Show Default Employee
window.addEventListener('DOMContentLoaded', function () {
  showEmployees();
});

// Show next employees
nextBtn.addEventListener('click', function () {
  // Incrementing by 1
  currentItem++;
  // if currentItem is bigger than last item index in the array reset currentItem to 0
  if (currentItem > employees.length - 1) currentItem = 0;
  showEmployees();
});

// Show previous employees
previousBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) currentItem = employees.length - 1;
  showEmployees();
});

// Show Employees
function showEmployees() {
  let item = employees[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

async function getGitHubUsers() {
  let response = await fetch('https://api.github.com/users');
  let data = await response.json();
  return data;
}

async function showUsers() {
  let usersData = await getGitHubUsers();
  console.log(usersData);
}

showUsers();
