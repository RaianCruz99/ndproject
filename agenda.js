document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: "pt-br",
    initialView: "listMonth",
    buttonText: {
      today: 'Mês Atual'
   },
    events: [
      {
        title: "Culto Presencial",
        start: "2023-11-25T22:00:00",
        extendedProps: {
          status: "done",
        },
      },
      {
        title: "Culto Online no Youtube",
        start: "2023-11-25T20:00:00",
        backgroundColor: "green",
        borderColor: "done",
      },
      {
        title: "Culto Presencial",
        start: "2023-11-30T20:00:00",
        extendedProps: {
          status: "green",
        },
      },
      {
        title: "Podcast",
        start: "2023-11-26T20:00:00",
        backgroundColor: "green",
        borderColor: "green",
      },
    ],


    eventClick: function (info) {
      // Exibir informações do evento no modal
      $("#eventoModalTitle").text(info.event.title);
      $("#eventoModalBody").html(
        "<p>Data: " +
          info.event.start.toLocaleString() +
          "</p>" +
          "<p>Outras informações do evento...</p>"
      );

      // Abrir o modal
      $("#eventoModal").modal("show");
    },
  });

  calendar.render();
});
