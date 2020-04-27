import React from 'react';
import {StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import  MapView ,{PROVIDER_GOOGLE}from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function Map(props){
            const {name, height}=props;
    return(
       
        <MapView
        style={{flex:1,width:320, height:height }}
        
        provider={PROVIDER_GOOGLE}
         //showsUserLocation
        initialRegion={{
            
            latitude: 29.1274658,
            latitudeDelta: 0.000999,
            longitude: -110.9680919,
            longitudeDelta: 0.00499,
            
        }}
        zoomEnabled={false}
        loadingEnabled={true}
         maxZoomLevel={20}
     
        >
            <Marker
                coordinate={{ latitude: 29.1274658, longitude: -110.9680919}} pinColor={'#DC0303'} title={'Floreria Eleonora'} 
            />
        </MapView>

      


     
    )
}