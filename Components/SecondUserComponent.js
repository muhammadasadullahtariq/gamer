import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

var a =
  "In word processing and desktop publishing, a hard return or paragraph break indicates a new paragraph, to be distinguished from the soft return at the end of a line internal to a paragraph. This distinction allows word wrap to automatically re-flow text as it is edited, without losing paragraph breaks. The software may apply vertical white space or indenting at paragraph breaks, depending on the selected style.How such documents are actually stored depends on the file format. For example, HTML uses the <p> tag as a paragraph container. In plaintext files, there are two common formats. The pre-formatted text will have a newline at the end of every physical line, and two newlines at the end of a paragraph, creating a blank line. An alternative is to only put newlines at the end of each paragraph, and leave word wrapping up to the application that displays or processes the text.A line break that is inserted manually, and preserved when re-flowing, may still be distinct from a paragraph break, although this is typically not done in prose. HTML's <br /> tag produces a line break without ending the paragraph; the W3C";
const component = (props) => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textContainer} >{a}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 5,
    marginRight: '20%',
  },
  textContainer: {
    backgroundColor: '#2097f5',
    maxHeight: '100%',
    maxWidth: '100%',
    color:"white",
    padding: 7,
    borderRadius: 5,
    shadowColor: '#f2f2f2',
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 10,
    elevation: 5,
  },
});

export default component;
