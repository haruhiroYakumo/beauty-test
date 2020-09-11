import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DYNAMIC_ARRAY_DATA, NAVIGATION_ELEMENTS, TAGS_PLACEHOLDER_DATA } from '../utils/variables';
import HeaderNavigation from '../src/components/HeaderNavigation';
import DashboardTags from '../src/components/DashboardTags';
import DynamicList from '../src/components/DynamicList';

/**
 * Dashboard component
 */
const DashboardScreen: React.FC = () => {
  const [activeNavigationElement, activeNavigationElementHandler] = useState<number>(1);

  const {container} = styles;

  return (
    <SafeAreaView style={ { flex: 1 } }>
      <ScrollView showsVerticalScrollIndicator={ false }>
        <View style={ container }>
          <HeaderNavigation
            onItemPress={activeNavigationElementHandler}
            activeElement={activeNavigationElement}
          />

          <DynamicList data={DYNAMIC_ARRAY_DATA} />

          <DashboardTags data={TAGS_PLACEHOLDER_DATA} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E8E1DF'
  },
});

export default DashboardScreen;
