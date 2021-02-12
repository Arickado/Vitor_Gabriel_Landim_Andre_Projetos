import { Switch, Route } from 'react-router-dom';
import {lazy, Suspense} from 'react'

const Produtos = lazy(() => import('./pages/produtos'));
const Pedidos = lazy(() => import('./pages/pedidos'));
const Home = lazy(() => import('./pages/Home'));

function Rotas() {
    return (
        <Switch>
            <Suspense fallback={<div>Carregando...</div>}>
                <section>
                <Route exact path="/produtos" component={ Produtos } />
                <Route exact path="/pedidos" component={ Pedidos } />
                <Route exact path="/" component={ Home } />
                </section>
            </Suspense>
        </Switch>
    )
}

export default Rotas;