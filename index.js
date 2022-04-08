const explore = document.getElementById('button');
const projects = document.getElementById('button2');
const bubble = document.getElementsByTagName('li');

const scrollToStack = () => {
  const stack = document.getElementById('tech-stack');
  if (stack) {
    stack.scrollIntoView({ behavior: 'smooth' });
  }
}

const scrollToProjects = () => {
  const stack = document.getElementById('projects');
  if (projects) {
    stack.scrollIntoView({ behavior: 'smooth' });
  }
}

explore.addEventListener('click', scrollToStack);
projects.addEventListener('click', scrollToProjects);