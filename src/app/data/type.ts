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
};

export type PortfolioDetailProps = {
  params: Promise<{ id: string; }>
}