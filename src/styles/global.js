import { StyleSheet } from "react-native";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


let customFonts = {
    'QuicksandBold': require('../assets/fonts/Quicksand-Bold.ttf'),
    'QuicksandRegular': require('../assets/fonts/Quicksand-Regular.ttf'),
    'QuicksandSemiBold': require('../assets/fonts/Quicksand-SemiBold.ttf'),
    'QuicksandLight': require('../assets/fonts/Quicksand-Light.ttf'),
  };

  export default function Fonts() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    
    async function loadFonts() {
      await Font.loadAsync(customFonts);
      setFontsLoaded(true);
    }

    useEffect(() => {
        loadFonts();
        }, []);

      
    if (!fontsLoaded) {
        console.log(fontsLoaded);
        return <AppLoading />;
        }
    return alert(fontsLoaded);


  }

export const globalStyles = StyleSheet.create({
  headerText: {
    fontFamily: "QuicksandBold",
    fontSize: 30,
    color: "black",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  headerText2: {
    fontFamily: "QuicksandBold",
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  paragraph: {
    fontFamily: "QuicksandRegular",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: "QuicksandSemiBold",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});
