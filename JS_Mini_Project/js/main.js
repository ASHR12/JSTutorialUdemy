const projectsElement = document.querySelector(".projects");

let projectDetails;

projectDetails = projects
  .map(function (project) {
    return `<article class="project">
          <div class="card-content">
            <h1>${project.title}</h1>
            <a
              href="./${project.link}"
              class="btn project-link-btn"
              target="_blank"
            >
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </article>`;
  })
  .join("");

projectsElement.innerHTML = projectDetails;
