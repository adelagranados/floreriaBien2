import React, {useState,useEffect} from 'react';
import { StyleSheet,View,Text,FlatList,ActivityIndicator,TouchableOpacity} from "react-native";
import {Image,Card} from 'react-native-elements';
import * as firebase from 'firebase';


export default function ListaProductos(props){
    const { producto, isLoading}=props;
    return(
        <View >
           {producto ? (
                <FlatList
                     data={producto}
                     renderItem={productos=> <Productos productos={productos}/>}
                     keyExtractor={(item,index)=> index.toString()}
                    //onEndReached={}
                    onEndReachedThreshold={0}
                    //ListFooterComponent={}
                
                />
            ) : (
                <View style={styles.LoadingProductos}>
                    <ActivityIndicator size="large"/>
                    <Text> Cargando Productos </Text>

                </View>
            )}
        </View>
    );
}

function Productos(props){
    const { productos }=props;
    const{descripcion, imagen}=productos.item.productos;
//iria un useEffect si no nos diera la url de la imagen y por igual un use state no es necesario
//const [imageArreglo,setImageArreglo]=useState(null);
   // console.log(imagen);

    return(
       
            <View style={styles.viewArreglo}>
                <Card title={descripcion}>
                <View >
                    <Image
                      resizeMode="cover"
                      source={{uri:imagen}}
                      style={styles.imageArreglo}
                      PlaceholderContent={<ActivityIndicator color="blue"/>}
                    />
                </View>
                </Card>

            </View>

 
       
    )

}

const styles=StyleSheet.create({
    LoadingProductos:{
        margin:20,
        alignItems:'center',
       
    },
    viewArreglo:{
        flexDirection:'row',
        
    },
    viewArregloImage:{
        marginRight:15,
        marginLeft:15,
    },
    imageArreglo:{
        width:300,
        height:300,
    }
})
