import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';



export default function Remote() {
    const handlePress = () => {
        console.log('Settings');
      };
      const handleShutDown = () => {
        console.log('Shutdown');
      };
      const handleHybernate = () => {
        console.log('Hybernate');
      };
      const handleRestart = () => {
        console.log('Restart');
      };
  return (
    <View>

    <TouchableOpacity  style={styles.setting} onPress={handlePress}>
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M28.9447 7.11368C28.6176 6.584 28.0807 6.1961 27.4514 6.03791C26.8209 5.87971 26.1505 5.96291 25.5861 6.26877C24.6483 6.77613 23.5177 6.77556 22.5804 6.26725L21.6092 5.74055C20.73 5.26376 20.1824 4.34389 20.1824 3.34375C20.1824 2.06875 19.085 1 17.7278 1H14.2719C12.9148 1 11.8173 2.06875 11.8173 3.34375C11.8173 4.34395 11.2699 5.26393 10.3908 5.74107L9.42074 6.26761C8.48347 6.77635 7.35254 6.77679 6.41487 6.26877C5.85053 5.96292 5.1788 5.8797 4.5483 6.03791C3.91901 6.19611 3.38216 6.584 3.05502 7.11368L1.32953 9.9215C1.00367 10.4512 0.915001 11.0817 1.08356 11.6723C1.25212 12.2641 1.66414 12.768 2.22848 13.0738C3.15182 13.575 3.72694 14.5413 3.72725 15.5919L3.72749 16.4081C3.7278 17.4586 3.15298 18.425 2.22973 18.9262C1.66539 19.2332 1.2521 19.7359 1.08356 20.3266C0.91501 20.9184 1.00366 21.5488 1.32953 22.0785L3.05751 24.8863C3.38337 25.416 3.92026 25.8039 4.54954 25.9621C5.18008 26.1203 5.85053 26.0371 6.41612 25.7312C7.35391 25.2239 8.4845 25.2245 9.42177 25.7328L10.3895 26.2577C11.2693 26.7348 11.8173 27.6554 11.8173 28.6562C11.8173 29.9312 12.9147 31 14.2719 31H17.7268C19.0852 31 20.1815 29.9312 20.1815 28.6562C20.1822 27.6553 20.7306 26.735 21.6106 26.2579L22.5794 25.7326C23.5167 25.2244 24.6473 25.2239 25.5851 25.7312C26.1507 26.0371 26.8212 26.1203 27.4504 25.9621C28.081 25.8039 28.6178 25.416 28.9437 24.8863L30.6705 22.0785C30.9963 21.5488 31.085 20.9183 30.9164 20.3277C30.7479 19.7359 30.3359 19.232 29.7715 18.9262C28.8482 18.425 28.2732 17.4587 28.2732 16.4081V15.5918C28.2732 14.5413 28.8482 13.575 29.7715 13.0738C30.3359 12.7668 30.7479 12.264 30.9164 11.6734C31.085 11.0816 30.9963 10.4511 30.6705 9.92147L28.9447 7.11368Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    </TouchableOpacity>
        <View style={styles.remote} >
            <View style={styles.control}>
                <TouchableOpacity></TouchableOpacity>
            </View>
        </View>

    <View style={styles.remote1}>
        <View style={styles.control1}>
            <TouchableOpacity></TouchableOpacity>
        </View>
    </View>

    
    <TouchableOpacity  style={styles.shutdown} onPress={handleShutDown}>
        <Svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M6.04229 7.84723C4.09555 9.79585 2.77037 12.278 2.23432 14.9798C1.69826 17.6816 1.97542 20.4816 3.03073 23.0259C4.08605 25.5701 5.87212 27.7443 8.1631 29.2735C10.4541 30.8027 13.1471 31.6181 15.9015 31.6168C18.6559 31.6155 21.3481 30.7974 23.6376 29.266C25.9271 27.7346 27.7111 25.5587 28.7639 23.0134C29.8168 20.4681 30.0912 17.6678 29.5525 14.9665C29.0138 12.2653 27.6863 9.7844 25.7376 7.83766M16.4304 1.08519L16.4304 14.4762" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    </TouchableOpacity>
    
    <TouchableOpacity  style={styles.hybernate} onPress={handleHybernate}>
        <Svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M9.93508 1.54974C4.46042 3.57835 1.31409 8.85247 1.31409 15.0326C1.31409 22.9694 7.74785 29.4031 15.6846 29.4031C21.8648 29.4031 27.139 26.2565 29.1675 20.7821C27.5312 21.4407 25.7445 21.7771 23.872 21.7771C16.0284 21.7771 8.94042 14.6891 8.94042 6.84548C8.94042 4.97293 9.27656 3.18741 9.93508 1.54974Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    </TouchableOpacity>

    <TouchableOpacity  style={styles.restart} onPress={handleRestart}>
    <Svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M4.75683 5.94765C7.32263 3.24068 10.9689 1.54974 15.014 1.54974C22.7816 1.54974 29.0785 7.78494 29.0785 15.4764C29.0785 23.168 22.7816 29.4031 15.014 29.4031C10.9689 29.4031 7.32263 27.7122 4.75683 25.0052M6.63899 10.0725L1.2251 10.0725L1.2251 4.71165" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>

    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  remote: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  control:{
    top:400,
    height:266,
    width:266,
    backgroundColor:"white",
    borderRadius:200,
    opacity:0.2,

  },

  remote1: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  control1:{
    top:400,
    height:61.28,
    width:61.28,
    backgroundColor:"white",
    borderRadius:200,
    opacity:0.2,


  },

  shutdown:{
    alignSelf:'center',
    top:310,
  },
  hybernate:{
    alignSelf:'center',
    right:60,
    top:310+135-44,
  },
  restart:{
    alignSelf:'center',
    left:60,
    top:310+135-44-25,
  },
  setting:{
    alignSelf:'flex-end',
    right:30,
    top:44,
  }

});
