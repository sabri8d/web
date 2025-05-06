function Trainers() {
  const Trainerrss = ['د.وليد','ا.امير', 'ا.احمد', 'د.صبري'];
  const list = document.getElementById('trainerss');
  list.innerHTML = '';
  Trainerrss.forEach(name => {
    const ul = document.createElement('ul');
    ul.textContent = name;
    list.appendChild(ul);
  });
}

function Cours() {
  const coures = [
    {
      name: "C++",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_oP59oPVx2RhNUPrnI_pPNSYE7aLH29OUuQ&s"
    },
    {
      name: "تصميم صفحات الويب",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4zTyj0rHqMt--orrUQc345IsH5X_rTdBlYw&s"
    },
    {
      name: "اللغة الإنجليزية للتكنولوجيا",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OA8becxA2z7MxT9TiM0WcA-G-I4ZHMenPg&s"
    }
  ];

  const list = document.getElementById('coursess');
  list.innerHTML = '';

  const ul = document.createElement('ul');

  coures.forEach(course => {
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = course.img;
    img.alt = course.name;
    img.width =400;
    img.style.marginLeft = "10px";

    const text = document.createTextNode(course.name);

    li.appendChild(img);
    ul.appendChild(text);
    ul.appendChild(li);
  });

  list.appendChild(ul);
}

function register(event) {
  event.preventDefault();
  alert("تم التسجيل بنجاح.");
}
