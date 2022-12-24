/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
window.addEventListener('DOMContentLoaded', (event) => {
  const projects = {
    first: {
      id: 'first',
      name: 'MobileZone',
      jobdescription: [
        'Mobile App',
        ' &bullet; Front-End  &bullet;',
        2022,
      ],
      image: './image/mobileZone.png',
      description: 'This is a mobile web app for the mobile store that displays the list of all the products available in this store with their details.',
      technologies: [
        'html', 'css', 'React', 'API', 'JavaScript',
      ],
      liveLink: 'https://shaqayq.github.io/Portfolio/',
      sourcelink: 'https://github.com/shaqayq',
      classname: 'work_section',
      projectDemo: 'https://63111354be357e514f115d4b--shiny-sprite-86c43c.netlify.app/',
    },
    second: {
      id: 'second',
      name: 'Anime',
      jobdescription: [
        'Team Work',
        'Front-End',
        2022,
      ],
      image: './image/anime.png',
      description: 'This is a web application showing list of animes. Users are able to like on different individual anime which updates on real time.Users are able to add comments and reserve dates to watch a selected anime.',
      technologies: [
        'html', 'css', 'Javascript', 'API',
      ],
      liveLink: 'https://shaqayq.github.io/Portfolio/',
      sourcelink: 'https://github.com/shaqayq/Portfolio.git',
      classname: 'work_section2',
      projectDemo: 'https://xsidx.github.io/js-capstone-group/',
    },

  };

  const popdata = {
    first: {
      id: 'first',
      name: 'Tonic',
      jobdescription: [
        'Canopy',
        ' &bullet; Backend dev  &bullet;',
        2015,
      ],
      image: './image/SnapshootPortfolio.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      technologies: [
        'html', 'css', 'Javascript', 'ruby', 'Java', 'c#',
      ],
      liveLink: 'https://shaqayq.github.io/Portfolio/',
      sourcelink: 'https://github.com/shaqayq/Portfolio.git',
      classname: 'work_section',
    },
    second: {
      id: 'second',
      name: 'Multi-Post',
      jobdescription: [
        'Canopy',
        'Backend dev',
        2015,
      ],
      image: './image/SnapshootPortfolio2.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      technologies: [
        'html', 'css', 'Javascript', 'ruby', 'Java', 'c#',
      ],
      liveLink: 'https://shaqayq.github.io/Portfolio/',
      sourcelink: 'https://github.com/shaqayq/Portfolio.git',
      classname: 'work_section2',
    },

    third: {
      id: 'third',
      name: 'Multi-Post',
      jobdescription: [
        'Canopy',
        'Backend dev',
        2015,
      ],
      image: './image/SnapshootPortfolio3.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      technologies: [
        'html', 'css', 'Javascript', 'ruby', 'Java', 'c#',
      ],
      liveLink: 'https://shaqayq.github.io/Portfolio/',
      sourcelink: 'https://github.com/shaqayq/Portfolio.git',
      classname: 'work_section',
    },
  };

  // alert('hi');

  const pagecontent = document.getElementById('work');

  function CreateWorkSection(key) {
    const workSection = document.createElement('div');
    workSection.classList.add(projects[key].classname);
    pagecontent.appendChild(workSection);

    const image = document.createElement('img');
    image.classList.add('screenshoot');
    image.id = projects[key].id;
    workSection.appendChild(image);
    image.src = projects[key].image;

    const right_side = document.createElement('div');
    right_side.classList.add('right-side');
    workSection.appendChild(right_side);

    const heading = document.createElement('h1');
    heading.classList.add('h_section');
    right_side.appendChild(heading);
    heading.innerHTML = projects[key].name;

    const job_detail = document.createElement('ul');
    job_detail.classList.add('canopy');
    right_side.appendChild(job_detail);

    for (const j in projects[key].jobdescription) {
      const element = document.createElement('li');
      job_detail.appendChild(element);
      element.innerHTML = projects[key].jobdescription[j];
    }

    const paragraph = document.createElement('p');
    paragraph.classList.add('work_paragraph');
    right_side.appendChild(paragraph);
    paragraph.innerHTML = projects[key].description;

    const tech = document.createElement('ul');
    tech.classList.add('lang');
    right_side.appendChild(tech);

    for (const t in projects[key].technologies) {
      const element = document.createElement('li');
      tech.appendChild(element);
      element.innerHTML = projects[key].technologies[t];
    }

    const projectLink = document.createElement('a');
    projectLink.classList.add('projectLink');
    projectLink.href = projects[key].projectDemo;
    projectLink.target = '_blank';
    right_side.appendChild(projectLink);

    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.id = projects[key].id;
    projectLink.appendChild(btn);

    const span = document.createElement('span');
    span.classList.add('h_btn');
    btn.appendChild(span);
    span.innerHTML = 'See Project';

    workSection.key = key;
    return workSection;
  }

  Object.keys(projects).forEach((key) => {
    pagecontent.appendChild(CreateWorkSection(key));
  });
});
