import { useState } from "react";
const ethers = require("ethers");

function RewardTokenScreen() {
  const [stakedTokenValue, setStakedTokenValue] = useState();
  const [srtValueToStake, setSrtValueToStake] = useState();
  const [srtBalance, setSrtBalance] = useState();
  const [srtTransferValue, setSrtTransferValue] = useState();
  const [srtTransferTo, setSrtTransferTo] = useState();

  const getStakedTokenValue = async (event) => {
    setStakedTokenValue(100);
  }

  const stakeSrtToken = async (event) => {
    setSrtValueToStake(100);
  }

  const getTokenBalance = async (event) => {
    setSrtBalance(100);
  }

  const transferSrtToken = async (event) => {
    setSrtTransferValue(100);
    setSrtTransferTo(100);
  }

  return (
    <div style={styles.container}>
        <h1 style={styles.screenTitle}>Reward Token Screen</h1>
        <div style={styles.tokenForm}>

            <div style={styles.actionCard}>
                <span style={styles.actionCardItem}>Number of Tokens staked</span>
                <input 
                    style={styles.actionCardItem} 
                    type="text" 
                    name="num_tokens_staked" 
                    placeholder="e.g 10" 
                    value={stakedTokenValue}
                />
                <button style={styles.btn} onClick={getStakedTokenValue}>Read</button>
            </div>

            <div style={styles.actionCard}>
                <span style={styles.actionCardItem}>Stake SRT token</span>
                <input 
                    style={styles.actionCardItem} 
                    type="text" 
                    name="srt_value_to_stake" 
                    placeholder="e.g 10" 
                    value={srtValueToStake}
                />
                <button style={styles.btn} onClick={stakeSrtToken}>Stake</button>
            </div>

            <div style={styles.actionCard}>
                <span style={styles.actionCardItem}>Token balance</span>
                <input 
                    style={styles.actionCardItem} 
                    type="text" 
                    name="srt_balance" 
                    placeholder="e.g 0.0001" 
                    value={srtBalance}
                />
                <button style={styles.btn} onClick={getTokenBalance}>Read</button>
            </div>

            <div style={styles.actionCard}>
                <span style={styles.actionCardItem}>Stake SRT token</span>
                <input 
                    style={{...styles.actionCardItem, flex: 0.5}} 
                    type="text" 
                    name="srt_value_to_stake" 
                    placeholder="e.g 10" 
                    value={srtTransferValue}
                />
                <input 
                    style={{...styles.actionCardItem, flex: 0.5}} 
                    type="text" 
                    name="srt_value_to_stake" 
                    placeholder="e.g 0xabcd1234abcd1234abcd1234abcd1234" 
                    value={srtTransferTo}
                />
                <button style={styles.btn} onClick={transferSrtToken}>Transfer</button>
            </div>

        </div>
    </div>
  );
}

const styles = {
    container: {
        maxWidth: 500,
        padding: 50,
        margin: "auto"
    },
    screenTitle: {
        color: "orange",
        textAlign: "center"
    },
    tokenForm: {
        width: 500,
        height: 500,
        padding: 20,
        borderRadius: 20,
        backgroundColor: "orange"
    },
    actionCard: {
        display: "flex",
        padding : 10
    },
    actionCardItem: {
        flex: 1
    },
    btn: {
        flex: 1,
        borderRadius: 15,
        backgroundColor: "red"
    }
};

export default RewardTokenScreen;
