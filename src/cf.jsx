
            {
      temperaturemax: response.data.daily[0].temperature.maximum,
      temperaturemin: response.data.daily[0].temperature.minimum,
      humidity: response.data.daily[0].temperature.humidity,
      description: response.data.daily[0].condition.description,
      icon: (
        <img
          src={response.data.daily[0].condition.icon_url}
          alt={response.data.daily[0].condition.description}
        />
      ),
      wind: response.data.daily[0].wind.speed,
      city: response.data.city,
      time: response.data.daily[0].time * 1000,
    }