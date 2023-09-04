import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { add } from 'ionicons/icons';
import './TrapList.css';
import { useRef, useState } from 'react';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';

interface ContainerProps {
  data: Array<{
    code: string;
    dateOfManufacture: string;
    dateOfPurchase: string;
    state: string;
    automode: boolean;
  }>;
};

const TrapList: React.FC<ContainerProps> = ({ data }) => {
  return (
    <>
      <IonList inset={true} mode='ios'>
        {data.map((trap, index) => (
          <IonItemSliding key={trap.code}>
            <IonItem  key={trap.code} href={`/traps/${trap.code}`}>
              <IonLabel>{trap.code}</IonLabel>
            </IonItem>
            <IonItemOptions side='end'>
              <IonItemOption color='danger'>Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}
      </IonList>
    </>
  );
};

export default TrapList;
