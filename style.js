function listMenu() {
  document.getElementById('dropdown-list').style.display = 'block';
}

function closediv() {
  const navclose = document.getElementById('dropdown-list');
  navclose.style.display = 'none';
}

function hide() {
  document.getElementById('dropdown-list').style.display = 'none';
}

const project = {
  first: {
    name: 'Tonic',
    jobdescription: {
      jobname: 'Canopy',
      detail: 'Backend dev',
      date: 2015,
      counter: './image/circle.png',
    },
    image: './image/SnapshootPortfolio.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: [
      'html', 'css', 'Javascript',
    ],
    liveLink: 'https://shaqayq.github.io/Portfolio/',
    sourcelink: 'https://github.com/shaqayq/Portfolio.git',
  },
  second: {
    name: 'Multi-Post',
    jobdescription: {
      jobname: 'Facebook',
      detail: 'Backend dev',
      date: 2018,
      counter: './image/circle.png',
    },
    image: './image/SnapshootPortfolio2.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: [
      'html', 'css', 'Javascript',
    ],
    liveLink: 'https://shaqayq.github.io/Portfolio/',
    sourcelink: 'https://github.com/shaqayq/Portfolio.git',
  },
};
