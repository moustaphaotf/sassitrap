import { IonAvatar, IonBackButton, IonButtons, IonCheckbox, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonLoading, IonPage, IonThumbnail, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import auto from '../public/mosquitto-bite.png'
import logo from '../public/logo.svg'
import './TrapDetail.css';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import app from '../firebase-config'
import {API, Auth, graphqlOperation, PubSub} from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub'
import { createCommand } from '../graphql/mutations'
// @ts-ignore
import awsconfig from '../aws-exports';
import { listCommands, listTrapData } from '../graphql/queries';
import ampoule from "../public/ampoule.png";
import { notificationsOutline } from 'ionicons/icons';

const db = getFirestore(app);

const TrapDetail: React.FC = () => {
  const { trapId } = useParams<{ trapId: string }>();
  // const [light, setLight] = useState(false);
  const [autoMode, setAutoMode] = useState(false);
  const [messages, setMessages] = useState<Array<String>>([]);
  const [trapDetails, setTrapDetails] = useState({});
  const [topics, setTopics] = useState({});

  useEffect(() => {
    console.log(trapId)
    getData();
  }, []);

  // useEffect()

  useEffect(() => {
    console.log(messages);
  }, [messages])

  async function getData() {
    // @ts-ignore
    console.log(trapId)
    const response = await API.graphql(graphqlOperation(listTrapData, {
      filter: {
        code: {
          eq: trapId
        }
      }
    }));
    const details = response.data.listTrapData?.items[0]
    setTrapDetails(details);
    setTopics({
      state: `sassitrap/${details.code}/state`,
      mode: `sassitrap/${details.code}/mode`,
      alerts: `sassitrap/${details.code}/alerts`,
      uvleds: `sassitrap/${details.code}/uvleds`,
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
            <IonButtons slot='start'>
                <IonBackButton defaultHref='/traps' />
            </IonButtons>
            <IonTitle>{trapDetails.code}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <IonLabel>Mode manuel</IonLabel>
          <IonItem lines='none'>
            <IonToggle
              onIonChange={async (ev) => {
                setAutoMode(!autoMode);
                let value = ev.target.checked ? "auto" : "manual";
                const data = `mode:${value}`;

                await API.graphql(graphqlOperation(createCommand, {input: {
                  code: trapDetails.code,
                  data: data,
                  createdAt: new Date().toISOString()
                }}));
                console.log(ev.target.checked)
              }}
            ></IonToggle>
          </IonItem>
          <IonLabel>Mode automatique</IonLabel>
        </div>

        {autoMode ? (
          <div className='container'>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: 20}}>
              <IonImg src={auto} style={{width: '60%', marginRight: 20}}/>
            </div>
            <p style={{margin: 20}}>Le mode pilote automatique nous permet de sélectionner les meilleurs paramètres pour capturer le plus de moustiques afin de vous protéger contre insectes nuisibles.</p>
          </div>
        ) : (
          <div>
            {/* Alerte de la présence des moustiques */}
            <IonItem lines='none' style={{marginBottom: 10, marginTop: 10}}>
              <IonToggle
                onIonChange={async (ev) => {
                  let value = ev.target.checked;
                  const data = `alerts:${value}`;
                  await API.graphql(graphqlOperation(createCommand, {input: {
                    code: trapDetails.code,
                    data: data,
                    createdAt: new Date().toISOString()
                  }}));
                  console.log(ev.target.checked)
                }}
              >
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <IonIcon size='large' style={{width: 50, marginRight: 20}} icon={notificationsOutline}></IonIcon>
                  {/* <IonImg src={logo} style={{width: 50, marginRight: 20}}/> */}
                  Alerte moustiques
                </div>
              </IonToggle>
            </IonItem>

            {/* Activation de la lumière */}
            <IonItem lines='none' style={{marginBottom: 10, marginTop: 10}}>
              <IonToggle 
                onIonChange={async (ev) => {
                  let value = ev.target.checked;
                  const data = `uvleds:${value}`;

                  await API.graphql(graphqlOperation(createCommand, {input: {
                    code: trapDetails.code,
                    data: data,
                    createdAt: new Date().toISOString()
                  }}));

                  console.log(ev.target.checked)
                }}
              >
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <IonImg src={ampoule} style={{width: 50, marginRight: 20}}/>
                  Lumières UV
                </div>
              </IonToggle>
            </IonItem>

          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default TrapDetail;
