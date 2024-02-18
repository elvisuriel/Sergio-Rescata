import { RiFacebookCircleFill, RiInstagramLine, RiLinkedinBoxFill, RiTwitterXFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

export const footerData = [
  {
    id: 1,
    title: "Información",
    links: [
      {
        id: 1,
        name: "Acerca de nosotros",
        link: "/acerca-de",
      },
      {
        id: 2,
        name: "Proyectos",
        link: "/proyectos",
      },
      {
        id: 3,
        name: "Cómo ayudar",
        link: "/como-ayudar",
      },
      {
        id: 4,
        name: "Noticias",
        link: "/noticias",
      },
      {
        id: 5,
        name: "Contacto",
        link: "/contacto",
      },
    ],
  },
  {
    id: 2,
    title: "Comunidad",
    links: [
      {
        id: 1,
        name: "Participa",
        link: "/participa",
      },
      {
        id: 2,
        name: "Voluntariado",
        link: "/voluntariado",
      },
      {
        id: 3,
        name: "Eventos",
        link: "/eventos",
      },
      {
        id: 4,
        name: "Blog",
        link: "/blog",
      },
      {
        id: 5,
        name: "Newsletter",
        link: "/newsletter",
      },
    ],
  },
  {
    id: 3,
    title: "Colaboradores",
    links: [
      {
        id: 1,
        name: "Nuestros colaboradores",
        link: "/nuestros-colaboradores",
      },
      {
        id: 2,
        name: "Cómo colaborar",
        link: "/como-colaborar",
      },
    ],
  },
];

export const footerSocialNetworks = [
  {
    id: 1,
    icon: <RiInstagramLine />,
    link: "https://www.instagram.com/sergiorescata?igsh=dTYzMXhqZmd1cmEx",
  },
  {
    id: 2,
    icon: <RiFacebookCircleFill />,
    link: "https://www.facebook.com/sergiorescata1?mibextid=kFxxJD",
  },
  {
    id: 3,
    icon: <CiYoutube />,
    link: "https://m.youtube.com/@SergioRescataCucuta",
  },
  {
    id: 4,
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/@sergiorescata?_t=8jbNmyiFWoX&_r=1",
  },
];
