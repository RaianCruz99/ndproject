document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: "pt-br",
    initialView: "listMonth",
    buttonText: {
      today: 'Mês Atual'
    },
    events: [
      /*NOVEMBRO*/
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
        extendedProps: {
          status: "green",
        },
      },
      
      /*DEZEMBRO*/
      {
        title: "Culto Presencial",
        start: "2023-12-02T22:00:00",
        extendedProps: {
          status: "done",
        },
      },
      {
        title: "Culto Online no Youtube",
        start: "2023-12-02T20:00:00",
        backgroundColor: "green",
        borderColor: "done",
      },
      {
        title: "Culto Presencial",
        start: "2023-12-04T20:00:00",
        extendedProps: {
          status: "green",
        },
      },
      {
        title: "Apresentação do nosos Site",
        start: "2023-12-07T20:00:00",
        backgroundColor: "green",
        borderColor: "green",
      },

    ],
  });

  calendar.render();
});
