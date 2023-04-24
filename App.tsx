// App.js
import React, {Component} from 'react';
import {
  ZegoUIKitPrebuiltCall,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import {StyleSheet, View} from 'react-native';

export default function VoiceCallPage(props: any) {
  const userId = String(Math.floor(Math.random() * 100000));
  console.log('useeee', userId);

  return (
    <View style={styles.main}>
      <ZegoUIKitPrebuiltCall
        appID={684219552}
        appSign={
          '86471b307f4dc3591c3f3ce1898cc2fa8b5be7f12336a6374565d13b7279dcf6'
        }
        userID={userId} // userID can be something like a phone number or the user id on your own user system.
        userName={`user_${userId}`}
        callID={'Group_123'} // callID can be any unique string.
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onOnlySelfInRoom: () => {
            // props.navigation.navigate('HomePage');
          },
          onHangUp: () => {
            // props.navigation.navigate('HomePage');
          },
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {
//   ZegoUIKitPrebuiltCall,
//   ONE_ON_ONE_VIDEO_CALL_CONFIG,
// } from '@zegocloud/zego-uikit-prebuilt-call-rn';

// const App = () => {
//   console.log('ZegoUIKitPrebuiltCall', ZegoUIKitPrebuiltCall);
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
