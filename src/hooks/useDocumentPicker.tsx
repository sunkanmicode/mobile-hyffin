
import * as DocumentPicker from 'expo-document-picker';
import { useState } from 'react';

const useDocumentPicker = () => {
  const [documentName, setDocumentName] = useState<any>(null);
  const [documentUri, setDocumentUri] = useState<any>(null); // State for the document URI

  const pickDocument = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
          type: ['image/*'],
          // Other options 
      });
      // console.log(result, "ppp");
      if (!result.canceled) {
        setDocumentName(result.assets[0].uri);
        setDocumentUri(result.assets[0].uri); // Update the document URI state
      }
    } catch (error) {
      console.log('Error picking document - ', error);
    }
  };

  const removeImage = () => {
    try {
      setDocumentUri(null);
      setDocumentName(null)
    } catch (error) {
      console.log(error);
    }
  };

  return { pickDocument, documentName, documentUri, removeImage, setDocumentName };
};

export default useDocumentPicker;

