import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { DynamicArrayDataItem } from '../../utils/variables';

const { width, height } = Dimensions.get('window');

interface IProps {
  data: Array<DynamicArrayDataItem>
}

type SortedDynamicArrayType = {
  [key: string]: Array<DynamicArrayDataItem>,
  fullwidth: Array<DynamicArrayDataItem>,
  halfwidth: Array<DynamicArrayDataItem>,
  triwidth: Array<DynamicArrayDataItem>
}

/**
 * Dynamic list component.
 * @params {object} props - component props.
 * @params {array} props.data - Item data array.
 */
const DynamicList: React.FC<IProps> = ({ data }) => {
  const {
    container, fullwidthItemsContainer, halfwidthItemsContainer, triwidthItemsContainer, fullwidthItemContaner, avatarImageStyles,
    fullwidthTextContainer, avatarText, avatarDescriptionText, halfWidthImageStyles, halfWidthDescriptionContainer,
    imageHalfWidthDescription, avatarHalfWidthText, halfWidthTextDescriptionContainer, smallAvatarStyles, triWidthDescriptionContainer,
    triWidthItemTitleText, triWidthItemDetailsText
  } = styles;

  const sortApiData = (): SortedDynamicArrayType => {
    const sortedArray: SortedDynamicArrayType = {
      fullwidth: [],
      halfwidth: [],
      triwidth: []
    };

    data.forEach((item: DynamicArrayDataItem) => sortedArray[item.type] = [...sortedArray[item.type], item]);

    return sortedArray;
  };

  console.log('data:', sortApiData().fullwidth.length);

  const renderWillwidthItem = ({ item }: any) => {
    return <TouchableOpacity style={ fullwidthItemContaner }>
      <Image source={ { uri: item.avatar } } style={ avatarImageStyles }/>

      <View style={ fullwidthTextContainer }>
        <Text style={ avatarText }>{ item.name }</Text>
        <Text style={ avatarDescriptionText }>{ item.name }</Text>
      </View>
    </TouchableOpacity>;
  };

  const renderHalfwidthItem = ({ item, index }: any) => {
    const evenElement = index % 2;

    return <TouchableOpacity>
      <Image
        source={ { uri: item.avatar } } style={ [
        halfWidthImageStyles,
        { marginRight: (evenElement === 0) ? 10 : 0 }
      ] }
      />

      <View style={ halfWidthDescriptionContainer }>
        <Text style={ imageHalfWidthDescription }>{ item.storyTitle.toUpperCase() }</Text>
        <View style={ halfWidthTextDescriptionContainer }>
          <Image source={ { uri: item.storyImage } } style={ smallAvatarStyles }/>
          <Text style={ avatarHalfWidthText }>{ item.name }</Text>
        </View>
      </View>
    </TouchableOpacity>;
  };

  const renderTriWidthItem = ({ item, index }: any) => {
    const evenElement = (index + 1) % 3;

    return <TouchableOpacity>
      <Image
        source={ { uri: item.storyImage } } style={ {
        width: (width / 3) - 17, height: width / 3 - 10,
        marginBottom: 5,
        marginRight: (evenElement !== 0) ? 5 : 0,
        borderRadius: 5
      } }
      />

      <View style={ triWidthDescriptionContainer }>
        <Text style={ triWidthItemTitleText }>{ item.itemName.toUpperCase() }</Text>
        <Text style={ triWidthItemDetailsText }>{ item.itemSource }</Text>
      </View>
    </TouchableOpacity>;
  };

  return (
    <View style={ container }>
      <View style={ fullwidthItemsContainer }>
        { sortApiData().fullwidth.length !== 0 ?
          <FlatList
            data={ sortApiData().fullwidth }
            renderItem={ renderWillwidthItem }
            keyExtractor={ item => String(item.id) }
          /> :
          <Text>No data</Text>
        }
      </View>

      <View style={ halfwidthItemsContainer }>
        { sortApiData().halfwidth.length !== 0 ?
          <FlatList
            data={ sortApiData().halfwidth }
            renderItem={ renderHalfwidthItem }
            keyExtractor={ item => String(item.id) }
            numColumns={ 2 }
          /> :
          <Text>no data</Text>
        }
      </View>

      <View style={ triwidthItemsContainer }>
        { sortApiData().triwidth.length !== 0 ?
          <FlatList
            data={ sortApiData().triwidth }
            renderItem={ renderTriWidthItem }
            keyExtractor={ item => String(item.id) }
            numColumns={ 3 }
          /> :
          <Text>no data</Text>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  triWidthItemDetailsText: {
    fontSize: 12,
    color: '#000000'
  },
  triWidthItemTitleText: {
    fontWeight: 'bold',
    fontSize: 13
  },
  triWidthDescriptionContainer: {
    marginBottom: 10
  },
  smallAvatarStyles: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginRight: 5
  },
  halfWidthTextDescriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  avatarHalfWidthText: {
    color: '#FFFFFF',
    fontSize: 10
  },
  imageHalfWidthDescription: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold'
  },
  halfWidthDescriptionContainer: {
    position: 'absolute',
    bottom: 15,
    left: 10
  },
  halfWidthImageStyles: {
    height: 300,
    width: width / 2 - 25,
    marginBottom: 10,
    borderRadius: 5
  },
  avatarDescriptionText: {
    fontSize: 14,
    color: 'grey'
  },
  avatarText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  fullwidthTextContainer: {
    paddingVertical: 5
  },
  avatarImageStyles: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'tomato',
    marginRight: 10
  },
  fullwidthItemContaner: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  container: {
    marginVertical: 10
  },
  fullwidthItemsContainer: {
    marginBottom: 20
  },
  halfwidthItemsContainer: {
    marginBottom: 20
  },
  triwidthItemsContainer: {}
});

export default DynamicList;
