import React, { useEffect } from 'react';
import linkedinLogo from '../../assets/owner/instagram.png';
import hackerRankLogo from '../../assets/owner/twitter.png';
import moreLogo from '../../assets/owner/more.png';
import './Main.css';
import { useState } from 'react/cjs/react.development';

const Main = ({ selectedPunk, punkListData }) => {
    const [activePunk, setActivePunk] = useState(punkListData[0]);
    console.log(selectedPunk, 'hello');
    useEffect(() => {
        setActivePunk(punkListData[selectedPunk]);
    }, [selectedPunk, punkListData])
    return (
        <div className='main'>
            <div className="mainContainer">
                <div className="punkHighlight">
                    <div className="punkContainer">
                        <img className='selectedPunk' src={ activePunk.image_original_url } alt="" />
                    </div>
                </div>
                <div className="punkDetails" style={ { color: '#ffffff' } }>
                    <div className="title"> { activePunk.name }</div>
                    <span className="itemNumber">#{ activePunk.token_id }</span>
                </div>
                <div className="owner">
                    <div className="ownerImageContainer">
                        <img src={ activePunk.owner.profile_img_url } alt="" />
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                            <div>{ activePunk.owner.address }</div>
                            <div className="ownerHandle">@SyedHasibRahman</div>
                        </div>
                        <div className="ownerLink">
                            <img src={ linkedinLogo } alt="" />
                        </div>
                        <div className="ownerLink">
                            <img src={ hackerRankLogo } alt="" />
                        </div>
                        <div className="ownerLink">
                            <img src={ moreLogo } alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;