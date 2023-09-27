import { IonAlert, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonLoading, IonModal, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, RefresherEventDetail } from '@ionic/react';
import TrapList from '../components/TrapList';
import { add, exit, list, logOut, power, save } from 'ionicons/icons';
import { useEffect, useRef, useState } from 'react';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import { useHistory } from 'react-router';
import app from '../firebase-config';
import {Preferences} from "@capacitor/preferences";
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { listTrapData } from '../graphql/queries';
import empty from '../public/empty.svg';
import mountains from '../public/card-media.png';
import {generate} from 'randomstring';
import { createTrapData } from '../graphql/mutations';
import './Traps.css';

const TRAPS_STORAGE = "known_traps";

interface TrapInterface {
  id: string;
  password: string;
  dateOfManufacture: string;
  dateOfPurchase: string;
  state: string;
  automode: boolean;
}

const defaultTrap = {
  code: `SASSI-${generate(3)}-${generate(4)}`.toUpperCase(), 
  deliveredAt: new Date().toJSON().slice(0, 10),
  ownerEmail: "",
  ownerFullName: "",
}

const defaultAlertInfos = {
  header: "Succès",
  subHeader: "",
  message: "",
  buttons: ["OK"]
}

const Traps: React.FC = () => {
  const [savedTraps, setSavedTraps] = useState([]);
  // const data = JSON.parse('[{"id":"SASSI-1CH-RFLV","dateOfManufacture":"2023-08-01","dateOfPurchase":"2023-08-15","state":"on","automode":true,"password":"RFLV"},{"id":"SASSI-5EF-3NV6","dateOfManufacture":"2023-07-10","dateOfPurchase":"2023-07-20","state":"off","automode":false,"password":"3NV6"},{"id":"SASSI-D07-JF0Q","dateOfManufacture":"2023-06-05","dateOfPurchase":"2023-06-25","state":"on","automode":true,"password":"JF0Q"},{"id":"SASSI-MC9-BIRL","dateOfManufacture":"2023-05-15","dateOfPurchase":"2023-05-30","state":"off","automode":false,"password":"BIRL"},{"id":"SASSI-K9Z-Q93X","dateOfManufacture":"2023-04-01","dateOfPurchase":"2023-04-10","state":"on","automode":true,"password":"Q93X"},{"id":"SASSI-JJR-LRYD","dateOfManufacture":"2023-03-15","dateOfPurchase":"2023-03-25","state":"off","automode":false,"password":"LRYD"},{"id":"SASSI-CMC-IVV6","dateOfManufacture":"2023-02-10","dateOfPurchase":"2023-02-20","state":"on","automode":true,"password":"IVV6"},{"id":"SASSI-IL3-D6G9","dateOfManufacture":"2023-01-05","dateOfPurchase":"2023-01-15","state":"off","automode":false,"password":"D6G9"},{"id":"SASSI-O98-N52D","dateOfManufacture":"2022-12-01","dateOfPurchase":"2022-12-10","state":"on","automode":true,"password":"N52D"},{"id":"SASSI-A0R-1AUB","dateOfManufacture":"2022-11-15","dateOfPurchase":"2022-11-30","state":"off","automode":false,"password":"1AUB"}]');
  const modalAuthSassi = useRef<HTMLIonModalElement>(null);
  const modalSassiDetails = useRef<HTMLIonModalElement>(null);
  const idInput = useRef<HTMLIonInputElement>(null);
  const passwordInput = useRef<HTMLIonInputElement>(null);
  const history = useHistory();
  const [userInfos, setUserInfos] = useState({});
  const [clients, setClients] = useState([])
  const [selectedTrap, setSelectedTrap] = useState(null);
  const [trapFormData, setTrapFormData ] = useState(defaultTrap);
  const [traps, setTraps] = useState([]);
  const [isTrapDetailsOpen, setTrapDetailsOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertInfos, setAlertInfos] = useState(defaultAlertInfos);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    // Attribuer le rôle d'utilisateur et les informations d'utilisateurs
    
    Auth.currentAuthenticatedUser().then(userData => {
      const groups = userData.signInUserSession.accessToken.payload['cognito:groups'];
      const infos = {
        ...userData.attributes,
      }
      
      if(groups.includes('client')) {
        infos.role = 'client';
      }

      if(groups.includes('admin')) {
        infos.role = 'admin';
      }  
      
      console.log(infos)
      setUserInfos(infos);
      // Récupérer la liste des pièges et des clients
      
      retrieveDetails(infos);
      
    });

  }, []);
  
  const retrieveDetails = async (infos) => {
    let query;
    setLoading(true);
    console.log(infos)
    if(infos === undefined) {
      infos = userInfos;
    }    

    if (infos.role === 'admin') {
      API.graphql(graphqlOperation(listTrapData))
      .then(response => {
        console.log(response)
        setTraps(response.data.listTrapData?.items || []);
        setLoading(false);
      }).catch(error => console.log(error));
    } else if(infos.role === 'client'){
      API.graphql(graphqlOperation(listTrapData, {
        filter: {
          ownerEmail: {
            eq: infos.email,
          }
        }
      })).then(response => {
        console.log(response)
        setTraps(response.data.listTrapData.items);
        setLoading(false);
      });
    }

    // Get clients
    if(infos.role === 'client') {
      return;
    }
      
    try {
      let responseClients = await fetch('https://y4eg7k25t2.execute-api.eu-north-1.amazonaws.com/getUserEmail');
      let dataClients = await responseClients.json();
      setClients(dataClients);
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  const handleAddTrap = async() => {
    try {
      // Validation 
      if (trapFormData.ownerFullName ===  "") {
        setAlertInfos({...defaultAlertInfos, message: "Le nom complet est requis !", header: "Attention"});
        setIsAlertOpen(true);
        return;
      }
      
      if (trapFormData.ownerEmail === "") {
        setAlertInfos({...defaultAlertInfos, message: "L'adresse email est requise !", header: "Attention"});
        setIsAlertOpen(true);
        return;
      }
      const data = {content: "Hello !", ...trapFormData, createdAt: new Date().toISOString(), deliveredAt: new Date(trapFormData.deliveredAt).toISOString()};

      const response = await API.graphql(graphqlOperation(createTrapData, { input: data }));
      console.log(response)
      setAlertInfos({...defaultAlertInfos, message: "Le piège a été ajouté avec succès !"});
      
      setTrapFormData({...defaultTrap, code: `SASSI-${generate(3)}-${generate(4)}`.toUpperCase()});
      setTrapDetailsOpen(false);
      setIsAlertOpen(true);
    } catch (e) {
      console.log(e)
    }
  }

  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    retrieveDetails().then(() => event.detail.complete()).catch(error => console.log(error));
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>{ userInfos.role === 'admin' ? 'Pièges' : 'Mes pièges'}</IonTitle>
          <IonButtons slot="end">
            {/* Add the logout button icon */}
            <IonButton onClick={() => Auth.signOut()}>
              <IonIcon icon={power} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot='fixed' onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <div>
          {traps.length !== 0 ? (
            <div>
              <p style={{margin: 20}}>Vos produits Sassitrap</p> 
              <IonList inset={true} mode='ios'>
                {traps.map(trap => (
                  <IonItemSliding key={trap.id}>
                    <IonItem color={"light"} button href={`/traps/${trap.code}`} onClick={() => setSelectedTrap(trap.id)}>
                      <IonLabel>
                          {trap.code}
                          <br />
                          &nbsp;&nbsp;{trap.ownerEmail}
                      </IonLabel>
                    </IonItem>
                    <IonItemOptions side='end'>
                      <IonItemOption 
                        // onClick={() => {
                        //   const remindingTraps = savedTraps.filter(trapId => trapId !== id);
                        //   setSavedTraps(remindingTraps);
                        //   Preferences.set({key: TRAPS_STORAGE, value: remindingTraps});
                        // }}
                        color='danger'>Supprimer</IonItemOption>
                    </IonItemOptions>
                  </IonItemSliding>
                ))}
              </IonList>
            </div>
           ) : ( 
            !loading && (
              <div style={{
                textAlign: 'center',
                position: 'absolute',
                left: 0,
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <p style={{margin: 20}}>
                  Il Semblerait que vous n'ayiez pas un <strong>Sassitrap</strong> enregistré ! 
                  { userInfos.role === 'client' ? (
                    <span>Veuillez contactez l'*équipte <a>NimbaSmart</a> pour une prise en charge effective !</span>
                  ) : (
                    <span> Veuillez donc ajouter des <i>SASSITRAP</i> !</span>
                  )}
                </p>
                <IonImg src={empty} style={{width: '50%'}}/>
              </div>
            )
          )}
        </div>

        {userInfos.role === 'admin' && (
          <IonFab vertical='bottom' horizontal='center' slot='fixed'>
            <IonFabButton  onClick={() => {
              const randomCode = `SASSI-${generate(3)}-${generate(4)}`.toUpperCase();
              console.log(defaultTrap)
              setTrapFormData({...defaultTrap, code: randomCode});
              setTrapDetailsOpen(true);
            }}>
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
          </IonFab>
        )}

        <IonModal 
          // ref={modalAuthSassi} 
          isOpen={isTrapDetailsOpen} 
          // onWillDismiss={(ev) => onWillDismiss(ev)}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Détails du piège</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            {/* { selectedTrap === null ? ( */}
              <div>
                <h3>Ajoutez un Sassitrap</h3>
                <div>
                  <IonItem>
                    <IonInput disabled={true} value={trapFormData?.code} placeholder='Code SASSI'></IonInput>
                  </IonItem> 
                  <IonItem>
                    <IonInput 
                      onInput={(e) => setTrapFormData({...trapFormData, ownerFullName: e.target.value})} 
                      value={trapFormData?.ownerFullName} 
                      placeholder='Nom complet'
                    ></IonInput>
                  </IonItem> 
                  <IonItem>
                    <IonInput 
                      onInput={(e) => {
                        setTrapFormData({...trapFormData, ownerEmail: e.target.value});
                        console.log(trapFormData)
                        const foundUser = clients.filter(c => c.email === e.target.value);
                        if(foundUser.length === 1) {
                          console.log("User found")
                        } else {
                          console.log("User not found")
                        }
                      }} 
                      value={trapFormData?.ownerEmail} 
                      placeholder='Email'
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput
                     onInput={(e) => setTrapFormData({...trapFormData, deliveredAt: e.target.value})}
                     value={trapFormData?.deliveredAt} 
                     type='date'
                    ></IonInput>
                  </IonItem>
                </div>

              </div>
            {/* ) : (   */}
              {/* <IonCard>
                <img alt="Silhouette of mountains" src={mountains} />
                <IonCardHeader>
                  <IonCardTitle></IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Hello
                </IonCardContent>
              </IonCard> */}
            {/* ) } */}
            <div style={{display: "flex", justifyContent: 'space-around'}}>
              <IonButton 
                color={"medium"}
                onClick={() => {
                  setTrapDetailsOpen(false);
                  setTrapFormData(defaultTrap);
                }}
              >Annuler</IonButton>
              {/* {selectedTrap === null && ( */}
                <IonButton onClick={handleAddTrap}>Valider</IonButton>
              {/* )} */}
            </div>
          </IonContent>
        </IonModal>

        <IonModal 
          ref={modalSassiDetails} 
          // isOpen={savedTraps.length === 0 || selectedTrap !== ""} 
          // trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Connexion Sassitrap</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonInput ref={idInput} label="ID sassitrap" aria-label='ID sassitrap' type="text" placeholder="ex: SASSI-ABC-1234" value={selectedTrap}/>
            </IonItem>
            <IonItem>
              <IonInput ref={passwordInput} label="Mot de passe" aria-label='Mot de passe' type="password" placeholder="••••••" />
            </IonItem>
            <div style={{marginTop: 10, display: 'flex', justifyContent: 'center'}}>
              <IonLabel color={"danger"}>{}</IonLabel>
            </div>
            <div style={{marginTop: 10, display: 'flex', justifyContent: 'center'}}>
              <IonButton color={"medium"} onClick={() => modalSassiDetails.current?.dismiss()}>Cancel</IonButton>
              <IonButton  strong={true} onClick={async () => confirm()}>Confirm</IonButton>
            </div>
          </IonContent>
        </IonModal>

        {/* For alerts */}
        <IonAlert
          isOpen={isAlertOpen}
          header={alertInfos.header}
          subHeader={alertInfos.subHeader}
          message={alertInfos.message}
          buttons={alertInfos.buttons}
          onDidDismiss={() => setIsAlertOpen(false)}
        ></IonAlert>

        {/* While loading data from the cloud */}
        <IonLoading
          message={"Recherche en cours..."}
          isOpen={loading}
        ></IonLoading>
      </IonContent>
    </IonPage>
  );
};

export default Traps;