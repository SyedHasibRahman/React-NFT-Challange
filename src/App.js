import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CollectionCard from './components/CollectionCard/CollectionCard';
import Header from './components/Header/Header';
import PunkList from './components/PunkList/PunkList';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xdD2aF5ddF6501B0C6f69D927034AD9364849A9f1&order_direction=asc')
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    }
    return getMyNfts();
  }, [])

  return (
    <div className='app'>
      <Header />
      {/* <CollectionCard
        id={ 0 }
        name={ 'Bandana Punk' }
        traits={ [{ 'value': 7 }] }
        image='https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu'
      /> */}
      <PunkList punkListData={ punkListData } />
    </div>
  );
}

export default App;
