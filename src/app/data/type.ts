export type skillprops = {
  language: string;
  role: string;
  client: string;
  period: string;
  technology: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  image: string;
  tags: string[];
  url: string;
  skillData: skillprops[];
  outline?: string;
  subtitle1?: string;
  article1?: string;
  subtitle2?: string;
  article2?: string;
};

export type PortfolioDetailProps = {
  params: Promise<{ id: string; }>
}