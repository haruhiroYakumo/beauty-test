import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { SimpleItemArray } from '../../utils/variables';

interface IProps {
  data: Array<SimpleItemArray>
}

/**
 * Dashboard tags component
 * @param {object} props - component props.
 * @param {array} props.data - Array of tags.
 */
const DashboardTags: React.FC<IProps> = ({ data }) => {
  const { container, tagItemContainer, iconWrapper } = styles;

  const renderItem = ({ item }: any) => {
    return <View style={ tagItemContainer }>
      <View style={ iconWrapper }>
        <Feather name="hash" size={ 15 } color="black"/>
      </View>

      <Text>{ item.label }</Text>
    </View>;
  };

  return (
    <View style={ container }>
      <FlatList
        data={ data }
        renderItem={ renderItem }
        keyExtractor={ item => String(item.id) }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    width: 35,
    height: 35,
    borderRadius: 500,
    backgroundColor: '#F2EDEB',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'tomato',
    marginRight: 10
  },
  container: {},
  tagItemContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default DashboardTags;
