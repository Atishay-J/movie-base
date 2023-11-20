export const getMovieDateToShow = (date) => {
  const movieDateSeprate = date.split(" ");
  const movieMonth = movieDateSeprate[0].slice(0, 3).toLowerCase();
  const movieDate = movieDateSeprate[1].replace(",", "");
  const movieYear = movieDateSeprate[2];
  const currentYear = new Date().getFullYear().toString();

  const movieDateToShow = {
    title: currentYear === movieYear ? movieDate : movieMonth,
    subTitle: currentYear === movieYear ? movieMonth : movieYear,
  };
  return movieDateToShow;
};
