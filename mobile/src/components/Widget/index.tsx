import BottomSheet from '@gorhom/bottom-sheet';
import { ChatTeardropDots } from 'phosphor-react-native';
import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { theme } from '../../theme';

import { styles } from './styles';
import { Options } from './../Options/index';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Form } from '../Form';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  function handleOpen() {
    bottomSheetRef.current?.expand();
  }
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
          weight='bold'
        />
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {/* <Options /> */}
        <Form feedbackType='BUG'/>
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
