import { Button } from "@mui/material";
import {
  NomeStyled,
  ListaPestStyled,
  ListaItemStyled,
  StyledImg,
  InformacoeStyled,
  Desc
} from "./listaPest.styled";
import { pet } from "../../../data/@types/pet";

interface ListaProps {
  pets: pet[];
  onSelect: (pet: pet) => void;
}

export default function ListaPets(props: ListaProps) {
  return (
    <>
      <ListaPestStyled>
        {props.pets.map((pet) => (
          <ListaItemStyled key={pet.id}>
            <StyledImg src={pet.picture} />
            <InformacoeStyled>
              <NomeStyled>{pet.name}</NomeStyled>
              <Desc> {pet.history}</Desc>
              <Button
                fullWidth
                onClick={() => props.onSelect(pet)}
                variant={'contained'}>Adotar {pet.name}</Button>
            </InformacoeStyled>
          </ListaItemStyled>
        ))
        }
      </ListaPestStyled>

    </>
  )
}