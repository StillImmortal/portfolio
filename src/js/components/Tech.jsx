import React from "react";

// Components
import BallCanvas from "./canvas/BallCanvas.jsx";

// HOC
import HOC from "../HOC.jsx";

// Constants
import { technologies } from "../../constants/constants";

function Tech() {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
        </div>
    )
}

export default HOC(Tech, "")