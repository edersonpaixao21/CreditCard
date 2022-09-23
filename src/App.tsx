import { useState } from "react";
import { CardInfoProps } from "./@types/types";
import { Card } from "./components/Card";
import { CardInfo } from "./components/CardInfo";
import { Form } from "./components/Form";

export const App = () => {
  const [cardInfo, setCardInfo] = useState<CardInfoProps>({
    nameOnCard: "",
    cardNumber: "",
    expiry: "",
    cvv: undefined,
  });

  return (
    <Card>
      <CardInfo cardInfo={cardInfo} />

      <h1 className="font-light tracking-wide text-2xl mb2 text-gray-200">
      Atualizar forma de pagamento
      </h1>

      <p className="text-gray-400 mb-4 text-lg">
      Atualize os dados do seu cartão
      </p>

      <Form cardInfo={cardInfo} setCardInfo={setCardInfo} />
    </Card>
  );
};
