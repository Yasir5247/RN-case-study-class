import { observer } from "mobx-react";
import { NavioScreen } from "rn-navio";
import {Text, View} from 'react-native-ui-lib';
import React, { useCallback, useRef, useState } from "react";
import { useStores } from "../stores";
import { useServices } from "../services";
import { Section } from "../components/section";
import { BButton } from "../components/button";
import { If } from "@kanzitelli/if-component";


export const DataFetchingScreen: NavioScreen = observer(({}) => {

  const {counter, ui} = useStores();
  const {t, api, navio} = useServices();

  // State (local)
  const [loading, setLoading] = useState(false);

  // API Methods
  const getCounterValue = useCallback(async () => {
    setLoading(true);
    try {
      const {value} = await api.counter.get();
      counter.set('value', value);
    } catch (e) {
      console.log('[ERROR]', e);
    } finally {
      setLoading(false);
    }
  }, [api.counter, counter]);

  return (
    <View flex-1 center>
      <Section title="API">
        <Text marginB-s2 text60R textColor>
          Counter:{' '}
          <If
            _={loading}
            _then={<Text textColor>Loading...</Text>}
            _else={<Text textColor>{counter.value}</Text>}
          />
      </Text>
      </Section>
      <Section title="API">
          <BButton margin-s1 label="Update counter value from API" onPress={getCounterValue} />
        </Section>
    </View>
  )
})