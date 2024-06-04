import { TextInput, View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

const ValidationTextInput = (props) => {
  const [text, setText] = useState();
  const [validationMessage, setValidationMessage] = useState();
  const [isFocused, setIsFocused] = useState(false);

  const handleTextChange = (input) => {
    setText(input);

    if (validationMessage) {
      validate(input);
    }
  };

  const validate = (input) => {
    const isValid = props.regex.test(input);
    if (!isValid) {
      setValidationMessage(props.validationMessage);
    } else {
      setValidationMessage(null);
    }
  };

  return (
    <>
      <TextInput
        style={[styles.input, isFocused && styles.focused]}
        value={text}
        {...props}
        onChangeText={handleTextChange}
        onEndEditing={() => validate(text)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor="grey"
      />
      {validationMessage ? (
        <Text style={styles.validationMessage}>{validationMessage}</Text>
      ) : null}
    </>
  );
};

export default ValidationTextInput;

const styles = StyleSheet.create({
  validationMessage: {
    color: 'red',
    textAlign: 'center',
    marginTop: 8,
  },
  focused: {
    borderColor: '#00A6ED',
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',

    padding: 20,
    margin: 4,
    borderWidth: 1,
    borderRadius: 18,
    width: '100%',
    borderColor: 'gray',
    fontSize: 14,
  },
});
// bg-black/5 p-5 m-1 rounded-2xl w-full
