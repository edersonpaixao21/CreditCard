import { CardInfoProps } from "../../@types/types";
import "./styles.css";


type Props = {
  cardInfo: Omit<CardInfoProps, "cvv">;
};

export const CardInfo = ({ cardInfo }: Props) => {
  const { nameOnCard, cardNumber, expiry } = cardInfo;

  const intialCardNumber = "0000000000000000"; // 0000.0000.0000.0000

  return (
    <section className="card-info-container">
      <div className="card-info">
        <div className="w-3/4 antialiased">
          <h3 className="h-32 text-xl tracking-wider font-semibold">
            Banco Company
          </h3>

          <div className="flex justify-between mb-2 items-center">
            <span className="uppercase text-xl">
              {nameOnCard.length > 0 ? nameOnCard : "Seu nome"}
            </span>

            <span>{expiry.length > 0 ? expiry : "00/00"}</span>
          </div>

          <div className="flex justify-between font-mono text-2xl">
            {cardInfo.cardNumber.length > 0 ? (
              <>
                <span>{cardNumber.substring(0, 4)}</span>
                <span>{cardNumber.substring(4, 8)}</span>
                <span>{cardNumber.substring(8, 12)}</span>
                <span>{cardNumber.substring(12, 18)}</span>
              </>
            ) : (
              <>
                <span>{intialCardNumber.substring(0, 4)}</span>
                <span>{intialCardNumber.substring(4, 8)}</span>
                <span>{intialCardNumber.substring(8, 12)}</span>
                <span>{intialCardNumber.substring(12, 18)}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
