$(function () {
  selected_numbers_quantity = 0;

  $(document).on("click", function (e) {
      var thisNumber = $(e.target);
      if(thisNumber.hasClass("raffle-btn")) {
          numbers_selected = [],
          selected_numbers = $(".YElIoj"),
          number = thisNumber.length;
          var reserveContainer = $(".reserve-container");

          if (!thisNumber.hasClass("reserved") && !thisNumber.hasClass("paid") && !thisNumber.hasClass("buying") && raffle.finished == "0") {
              if(raffle.block_orders == "0") {
                  if (thisNumber.hasClass("checked")) thisNumber.removeClass("checked"), (selected_numbers_quantity -= number), selected_numbers_quantity < 1 && reserveContainer.delay(100).slideUp(200), $(".value").text(calc_promotion(selected_numbers_quantity));
                  else if(selected_numbers_quantity >= raffle.max_numbers) {
                      $("body").addClass("modal-open");
                      $(".oAfAyc").addClass("modal-show show");
                  } else {
                      (selected_numbers_quantity += number), 0 < selected_numbers_quantity && reserveContainer.delay(100).slideDown(200);
                      var price = calc_promotion(selected_numbers_quantity);
                      thisNumber.addClass("checked"), $(".value").text(price);
                  }
                  $("label.checked").each(function () {
                      numbers_selected.push($(this).attr("id"));
                  })
              } else {
                  $("body").addClass("modal-open");
                  $(".oAfRVy").addClass("modal-show show");
              }
          };
      }
  });
});