import { styled } from "@mui/material";

export const HeaderContainer = styled('header')`
  display: flex;
  justify-content: center;
  color: red;
  padding: ${ ({theme}) => theme.spacing(2) };
`;

export const Logo = styled('img')`
width: 125px;
`;