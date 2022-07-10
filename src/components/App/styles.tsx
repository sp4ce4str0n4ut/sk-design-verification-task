import styled from "styled-components";
import { backgroundColor } from "../../constants/colors";

export const AppGlob = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 60px;

    position: relative;
    width: 100vw;
    height: 100vh;

    background: ${backgroundColor};

    @media screen and (max-width: 1023px) {
    height: 100vh;
    }
`;

export const AppWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 40px;
    gap: 60px;
    
    max-width: 1440px;
    height: 466px;

    @media screen and (max-width: 1339px) {
      flex-direction: column;
      justify-content: center;

      max-width: 980px; 
    }

    @media screen and (max-width: 1023px) {
      flex-direction: column;
      justify-content: center;

      max-width: 800px; 
    }
`;
