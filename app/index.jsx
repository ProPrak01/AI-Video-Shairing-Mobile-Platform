import { ScrollView, Text, View,Image } from "react-native";
import {Redirect,router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import images from '../constants/images'
import CustomButton from '../components/customButton'

import {useGlobalContext} from '../context/GlobalProvider'

export default function Page() {

  const {isLoading,isLoggedIn} = useGlobalContext();
  if(!isLoading && isLoggedIn) return <Redirect href="/home" />
  return (
  <SafeAreaView className="bg-primary h-full">
    <ScrollView contentContainerStyle={{height:'100%'}}>
      <View className={"w-full items-center min-h-[85vh] px-4 justify-start"}>
        <Image 
        source={images.logo} 
        className="w-[130px] h-[84px]"
        resizeMode = "contain"
         />
         <Image 
          source={images.cards}
          className="max-w-[380px] w-full h-[300px]"
          resizeMode = "contain"
         />
        <View className="relative mt-5">
        <Text className="text-3xl text-white font-bold text-center">Discover Endless ~ Possiblities with
        <Text className="text-secondary-200"> Aora</Text>
        </Text>
        <Image 
          source={images.path}
          className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
          resizeMode="contain"
        />
      </View>
      <Text className="text-center text-sm text-gray-100 mt-7 font-pregular">
        Where creativity meets innovation:
        embark on a journey of limitless exploration with aura
      </Text>
      <CustomButton
      title="Continue with Email"
      handlePress={()=>router.push('/sign-in')}
      containerSyles="w-full mt-7"
       />
      </View>
      
    </ScrollView>

    <StatusBar backgroundColor="#161622" style="light"/>
  </SafeAreaView>
  );
}


