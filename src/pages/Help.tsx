import { IonAvatar, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Help.css';

const Help: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>Assistance</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p style={{textAlign: 'center', padding: 10}}>Besoin d'aide dans l'utilisation de votre dispositif, nous sommes là pour ça !</p>
        <IonList mode="ios"  inset={true}>
          <IonItem button color="light" detail={true}>
            <IonAvatar style={{marginRight: 10}}>
              <IonImg src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </IonAvatar>
            <IonLabel className="ion-text-wrap">
              <div>
                <p style={{fontWeight: 'bold'}}>Tutoriel</p>
                <p>Pour tout savoir sur le piège et les produits qui vont avec.</p>
              </div>
            </IonLabel>
          </IonItem>

          <IonItem button color="light" detail={true}>
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

          <IonItem button color="light" detail={true}>
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

          
          <IonItem button color="light" detail={true}>
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
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Help;
