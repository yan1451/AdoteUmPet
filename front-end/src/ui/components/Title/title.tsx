import { TitleStyled, SubTitle } from "./title.styled";

export default function Title(props: any) {
  return (
    <>
      <TitleStyled>{props.titulo}</TitleStyled> 
      <SubTitle> {props.subtitulo}</SubTitle>
    </>
  )


}