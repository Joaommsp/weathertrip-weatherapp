import localnews from "../../news.json";

export async function buscarNoticias(theme) {
  const apiKey = "9c6342123d4b4406810a33419c08be23";
  const newsDatefrom = getDateLeastFiveDays();
  const url = `https://newsapi.org/v2/everything?q=${theme}&from=${newsDatefrom}&sortBy=publishedAt&language=en&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "ok") {
      console.log(data);
      return data;
    } else {
      console.error("Erro ao buscar notícias:", data.message);
      return localnews;
    }
  } catch (erro) {
    console.error("Erro na requisição:", erro);
    return localnews;
  }
}

const getDateLeastFiveDays = () => {
  const currentDate = new Date();

  const daysInMilliseconds = 5 * 24 * 60 * 60 * 1000;
  const currenteDateLessFiveDays = new Date(
    currentDate.getTime() - daysInMilliseconds
  );

  const formattedDateLessFiveDays = getDateYYYYMMDD(currenteDateLessFiveDays);

  return formattedDateLessFiveDays;
};

function getDateYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
}
