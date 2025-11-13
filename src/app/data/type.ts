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
  explanation: string;
  url: string;

  skillData: skillprops[];

  outline?: string;

  subtitle1?: string;
  article1?: string;
  subtitle2?: string;
  article2?: string;

  feature1?: string;
  featurecontent1?: string;
  featureimage1?: string;
  feature2?: string;
  featurecontent2?: string;
  featureimage2?: string;

  language?: string;
  database?: string;
  frontend?: string;
  buildtool?: string;
  test?: string;
  cicd?: string;
  ai?: string;

  architecture?: string;

  ingenuitytitle1?: string;
  ingenuityarticle1?: string;
  ingenuityimage1?: string;

  ingenuitytitle2?: string;
  ingenuityarticle2?: string;
  ingenuityimage2?: string;

  ingenuitytitle3?: string;
  ingenuityarticle3?: string;
  ingenuityimage3?: string;

  nextstep?: string;

  sitename?: string;
  sitelink?: string;
};

export type PortfolioDetailProps = {
  params: Promise<{ id: string }>;
};
