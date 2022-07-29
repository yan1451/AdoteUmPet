import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { NextPage } from "next";
import { UseRelatorio } from "../../data/hooks/pages/pets/useRelatorio";
import Title from "../../ui/components/Title/title";

const Relatorio: NextPage = () => {

  const { listaRelatorio } = UseRelatorio();

  return (
    <>
      <Title
        titulo={'Relatorio de Adoção'}
        subtitulo={'Veja a lista de pets adotados'}
      />
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 830, mx: 'auto', p: { xs: 3, md: 5 } }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pet</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell align={'right'}>Valor Mensal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listaRelatorio.map((relatorio) => (
              <TableRow key={relatorio.id}>
                <TableCell>{relatorio.pets.name}</TableCell>
                <TableCell>{relatorio.email}</TableCell>
                <TableCell align={'right'}>{relatorio.value}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}


export default Relatorio;