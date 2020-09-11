import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NAVIGATION_ELEMENTS } from '../../utils/variables';

interface IProps {
  activeElement: number,
  onItemPress: (item: number) => void
}

/**
 * Const dashboard container.
 * @param {object} props - component props
 * @param {number} props.activeElement - Active navigation header button
 * @param {function} props.onItemPress - Change active navigation element handler
 */
const HeaderNavigation: React.FC<IProps> = ({ activeElement, onItemPress }) => {
  const { navigationButtonText, navigationButtonWrapper, container } = styles;

  const handleNavigationElement = (id: number): void => onItemPress(id);

  const navigationButtonFlex = (id: number) => {
    switch (id) {
      case 1:
      case 5:
        return 0;
      default:
        return 1;
    }
  };

  return (
    <View style={ container }>
      { NAVIGATION_ELEMENTS.map(item => {
        const isElementActive = item.id === activeElement;

        return <TouchableOpacity
          key={ item.id }
          style={ [
            navigationButtonWrapper,
            { borderBottomColor: isElementActive ? '#000000' : 'grey' },
            { flex: navigationButtonFlex(item.id) },
            { paddingLeft: item.id === 2 ? 10 : 0 },
            { paddingRight: item.id === 4 ? 10 : 0 }
          ] }
          onPress={ () => handleNavigationElement(item.id) }
        >
          <Text
            style={ [
              navigationButtonText,
              { color: isElementActive ? '#000000' : 'grey' },
              { fontWeight: isElementActive ? 'bold' : 'normal' }
            ] }
          >{ item.label }</Text>
        </TouchableOpacity>;
      }) }
    </View>
  );
};

const styles = StyleSheet.create({
  navigationButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'grey',
    textAlign: 'center',
    marginBottom: 7.5
  },
  navigationButtonWrapper: {
    borderBottomWidth: 2,
    flex: 1
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default HeaderNavigation;
