const explore = document.getElementById('button');
const projects = document.getElementById('button2');
const bubble = document.getElementsByTagName('li');

const scrollToStack = () => {
  const stack = document.getElementById('stack');
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

const distort = (bubble) => {
  bubble.style.transform = 'scale3d(1.1, 1.1, 1.1)';
  bubble.style.transition = 'transform 0.7s';
}

explore.addEventListener('click', scrollToStack);
projects.addEventListener('click', scrollToProjects);
//bubble.addEventListener('mouseover', distort);