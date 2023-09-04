import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TrapList from '../components/TrapList';
import { add } from 'ionicons/icons';
import { useEffect, useRef, useState } from 'react';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import { useHistory } from 'react-router';

interface TrapInterface {
  id: string;
  password: string;
  dateOfManufacture: string;
  dateOfPurchase: string;
  state: string;
  automode: boolean;
}

const Traps: React.FC = () => {
  const data = JSON.parse('[{"id":"SASSI-1CH-RFLV","dateOfManufacture":"2023-08-01","dateOfPurchase":"2023-08-15","state":"on","automode":true,"password":"RFLV"},{"id":"SASSI-5EF-3NV6","dateOfManufacture":"2023-07-10","dateOfPurchase":"2023-07-20","state":"off","automode":false,"password":"3NV6"},{"id":"SASSI-D07-JF0Q","dateOfManufacture":"2023-06-05","dateOfPurchase":"2023-06-25","state":"on","automode":true,"password":"JF0Q"},{"id":"SASSI-MC9-BIRL","dateOfManufacture":"2023-05-15","dateOfPurchase":"2023-05-30","state":"off","automode":false,"password":"BIRL"},{"id":"SASSI-K9Z-Q93X","dateOfManufacture":"2023-04-01","dateOfPurchase":"2023-04-10","state":"on","automode":true,"password":"Q93X"},{"id":"SASSI-JJR-LRYD","dateOfManufacture":"2023-03-15","dateOfPurchase":"2023-03-25","state":"off","automode":false,"password":"LRYD"},{"id":"SASSI-CMC-IVV6","dateOfManufacture":"2023-02-10","dateOfPurchase":"2023-02-20","state":"on","automode":true,"password":"IVV6"},{"id":"SASSI-IL3-D6G9","dateOfManufacture":"2023-01-05","dateOfPurchase":"2023-01-15","state":"off","automode":false,"password":"D6G9"},{"id":"SASSI-O98-N52D","dateOfManufacture":"2022-12-01","dateOfPurchase":"2022-12-10","state":"on","automode":true,"password":"N52D"},{"id":"SASSI-A0R-1AUB","dateOfManufacture":"2022-11-15","dateOfPurchase":"2022-11-30","state":"off","automode":false,"password":"1AUB"}]');
  const modal = useRef<HTMLIonModalElement>(null);
  const idInput = useRef<HTMLIonInputElement>(null);
  const passwordInput = useRef<HTMLIonInputElement>(null);
  const history = useHistory();
  
  const [selectedTrap, setSelectedTrap] = useState<TrapInterface | null>(null); 

  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   console.log(message)
  // }, [message]);


  function confirm() {
    let traps:TrapInterface[] = data.filter((t:TrapInterface) => t.id === idInput.current?.value);
    if(traps.length !== 0 && passwordInput.current?.value === traps[0].password) {
      setMessage('');
      modal.current?.dismiss(passwordInput.current?.value, 'confirm');
      setSelectedTrap(null);
      history.push(`/traps/${traps[0].id}`);
    } else {
      setMessage('Invalid ID or password. Please try again.');
    }
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      // setMessage(`Hello, ${ev.detail.data}!`);
    } else {
      setSelectedTrap(null);
    }
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mes pièges</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList inset={true} mode='ios'>
          {data.map((trap:TrapInterface, index: BigInteger) => (
            <IonItemSliding key={trap.id}>
              <IonItem onClick={() => setSelectedTrap(trap)}>
                <IonLabel>{trap.id}</IonLabel>
              </IonItem>
              <IonItemOptions side='end'>
                <IonItemOption color='danger'>Delete</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>

        <IonFab vertical='bottom' horizontal='center' slot='fixed'>
          <IonFabButton id="open-modal" >
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>

        <IonModal ref={modal} isOpen={selectedTrap !== null} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Connexion Sassitrap</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonInput ref={idInput} label="ID sassitrap" aria-label='ID sassitrap' type="text" placeholder="ex: SASSI-ABC-1234" value={selectedTrap?.id}/>
            </IonItem>
            <IonItem>
              <IonInput ref={passwordInput} label="Mot de passe" aria-label='Mot de passe' type="password" placeholder="••••••" />
            </IonItem>
            <div style={{marginTop: 10, display: 'flex', justifyContent: 'center'}}>
              <IonLabel color={"danger"}>{message}</IonLabel>
            </div>
            <div style={{marginTop: 10, display: 'flex', justifyContent: 'center'}}>
              <IonButton color={"medium"} onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
              <IonButton  strong={true} onClick={() => confirm()}>Confirm</IonButton>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Traps;