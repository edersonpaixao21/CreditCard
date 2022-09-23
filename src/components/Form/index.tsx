import { Button } from "../Button";
import { Input } from "../Input";

import "./styles.css";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { CardInfoProps } from "../../@types/types";

type FormProps = {
  cardInfo: CardInfoProps;
  setCardInfo: Dispatch<SetStateAction<CardInfoProps>>;
};

export const Form = ({ cardInfo, setCardInfo }: FormProps) => {
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    console.log("data", cardInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <Input
          labelText="Nome no cartão"
          type="text"
          placeholder="Seu nome aqui"
          idRef="txtNameOnCard"
          name="nameOnCard"
          value={cardInfo.nameOnCard}
          onChange={(event) => {
            setCardInfo((current) => ({
              ...current,
              nameOnCard: String(event.target.value),
            }));
          }}
        />

        <Input
          labelText="Validade"
          type="text"
          placeholder="01/22"
          idRef="txtExpiry"
          name="expiry"
          value={cardInfo.expiry}
          onChange={(event) => {
            if (event.target.value.length > 5) return;

            setCardInfo((current) => ({
              ...current,
              expiry: String(event.target.value),
            }));
          }}
        />

        <Input
          labelText="Número do cartão"
          type="text"
          placeholder="0000 0000 0000 0000"
          maxLength={18}
          idRef="card_number"
          name="cardNumber"
          value={cardInfo.cardNumber}
          onChange={(event) => {
            if (event.target.value.length > 16) return;

            setCardInfo((current) => ({
              ...current,
              cardNumber: String(event.target.value),
            }));
          }}
        />

        <Input
          labelText="CVV"
          type="text"
          idRef="txtCvv"
          name="cvv"
          placeholder="1234"
          value={
            cardInfo.cvv && !isNaN(cardInfo?.cvv) ? cardInfo.cvv.toString() : ""
          }
          onChange={(event) => {
            if (event.target.value.length > 4) return;

            setCardInfo((current) => ({
              ...current,
              cvv: parseInt(event.target.value),
            }));
          }}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8 text-lg">
        <Button
          text="Cancelar"
          type="button"
          extraClassName="bg-pink-500 text-gray-100"
        />

        <Button
          text="Atualizar"
          type="submit"
          extraClassName="bg-blue-600 text-white"
        />
      </div>
    </form>
  );
};
