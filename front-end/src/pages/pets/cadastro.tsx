import { NextPage } from "next";
import { useCadastro } from '../../data/hooks/pages/pets/useCadastro';
import Title from "../../ui/components/Title/title";
import { Paper, Grid, TextField, Button, Snackbar } from "@mui/material";

const Cadastro: NextPage = () => {

  const {
    cadastrar,
    foto,
    historia,
    mensagem,
    nome,
    setFoto,
    setHistoria,
    setMensagem,
    setNome
  } = useCadastro();

  return (
    <div>
      <Title
        titulo={'oi'}
        subtitulo={'alo'} />
      <Paper sx={{ maxWidth: 970, mx: 'auto' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label={'Nome'}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              fullWidth
              placeholder={"Digite o nome do pet"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'História do Pet'}
              value={historia}
              fullWidth
              onChange={(e) => setHistoria(e.target.value)}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'Foto'}
              value={foto}
              fullWidth
              onChange={(e) => setFoto(e.target.value)}
              placeholder={"Faça upload da imagem"}
            />
            <Button
              variant={'contained'}
              color={'secondary'}
              sx={{ mt: 2 }}
              component={'a'}
              href={'https://imgur.com/upload'}
              target={'_blank'}
            >
              Enviar Imagem
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Button
              variant={'contained'}
              fullWidth
              sx={{ maxWidth: { md: 200 }, mt: 4 }}
              onClick={() => cadastrar()}
            >Cadastrar Pet
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Snackbar
        open={mensagem.length > 0}
        autoHideDuration={2500}
        onClose={() => setMensagem('')}
        message={mensagem}
      />
    </div>
  )
}

export default Cadastro;