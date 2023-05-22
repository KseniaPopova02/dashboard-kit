import { React, useState, useEffect } from "react";
import mockedData from "../../../Data/OverviewChart.json";
import {
  StyledWrapper,
  StyledText,
  StyledNumbers,
  StyledDataWrapper,
  StyledWrapperWrapper,
} from "./style";
import { formatData } from "./helpers";

// export const Info = () => {
//   const [dataChart, setDataChart] = useState([]);
//   useEffect(() => {
//     setDataChart(data);
//   }, []);

//   return (
//     <StyledWrapper>
//       {Object.entries(dataChart).map(([key, value]) => (
//         <StyledWrapperWrapper key={key}>
//           <StyledDataWrapper>
//             <StyledText>{key}</StyledText>
//             <StyledNumbers>{value}</StyledNumbers>
//           </StyledDataWrapper>
//         </StyledWrapperWrapper>
//       ))}
//     </StyledWrapper>
//   );
// };

export const Info = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(mockedData);
  }, []);

  return (
    <StyledWrapper>
      {formatData(data).map((item) => (
        <StyledWrapperWrapper>
          <StyledDataWrapper>
            <StyledText>{item.label}</StyledText>
            <StyledNumbers>{item.number}</StyledNumbers>
          </StyledDataWrapper>
        </StyledWrapperWrapper>
      ))}
    </StyledWrapper>
  );
};
