import { Link, Box } from "@mui/material"
import NextLink from 'next/link';
import { HeaderContainer, Logo, LinksContainer } from "./headerAdmin.style"


export default function HeaderAdmin() {
  return (
    <HeaderContainer>
      <div>
        <Logo src={'/imagens/logo.svg'} alt={'adote um pet'} />
        <LinksContainer>
          <Link component={NextLink} href={'/pets/cadastro'}>
            <a>Cadastrar Pet</a>
          </Link>
          <Link component={NextLink} href={'/pets/relatorio'}>
            <a>
              Relátorio <Box component={'span'}
              sx={{display: {sm: 'initial', xs: 'none'}}}>de Adoção</Box> 
            </a>
          </Link>
        </LinksContainer>
      </div>
    </HeaderContainer>
  )
}