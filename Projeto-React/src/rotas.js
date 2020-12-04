import { Switch, Route } from 'react-router-dom';

import Produtos from './pages/produtos'
import Pedidos from './pages/pedidos'
import Home from './pages/Home'

function Rotas() {
    return (
        <Switch>
            <Route exact path="/produtos" component={ Produtos } />
            <Route exact path="/pedidos" component={ Pedidos } />
            <Route exact path="/home" component={ Home } />
        </Switch>
    )
}

export default Rotas;