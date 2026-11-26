
const WHATSAPP = "573207053671";
const EMAIL = "contactoandresdigita@gmail.com";

// MENÚ PARA CELULARES

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");

  menuToggle.textContent = nav.classList.contains("open")
    ? "✕"
    : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// AÑO AUTOMÁTICO

document.getElementById("year").textContent =
  new Date().getFullYear();

// BOTONES DE CONTRATACIÓN

document.querySelectorAll(".buy-button").forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();

    const service = button.dataset.service;

    const message =
      `Hola Andres Digital 👋

Estoy interesado en contratar este servicio:

${service}

Me gustaría recibir más información para comenzar.`;

    const url =
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  });
});

// FORMULARIO DE CONTACTO

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", event => {
  event.preventDefault();

  const data = new FormData(form);

  const name = data.get("name");
  const email = data.get("email");
  const service = data.get("service");
  const message = data.get("message");

  const subject = encodeURIComponent(
    `Nueva solicitud - ${name}`
  );

  const body = encodeURIComponent(
`NUEVA SOLICITUD - ANDRES DIGITAL

Nombre: ${name}

Correo: ${email}

Servicio: ${service}

Descripción del proyecto:

${message}

Enviado desde la página web de ANDRES DIGITAL.`
  );

  formMessage.textContent =
    "Abriendo tu aplicación de correo...";

  window.location.href =
    `mailto:${EMAIL}?subject=${subject}&body=${body}`;
});
