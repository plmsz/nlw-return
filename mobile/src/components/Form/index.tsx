import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { theme } from '../../theme';
import { FeedbackType } from '../Widget';

import { styles } from './styles';
import { feedbackTypes } from '../../utils/feedbackTypes';

interface Props {
  feedbackType: FeedbackType;
}

export function Form({ feedbackType }: Props) {
  const feedBackTypeInfo = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight='bold'
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Image source={feedBackTypeInfo.image} style={styles.image} />
        <Text style={styles.titleText}>{feedBackTypeInfo.title}</Text>
      </View>
      </View>
      <TextInput
        multiline
        placeholder='Algo não está funcionando bem. Queremos corrigir. Conte com detalhes o que está acontecendo...'
        style={styles.input}
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
      />
    </View>
  );
}
