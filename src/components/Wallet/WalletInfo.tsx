import styled from "styled-components";

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
    <Container onClick={onClick}>
      {balance && (
        <LeftContainer>
          <p>{balance} ETH</p>
        </LeftContainer>
      )}
      <RightContainer address={address}>
        <p style={{ width: "fit-content" }}>
          {address?.slice(0, 8) + "..." + address?.slice(-8)}
        </p>
      </RightContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #171941;
  cursor: pointer;
  border-radius: 0.5rem;
  border: 0.5px solid #4824fa;
  width: 15rem;
`;

const LeftContainer = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-right: 0.5px solid #4824fa;
`;

const RightContainer = styled.div<Pick<WalletInfoProps, "address">>`
  padding: 0.5rem 1rem;
  display: flex;
  flex: 1;
  justify-content: ${(props) => (props.address ? "center" : "flex-end")};
`;
