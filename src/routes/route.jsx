import { BrowserRouter, Switch, Route } from 'react-router-dom'
import InicialPage from '../pages/IncialPage'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={InicialPage} />
      </Switch>
    </BrowserRouter>
  )
}
