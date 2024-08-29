export async function fetchCars(p0: { manufacturer: string; year: number; fuel: string; limit: number; model: string; }) {
    const headers = {
        'x-rapidapi-key': 'd33d81f300mshebadce8354023a4p13f83djsnf1f28526bcad',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?',
        {
         headers: headers,
        }
    );  

    const result = await response.json();

    return result;
}
