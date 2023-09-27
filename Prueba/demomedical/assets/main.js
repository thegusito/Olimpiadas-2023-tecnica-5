const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

///////////////////////////////////////////////////////
// Seleccionar elementos con las clases .map-content
const mapContentElements = document.querySelectorAll(".map-content");

// Seleccionar elementos con las clases .alert-001, .alert-002, .alert-003 y .alert-004
const alert001Elements = document.querySelectorAll(".alert-001");
const alert002Elements = document.querySelectorAll(".alert-002");
const alert003Elements = document.querySelectorAll(".alert-003");
const alert004Elements = document.querySelectorAll(".alert-004");

let intervalId;
let currentAlertClass = null;

// Función para cambiar la clase de elementos
function toggleAlertClass(elements, className) {
  elements.forEach((element) => {
    element.classList.toggle(className);
  });
}

// Función para limpiar todas las clases de todos los elementos
function clearAllClasses() {
  mapContentElements.forEach((element) => {
    element.classList.remove("alert-active");
  });
  alert001Elements.forEach((element) => {
    element.classList.remove("alert-active-sala");
  });
  alert002Elements.forEach((element) => {
    element.classList.remove("alert-active-sala");
  });
  alert003Elements.forEach((element) => {
    element.classList.remove("alert-active-sala");
  });
  alert004Elements.forEach((element) => {
    element.classList.remove("alert-active-sala");
  });
}

// Función para detener los intervalos y limpiar todas las clases
function stopInterval() {
  clearInterval(intervalId);
  clearAllClasses();
  currentAlertClass = null;
}

// Reproducción de audio
const audioElement = new Audio("../assets/images/alarma-de-evacuacin-evacuacion.mp3");

// Función para reproducir el audio
function playAudio() {
  audioElement.play();
}

// Función para detener el audio
function stopAudio() {
  audioElement.pause();
  audioElement.currentTime = 0; // Reiniciar al principio del audio
}

// Escuchar eventos de clic en las etiquetas <a>
document.querySelectorAll("a.button-alarm-a").forEach((link) => {
  link.addEventListener("click", () => {
    if (currentAlertClass !== "alert-001") {
      stopInterval();
      currentAlertClass = "alert-001";
      playAudio(); // Reproducir el audio
      intervalId = setInterval(() => {
        toggleAlertClass(alert001Elements, "alert-active-sala");
        toggleAlertClass(mapContentElements, "alert-active");
      }, 300);
    }
  });
});

document.querySelectorAll("a.button-alarm-b").forEach((link) => {
  link.addEventListener("click", () => {
    if (currentAlertClass !== "alert-002") {
      stopInterval();
      currentAlertClass = "alert-002";
      playAudio(); // Reproducir el audio
      intervalId = setInterval(() => {
        toggleAlertClass(alert002Elements, "alert-active-sala");
        toggleAlertClass(mapContentElements, "alert-active");
      }, 300);
    }
  });
});

document.querySelectorAll("a.button-alarm-c").forEach((link) => {
  link.addEventListener("click", () => {
    if (currentAlertClass !== "alert-003") {
      stopInterval();
      currentAlertClass = "alert-003";
      playAudio(); // Reproducir el audio
      intervalId = setInterval(() => {
        toggleAlertClass(alert003Elements, "alert-active-sala");
        toggleAlertClass(mapContentElements, "alert-active");
      }, 300);
    }
  });
});

document.querySelectorAll("a.button-alarm-d").forEach((link) => {
  link.addEventListener("click", () => {
    if (currentAlertClass !== "alert-004") {
      stopInterval();
      currentAlertClass = "alert-004";
      playAudio(); // Reproducir el audio
      intervalId = setInterval(() => {
        toggleAlertClass(alert004Elements, "alert-active-sala");
        toggleAlertClass(mapContentElements, "alert-active");
      }, 300);
    }
  });
});

// Escuchar eventos de clic en el enlace "stop-interval"
document.querySelectorAll("a.stop-interval").forEach((link) => {
  link.addEventListener("click", () => {
    stopInterval();
    stopAudio(); // Detener el audio
  });
});

/////////////////////////////////////////////////////


const getOptionChart4 = () => {
  const gradientColor = {
      type: "linear",
      x: 0,
      y: 0,
      x2: 1,
      y2: 0,
      colorStops: [
          {
              offset: 0,
              color: "#64c0ff" 
          },
          {
              offset: 1,
              color: "#156ce3" 
          }
      ]
  };

  const gradientColor1 = {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [
        {
            offset: 0,
            color: "#cee959" 
        },
        {
            offset: 1,
            color: "#eaee34" 
        }
    ]
};

const gradientColor2 = {
  type: "linear",
  x: 0,
  y: 0,
  x2: 1,
  y2: 0,
  colorStops: [
      {
          offset: 0,
          color: "#f56c2c" // Inicio del gradiente
      },
      {
          offset: 1,
          color: "#f09926" // Fin del gradiente
      }
  ]
};

const gradientColor3 = {
  type: "linear",
  x: 0,
  y: 0,
  x2: 1,
  y2: 0,
  colorStops: [
      {
          offset: 0,
          color: "#e23ea1" 
      },
      {
          offset: 1,
          color: "#f07ad1" 
      }
  ]
};

  return {
      tooltip: {
          trigger: "item"
      },
      legend: {
          top: "0%",
          left: "center"
      },
      series: [
          {
              name: "Access From",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: true,
              itemStyle: {
                  borderRadius: 8,
                  borderColor: "#b6b2b25d",
                  borderWidth: 2,
                  color: gradientColor
              },
              label: {
                  show: false,
                  position: "center"
              },
              emphasis: {
                  label: {
                      show: false,
                      fontSize: "50",
                      fontWeight: "bold"
                  }
              },
              labelLine: {
                  show: false
              },
              data: [
                  { value: 735, name: "Codigo Azul", itemStyle: { color: gradientColor } },
                  { value: 580, name: "Codigo Naranja", itemStyle: { color: gradientColor2 } },
                  { value: 484, name: "Codigo rosa", itemStyle: { color: gradientColor3 } },
                  { value: 300, name: "Codigo Ambar", itemStyle: { color: gradientColor1 } }
              ]
          }
      ]
  };
};

const initCharts = () => {
  const chart4 = echarts.init(document.getElementById("chart4"));

  chart4.setOption(getOptionChart4());

  chart4.resize();
};

window.addEventListener("load", () => {
  initCharts();
});
