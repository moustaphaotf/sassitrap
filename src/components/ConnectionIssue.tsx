import { IonButton, IonText } from '@ionic/react';
import './ConnectionIssue.css';

interface ContainerProps {

}

const ConnectionIssue: React.FC<ContainerProps> = ({  }) => {
  return (
    <div className='container'>
        <IonText>
            <h1>Erreur de connexion</h1>
            <p>Une erreur est survenue, dû à un manque de connectivité ! Veuillez vérifier que votre téléphone est connecté à internet !</p>
        </IonText>
        <IonButton shape='round'>Réessayer</IonButton>
    </div>
  );
};

export default ConnectionIssue;
