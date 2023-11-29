import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  function spendGiftCard() {
    // compying the initial state of state in an new const variable
    const newGiftCard = { ...giftCard };
    newGiftCard.text = "Your coupon has been used.";
    newGiftCard.valid = false;
    newGiftCard.instructions =
      "Please visit our restaurant to renew your gift card.";

    setGiftCard(newGiftCard);
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Gift Card Page</h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>

      {giftCard.valid && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
    </div>
  );
}
