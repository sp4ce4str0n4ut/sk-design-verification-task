import styled from "styled-components";
import { fontColor, primaryColor } from "../../constants/colors";
import { fontOpenSans, fontSfUiDisplaySemibold } from "../../constants/fonts";

export const InfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 40px;

    min-width: 65%;

    @media screen and (max-width: 1440px) {
    flex-direction: column;
    align-items: center;
    min-width: 50%;
  }
`;

export const InfoLogo = styled.img`
    width: 475px;
`;

export const InfoHeader = styled.span`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    width: fit-content;

    font-family: ${fontSfUiDisplaySemibold};
    font-size: 24px;
    line-height: 150%;
    text-align: center;

    color: ${fontColor};
`;

export const InfoText = styled.div`
    max-width: 940px;

    font-family: ${fontOpenSans};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-align: left;

    color: ${fontColor};

    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
`;
export const InfoLink = styled.a`
    text-decoration: none;
    color: ${primaryColor};
`;
