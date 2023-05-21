// post project
let dataProject = [];

function addProject(event) {
  event.preventDefault();

  let nama = document.getElementById("input-project-name").value;
  let tanggal = document.getElementById("input-date").value;
  let deskripsi = document.getElementById("description").value;
  let nodejs = document.getElementById("nodejs").value;
  let nextjs = document.getElementById("nextjs").value;
  let reactjs = document.getElementById("reactjs").value;
  let typescript = document.getElementById("typescript").value;
  let image = document.getElementById("input-blog-image").files;

  image = URL.createObjectURL(image[0]);

  let project = {
    nama,
    tanggal,
    deskripsi,
    nodejs,
    nextjs,
    reactjs,
    typescript,
    image,
  };

  dataProject.push(project);
  console.log(dataProject);

  renderProject();
}

function renderProject() {
  document.getElementById("tampil").innerHTML = "";

  for (let index = 0; index < dataProject.length; index++) {
    document.getElementById("tampil").innerHTML += `
    <h1>My Project</h1>
        <div class="wadah">
          <div class="card">
            <img src="${dataProject[index].image}" alt="phone">
            <div class="spasi">
              <a class="judul" href="project-detail.html"><p> ${dataProject[index].nama}</p></a>
              <p class="durasi">${dataProject[index].tanggal}</p>
            </div>
            <p class="detail">${dataProject[index].deskripsi}</p>
            <div class="icon">
              <i class="fa-brands fa-google-play"></i>
              <i class="fa-brands fa-android"></i>
              <i class="fa-brands fa-java"></i>
            </div>
          </div>
        </div>`;
  }
}
