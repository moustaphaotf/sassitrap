import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Settings.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
// @ts-ignore
import awsconfig from '../aws-exports';
import { Auth } from 'aws-amplify';
import { exit, power } from 'ionicons/icons';


const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>Paramètres</IonTitle>
          <IonButtons slot="end">
            {/* Add the logout button icon */}
            <IonButton onClick={() => Auth.signOut()}>
              <IonIcon icon={power} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
                
      </IonContent>
    </IonPage>
  );
};

export default Settings;
