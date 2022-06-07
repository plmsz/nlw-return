import BottomSheet from '@gorhom/bottom-sheet';
import { ChatTeardropDots } from 'phosphor-react-native';
import React, { useRef, useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { theme } from '../../theme';

import { styles } from './styles';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Form } from '../Form';
// import peopleImage from '../../assets/people.png';
import { Options } from './../Options/index';
import { Success } from '../Success';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  function handleOpen() {
    bottomSheetRef.current?.expand();
  }
  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }
  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

  return (
    <>
      {/*  <Image
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          bottom: 20,
        }}
        source={peopleImage}
      /> */}

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
        {feedbackSent ? (
          <Success onSendAnotherFeedback={handleRestartFeedback} />
        ) : (
          <>
            {feedbackType ? (
              <Form
                feedbackType={feedbackType}
                onFeedbackCancelled={handleRestartFeedback}
                onFeedbackSent={handleFeedbackSent}
              />
            ) : (
              <Options onFeedbackTypeChange={setFeedbackType} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
