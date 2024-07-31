// Current weather data
export async function getWheather(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
        import.meta.env.VITE_API_KEY2
      }&lang=pt_br&units=metric`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

// 5 day / 3 hour Forecast data
export async function getWheatherDays(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${
        import.meta.env.VITE_API_KEY2
      }&lang=pt_br&units=metric`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}
