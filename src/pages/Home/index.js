import Loadable from 'react-loadable'

const Home = Loadable({
  loader: () => import('./Home'),
  loading: () => null,
})

export default Home
