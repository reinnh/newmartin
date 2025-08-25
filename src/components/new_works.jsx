import React from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { newprojects } from "../constants";

const ProjectCard = ({ name, description, tags, image, source_code_link, inx }) => {
    const [showFullDesc, setShowFullDesc] = React.useState(false);

    // Helper to truncate description to a single line ending with "..."
    const getShortDescription = (desc) => {
        const maxLength = 60;
        if (desc.length <= maxLength) return desc;
        return desc.slice(0, maxLength) + "....";
    };

    return (
        <div
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ${inx == 1 ? 'md:col-span-2 md:row-span-2  md:w-full  ' : ''}`}
        >
            <div className={`relative w-full h-[340px] ${inx == 1 ? 'md:h-full' : ''}`}>
                <img
                    src={image}
                    alt="project_image"
                    className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                    <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
                    </div>
                </div>
            </div>
            <div className={`"mt-5  " ${inx == 1 ? 'md:hidden' : 'block'}`}>
                <h3 className="text-white  text-[24px]">{name}</h3>
                <p
                    className="mt-2 text-secondary text-[14px] cursor-pointer"
                    onClick={() => setShowFullDesc(!showFullDesc)}
                    title="Click to expand"
                >
                    {showFullDesc ? description : getShortDescription(description)}
                </p>
            </div>
        </div>
    );
};

const NewWorks = () => {
    return (
        <>

            <p className={`${styles.sectionSubText} underline`}>Ongoings</p>
            <h2 className={`${styles.sectionHeadText} text-orange-400`}>Three Star Tower</h2>

            <div className="w-full flex text-lg">
                A newly developed residential high-rise consisting of 15 upper floors, a ground floor, and multiple basement levels designed for parking and utilities.

            </div>
            <div className="text-lg mt-5">
                Modern architectural design with a focus on functionality and structural efficiency.
                Spacious balconies and glass-panel façade to maximize natural lighting.
                Well-planned basement facilities for ample parking and services.
                Urban-centered location providing accessible connectivity to key city areas.
                Secure and energy-conscious infrastructure aligned with modern construction standards.
            </div>
            <div className="text-green-600 flex gap-x-7"> <p> #Site Manager </p> <p>#Quality Control Technician</p></div>
            <div className="mt-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
                {newprojects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} {...project} inx={index + 1} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(NewWorks, "");
