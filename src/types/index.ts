export type TdsRate = {
  id: string;
  section: string;
  natureOfPayment: string;
  threshold: string | null;
  panRequiredRate: string;
  noPanRate: string;
  deductorTypes: string[];
  deducteeTypes: string[];
};
