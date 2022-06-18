/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
window.addEventListener('DOMContentLoaded', (event) => {
  const projects = {
    first: {
      id: 'first',
      name: 'Tonic',
      jobdescription: [
        'Canopy',
        ' &bullet; Backend dev  &bullet;',
        2015,
      ],
      image: './image/SnapshootPortfolio.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      technologies: [
        'html', 'css', 'Javascript',
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
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      technologies: [
        'html', 'css', 'Javascript',
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
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      technologies: [
        'html', 'css', 'Javascript',
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

    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.id = projects[key].id;
    right_side.appendChild(btn);

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

  const element = document.querySelector('.btn');
  element.addEventListener('click', () => {
    const btnID = element.id;
    const pageBody = document.querySelector('.popbody');
    const bodyBackground = document.querySelector('#blur');
    bodyBackground.classList.add('pop-background');

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.id = 'popupwindow';
    pageBody.appendChild(popup);

    const popbtn = document.createElement('button');
    popbtn.classList.add('pop-close');
    popup.appendChild(popbtn);
    popbtn.innerHTML = '&times;';

    popbtn.addEventListener('click', () => {
      document.classList.remove('.popup');
      document.body.style.overflow = 'auto';
    });

    const pophead = document.createElement('h1');
    pophead.classList.add('pop-title');
    pophead.id = 'pop-title';
    popup.appendChild(pophead);
    pophead.innerHTML = projects[btnID].name;

    const jobDescript = document.createElement('ul');
    jobDescript.classList.add('canopy', 'canopy-list');
    popup.appendChild(jobDescript);

    for (const j in projects[btnID].jobdescription) {
      const element = document.createElement('li');
      jobDescript.appendChild(element);
      element.innerHTML = projects[btnID].jobdescription[j];
    }

    const image = document.createElement('img');
    image.classList.add('pop-img');
    image.id = 'pop-img';
    popup.appendChild(image);
    image.src = projects[btnID].image;

    const right = document.createElement('div');
    right.classList.add('pop-right');
    popup.appendChild(right);

    const paragraph = document.createElement('p');
    paragraph.classList.add('pop-paragraph');
    paragraph.id = 'pop-paragraph';
    right.appendChild(paragraph);
    paragraph.innerHTML = projects[btnID].description;

    const left = document.createElement('div');
    left.classList.add('pop-left');
    right.appendChild(left);

    const tech = document.createElement('ul');
    tech.classList.add('lang', 'pop-lang');
    tech.id = 'pop-lang';
    left.appendChild(tech);

    // eslint-disable-next-line no-restricted-syntax
    for (const t in projects[btnID].technologies) {
      const element = document.createElement('li');
      tech.appendChild(element);
      element.innerHTML = projects[btnID].technologies[t];
    }

    const livelink = document.createElement('a');
    livelink.id = 'livelink';
    left.appendChild(livelink);
    livelink.href = projects[btnID].liveLink;

    const livebtn = document.createElement('button');
    livebtn.classList.add('pop-btn');
    livebtn.id = 'details';
    livelink.appendChild(livebtn);

    const livespan = document.createElement('span');
    livespan.classList.add('h_btn');
    livebtn.appendChild(livespan);
    livespan.innerHTML = 'GO live';

    const shapelive = document.createElement('i');
    livespan.classList.add('fa', 'fa-external-link');
    livebtn.appendChild(shapelive);

    const gitlink = document.createElement('a');
    gitlink.id = 'sourcelink"';
    left.appendChild(gitlink);
    gitlink.href = projects[btnID].sourcelink;

    const gitbtn = document.createElement('button');
    gitbtn.classList.add('pop-btn');
    gitbtn.id = 'details';
    gitlink.appendChild(gitbtn);

    const gitspan = document.createElement('span');
    gitspan.classList.add('h_btn');
    gitbtn.appendChild(gitspan);
    gitspan.innerHTML = 'Go resource';

    const shapegit = document.createElement('i');
    gitspan.classList.add('fa', 'fa-github');
    gitbtn.appendChild(shapegit);

    return popup;
  });
});
