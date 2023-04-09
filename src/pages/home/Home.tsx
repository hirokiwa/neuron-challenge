import styled from "styled-components";
import { coordinate } from "../../@types/global";
import NodeElement from "./DotElement";

const Home = (): JSX.Element => {

    let parentPosition: coordinate = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    }

    return (
        <>
            <Canvaas>
                リロードしてください
                <NodeElement
                    parentPosition = {parentPosition}
                    currentQuantity = {1}
                />
            </Canvaas>
        </>
    );
}

export default Home;

const Canvaas = styled.div`
    position: relative;
`

// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { coordinate } from "../../@types/global";
// import Repeat from "../../function/Repeat";
// import NodeElement from "./DotElement";

// const Home = (): JSX.Element => {
//     const wiindowSize = { x: window.innerWidth, y: window.innerHeight };
//     const dotQuantity = Math.round(wiindowSize.x * wiindowSize.y / 20000);
//     // const [currentQuantity, setCurrentQuantity] = useState<number>(0);
//     // const [drawable, setDrawable] = useState<boolean>(true)
//     const RADIUS = 100;

//     let parentPosition: coordinate = {
//         x: window.innerWidth * Math.random(),
//         y: window.innerHeight * Math.random()
//     }

//     const definePosition = (): coordinate => {
//         const angle = Math.random() * 360;
//         const top = parentPosition.y + RADIUS * Math.sin(angle * (Math.PI / 180));
//         const left = parentPosition.x + RADIUS * Math.cos(angle * (Math.PI / 180));
//         parentPosition = {x: left, y: top}
//         return parentPosition
//     }

//     // useEffect(() => {
//     //     if (currentQuantity > dotQuantity) {
//     //         setDrawable(false)
//     //     }
//     // }, [currentQuantity])
//     return (
//         <>
//             <Canvaas>
//             {/* <Repeat numTimes={dotQuantity}>
//                 {(index: number) => <DotElement
//                     position = {definePosition()}
//                 />}
//             </Repeat> */}
//             <NodeElement
//                 position = {definePosition()}
//                 currentQuantity = {1}
//                 radius = {RADIUS}
//             />
//             </Canvaas>
//         </>
//     );
// }

// export default Home;

// const Canvaas = styled.div`
//     position: relative;
// `