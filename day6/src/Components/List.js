
// export default function List() {
//         const animals=["dog","cat","hyena","lion"]
//         const result=animals.map((ani)=><li>{ani}</li>)
//       return (
//             <div>
//         <ul>
//             {result}
//         </ul>
//     </div>
//   )
// }

import React from 'react'
function DisplayName(props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}
export default function List() {
    const studentName=["md","sachin","sandu","selva"]
    // const studentName=["dog","cat","hyena","lion"]

    const stName=studentName.map((stu)=><DisplayName name={stu}></DisplayName>)
  return (
    <div>
      {stName}
    </div>
  )
}
