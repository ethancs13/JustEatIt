import React from "react";
import { View, Text } from "react-native";
import { SocialIcon } from "react-native-elements";

const Footer = () => {
  const styles = {
    socialIconSize: {
      height: 40,
      width: 40,
    },
    iconContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    icon: {
      alignItems: "center",
    },
    iconText: {
      color: "white",
      marginTop: 5,
    },
  };

  return (
    <View style={styles.footer}>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <SocialIcon
            type="github"
            iconColor="white"
            iconSize={styles.socialIconSize.height}
            style={styles.socialIconSize}
            onPress={() => console.log("Github 1")}
          />
          <Text style={styles.iconText}>Ethan Sroka</Text>
        </View>
        <View style={styles.icon}>
          <SocialIcon
            type="github"
            iconColor="white"
            iconSize={styles.socialIconSize.height}
            style={styles.socialIconSize}
            onPress={() => console.log("Github 2")}
          />
          <Text style={styles.iconText}>Cody Burkholder</Text>
        </View>
        <View style={styles.icon}>
          <SocialIcon
            type="github"
            iconColor="white"
            iconSize={styles.socialIconSize.height}
            style={styles.socialIconSize}
            onPress={() => console.log("Github 3")}
          />
          <Text style={styles.iconText}>Brandon Wing</Text>
        </View>
        <View style={styles.icon}>
          <SocialIcon
            type="github"
            iconColor="white"
            iconSize={styles.socialIconSize.height}
            style={styles.socialIconSize}
            onPress={() => console.log("Github 4")}
          />
          <Text style={styles.iconText}>Lacey Trokey</Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;