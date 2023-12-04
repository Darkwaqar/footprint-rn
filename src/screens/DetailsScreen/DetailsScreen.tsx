import React from 'react';
import {
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../constants/colors';
import Animated from 'react-native-reanimated';
import tw from 'twrnc';

const DetailsScreen = ({ navigation, route }) => {
  const pet = route.params;
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      {/* Render  Header */}
      <Animated.Image
        sharedTransitionTag={`${pet.id}-image`}
        resizeMode="cover"
        source={pet?.image}
        style={{
          height: 400,
          width: '100%',
          position: 'absolute',
        }}
      />
      <View style={style.header}>
        <Icon
          name="arrow-left"
          size={28}
          color={COLORS.dark}
          onPress={navigation.goBack}
        />
        <Icon name="dots-vertical" size={28} color={COLORS.dark} />
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingTop: 300,
          paddingBottom: 100,
        }}
      >
        <Animated.View
          style={style.detailsContainer}
          sharedTransitionTag={`${pet.id}-name`}
        >
          {/*
            {/* Pet name and gender icon */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: COLORS.dark,
                fontWeight: 'bold',
              }}
            >
              {pet.name}
            </Text>
            <Icon name="gender-male" size={25} color={COLORS.grey} />
          </View>

          {/* Render Pet type and age */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 12, color: COLORS.dark }}>{pet.type}</Text>
            <Text style={{ fontSize: 13, color: COLORS.dark }}>{pet.age}</Text>
          </View>

          {/* Render location and icon */}
          <View style={{ marginTop: 5, flexDirection: 'row' }}>
            <Icon name="map-marker" color={COLORS.primary} size={20} />
            <Text style={{ fontSize: 14, color: COLORS.grey, marginLeft: 5 }}>
              5 Bulvarna-Kudriavska Street, Kyiv
            </Text>
          </View>
        </Animated.View>

        <View style={tw`bg-white`}>
          {/* Comment container */}

          {Array(4)
            .fill('')
            .map((x, i) => (
              <View
                key={i}
                style={{
                  marginTop: i == 0 ? 80 : 20,
                  justifyContent: 'space-between',
                  flex: 1,
                }}
              >
                <View>
                  {/* Render user image , name and date */}
                  <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                    <Image
                      source={{ uri: 'https://picsum.photos/200/300' }}
                      style={{ height: 40, width: 40, borderRadius: 20 }}
                    />
                    <View style={{ flex: 1, paddingLeft: 10 }}>
                      <Text
                        style={{
                          color: COLORS.dark,
                          fontSize: 12,
                          fontWeight: 'bold',
                        }}
                      >
                        JANE GARY
                      </Text>
                      <Text
                        style={{
                          color: COLORS.grey,
                          fontSize: 11,
                          fontWeight: 'bold',
                          marginTop: 2,
                        }}
                      >
                        Owner
                      </Text>
                    </View>
                    <Text style={{ color: COLORS.grey, fontSize: 12 }}>
                      May 25, 2020
                    </Text>
                  </View>
                  <Text style={style.comment}>
                    My job requires moving to another country. I don't have the
                    opputurnity to take the cat with me. I am looking for good
                    people who will shelter my Lily.
                  </Text>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
      {/* Render footer */}
      <View style={style.footer}>
        <View style={style.iconCon}>
          <Icon name="heart-outline" size={22} color={COLORS.white} />
        </View>
        <View style={style.btn}>
          <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>
            ADOPTION
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  detailsContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // height: 120,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    // flex: 1,
    bottom: -60,
    borderRadius: 18,
    padding: 20,
    justifyContent: 'center',
    zIndex: 1,
  },
  comment: {
    marginTop: 10,
    fontSize: 12.5,
    color: COLORS.dark,
    lineHeight: 20,
    marginHorizontal: 20,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    backgroundColor: COLORS.light,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconCon: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  btn: {
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    // top: 30,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    zIndex: 1,
  },
});
export default DetailsScreen;
