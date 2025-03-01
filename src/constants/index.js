
import photo from '../assets/projects/photography.jpg'
import road from '../assets/projects/project6.jpg'
import foundation from '../assets/projects/project3.jpg'
import calvat from '../assets/projects/calvat.jpg'
import pileDrilling from '../assets/projects/project5.jpg'
import rinspection from '../assets/projects/rinspection.jpg'
import surveying from '../assets/projects/project8.jpg'

import {
  edunet,
  eduskill,
  mathwork,
} from '../assets'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



export const experiences = [
  {
    title: "General Road Construction",
    company_name: "Kenya National Highways Authority",
    icon: eduskill,
    iconBg: "#161329",
    date: "  June 2024 - Sep 2024",
    points: [
      "Worked on critical aspects of highway construction and infrastructure development, ensuring precision, compliance, and efficiency. Gained expertise in surveying work, pile location, culvert installation, reinstatement of centerlines, level checking, and bus bay settings. Contributed to quality control and seamless project execution while upholding engineering standards.",
      "Supervision of Earthworks"
    ],
  },
  {
    title: "Residential Construction",
    company_name: "Residential",
    icon: mathwork,
    iconBg: "#161329",
    date: "Jan 2025 - Current",
    points: [
      "Gained extensive hands-on experience in structural development, focusing on precision, durability, and compliance with industry standards. Developed expertise in concrete strength assessment, ensuring optimal material performance for long-term structural integrity. Acquired deep practical knowledge in plan implementation, site execution, and overall structural analysis, translating designs into functional, high-quality residential spaces."

    ],
  },
  {
    title: "Material Testing & Quality Assurance",
    company_name: "Ministry of Roads and Structures",
    icon: edunet,
    iconBg: "#161329",
    date: "Apr 2024 -June 2024",
    points: [
      `
      Specialized in material testing and quality control, ensuring optimal performance in road and structural projects. Developed expertise in soil classification, aggregate grading, concrete and pre-mix evaluation, and on-site inspections. Gained hands-on experience in field applications, including graded crushed stone compaction for enhanced stability and durability. Committed to precision-driven execution and structural integrity.
      `

    ],
  },
];

export const projects = [
  {
    name: "Chwele Road Surface Dressing/Chipping",
    description:
      "A precision-engineered road dressing project designed for durability and optimal surface performance",
    tags: [
      { name: "Road Surfacing Treatment", color: "blue-text-gradient" },
      { name: "Maintenance Optimization", color: "green-text-gradient" },
      { name: "Quality Control and Inspection", color: "pink-text-gradient" }
    ],
    image: road,
    source_code_link: "",
  },
  {
    name: "Kenya Coast College Site Inspection",
    description:
      "Ensured structural integrity, compliance and sustainability in coastal developments",
    tags: [
      { name: "Site Assessment and Analysis", color: "blue-text-gradient" },
      { name: "Structural Integrity Integration", color: "green-text-gradient" },
      { name: "Risk Mitigation", color: "pink-text-gradient" },
    ],
    image: foundation,
    source_code_link: "",
  },
  {
    name: "Three Star Tower Apartment Quality Control",
    description:
      "Ensured Construction  quality through material inspections ,compliance enforcementand structural integrity assesments.",
    tags: [
      { name: "Quality Assurance", color: "blue-text-gradient" },
      { name: "Material Testing", color: "green-text-gradient" },
      { name: "Technical Reporting", color: "pink-text-gradient" },
    ],
    image: photo,
    source_code_link:
      "",
  },
  {
    name: "Malikisi Road Survey",
    description:
      "Conducted detailed topographic and assesments to support precise road design and construction planning",
    tags: [
      { name: "Land Surveying and Mapping", color: "blue-text-gradient" },
      { name: "Geotechnical Analysis", color: "green-text-gradient" },
      { name: "Data Collection and Interpretation", color: "pink-text-gradient" },
    ],
    image: surveying,
    source_code_link:
      "",
  },
  {
    name: "Misingu Box Culvert Construction",
    description:
      "Executed the construction of a reinforced culvert, ensuring durability, efficiency and water flow, and structural integrityin line with engineering standards",
    tags: [
      { name: "Structural Concrete execution", color: "blue-text-gradient" },
      { name: "Load-bearing Analysis", color: "green-text-gradient" },
      { name: "Hydraulic flow optimization", color: "pink-text-gradient" },
    ],
    image: calvat,
    source_code_link:
      "",
  },
  {
    name: "Sango Pile Drilling",
    description:
      "Executed a precise pile drilling to ensure deep foundation stability and load bearing capacity for structural integrity",
    tags: [
      { name: "Pile Foundation Drilling", color: "blue-text-gradient" },
      { name: "Soil Analysis and Assesment", color: "green-text-gradient" },
      { name: "Equipment Operation and Caliberation", color: "pink-text-gradient" },
      { name: "Load Bearing Capacity Evaluation", color: "pink-text-gradient" },
    ],
    image: pileDrilling,
    source_code_link:
      "",
  },
  {
    name: "Chepsonoi Kapsabet Road Inspection",
    description:
      "Conducted a detailed  Inspection to asses  road quality, structural integrity and compliance with enginnering standards for safety and durabilty.",
    tags: [
      { name: "Road Alignment Verification", color: "blue-text-gradient" },
      { name: "Material Testing and Evaluation", color: "green-text-gradient" }
    ],
    image: rinspection,
    source_code_link:
      "",
  }
]