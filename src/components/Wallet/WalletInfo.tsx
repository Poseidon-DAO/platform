import styles from "./WalletInfo.styles";
interface WalletInfoProps {
  address: string;
  balance: string;
  onClick: () => void;
}

export default function WalletInfo({
  balance,
  address,
  onClick,
}: WalletInfoProps) {
  return (
    <div style={styles.container} onClick={onClick}>
      <div style={styles.left}>
        <p>{balance} ETH</p>
      </div>
      <div style={styles.right}>
        <p style={{ width: "fit-content" }}>
          {address?.slice(0, 8) + "..." + address?.slice(-8)}
        </p>
      </div>
    </div>
  );
}
