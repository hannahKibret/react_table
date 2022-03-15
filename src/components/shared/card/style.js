import styled from "@emotion/styled";

export const StHeader = styled.h1`
  background-color: ${(props) => (props.dark ? "#000" : "#fffa")};
`;

export const StCardRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 200px;
  background-color: blue;
  .one {
    background-color: #36af18;
    padding: 4px;
    height: 40px;
  }
  .two {
    background-color: #9b810d;
    padding: 4px;
    height: 80px;
  }
  .three {
    background-color: #e2184a;
    padding: 4px;
    height: 100px;
  }
`;

// export const StCardFooter = styled.h2`
//   display: flex;
//   justify-content: flex-end;
//   margin-top: 100px;
// `;
