      //Browser detection
      //edge
      //firefox
      //opera
      //chrome
      //safari

      window.addEventListener("load", () => {
        let userAgent = navigator.userAgent;
        let userBrowser = null;

        if (userAgent.match(/edg/i)) {
          userBrowser = "edge";
        } else if (userAgent.match(/firefox/i)) {
          userBrowser = "firefox";
        } else if (userAgent.match(/opr/i)) {
          userBrowser = "opera";
        } else if (userAgent.match(/chrome/i)) {
          userBrowser = "chrome";
        }


        console.log("your browser :", userBrowser);

        let browserImage = document.querySelector(`.${userBrowser}`);

        console.log(browserImage);

        if (browserImage) {
          browserImage.style.opacity = "1";
        }
      });