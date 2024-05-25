import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants";
import { router } from "expo-router";

function Header({ headerName, icon }){
    return(

        <View style={styles.container}>
        <View style={{justifyContent: 'center'}}>
          {/* App Logo */}
          <Pressable onPress={()=>{
            router.back();
          }} >
                {icon}
        </Pressable>
        </View>
        <Text style={styles.textStyle}>{ headerName }</Text>  
      </View>
    );
}
const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        paddingHorizontal: 10,
        paddingVertical: 5
      },
      textStyle:{
        color: "#fff",
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 10,
        paddingVertical: 5
      },
      imgStyle:{
        width: 24,
        height: 24,
        resizeMode: 'contain',
        justifyContent:'center',
        alignContent: 'center'
      },
    
      iconStyle:{
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 'auto'
      }
});
export default Header;