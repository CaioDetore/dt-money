import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento do site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.800,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/07/2025</td>
            </tr>
            <tr>
              <td width="50%">Pão</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 12.800,00
                </PriceHighlight>
              </td>
              <td>Compra</td>
              <td>12/07/2025</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
