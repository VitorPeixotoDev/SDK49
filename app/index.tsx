import { useState } from 'react'
import { StyleSheet, FlatList } from "react-native";
import apodsJson from '../src/data/apods.json'
import ApodListItem from "../src/components/ApodListItem";
import FullScreenImage from '../src/components/FullScreenImage';
import { Apod } from '../src/types';

export default function Page() {
  const [apods, setApods] = useState<Apod[]>(apodsJson)
  const [activePicture, setActivePicture] = useState<string>(null)

  return (
    <>
      <FlatList
        data={apods}
        renderItem={({item}) => <ApodListItem 
          apod={item}
          onImagePress={() => setActivePicture(item.url)}
        />}
      />
      <FullScreenImage 
        url={activePicture} 
        onClose={() => setActivePicture(null)}/>
    </>
  );
}

const styles = StyleSheet.create({

});
