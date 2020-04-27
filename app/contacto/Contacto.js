import React, {useState,useEffect} from 'react';
import { StyleSheet,View,Text,FlatList,ActivityIndicator} from "react-native";
import {Image,Card,Icon, ListItem,ListItemProps,List} from 'react-native-elements';
//import Map from './Map';
import * as firebase from 'firebase';




export default function Contacto(props){

    const { contacto, isLoading}=props;
   
    return(
        <View >
        {contacto ? (
             <FlatList
                  data={contacto}
                  renderItem={contactos=> <Contactos contactos={contactos}/>}
                  keyExtractor={(item,index)=> index.toString()}
                 //onEndReached={}
                 onEndReachedThreshold={0}
                 //ListFooterComponent={}
             
             />
         ) : (
             <View >
                 <ActivityIndicator size="large"/>
                 <Text> Cargando Datos </Text>

             </View>
         )}
     </View>
    );
}

function Contactos(props){
    const { contactos }=props;
    const{direccion,foto,nombre,telefono}=contactos.item.contactos;


    return(
            <View >  
               <View style={{alignContent:'center', alignSelf: 'center', marginTop: 20}}>
                      <Image style={styles.imgConStyle} source={{uri:foto}} PlaceholderContent={<ActivityIndicator color="blue"/>}/>
               </View>   
               <View  style={styles.contactoStyle}>
                     <Text style={{ fontSize:30, fontWeight:'bold'}}> {nombre} </Text>
                     <Text style={{ fontSize:20, fontWeight:'normal', marginBottom:10}}>   Propietaria </Text>
                
                     
                     <ContactoInfo nombre={direccion} telefono={telefono}/>
               </View>

            </View>     
    )
}

function ContactoInfo(props){
    const { nombre, telefono }=props;

    const listInfo=[
        {
            text:nombre.toString(),
            iconName:"map-marker",
            iconType:"material-community",
            action:null
        },
        {
            text:telefono.toString(),
            iconName:"phone",
            iconType:"material-community",
            action:null
        }
    ];

    return(
        <View style={styles.contactoStyle}>  
            <Text style={{fontSize:26, fontWeight:'bold',marginBottom:5}}>Información de la florería:</Text>
       
           <View style={{ marginTop:5}}>
           {listInfo.map((item,index) => (
                
              
               <ListItem      
                key={index}
                title= {item.text}
                leftIcon={{
                    name:item.iconName,
                    type:item.iconType,
                    color:'black'
                }}
                containerStyle={styles.containerListItem}
                />
            ))}   
           </View>
             
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
       
      marginTop: 10,
      margin: 10,
      fontWeight:'bold'
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
    containerListItem:{
        backgroundColor:'#ffccae',
        borderColor:'black',
        borderBottomWidth:1
        

    }
  
     
  });
  
  