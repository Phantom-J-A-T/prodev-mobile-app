import { styles } from "@/styles/_joinstyle";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.iconsection}>
          <Ionicons
            name="arrow-back"
            size={25}
            onPress={() => router.back()}
          />
        </View>

        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Sign in to your</Text>
          <Text style={styles.titleText}>Account</Text>
          <Text style={styles.subText}>
            Enter your email and password to sign in.
          </Text>
        </View>

        {/* FORM */}
        {/* Keep original form code here */}

        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>
            Don’t have an account?
          </Text>
          <Text
            style={styles.signupSubTitleText}
            onPress={() => router.push("/join")}
          >
            Join now
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}