import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView,Dimensions } from 'react-native';
import { Button, Card, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import MapView from "react-native-map-clustering";
import { Marker } from 'react-native-maps';

function ContactoScreen() {
  return (
    <View style={styles.container}>
      <View style={{alignContent:'center', alignSelf: 'center', marginTop: 20}}>
        <Image style={styles.imgConStyle} source={require('./assets/icon.png')}/>
      </View>
      <Text style={styles.contactoStyle}>Coyito Rivera</Text>
      <Text style={styles.contactoStyle}>Teléfono: 6621345678</Text>
      <Text style={styles.contactoStyle}>Ubicación:</Text>
      {/* <View style={{alignContent:'center', alignSelf: 'center', marginTop: 20}}>
        <MapView style={styles.mapStyle} 
          initialRegion={{
            latitude: 29.1274658,
            longitude: -110.9680919,
            latitudeDelta: 0.0900,
            longitudeDelta: 0.0421,
          }}>
          <Marker coordinate={{ latitude: 29.1274658, longitude: -110.9680919}} pinColor={'#DC0303'} title={'Floreria'} description={"Instituto Tecnologico de Hermosillo"}/>
        </MapView>
      </View> */}
    </View>
  );
}

function ArreglosFlorales({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <ScrollView style={styles.body}>
          <Card
            title='Arreglo Cerdito'>
              <View>
                <Image style={styles.imgStyle} source={require('./RecursosInterfacesApp/Catalogo/arreglo1.png')}/>
              </View>
          </Card>
          <Card
            title='Arreglo Girasoles'>
              <View>
                <Image style={styles.imgStyle} source={require('./RecursosInterfacesApp/Catalogo/arreglo2.png')}/>
              </View>
          </Card>
          <Card
            title='Arreglo Flores Variadas'>
              <View>
                <Image style={styles.imgStyle} source={require('./RecursosInterfacesApp/Catalogo/arreglo3.png')}/>
              </View>
          </Card>
          <Card
            title='Arreglo Rosas'>
              <View>
                <Image style={styles.imgStyle} source={require('./RecursosInterfacesApp/Catalogo/arreglo4.jpg')}/>
              </View>
          </Card>
        </ScrollView>
      </View>
      {/* <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Button type="clear"
            icon={
              <Icon
                name="phone"
                size={20}
                color="white"
              />
            }
            onPress={() => navigation.navigate('Contacto')}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
}


function ArreglosEventos({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <ScrollView style={styles.body}>
          <Card
            title='Arreglo 180 Rosas'>
              <View>
                <Image style={styles.imgStyle} source={require('./RecursosInterfacesApp/Promociones/promo1.png')}/>
              </View>
              <Text style={{textAlign:'center'}}>$6,500</Text>
          </Card>
          <Card
            title='Arreglo Floral "Perrito"'>
              <View>
                <Image style={styles.imgStyle} source={require('./RecursosInterfacesApp/Promociones/promo2.png')}/>
              </View>
              <Text style={{textAlign:'center'}}>$500</Text>
          </Card>
          <Card
            title='Ramo 100 rosas'>
              <View>
                <Image style={styles.imgStyle} source={require('./RecursosInterfacesApp/Promociones/promo3.png')}/>
              </View>
              <Text style={{textAlign:'center'}}>$3,00</Text>
          </Card>
          <Card
            title='Ramo Lilies y Rosas'>
              <View>
                <Image style={styles.imgStyle} source={require('./RecursosInterfacesApp/Promociones/promo4.png')}/>
              </View>
              <Text style={{textAlign:'center'}}>$750</Text>
          </Card>
        </ScrollView>
      </View>
      {/* <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Button type="clear"
            icon={
              <Icon
                name="phone"
                size={20}
                color="white"
              />
            }
            onPress={() => navigation.navigate('Contacto')}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const AFlorales = createStackNavigator();

function AFloralesScreen() {
  return (
    <AFlorales.Navigator>
      <AFlorales.Screen name="Catalogo" component={ArreglosFlorales} />
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
        <Tab.Screen name="Catalogo" component={AFloralesScreen} />
        <Tab.Screen name="Promociones" component={AEventosScreen} />
        <Tab.Screen name="Contacto" component={ContactosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor:'#ffccae',
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

