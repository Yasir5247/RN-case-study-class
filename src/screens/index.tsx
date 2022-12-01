import {Navio} from 'rn-navio';

import {CaseStudyOneScreen} from './caseStudy1';
import {DataFetchingScreen} from './dataFetching';

import {useAppearance} from '../utils/hooks';
import {screenDefaultOptions, tabDefaultOptions, getTabBarIcon} from '../utils/designSystem';

// NAVIO
export const navio = Navio.build({
  screens: {
    CaseStudyOneScreen,
    DataFetchingScreen,
  },
  stacks: {
    MainStack: ['CaseStudyOneScreen'],
    DataFetchingStack: ['DataFetchingScreen'],
  },
  tabs: {
    MainTab: {
      stack: 'MainStack',
      options: {
        title: 'CaseStudyOne',
        tabBarIcon: getTabBarIcon('MainTab'),
      },
    },
    PlaygroundTab: {
      stack: 'DataFetchingStack',
      options: () => ({
        title: 'DataFetching',
        tabBarIcon: getTabBarIcon('PlaygroundTab'),
      }),
    },
  },
  root: 'Tabs',
  hooks: [useAppearance],
  options: {
    stack: screenDefaultOptions,
    tab: tabDefaultOptions,
  },
});

export const getNavio = () => navio;
export const AppRoot = navio.Root;
