// post project
let dataProject = [];
let dataTech = [];

function addProject() {
  // deklarasi variabel
  let nama = document.getElementById("input-project-name").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("description").value;
  let playstore = document.getElementById("playstore");
  let java = document.getElementById("java");
  let android = document.getElementById("android");
  let react = document.getElementById("react");
  let image = document.getElementById("input-project-image").files;

  // Mencari durasi project
  let mulai = new Date(startDate);
  let akhir = new Date(endDate);
  let selisih = akhir.getTime() - mulai.getTime();
  let durasi = Math.ceil(selisih / (1000 * 3600 * 24 * 30));

  // cek checkbox
  if (playstore.checked) {
    dataTech.push(playstore.value);
  }
  if (java.checked) {
    dataTech.push(java.value);
  }
  if (android.checked) {
    dataTech.push(android);
  }
  if (react.checked) {
    dataTech.push(react);
  }

  // cek kondisi image
  let imageURL = URL.createObjectURL(image[0]);
  // if (image.target.files.length !== 0) {
  //   this.setState({ image: URL.createObjectURL(e.target.files[0]) });
  // }

  let data = {
    nama,
    startDate,
    endDate,
    durasi,
    description,
    dataTech,
    imageURL,
  };

  dataProject.push(data);
  console.log(dataProject);
  renderProject();
  dataTech = [];
}

function renderProject() {
  document.getElementById("tampil").innerHTML = "";

  for (let index = 0; index < dataProject.length; index++) {
    let techIcon = "";

    for (let a = 0; a < dataProject[index].dataTech.length; a++){
      techIcon += `<i class="fa-brands fa-google-play"></i>`
    }
  }
}
