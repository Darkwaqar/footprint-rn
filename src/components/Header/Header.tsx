import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../constants/colors';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={style.header}>
      <Icon name="sort-variant" size={28} onPress={navigation.toggleDrawer} />
      <Text style={{ color: COLORS.primary, fontWeight: 'bold', fontSize: 16 }}>
        JANE GARY
      </Text>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        }}
        style={{ height: 30, width: 30, borderRadius: 25 }}
      />
    </View>
  );
}
const style = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
