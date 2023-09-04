import { IonAvatar, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Help.css';

const Help: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Assistance</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p style={{textAlign: 'center', padding: 10}}>Besoin d'aide dans l'utilisation de votre dispositif, nous sommes là pour ça !</p>
        <div>
          <IonItem button detail={true}>
            <IonAvatar style={{marginRight: 10}}>
              <IonImg src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </IonAvatar>
            <IonLabel className="ion-text-wrap">
              <IonLabel style={{fontWeight: 'bold'}}>Tutoriel</IonLabel>
              <IonLabel>Pour tout savoir sur le piège et les produits qui vont avec.</IonLabel>
            </IonLabel>
          </IonItem>

          <IonItem button detail={true}>
            <IonAvatar style={{marginRight: 10}}>
              <IonImg src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </IonAvatar>
            <IonLabel className="ion-text-wrap">
              <div>
                <p style={{fontWeight: 'bold'}}>Question fréquentes</p>
                <p>Pour tout savoir sur le piège et les produits qui vont avec.</p>
              </div>
            </IonLabel>
          </IonItem>

          <IonItem button detail={true}>
            <IonAvatar style={{marginRight: 10}}>
              <IonImg src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </IonAvatar>
            <IonLabel className="ion-text-wrap">
              <div>
                <p style={{fontWeight: 'bold'}}>Contactez-nous</p>
                <p>Pour tout savoir sur le piège et les produits qui vont avec.</p>
              </div>
            </IonLabel>
          </IonItem>

          
          <IonItem button detail={true}>
            <IonAvatar style={{marginRight: 10}}>
              <IonImg src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </IonAvatar>
            <IonLabel className="ion-text-wrap">
              <div>
                <p style={{fontWeight: 'bold'}}>Manuel d'utilisation</p>
                <p>Pour tout savoir sur le piège et les produits qui vont avec.</p>
              </div>
            </IonLabel>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Help;
