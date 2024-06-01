import { router } from 'expo-router';
import React from 'react';
import { Image, Text } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';


const OnboardingScreen = () => {
  return (
    <Onboarding
      onSkip={() => router.push('/start')}
      onDone={() => router.push('/start')}
      showSkip={true}
      skipLabel={<Text style={{ color: 'blue' }}>Skip</Text>}
      nextLabel={<View className='bg-primary p-2 rounded-full'><Icon name="arrow-right" size={20} color="#fff"  /></View>}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../assets/images/guardian-soil.png')} />,
          title: 'Guardian Soil Insights',
          subtitle: 'CryptaVita provides real-time reports on soil softness. Understand the heartbeat of the earth beneath your feet.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../assets/images/weather.png')} />,
          title: ' Weather Data Integration',
          subtitle: 'Up-to-date weather information for accurate disaster prediction. Unprecedented insights for proactive community response.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../assets/images/monitoring.png')} />,
          title: 'Real-time Monitoring',
          subtitle: 'Vigilant sentinels along roads. Instant threat detection and communication with vehicles.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../assets/images/intelligence.png')} />,
          title: 'Emotionally Intelligent Alerts',
          subtitle: 'Up-to-date weather information for accurate disaster prediction. Unprecedented insights for proactive community response.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../assets/images/community.png')} />,
          title: ' Community Empowerment',
          subtitle: 'Up-to-date weather information for accurate disaster prediction. Unprecedented insights for proactive community response.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../assets/images/safety.png')} />,
          title: 'Innovative Road Safety Measures',
          subtitle: 'Up-to-date weather information for accurate disaster prediction. Unprecedented insights for proactive community response.',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
