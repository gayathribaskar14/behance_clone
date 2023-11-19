
const projectsData = [
  { title: "flower1", category: "flower", likes: 0, imageUrl: "flower1.jpeg", description: "A great project!" },
  { title: "lake1", category: "lake", likes: 0, imageUrl: "lake1.jpg", description: "Another amazing project!" },
  { title: "lake2", category: "lake", likes: 0, imageUrl: "lake2.jpeg", description: "Yet another project!" },
  { title: "flower2", category: "flower", likes: 0, imageUrl: "flower2.jpeg", description: "Yet another project!" },
  { title: "web1", category: "web", likes: 0, imageUrl: "web1.jpg", description: "Yet another project!" },
  { title: "graphics1", category: "graphics", likes: 0, imageUrl: "graphys1.jpeg", description: "Yet another project!" },
  { title: "web2", category: "web", likes: 0, imageUrl: "web2.jpg", description: "Yet another project!" },
  { title: "graphics2", category: "graphics", likes: 0, imageUrl: "graphics2.jpg", description: "Yet another project!" },
];

function renderProjects() {
  const projectsSection = document.getElementById('projects');
  projectsSection.innerHTML = '';

  projectsData.forEach((project, index) => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.dataset.title = project.title;
    projectElement.dataset.category = project.category;
    projectElement.dataset.likes = project.likes;

    const imageElement = document.createElement('img');
    imageElement.src = project.imageUrl;
    imageElement.alt = project.title;

    const titleElement = document.createElement('h2');
    titleElement.textContent = project.title;

    const likeButton = document.createElement('button');
    likeButton.classList.add('likeButton');
    likeButton.textContent = 'Like';
    likeButton.addEventListener('click', function() {
      likeProject(this, index);
    });

    const likeCount = document.createElement('span');
    likeCount.classList.add('likeCount');
    likeCount.textContent = project.likes;

    projectElement.appendChild(imageElement);
    projectElement.appendChild(titleElement);
    projectElement.appendChild(likeButton);
    projectElement.appendChild(likeCount);

    projectsSection.appendChild(projectElement);

    projectElement.addEventListener('click', function() {
      openProjectModal(project.title, project.description, project.imageUrl);
    });
  });
}

function openProjectModal(title, description, imageUrl) {
  const projectModal = document.getElementById('projectModal');
  const projectModalTitle = document.getElementById('projectModalTitle');
  const projectModalDescription = document.getElementById('projectModalDescription');
  const projectModalImage = document.getElementById('projectModalImage');

  projectModalTitle.textContent = title;
  projectModalDescription.textContent = description;
  projectModalImage.src = imageUrl;

  projectModal.style.display = 'block';
}


function closeProjectModal() {
  const projectModal = document.getElementById('projectModal');
  projectModal.style.display = 'none';
}


function likeProject(button, index) {
  const project = projectsData[index];
  const likeCount = project.likes;

  project.likes += 1;

  button.nextElementSibling.textContent = project.likes;
}


function filterProjects() {
  const input = document.getElementById('searchBar').value.toLowerCase();
  const category = document.getElementById('categoryDropdown').value.toLowerCase();

  const filteredProjects = projectsData.filter(project =>
    project.title.toLowerCase().includes(input) &&
    (category === 'all' || project.category.toLowerCase() === category)
  );

 
  renderFilteredProjects(filteredProjects);
}

function renderFilteredProjects(filteredProjects) {
  const projectsSection = document.getElementById('projects');
  projectsSection.innerHTML = '';

  filteredProjects.forEach((project, index) => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.dataset.title = project.title;
    projectElement.dataset.category = project.category;
    projectElement.dataset.likes = project.likes;

    const imageElement = document.createElement('img');
    imageElement.src = project.imageUrl;
    imageElement.alt = project.title;

    const titleElement = document.createElement('h2');
    titleElement.textContent = project.title;

    const likeButton = document.createElement('button');
    likeButton.classList.add('likeButton');
    likeButton.textContent = 'Like';
    likeButton.addEventListener('click', function() {
      likeProject(this, index);
    });

    const likeCount = document.createElement('span');
    likeCount.classList.add('likeCount');
    likeCount.textContent = project.likes;

    projectElement.appendChild(imageElement);
    projectElement.appendChild(titleElement);
    projectElement.appendChild(likeButton);
    projectElement.appendChild(likeCount);

    projectsSection.appendChild(projectElement);

    projectElement.addEventListener('click', function() {
      openProjectModal(project.title, project.description, project.imageUrl);
    });
  });
}


renderProjects();
