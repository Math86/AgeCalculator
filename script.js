document.getElementById('ageForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const birthdate = document.getElementById('birthdate').value;
  const birthtime = document.getElementById('birthtime').value;
  if (!birthdate || !birthtime) {
    alert('Please enter both date and time of birth.');
    return;
  }

  const birthDateTime = new Date(`${birthdate}T${birthtime}`);
  if (isNaN(birthDateTime)) {
    alert('Invalid date or time, please enter valid values.');
    return;
  }

  localStorage.setItem('birthDateTime', birthDateTime.toString());

  // Save display options
  localStorage.setItem('principale', document.getElementById('principale').checked);
  localStorage.setItem('decennies', document.getElementById('decennies').checked);
  localStorage.setItem('annees', document.getElementById('annees').checked);
  localStorage.setItem('mois', document.getElementById('mois').checked);
  localStorage.setItem('jours', document.getElementById('jours').checked);
  localStorage.setItem('heures', document.getElementById('heures').checked);
  localStorage.setItem('minutes', document.getElementById('minutes').checked);
  localStorage.setItem('secondes', document.getElementById('secondes').checked);

  // Save language preference
  localStorage.setItem('language', document.documentElement.lang);

  window.location.href = 'result.html';
});

document.getElementById('languageToggle').addEventListener('click', function() {
  const lang = document.documentElement.lang === 'en' ? 'fr' : 'en';
  document.documentElement.lang = lang;

  if (lang === 'en') {
    document.getElementById('title').textContent = 'Age Calculator';
    document.getElementById('birthdateLabel').textContent = 'Enter your birthdate:';
    document.getElementById('birthtimeLabel').textContent = 'Enter your birthtime:';
    document.getElementById('optionsLegend').textContent = 'Select Age Display Options:';
    document.getElementById('principale').nextSibling.textContent = ' Main Age';
    document.getElementById('decennies').nextSibling.textContent = ' Decades';
    document.getElementById('annees').nextSibling.textContent = ' Years';
    document.getElementById('mois').nextSibling.textContent = ' Months';
    document.getElementById('jours').nextSibling.textContent = ' Days';
    document.getElementById('heures').nextSibling.textContent = ' Hours';
    document.getElementById('minutes').nextSibling.textContent = ' Minutes';
    document.getElementById('secondes').nextSibling.textContent = ' Seconds';
    document.getElementById('calculateButton').textContent = 'Calculate';
    this.textContent = 'Français';
  } else {
    document.getElementById('title').textContent = 'Calculateur d\'âge';
    document.getElementById('birthdateLabel').textContent = 'Entrez votre date de naissance :';
    document.getElementById('birthtimeLabel').textContent = 'Entrez votre heure de naissance :';
    document.getElementById('optionsLegend').textContent = 'Sélectionnez les options d\'affichage de l\'âge :';
    document.getElementById('principale').nextSibling.textContent = ' Âge principal';
    document.getElementById('decennies').nextSibling.textContent = ' Décennies';
    document.getElementById('annees').nextSibling.textContent = ' Années';
    document.getElementById('mois').nextSibling.textContent = ' Mois';
    document.getElementById('jours').nextSibling.textContent = ' Jours';
    document.getElementById('heures').nextSibling.textContent = ' Heures';
    document.getElementById('minutes').nextSibling.textContent = ' Minutes';
    document.getElementById('secondes').nextSibling.textContent = ' Secondes';
    document.getElementById('calculateButton').textContent = 'Calculer';
    this.textContent = 'English';
  }
});

// Load language preference if available and set default date and time
document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('language') || 'fr';
  document.documentElement.lang = lang;

  if (lang === 'en') {
    document.getElementById('title').textContent = 'Age Calculator';
    document.getElementById('birthdateLabel').textContent = 'Enter your birthdate:';
    document.getElementById('birthtimeLabel').textContent = 'Enter your birthtime:';
    document.getElementById('optionsLegend').textContent = 'Select Age Display Options:';
    document.getElementById('principale').nextSibling.textContent = ' Main Age';
    document.getElementById('decennies').nextSibling.textContent = ' Decades';
    document.getElementById('annees').nextSibling.textContent = ' Years';
    document.getElementById('mois').nextSibling.textContent = ' Months';
    document.getElementById('jours').nextSibling.textContent = ' Days';
    document.getElementById('heures').nextSibling.textContent = ' Hours';
    document.getElementById('minutes').nextSibling.textContent = ' Minutes';
    document.getElementById('secondes').nextSibling.textContent = ' Seconds';
    document.getElementById('calculateButton').textContent = 'Calculate';
    document.getElementById('languageToggle').textContent = 'Français';
  } else {
    document.getElementById('title').textContent = 'Calculateur d\'âge';
    document.getElementById('birthdateLabel').textContent = 'Entrez votre date de naissance :';
    document.getElementById('birthtimeLabel').textContent = 'Entrez votre heure de naissance :';
    document.getElementById('optionsLegend').textContent = 'Sélectionnez les options d\'affichage de l\'âge :';
    document.getElementById('principale').nextSibling.textContent = ' Âge principal';
    document.getElementById('decennies').nextSibling.textContent = ' Décennies';
    document.getElementById('annees').nextSibling.textContent = ' Années';
    document.getElementById('mois').nextSibling.textContent = ' Mois';
    document.getElementById('jours').nextSibling.textContent = ' Jours';
    document.getElementById('heures').nextSibling.textContent = ' Heures';
    document.getElementById('minutes').nextSibling.textContent = ' Minutes';
    document.getElementById('secondes').nextSibling.textContent = ' Secondes';
    document.getElementById('calculateButton').textContent = 'Calculer';
    document.getElementById('languageToggle').textContent = 'English';
  }

  // Set default date and time
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const dd = String(today.getDate()).padStart(2, '0');
  const formattedToday = `${yyyy}-${mm}-${dd}`;
  document.getElementById('birthdate').value = formattedToday;
  document.getElementById('birthtime').value = '00:00:00';
});