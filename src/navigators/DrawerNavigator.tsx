import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomDrawerContent, DrawerScreenContainer } from '../components';
import COLORS from '../constants/colors';
import { HomeScreen, Login, ProfileScreen } from '../screens';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          width: 200,
          backgroundColor: COLORS.primary,
        },
        overlayColor: null,
        drawerLabelStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.secondary,
        drawerItemStyle: { backgroundColor: null },
        sceneContainerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        options={{
          title: 'SHOP',
          drawerIcon: ({ color }) => (
            <Icon
              name="shoe-formal"
              size={25}
              style={{ marginRight: -20, color }}
            />
          ),
        }}
      >
        {props => (
          <DrawerScreenContainer>
            <StackNavigator />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="DONATION"
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="gift" size={25} style={{ marginRight: -20, color }} />
          ),
        }}
      >
        {props => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="ADD PET"
        options={{
          drawerIcon: ({ color }) => (
            <Icon
              name="plus-box"
              size={25}
              style={{ marginRight: -20, color }}
            />
          ),
        }}
      >
        {props => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="FAVOURITES"
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="heart" size={25} style={{ marginRight: -20, color }} />
          ),
        }}
      >
        {props => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="PROFILE"
        options={{
          drawerIcon: ({ color }) => (
            <Icon
              name="account"
              size={25}
              style={{ marginRight: -20, color }}
            />
          ),
        }}
      >
        {props => (
          <DrawerScreenContainer>
            <ProfileScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="LOGIN"
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="login" size={25} style={{ marginRight: -20, color }} />
          ),
        }}
      >
        {props => (
          <DrawerScreenContainer>
            <Login {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
