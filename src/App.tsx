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
import { ellipse, square, triangle, settingsOutline, logoAndroid, helpOutline  } from 'ionicons/icons';
import Tab1 from './pages/Traps';
import Tab2 from './pages/Settings';
import Tab3 from './pages/Help';
import TrapDetail from './pages/TrapDetail';

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/traps">
            <Tab1 />
          </Route>
          <Route exact path="/settings">
            <Tab2 />
          </Route>
          <Route path="/help">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/traps" />
          </Route>
          <Route path='/traps/:trapId' component={TrapDetail} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="traps" href="/traps">
            <IonIcon aria-hidden="true" icon={logoAndroid} />
            <IonLabel>Mes pièges</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon aria-hidden="true" icon={settingsOutline} />
            <IonLabel>Paramètres</IonLabel>
          </IonTabButton>
          <IonTabButton tab="help" href="/help">
            <IonIcon aria-hidden="true" icon={helpOutline} />
            <IonLabel>Assistance</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
