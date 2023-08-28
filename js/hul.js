$(function () {
  $.ajax({
    url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-043?Authorization=CWB-F36563FF-E28A-43A5-9D06-C3BBC4C8BCBA&format=JSON&locationName=&elementName=T,Wx",
    type: "GET",
    dataType: "json",
    success: function (response) {
      console.log(response.records);
      let path = response.records.locations[0].location[0];
      $("#city_name").html(response.records.locations[0].locationsName);
      $("#district").html(path.locationName);
      $("#tempture").html(
        path.weatherElement[0].time[0].elementValue[0].value + "&#176;"
      );
      let j = 0;
      for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) {
          let wx = path.weatherElement[1].time[i].elementValue[0].value;
          console.log(wx);

          if (wx.indexOf("晴") > -1) {
            $(".block")
              .eq(j)
              .find("img")
              .attr("src", "https://i.imgur.com/Shrg84B.png");
          } else if (wx.indexOf("雨") > -1) {
            $(".block").eq(j).find("img").attr("src", "img/rain-64.png");
          } else {
            $(".block")
              .eq(j)
              .find("img")
              .attr("src", "https://i.imgur.com/BeWfUuG.png");
          }
          $(".sub_tempture")
            .eq(j)
            .html(
              path.weatherElement[0].time[i].elementValue[0].value + "&#176;"
            );
          j++;
        }
      }
    },
    error: function () {
      console.log("error");
    },
  });
});
