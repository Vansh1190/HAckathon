import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/CreateEvent';
import Tab2 from './pages/RegisterUser';
// import Tab3 from './pages/Ma';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import CreateEvent from './pages/CreateEvent';
import RegisterUser from './pages/RegisterUser';
import Attendence from './pages/Attendence';
import Certificate from './pages/Certificate/Certificate';
import CheckOutAttendence from './pages/CheckOutAttendence';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <CreateEvent />
          </Route>
          <Route exact path="/Register/:id">
            <RegisterUser />
          </Route>
          <Route path="/tab3">
            <Attendence />
          </Route>
          <Route path="/certiicate">
            <Certificate />
          </Route>
          <Route path="/CheckoutAttendence">
            <CheckOutAttendence />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar style={{overflow:'auto'}} slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Create Event</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/Register/5">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Register User</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Mark Attendence</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Export" href="/export">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Export</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Certificate" href="/certiicate">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Download Certificate</IonLabel>
          </IonTabButton>
          <IonTabButton tab="CheckoutAttendence" href="/CheckoutAttendence">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Check OutAttendence</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
