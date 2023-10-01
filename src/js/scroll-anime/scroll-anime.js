window.addEventListener('scroll', function () {
  let button = document.querySelector('.upbtn');
  if (window.scrollY > 100) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

document.querySelector('.upbtn').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
