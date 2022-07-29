import type { NextPage } from 'next';
import ListaPets from '../ui/components/listaPets/listaPest';
import Title from '../ui/components/Title/title';
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material';
import { useIndex } from '../data/hooks/pages/useIndex';

const Home: NextPage = () => {
  const {
    listaPets,
    petSelecionado,
    setPetSelecionado,
    email,
    setEmail,
    valor,
    setValor,
    mensagem,
    setMensagem,
    adotar
  } = useIndex();

  return (
    <div>
      <Title
        subtitulo={
          <span> Com um pequeno valor mensal, você <br />
            pode <strong> adotar um pet virtualmente</strong>
          </span>} />

      <ListaPets
        pets={listaPets}
        onSelect={(pet) => setPetSelecionado(pet)}
      />

      <Dialog
        open={petSelecionado !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setPetSelecionado(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type={'email'}
              label={'E-mail'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type={'number'}
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              label={'Quantia por Mês'} />
          </Grid>
        </Grid>
        <DialogActions>
          <Button
            onClick={() => setPetSelecionado(null)}
            color={'secondary'}>Cancelar</Button>
          <Button
            onClick={() => adotar()}
            variant={'contained'}>Confirmar Adoção</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={mensagem.length > 0}
        message={mensagem}
        autoHideDuration={2500}
        onClose={() => setMensagem('')}
      />
    </div>
  )
}

export default Home
