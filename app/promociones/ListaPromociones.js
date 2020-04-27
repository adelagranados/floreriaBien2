import React, {useState,useEffect} from 'react';
import { StyleSheet,View,Text,FlatList,ActivityIndicator,TouchableOpacity} from "react-native";
import {Image,Card} from 'react-native-elements';
import * as firebase from 'firebase';


export default function ListaProductos(props){
    const { promocion, isLoading}=props;
   
    return(
        <View >
        {promocion ? (
             <FlatList
                  data={promocion}
                  renderItem={promociones=> <Promociones promociones={promociones}/>}
                  keyExtractor={(item,index)=> index.toString()}
                 //onEndReached={}
                 onEndReachedThreshold={0}
                 //ListFooterComponent={}
             
             />
         ) : (
             <View style={styles.LoadingPromociones}>
                 <ActivityIndicator size="large"/>
                 <Text> Cargando Promociones </Text>

             </View>
         )}
     </View>
    );
}

function Promociones(props){
    const { promociones }=props;
    const{tipo, imagen}=promociones.item.promociones;
//iria un useEffect si no nos diera la url de la imagen y por igual un use state no es necesario
//const [imageArreglo,setImageArreglo]=useState(null);


    return(
     
            <View style={styles.viewArreglo}>
             
              <Card >
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
    LoadingPromociones:{
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
