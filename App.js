import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import * as React from 'react';
import React,{useState, useEffect} from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView,Dimensions } from 'react-native';
import { Button, Card, ListItem,Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//SOLUCION A ERROR CRYPTO--PARACONFIGURARLO A  BASE 64 PRIMERO YARN ADD BASE-64 EN CMD
import { decode, encode } from 'base-64'
global.crypto = require("@firebase/firestore");
global.crypto.getRandomValues = byteArray => { for (let i = 0; i < byteArray.length; i++) { byteArray[i] = Math.floor(256 * Math.random()); } }

if (!global.btoa) { global.btoa = encode; }

if (!global.atob) { global.atob = decode; }



//BACKEND
import DatosContacto from './app/contacto/Contacto';
import ListaProductos from './app/catalogo/ListaProducto';
import ListaPromociones from './app/promociones/ListaPromociones';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseApp } from './app/FireBase';
const db = firebase.firestore(firebaseApp);


function ContactoScreen() {

  const [contacto,setContacto]=useState ([]);
  const [startcontacto,setStartContacto]=useState (null);
  const [isLoading,setIsLoading]=useState (false);
  const [totalcontacto,setTotalContacto]=useState (0);
  const limitContacto=8;
 
  useEffect(() => {
    db.collection("contacto").get().then((snap)=> {
      setTotalContacto(snap.size);
    
    });
    ( async()=>{

      const resultContacto=[];
      const contacto=db
      .collection("contacto")
      .orderBy("nombre","desc")
      .limit(limitContacto);
      
      await contacto.get().then(response => {
       setStartContacto(response.docs[response.docs.length-1]);


        response.forEach(doc => {
         let contactos=doc.data();
         contactos.id=doc.id;
         resultContacto.push({contactos});
         });
       setContacto(resultContacto);
      
        });

      })();
   
  },[]);

  if(contacto.length===0 ) return<NotFoundArreglos/>;


  return (
    <View style={styles.container}>
        <DatosContacto  contacto={contacto} isLoading={isLoading} />
     
    </View>
  );
}

function ArreglosFlorales({ navigation }) {
 //BACKEND
  const [producto,setProducto]=useState ([]);
  const [startproducto,setStartProducto]=useState (null);
  const [isLoading,setIsLoading]=useState (false);
  const [totalproducto,setTotalProducto]=useState (0);
  //const //limitProducto=4;
  
  useEffect(() => {
    db.collection("catalogo").get().then((snap)=> {
      setTotalProducto(snap.size);
      console.log(snap.size);
    });

    (async()=>{

      const resultCatalogo=[];
      const producto=db
      .collection("catalogo")
      .orderBy("descripcion","asc");
      
      await producto.get().then(response => {
       setStartProducto(response.docs[response.docs.length-1]);


        response.forEach(doc => {
         let productos=doc.data();
         productos.id=doc.id;
         resultCatalogo.push({productos});
         });
       setProducto(resultCatalogo);
       console.log(resultCatalogo);
        });

      })();
      
  },[]);
 
  if(producto.length===0 ) return<NotFoundArreglos/>;
  return (
    <View style={styles.container}>
     <ListaProductos producto={producto} isLoading={isLoading} />
    
    </View>
  );
}


function ArreglosEventos({ navigation }) {
  //BACKEND
  const [promocion,setPromocion]=useState ([]);
  const [startpromocion,setStartPromocion]=useState (null);
  const [isLoading,setIsLoading]=useState (false);
  const [totalpromocion,setTotalPromocion]=useState (0);
  //const limitPromocion=8;
 
  useEffect(() => {
    db.collection("promocion").get().then((snap)=> {
      setTotalPromocion(snap.size);

    });
    ( async()=>{

      const resultPromocion=[];
      const promocion=db
      .collection("promocion")
      .orderBy("imagen","desc");
      //limit(limitPromocion);
      
      await promocion.get().then(response => {
       setStartPromocion(response.docs[response.docs.length-1]);


        response.forEach(doc => {
         let promociones=doc.data();
         promociones.id=doc.id;
         resultPromocion.push({promociones});
         });
       setPromocion(resultPromocion);
      
        });

      })();
   
  },[]);

  if(promocion.length===0 ) return<NotFoundArreglos/>;

    
  return (

    <View style={styles.container}>
      
      <ListaPromociones promocion={promocion} isLoading={isLoading}/>
    </View>
  );
}

const AFlorales = createStackNavigator();

function AFloralesScreen() {
  return (
    <AFlorales.Navigator>
      <AFlorales.Screen name="Catálogo" component={ArreglosFlorales} />
      <AFlorales.Screen name="Contacto" component={ContactoScreen} />
    </AFlorales.Navigator>
  );
}

const AEventos = createStackNavigator();

function AEventosScreen() {
  return (
    
    <AEventos.Navigator>
      
      <AEventos.Screen name="Promociones" component={ArreglosEventos} />
      <AEventos.Screen name="Contacto" component={ContactoScreen} />
    </AEventos.Navigator>
  );
}

const Contac = createStackNavigator();

function ContactosScreen() {
  return (
    <Contac.Navigator>
      <Contac.Screen name="Contacto" component={ContactoScreen} />
    </Contac.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();
//const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarPosition='bottom' tabBarOptions={{  indicatorStyle: {backgroundColor:'#DC0303'}}}>
        <Tab.Screen name="Catálogo" component={AFloralesScreen} />
        <Tab.Screen name="Promociones" component={AEventosScreen} />
        <Tab.Screen name="Contacto" component={ContactosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//funcion para cuando no haya nada yapenas este cargando
function NotFoundArreglos(){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'
    }}>
      <Image  source={require('./assets/icon.png')}size={50}/>
     
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor:'#ffccae',
    }, 
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
      },   
  buttonStyle:{  
    width: 50, 
    height:50,
    backgroundColor:'#DC0303',
    borderRadius: 60,
    padding:5,
  },
  footer: {
    flex:1,
    alignItems:'flex-end',
    marginTop:10,
    marginRight:20,
  },
  body:{
    height:"100%",
  }, 
  imgStyle:{
    width:300,
    height:300,
  }, 
  contactoStyle:{
    alignItems:'center',
    alignContent:'center',
    fontSize:24,
    textAlign:'center',
    marginTop: 10,
    // fontFamily: 'sans-serif-condensed',
  },
  imgConStyle:{
    alignItems:'center',
    alignContent:'center',
    width:100,
    height:100,
  },
  mapStyle:{
    width:250,
    height:250,
    borderRadius:20,
  },
});

