const apiKey = "8581db2016f1b02256e459cf6a3e1d12";
    const city = "Taghazout";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("weather").innerHTML = `
          <h2>${data.name}</h2>
          🌡 Température: <b>${data.main.temp}°C</b><br>
          💧 Humidité: <b>${data.main.humidity}%</b><br>
          ☁ Condition: <b>${data.weather[0].description}</b>
        `;
      })
      .catch(error => {
        document.getElementById("weather").innerHTML = "Erreur de chargement";
        console.error("Erreur:", error);
})

document.getElementById("myForm").addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let number = document.getElementById("number").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || number === "" || message === "") {
            alert("⚠️ Entre your formation");
        } else {
            alert("✅ formation valide");
        }
        this.reset()
});