import { Store } from 'redux';
import { Provider } from 'react-redux';
import Routes from './routes';

interface Store_Props {
    store: Store
}

function App(props: Store_Props) {
    const { store } = props;
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}

export default App;
