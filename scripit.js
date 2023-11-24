// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("inscricao");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  document.addEventListener('DOMContentLoaded', function () {
    // Obtém a referência para o elemento do calendário
    var calendar = document.getElementById('calendar');

    // Adiciona um evento de exemplo (personalize conforme necessário)
    var events = [
      { date: '2023-11-01', title: 'Evento 1', description: 'Descrição do Evento 1' },
      { date: '2023-11-15', title: 'Evento 2', description: 'Descrição do Evento 2' },
      // Adicione mais eventos conforme necessário
    ];

    // Função para renderizar o calendário
    function renderCalendar() {
      var currentDate = new Date();
      var calendarContent = '';

      // Adiciona o cabeçalho do calendário
      calendarContent += '<table class="table table-bordered">';
      calendarContent += '<thead><tr><th scope="col">D</th><th scope="col">S</th><th scope="col">T</th><th scope="col">Q</th><th scope="col">Q</th><th scope="col">S</th><th scope="col">S</th></tr></thead>';
      calendarContent += '<tbody>';

      // Loop para construir as semanas e dias do mês
      var firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      var lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      var currentDay = new Date(firstDayOfMonth);

      while (currentDay <= lastDayOfMonth) {
        calendarContent += '<tr>';

        for (var i = 0; i < 7; i++) {
          if (currentDay.getMonth() === firstDayOfMonth.getMonth() && currentDay.getDate() <= lastDayOfMonth.getDate()) {
            var dateString = currentDay.toISOString().split('T')[0];
            var eventForDay = events.find(function (event) {
              return event.date === dateString;
            });

            var cellClass = eventForDay ? 'has-event' : '';
            calendarContent += '<td class="' + cellClass + '" data-date="' + dateString + '">' + currentDay.getDate() + '</td>';
            currentDay.setDate(currentDay.getDate() + 1);
          } else {
            calendarContent += '<td></td>';
          }
        }

        calendarContent += '</tr>';
      }

      calendarContent += '</tbody></table>';
      calendar.innerHTML = calendarContent;

      // Adiciona evento de clique nas células com eventos
      var cellsWithEvents = document.querySelectorAll('.has-event');
      cellsWithEvents.forEach(function (cell) {
        cell.addEventListener('mouseover', function (e) {
          var date = e.target.dataset.date;
          var event = events.find(function (event) {
            return event.date === date;
          });

          if (event) {
            document.getElementById('event-info').innerHTML = '<h4>' + event.title + '</h4><p>' + event.description + '</p>';
          }
        });
      });
    }

    // Renderiza o calendário ao carregar a página
    renderCalendar();
  });
