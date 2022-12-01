import {Navio} from 'rn-navio';

//screens
import {CaseStudyOneScreen} from './caseStudy1';
import {DataFetchingScreen} from './dataFetching';
import {StackExampleScreen} from './stackEample';
import {LoginScreen} from './loginScreen';

import {useAppearance} from '../utils/hooks';
import {screenDefaultOptions, tabDefaultOptions, getTabBarIcon} from '../utils/designSystem';

// NAVIO
export const navio = Navio.build({
  screens: {
    CaseStudyOneScreen,
    DataFetchingScreen,
    StackExampleScreen,
    LoginScreen
  },
  stacks: {
    homeStack: ['CaseStudyOneScreen'],
    DataFetchingStack: ['DataFetchingScreen'],
    StackExample: [
      'StackExampleScreen', 
      'CaseStudyOneScreen', 
      'LoginScreen'
    ],
  },
  tabs: {
    caseSTab: {
      stack: 'homeStack',
      options: {
        title: 'CaseStudyOne',
        tabBarIcon: getTabBarIcon('caseSTab'),
      },
    },
    DataFetchingTab: {
      stack: 'DataFetchingStack',
      options: () => ({
        title: 'DataFetching',
        tabBarIcon: getTabBarIcon('DataFetchingTab'),
      }),
    },
    StackExampleTab: {
      stack: 'StackExample',
      options: () => ({
        title: 'StackExample',
        tabBarIcon: getTabBarIcon('StackExampleTab'),
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
