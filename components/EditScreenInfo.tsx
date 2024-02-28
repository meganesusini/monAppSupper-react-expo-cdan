import React from 'react';
import { StyleSheet } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText, Red, Button } from './StyledText';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';
import { MySectionList } from './MySectionList';
import { App, ButtonClic, ExoUseEffect, Func, Increment, ListData, ShoppingList } from './app.component';


export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        {/* Texte en rouge */}
        {/* <Text
          style={styles.getStartedText}>Affichage du texte en rouge : 
          <Red> Open up the code for this screen:</Red>
        </Text> */}
        {/* Affichage d'un bouton  */}
        {/* <View>
          <Text>Affichage d'un bouton</Text>
          <Button></Button>
        </View>   */}
        {/* Bouton 'Clic to say Hello' */}
        {/* <View>
          <ButtonClic></ButtonClic>
        </View>       */}
        {/* Affiche 'Error', 'Loading', 'Title' */}
        {/* <View>
          <Func></Func>
        </View>    */}
        {/* Affiche des données  */}
        {/* <ListData></ListData>    */}
        {/* Fonction qui incrémente un nombre */}
        {/* <Increment></Increment> */}
        {/* Affiche une liste de course  */}
        {/* <Text>My Shopping List :</Text>
        <ShoppingList></ShoppingList> */}
        {/* Charge du contenu  */}
        {/* <ExoUseEffect></ExoUseEffect> */}
        <App></App>

        {/* <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText>{path}</MonoText>
        </View> */}

        <Text
          style={styles.getStartedText}>
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
          <Text style={styles.helpLinkText}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </ExternalLink>
      </View>
      {/* <MySectionList></MySectionList> */}
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
