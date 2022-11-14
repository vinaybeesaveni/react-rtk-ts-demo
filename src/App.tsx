import CakeView from './features/cake/CakeView';
import IceCreamView from './features/iceCream/IceCreamView';
import UserView from './features/user/UserView';
import { Provider } from 'react-redux';
import store from './app/store';
import './App.css'

function App() {
  return (
    <div className="App">
     <Provider store={store}>
     <CakeView />
      <IceCreamView />
      <UserView />
     </Provider>
    </div>
  );
}

export default App;
