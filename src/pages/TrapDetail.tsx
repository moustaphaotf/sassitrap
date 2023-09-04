import { IonAvatar, IonBackButton, IonButtons, IonCheckbox, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonPage, IonThumbnail, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import auto from '/mosquito-bite.svg?url'
import logo from '/logo.png?url'
import './TrapDetail.css';
// import 'util/mqtt.min';
import { checkbox } from 'ionicons/icons';
// import rp from 'request-promise';
// import IotApi from '@arduino/arduino-iot-client';

// async function getToken() {
//     var options = {
//         method: 'POST',
//         url: 'https://api2.arduino.cc/iot/v1/clients/token',
//         headers: { 'content-type': 'application/x-www-form-urlencoded' },
//         json: true,
//         form: {
//             grant_type: 'client_credentials',
//             client_id: 'CLIENT_ID',
//             client_secret: 'CLIENT_SECRET',
//             audience: 'https://api2.arduino.cc/iot'
//         }
//     };

//     try {
//         const response = await rp(options);
//         return response['access_token'];
//     }
//     catch (error) {
//         console.error("Failed getting an access token: " + error)
//     }
// }

// async function run() {
//     var client = IotApi.ApiClient.instance;
//     // Configure OAuth2 access token for authorization: oauth2
//     var oauth2 = client.authentications['oauth2'];
//     oauth2.accessToken = await getToken();
    
//     var api = new IotApi.DevicesV2Api(client)    
//     api.devicesV2List().then(devices => {
//         console.log(devices);
//     }, error => {
//         console.log(error)
//     });
// }

// run();


const TrapDetail: React.FC = () => {
  const { trapId } = useParams<{ trapId: string }>();
  // const [light, setLight] = useState(false);
  const [autoMode, setAutoMode] = useState(false);
  const [messages, setMessages] = useState<Array<String>>([]);
  const topics = {
    state: `sassitrap/${trapId}/state`,
    mode: `sassitrap/${trapId}/mode`,
    alerts: `sassitrap/${trapId}/alerts`,
    uvleds: `sassitrap/${trapId}/uvleds`,
  }

  useEffect(() => {
    /* client.subscribe(`sassitrap/${trapId}/mode`);
    client.on('message', handleMessage);
  
    return () => {
      client.off('message', handleMessage);
    };*/
  }, []);

  // const handleMessage = function (topic:String, message:String) {
  //   let note = message.toString();
  //   setMessages(prevMessages => [...prevMessages, note]);
  // };

  // const publishMessage = (topic:String, message:Object) => {
  //   client.publish(topic, JSON.stringify(message));
  // }

  useEffect(() => {
    console.log(messages);
  }, [messages])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot='start'>
                <IonBackButton defaultHref='/traps' />
            </IonButtons>
            <IonTitle>{trapId}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <IonLabel>Mode manuel</IonLabel>
          <IonItem lines='none'>
            <IonToggle
              onIonChange={(ev) => {
                console.log(ev.target.checked)
                setAutoMode(!autoMode);
                const value = 'some value';
                // @ts-check
                // client.sendProperty('cc382df3-fa21-43bf-98da-c90ce4a31a46', 'mode', value);
    
                //publishMessage(topics.mode, {mode: ev.target.checked});
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
            <p>Le mode pilote automatique nous permet de sélectionner les meilleurs paramètres pour capturer le plus de moustiques afin de vous protéger contre insectes nuisibles.</p>
            {/* <IonItem button onClick={() => {
              // client.publish(`sassitrap/${trapId}/mode`, 'Message ' + Math.random().toString(16).substr(2, 8))
            }} >Envoyer</IonItem>
            {messages.map((m, index) => <p key={index}>{m}</p>)} */}
          </div>
        ) : (
          <div>
            {/* Alerte de la présence des moustiques */}
            <IonItem lines='none' style={{marginBottom: 10, marginTop: 10}}>
              <IonToggle
                onIonChange={ev => {
                  console.log(ev.target.value);
                }}
              >
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <IonImg src={logo} style={{width: 50, marginRight: 20}}/>
                  Alerte moustiques
                </div>
              </IonToggle>
            </IonItem>

            {/* Activation de la lumière */}
            <IonItem lines='none' style={{marginBottom: 10, marginTop: 10}}>
              <IonToggle 
                onIonChange={ev => {
                  console.log(ev.target.value);
                }}
              >
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <IonImg src={logo} style={{width: 50, marginRight: 20}}/>
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
