import { styled } from "@mui/material";


export const ListaPestStyled = styled('ul')`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const ListaItemStyled = styled('li')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;

export const StyledImg = styled('img')`
  width: 100%;
`;

export const InformacoeStyled = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const NomeStyled = styled('h2')`
margin: 0;

`;

export const Desc = styled('p')`
margin: 0;
word-break: break-word;
`;