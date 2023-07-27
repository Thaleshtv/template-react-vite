import { Container } from '@mui/material'
import { Header } from './style'

export default function Menu() {
  return (
    <>
      <Header>
        <Container fixed>
          <header>
            <h1>Logo</h1>
            <button>Acessar</button>
          </header>
        </Container>
      </Header>
    </>
  )
}
