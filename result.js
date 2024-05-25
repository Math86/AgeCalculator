function calculateAge(birthDateTime, now) {
  let years = now.getFullYear() - birthDateTime.getFullYear();
  let months = now.getMonth() - birthDateTime.getMonth();
  let days = now.getDate() - birthDateTime.getDate();
  let hours = now.getHours() - birthDateTime.getHours();
  let minutes = now.getMinutes() - birthDateTime.getMinutes();
  let seconds = now.getSeconds() - birthDateTime.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days, hours, minutes, seconds };
}

function displayResults() {
  const birthDateTime = new Date(localStorage.getItem('birthDateTime'));
  const now = new Date();
  const ageData = calculateAge(birthDateTime, now);

  const results = [];
  if (JSON.parse(localStorage.getItem('principale'))) {
    results.push(`${ageData.years} years, ${ageData.months} months, ${ageData.days} days, ${ageData.hours} hours, ${ageData.minutes} minutes, ${ageData.seconds} seconds`);
  }
  if (JSON.parse(localStorage.getItem('decennies'))) {
    results.push(`${Math.floor(ageData.years / 10)} decades`);
  }
  if (JSON.parse(localStorage.getItem('annees'))) {
    results.push(`${ageData.years} years`);
  }
  if (JSON.parse(localStorage.getItem('mois'))) {
    results.push(`${ageData.years * 12 + ageData.months} months`);
  }
  if (JSON.parse(localStorage.getItem('jours'))) {
    results.push(`${Math.floor((now - birthDateTime) / (1000 * 60 * 60 * 24))} days`);
  }
  if (JSON.parse(localStorage.getItem('heures'))) {
    results.push(`${Math.floor((now - birthDateTime) / (1000 * 60 * 60))} hours`);
  }
  if (JSON.parse(localStorage.getItem('minutes'))) {
    results.push(`${Math.floor((now - birthDateTime) / (1000 * 60))} minutes`);
  }
  if (JSON.parse(localStorage.getItem('secondes'))) {
    results.push(`${Math.floor((now - birthDateTime) / 1000)} seconds`);
  }

  const lang = localStorage.getItem('language') || 'fr';
  if (lang === 'en') {
    document.getElementById('ageOutput').innerText = results.join('\n');
  } else {
    const translatedResults = results.map(result => {
      return result.replace('years', 'ans')
                   .replace('months', 'mois')
                   .replace('days', 'jours')
                   .replace('hours', 'heures')
                   .replace('minutes', 'minutes')
                   .replace('seconds', 'secondes')
                   .replace('decades', 'décennies');
    });
    document.getElementById('ageOutput').innerText = translatedResults.join('\n');
  }
}

function updateResults() {
  displayResults();
  setTimeout(updateResults, 1000);
}

document.addEventListener('DOMContentLoaded', (event) => {
  updateResults();
});