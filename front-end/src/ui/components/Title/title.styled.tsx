import { styled } from "@mui/material";


export const TitleStyled = styled('h1')`
  text-align: center;
  font-size: 20px;
  font-weight: normal;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const SubTitle = styled('h2')`
  text-align: center;
  font-size: 18px;
  font-weight: normal;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  color: ${({ theme }) => theme.palette.text.secondary}; ;
`;