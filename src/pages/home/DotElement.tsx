import { FC } from "react";
import styled from "styled-components";
import { coordinate } from "../../@types/global";

interface Props{
    parentPosition: coordinate;
    currentQuantity: number
}

const NodeElement: FC<Props> = ({ parentPosition, currentQuantity }): JSX.Element => {
    
    const DIAMETER = "1em"
    const radius = 100
    const fontSize = getComputedStyle(document.documentElement).fontSize;
    const diameterPx = parseInt(DIAMETER) * parseFloat(fontSize);
    const angleToParentNode = Math.random() * 360;

    const defineCurrentPosition = ():coordinate => {
        const top = parentPosition.y - radius * Math.sin(angleToParentNode * (Math.PI / 180));
        const left = parentPosition.x + radius * Math.cos(angleToParentNode * (Math.PI / 180));
        return {x: left, y: top}
    }

    const currentPosition = defineCurrentPosition()

    return (
        currentQuantity > 5
        ? <></>
        : <>
            <Point
                position = { currentPosition }
                diameter = {diameterPx}
            >
                {/* {currentQuantity} */}
            </Point>
            {
                currentQuantity === 1
                ? <></>
                :<Edge
                    radius = {radius}
                    position={{
                        x: parentPosition.x - radius / 2 * (1 - Math.cos(angleToParentNode * (Math.PI / 180))) + diameterPx / 2,
                        y: parentPosition.y - radius / 2 * Math.sin(angleToParentNode * (Math.PI / 180)) + diameterPx / 2,
                    }}
                    angleToParentNode = { angleToParentNode }
                    >
                </Edge>
            }
            <NodeElement
                parentPosition = {currentPosition}
                currentQuantity = {currentQuantity + 1}
            />
            {
                Math.floor(Math.random() * 10) % 2 === 0
                ?<></>
                :<NodeElement
                    parentPosition = {currentPosition}
                    currentQuantity = {currentQuantity + 1}
                />
            }
        </>
    );
}

export default NodeElement;

const Point = styled.div<{ position: coordinate, diameter: number }>`
    z-index: 2;
    color:#fff;
    position: absolute;
    height: ${({ diameter }) => diameter }px;
    width: ${({ diameter }) => diameter }px;
    /* height: 1em;
    width: 1em; */
    border-radius: 50%;
    background:black;
    top: ${({ position }) => position.y }px;
    left: ${({ position }) => position.x }px;
`

const Edge = styled.div<{ position: coordinate, radius: number, angleToParentNode: number }>`
    z-index: 1;
    position: absolute;
    width: ${({ radius }) => radius }px;
    height: 1px;
    background:#900;
    transform: rotate(${({ angleToParentNode }) => - angleToParentNode}deg);
    top: ${({ position }) => position.y}px;
    left: ${({ position }) => position.x }px;
`


// import { FC } from "react";
// import styled from "styled-components";
// import { coordinate } from "../../@types/global";
// import Repeat from "../../function/Repeat";

// interface Props{
//     position: coordinate;
//     currentQuantity: number,
//     radius: number
// }

// const NodeElement: FC<Props> = ({ position, currentQuantity, radius }): JSX.Element => {
//     const angleToNextNode = Math.random() * 360;

//     const DIAMETER = "1em"
//     const fontSize = getComputedStyle(document.documentElement).fontSize;
//     const diameterPx = parseInt(DIAMETER) * parseFloat(fontSize);

//     const definePosition = (): coordinate => {
//         const top = position.y - radius * Math.sin(angleToNextNode * (Math.PI / 180));
//         const left = position.x + radius * Math.cos(angleToNextNode * (Math.PI / 180));
//         position = {x: left, y: top}
//         return position
//     }
//     console.log(currentQuantity)
//     console.log(angleToNextNode)

//     return (
//         currentQuantity > 10
//         ? <></>
//         : <>
//             <Point
//                 position = { position }
//                 diameter = {diameterPx}
//             >
//                 {currentQuantity}
//             </Point>
//             <Edge
//                 radius = {radius}
//                 position={{
//                     x: position.x - radius / 2 * (1 - Math.cos(angleToNextNode * (Math.PI / 180))) + diameterPx / 2,
//                     y: position.y - radius / 2 * Math.sin(angleToNextNode * (Math.PI / 180)) + diameterPx / 2,
//                 }}
//                 angleToNextNode = { angleToNextNode }
//                 >
//                 {currentQuantity}
//             </Edge>
//             {/* <Repeat numTimes={Math.random() * 2 + 1}>
//                 {(index: number) => 
//                 <NodeElement
//                     position = {definePosition()}
//                     currentQuantity = {currentQuantity + 1}
//                     radius = {radius}
//                 />}
//             </Repeat> */}
//             <NodeElement
//                 position = {definePosition()}
//                 currentQuantity = {currentQuantity + 1}
//                 radius = {radius}
//             />
//             {/* <NodeElement
//                 position = {definePosition()}
//                 currentQuantity = {currentQuantity + 1}
//                 radius = {radius}
//             /> */}
//         </>
//     );
// }

// export default NodeElement;

// const Point = styled.div<{ position: coordinate, diameter: number }>`
//     z-index: 2;
//     color:#fff;
//     position: absolute;
//     height: ${({ diameter }) => diameter }px;
//     width: ${({ diameter }) => diameter }px;
//     /* height: 1em;
//     width: 1em; */
//     border-radius: 50%;
//     background:black;
//     top: ${({ position }) => position.y }px;
//     left: ${({ position }) => position.x }px;
// `

// const Edge = styled.div<{ position: coordinate, radius: number, angleToNextNode: number }>`
//     z-index: 1;
//     position: absolute;
//     width: ${({ radius }) => radius }px;
//     height: 1px;
//     background:#900;
//     transform: rotate(${({ angleToNextNode }) => - angleToNextNode}deg);
//     top: ${({ position }) => position.y}px;
//     left: ${({ position }) => position.x }px;
// `